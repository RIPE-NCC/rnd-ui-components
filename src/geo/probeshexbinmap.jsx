import React from "react";

import { timeParse } from "d3-time-format";
import { hexbin } from "d3-hexbin";
import { scaleSqrt, scaleTime, scaleLinear } from "d3-scale";

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
