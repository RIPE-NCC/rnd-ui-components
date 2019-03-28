import React from "react";

import { timeParse } from "d3-time-format";
import { hexbin } from "d3-hexbin";
import { scaleSqrt, scaleTime, scaleLinear } from "d3-scale";
import styled, { keyframes } from "styled-components";
import { GeoMap } from "./map";

import { geoEqualEarth as projection } from "d3-geo";
// import { geoCylindricalStereographic as projection } from "d3-geo-projection";

import { SvgToolTip } from "../generic/tooltip";
import { ThumbBar } from "../specials/thumbbars";

import {
  loadAllProbesWithOfflineStorage,
  loadNewProbeInfo,
  loadCountryGeoInfo
} from "@ripe-rnd/ui-datastores";

export const transformProbesData = (probesData, projection) => {
  return probesData.map(d => {
    if (!d[9] || (!d[9] && d)) {
      console.log(d);
    }
    const p = projection([d[9], d[8]]);
    //d[14] = d.slice(0, 1)[0];
    //d.prb_id = d.slice(0,1); // copy first element, otherwise D3 will f*ck your
    //(d[0] = p[0]), (d[1] = p[1]);
    [d[0], d[1]] = p.slice(0, 2);
    d.date = timeParse("%s")(d[15]);
    //d.unshift(p[0], p[1]);
    return d;
  });
};

const blip = keyframes`
    from: { transform: scale(1.0) translate(0,0); }
    50% { transform: scale(9.0) translate(0,0); }
    to { transform: scale(1.0) translate(0,0); }
`;

const StyledProbeStatusChanger = styled.circle`
  stroke-width: 1;
  //fill: ${props => (props.status === "connect" && "#00B213") || "#FF0050"};
  fill: none;
  stroke: ${props => (props.status === "connect" && "#00B213") || "#FF0050"};
  animation: ${blip} 1.6s ease-in 5;
  /* vector-effect: non-scaling-stroke; */
`;

export class ProbeStatusChanger extends React.Component {
  render() {
    return (
      <g
        transform={`translate(${this.props.dx},${this.props.dy})`}
        style={{
          transformOrigin: `${this.props.dx}px ${this.props.dy}px`
          //   vectorEffect: "non-scaling-stroke"
        }}
      >
        <StyledProbeStatusChanger
          //transformOrigin={`${this.props.dx}px ${this.props.dy}px`}
          r={1 / this.props.zoomFactor}
          status={this.props.status}
          //   dx={this.props.dx}
          //   dy={this.props.dy}
          //   vectorEffect="non-scaling-stroke"
        />
      </g>
    );
  }
}

export class ProbesHexbinMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      probes: null,
      countries: null,
      changedProbes: [], // these are all the new probe events from DOM ready
      lightProbes: [], // these are the most recent probe that need to be lighted
      webWorkerAvailability: true,
      startListenDateTime: new Date()
    };
  }

  showToolTip = d => {
    const fontSize = 12,
      lineHeight = fontSize + 2,
      marginHor = 1.2 * fontSize,
      dx = 3.5 + 1.5 * marginHor,
      dy = 6 * lineHeight;
    this.setState({
      tooltip: (
        <SvgToolTip
          header={"PROBES"}
          x={d.x}
          y={d.y}
          dx={dx}
          dy={0}
          fontsize={fontSize}
          minwidth={165}
          extraHeight={180 + marginHor + ((d.moreNumber && 10) || 0)}
          zoomFactor={this.props.zoomFactor}
          textlines={[
            `connected : ${d.probes.filter(p => p[14] === 1).length}`,
            `disconnected : ${d.probes.filter(p => p[14] === 2).length}`,
            `AS diversity : ${d.simpsonIndex}`
          ]}
        >
          <ThumbBar
            dy={dy}
            bars={d.asDistribution}
            height={100}
            width={160 + marginHor}
            margin={marginHor}
            largestBarValue={d.largestBarValue}
            minBarHeight={1 / this.props.zoomFactor}
            countAttributes={[
              { attr: "t", color: "#FF0050" },
              { attr: "c", color: "#00B213" }
            ]}
          />
          {d.moreNumber && (
            <text transform={`translate(${marginHor}  274)`}>
              and {d.moreNumber} more...
            </text>
          )}
        </SvgToolTip>
      )
    });
  };

  hideToolTip = (d, i) => {
    this.setState({
      tooltip: null
    });
  };

  componentDidMount() {
    loadCountryGeoInfo().then(
      countries => {
        this.setState({ countries: countries });
      },
      error => {
        console.log("error");
        console.log(error);
        this.setState({ countries: null, error: "problems arose!" });
      }
    );

    loadAllProbesWithOfflineStorage({ apiServer: this.props.apiServer }).then(
      probesData => {
        console.log("probes data loaded...");
        // - kick out probes without a location (we cannot render them, can we?)
        // - add two nulls for d3's sake. It will override those with its own stuff.
        probesData = probesData
          .filter(p => p[6] && p[7])
          .map(p => [null, null, ...p]);

        if (this.props.dataAdapter) {
          this.props.dataAdapter().then(data => {
            const serializedData = this.props.dataSerializer(data, probesData);
            return this.setState({ probes: serializedData });
          });
        } else {
          this.setState({ probes: probesData });
        }

        // initialize probeUpdates webworker
        if (window.Worker) {
          const probeUpdater = new Worker("/worker.js");
          probeUpdater.onmessage = m => {
            console.log(m);
            const newProbeStatus = JSON.parse(m.data);
            let thisProbe = probesData.find(
              p => p[2] === newProbeStatus.prb_id
            );

            if (!thisProbe) {
              thisProbe = loadNewProbeInfo(newProbeStatus.prb_id).then(d => {
                const coords = projection([
                  d.geometry.coordinates[0],
                  d.geometry.coordinates[1]
                ]);
                return {
                  prb_id: d.id,
                  status: newProbeStatus.event,
                  ...coords
                };
              });
              console.log("new probe online!");
            } else {
              const updatedProbeIndex =
                this.state.probes &&
                this.state.probes.findIndex(p => p[2] === thisProbe[2]);
              thisProbe[14] =
                (newProbeStatus.event === "connect" && 1) ||
                (newProbeStatus.event === "disconnect" && 2) ||
                null;

              console.log("----------");
              console.log("new probe status");
              console.log(`prb_id: ${thisProbe[2]}`);
              console.log(`asn (v4) : ${thisProbe[3]}`);
              console.log(`asn (v6) : ${thisProbe[4]}`);
              console.log(`status: ${newProbeStatus.event}`);
              console.log("----------");

              this.setState({
                changedProbes: [
                  ...this.state.changedProbes,
                  {
                    prb_id: thisProbe[2],
                    status: newProbeStatus.event,
                    dx: thisProbe[0],
                    dy: thisProbe[1],
                    eventCount:
                      this.state.changedProbes.filter(
                        p => (p.prb_id = thisProbe[2])
                      ).length + 1
                  }
                ],
                lightProbes: [
                  {
                    prb_id: thisProbe[2],
                    status: newProbeStatus.event,
                    dx: thisProbe[0],
                    dy: thisProbe[1]
                  }
                ]
              });

              if (updatedProbeIndex > -1) {
                // window.probes = this.state.probes;
                this.setState({
                  probes: [
                    ...this.state.probes.slice(0, updatedProbeIndex),
                    thisProbe,
                    ...this.state.probes.slice(updatedProbeIndex + 1)
                  ]
                });
              }
            }
          };
          this.setState({
            startListenDateTime: new Date()
          });
        } else {
          this.setState({ webWorkerAvailability: false });
        }
      },
      error => {
        console.log("error");
        console.log(error);
        this.setState({ probes: null, error: "problems arose!" });
      }
    );
  }

  render() {
    return (
      <>
        <GeoMap
          viewMode="sheet"
          landFillColor="white"
          key="m1"
          id="map1"
          ref="map1"
          scale={235.0}
          width={1480}
          height={942}
          rotate={[0, 0]}
          translate={[740, 470]}
          projection={projection}
          countries={this.state.countries}
          maxZoomFactor={24}
        >
          {this.props.render({
            paths: this.state.probes,
            probeChangedEvents: this.state.changedProbes.length,
            width: this.props.width,
            height: this.props.height,
            showToolTip: this.showToolTip,
            hideToolTip: this.hideToolTip
          })}

          {this.state.changedProbes.length > 0 &&
            this.state.lightProbes.map((ps, i) => (
              <ProbeStatusChanger
                key={`ps_${ps.prb_id}_${ps.status}_${i}`}
                dx={ps.dx}
                dy={ps.dy}
                status={ps.status}
              />
            ))}
          {this.state.tooltip}
        </GeoMap>
        <ul>
          <li>
            {`probes changed since ${this.state.startListenDateTime.toUTCString()}: ${
              this.state.changedProbes.length
            }`}
          </li>
        </ul>
      </>
    );
  }
}

const calculateSimpsonIndex = (p, largestBarValue) => {
  const asDistribution = p.reduce((acc, next) => {
    const asn = next[3] || next[4] || 0,
      status = (next[14] === 1 && "c") || "d",
      pCount = acc[asn] && acc[asn][status] && acc[asn][status] + 1;

    largestBarValue = (pCount > largestBarValue && pCount) || largestBarValue;
    acc[asn] = {
      ...acc[asn],
      [status]: (acc[asn] && acc[asn][status] && acc[asn][status] + 1) || 1,
      t: (acc[asn] && acc[asn].t && acc[asn].t + 1) || 1
    };
    return acc;
  }, {});

  return [
    Object.keys(asDistribution)
      .filter(as => as !== "0")
      .reduce(
        (acc, next) => acc + Math.pow(asDistribution[next].t / p.length, 2),
        0
      )
      .toFixed(2),
    Object.entries(asDistribution)
      .reduce((ac, next) => [...ac, { as: next[0], count: next[1] }], [])
      .sort((a, b) => b.count.t - a.count.t),
    largestBarValue
  ];
};

export class HexBins extends React.Component {
  constructor(props) {
    super(props);
    this.paths = [];

    this.calculateHexBin();

    // this.color = scaleTime()
    //   .domain([
    //     timeParse("%s")((Date.now() / 1000).toFixed(0) - 86400),
    //     timeParse("%s")((Date.now() / 1000).toFixed(0) - 864000)
    //   ])
    //   .range(["black", "green"])
    //   .interpolate(interpolateLab);
    // this.color = scaleLinear()
    //   .domain([2, 1])
    //   .range(["#FF0050", "#00B213"])
    //   .interpolate(interpolateLab);

    // this.hexbinColorRange = scaleLinear()
    //   .domain([1, 0])
    //   .range(["#F4FFF5", oimEmerald])
    //   .interpolate(interpolateLab);

    this.state = {
      pathsInitialized: false
    };
  }

  calculateHexBin(zoomFactor = 1) {
    this.hexbin = hexbin()
      .extent([[0, 0], [this.props.width, this.props.height]])
      // radius of catchment area, so probes within this radius end up
      // in one hexbin.
      .radius(8.5 / zoomFactor);

    // map number of probes in hexbin to the size
    // of the hexbin on screen
    this.radius = scaleSqrt()
      .domain([2, 1000])
      .range([4 / zoomFactor, 1 + 11.5 / zoomFactor]);
  }

  componentDidMount() {
    if (this.props.paths) {
      console.log("Awas! fast paths loading!");
      this.paths = this.hexbin(
        transformProbesData(this.props.paths, this.props.projection)
      ).sort((a, b) => b.length - a.length);

      //this.renderD3Paths({ update: false });
    }

    this.setState({ pathsInitialized: true });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.paths && !this.props.paths) {
      console.log("paths received");
      this.paths = this.hexbin(
        transformProbesData(nextProps.paths, this.props.projection)
      ).sort((a, b) => b.length - a.length);
      this.setState({ pathsInitialized: true });
    }

    if (
      nextProps.zoomFactor !== this.props.zoomFactor ||
      nextProps.probeChangedEvents !== this.props.probeChangedEvents
    ) {
      console.log(`zoomFactor : ${nextProps.zoomFactor}`);
      this.calculateHexBin(nextProps.zoomFactor);
      this.paths = this.hexbin(
        transformProbesData(nextProps.paths, this.props.projection)
      ).sort((a, b) => b.length - a.length);
    }
  }

  render() {
    let largestBarValue;
    return (
      <g>
        {this.paths &&
          this.paths.map((p, idx) => {
            const [simpsonIndex, asDistribution, _] = calculateSimpsonIndex(
                p,
                0
              ),
              hexbinBodyColor = this.props.hexbinColorRange(
                (this.props.hexbinBodyColorFunctor &&
                  this.props.hexbinBodyColorFunctor(p)) ||
                  simpsonIndex
              ),
              singleProbeScale = ` scale(
                 ${Math.min(1.4, 2.4 / this.props.zoomFactor)})`,
              hexBinScale = " scale(1.0)";

            //largestBarValue = Math.max(...asDistribution.map(a => a.count.t));
            largestBarValue =
              (idx === 0 && asDistribution[0].count.t) || largestBarValue;
            // debug tooltip
            // if (idx === 0) {
            //   this.props.showToolTip({
            //     probes: [...p], // get rid of the weird confluence of array and object that D3 creates.
            //     x: p.x,
            //     y: p.y,
            //     simpsonIndex: simpsonIndex
            //   });
            // }
            // end debug
            return (
              <path
                key={`h_${p.x}_${p.y}`}
                d={
                  (p.length > 1 &&
                    this.hexbin.hexagon(this.radius(p.length))) ||
                  "M 0,0 a 1,1 0 1,0 2,0 a 1,1 0 1,0 -2,0"
                }
                transform={`translate(${(p.length > 1 && p.x) ||
                  p[0][0]},${(p.length > 1 && p.y) || p[0][1]})${(p.length >
                  1 &&
                  hexBinScale) ||
                  singleProbeScale}`}
                //fill={this.color(median(p, p => +p.date))}
                //fill={this.color(mean(p, p => +p[14]))}
                fill={hexbinBodyColor}
                stroke={this.props.stroke(p)}
                strokeWidth={
                  (p.length > 1 && this.radius(p.length) / 5) || "0.2"
                }
                onMouseEnter={e =>
                  this.props.showToolTip({
                    probes: [...p], // get rid of the weird confluence of array and object that D3 creates.
                    x: p.x,
                    y: p.y,
                    simpsonIndex: simpsonIndex,
                    largestBarValue: largestBarValue * 1.4, // stupid estimate, but I don't want to go over all bins to see which one has the biggest AS
                    asDistribution: asDistribution.slice(0, 10),
                    moreNumber: asDistribution.slice(11).length
                  })
                }
                onMouseLeave={e => this.props.hideToolTip()}
              />
            );
          })}
      </g>
    );
  }
}
