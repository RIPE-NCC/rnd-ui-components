import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { geoPath, geoGraticule } from "d3-geo";
import { select, selectAll } from "d3-selection";
import "d3-transition";
import { interpolate } from "d3-interpolate";
import { easeLinear } from "d3-ease";

import { Globe, ZoomIn, ZoomOut, Map } from "react-feather";

import { centroid } from "@turf/turf";

import * as topojson from "topojson-client";
import styled from "styled-components";

import {
  ripeMagenta,
  atlasGreen,
  oimCarrot,
  oimClouds,
  oimLand,
  oimEmerald,
  oimAntracite,
  lColor
} from "../themes/colors";

const MAXZOOM = 12;
const DEFAULT_GEO_OBJECTS_KEY = "openipmapCountries-ne50m";
const SMALL_COUNTRIES_ONLY_OBJECTS_KEY = "countries_110m";

export const loadCountryGeoInfo = async ({ ...props }) => {
  /*
  * arguments:
  * 
  * detail              : [ 10m, 50m, 110m]
  * places              : [15, 150, null]
  * countryGeoInfoUrl   : custom place to load topojson from
  * showAntarctica      : true|false
  * 
  * filename should be of format `world-geo<PLACES>_ne<DETAIL>.topo.json
  */
  const detail = props.detail || "50m",
    places = (typeof props.places === "undefined" && "150") || props.places;

  const fetchUrl =
    props.countryGeoInfoUrl ||
    `./geo/world${(places && "-geo") || ""}${(places && places) ||
      "" ||
      ""}_ne${detail}.topo.json`;
  const geoKey =
    (detail === "50m" && DEFAULT_GEO_OBJECTS_KEY) ||
    SMALL_COUNTRIES_ONLY_OBJECTS_KEY;
  let response = await fetch(fetchUrl).catch(err => {
    console.log(err);
    console.log(`${fetchUrl} does not exist.`);
  });
  let geoData = await response.json().catch(error => {
    console.log("error loading geographic information (topojson)");
    console.log(error);
    return null;
  });
  return topojson.feature(geoData, geoData.objects[geoKey]).features;
};

const StyledGeoMap = styled.svg`/* all browsers except Chrome only want to transform from the transform-origin 0 0 */
/* so we set it explicitly here to align all browsers */
/* also note the we use html attribute transform everywhere because
/* IE/edge do not like css transforms */
transform-origin: 0 0;
-webkit-transform-origin: 0 0;

shape-rendering: geometricPrecision;
stroke-width: 0.5;
stroke-opacity: 1;
stroke: ${oimAntracite};
fill: white;
overflow: ${props => (props.viewMode === "sheet" && "visible") || "hidden"};

.voronoi {
  path.cell,
  rect {
    stroke: none; // set this to a color for debugging
    fill: transparent;
  }
}

.voronoi:hover {
  cursor: pointer;
}

rect.tr-target {
  stroke-width: 1.5pt;
  fill: white;
}

.tr-segment.backdrop path {
  stroke: white;
  opacity: 0.2;
  filter: unset;
}

.tr-segment.backdrop text {
  opacity: 0.3;
}


path.outline {
  stroke-width: 2pt;
  fill: none;
}

path.tr-target {
  stroke: ${oimAntracite};
  //fill: white;
  stroke-width: 1.5pt;
}

.country-circle {
  stroke-width: 0.5pt;
  stroke: ${oimClouds};

  text {
    fill: white;
    filter: url("#dropShadow");
  }

  circle.country-outer-circle {
    fill: url("#CountryRadialGradient");
    opacity: 0.4;
    stroke: none;
  }

  circle.country-inner-circle {
    fill: url("#CountryRadialGradient");
    //fill: ${atlasGreen};
    //opacity: 0.4;
    stroke: none;
    stroke-width: 1.5pt;
  }
}

.country-circle.tr-target {
  stroke: ${oimAntracite};
  //stroke-width: 1.5pt;

  text {
    fill: ${oimAntracite};
    filter: unset;
  }

  circle.country-inner-circle {
    //fill: ${atlasGreen};
    stroke: ${oimAntracite};
    stroke-width: 1.5pt;
  }

  rect.country-target-rect {
    stroke: ${oimAntracite};
    stroke-width: 1.5pt;
    //fill: url('#CountryRadialGradient');
    fill: ${atlasGreen};
  }

  circle.country-outer-circle {
    stroke: ${oimAntracite};
    fill: ${atlasGreen};
    opacity: 0.3;
    stroke-opacity: 1;
  }
}

circle.tr-hop-dest {
  fill: ${atlasGreen};
  stroke: none;
}

.tr-source {
  /*fill: white;*/
  stroke-width: 1.5pt;
  stroke: ${oimAntracite};
}

circle.tr-hop-city {
  fill: @oim-carrot;
  fill-opacity: 1;
  stroke-width: 0.75pt;
}

path.hop-country {
  stroke: ${atlasGreen};
  fill: url("#CountryRadialGradient");
  stroke-width: 0.5pt;
  //fill-opacity: 0.5;
  //fill: ${atlasGreen};
}

.land {
  fill: ${oimLand};
  fill-opacity: 1;
  stroke: black;
  //stroke-width: 0.1pt;
  stroke-opacity: 0.6;
}

.land:hover {
  fill: #fffff1;
  fill-opacity: 1;
  stroke-opacity: 1;
}

.graticule {
  fill: none;
  stroke: #636363;
}
`;

const WindowMapControlsContainer = styled.svg`
  position: absolute;
  margin-left: -95px;
  margin-top: 6px;

  .map-controls {
    cursor: pointer;
  }
`;

const SheetMapControlsContainer = styled.svg`
  position: fixed;
  right: 24px;
  top: 12px;
  margin: 0;

  .map-controls {
    cursor: pointer;
  }
`;

export class GeoMap extends React.Component {
  constructor(props) {
    super(props);

    const globeProjection = props.globeProjection || false,
      projectionBase = props.projection;

    let projection = projectionBase()
      .scale(props.scale)
      .translate([
        (props.translate && props.translate[0]) || props.width / 2,
        (props.translate && props.translate[1]) || props.height / 2
      ]);

    projection =
      (props.globeProjection && projection.clipAngle(90)) || projection;

    this.projection =
      props.rotate && projection.rotate([props.rotate[0], props.rotate[1]]);

    this.state = {
      places: null,
      move: props.move,
      zoom: props.zoom,
      zoomCenter: [this.props.width / 2, this.props.height / 2],
      inTransit: false,
      worldInitialized: false,
      bounds: [[0, 0], [100, 100]],
      viewBox: `0 0 ${props.width} ${props.height}`,
      tracerouteSegmentsBBox: null,
      rotation: this.projection.rotate(),
      clickPoint: [null, null],
      selectedCountry: null
    };

    this.defaultPath = geoPath()
      .projection(projection)
      .pointRadius(`${this.state.zoom}pt`);

    this.mapBounds = () =>
      (document.querySelector(".atlasSurface.map") &&
        document
          .querySelector(".atlasSurface.map")
          .getBoundingClientRect()) || {
        width: 0,
        height: 0
      };

    this.countries = null;
  }

  filterCountries = countries =>
    countries.filter(
      c =>
        (this.props.showAntarctica && true) ||
        (c.properties.id !== "ATA" &&
          (!c.properties.adm0_a3 || c.properties.adm0_a3 !== "ATA"))
    );

  renderD3World = ({ update }) => {
    // The id should be set by the user of the GeoMap component
    // this.mapContainer is the innerRef set by the styled Component.
    console.log("rerender d3 world");
    let mapID = this.mapContainer.id;
    let world = select(this.refs.d3countries)
      .selectAll("path")
      .data(this.countries);
    world
      .enter()
      .insert("path")
      .attr("class", "land")
      .attr("id", c => c.properties.id)
      .attr("d", this.defaultPath);
    this.setState({ worldInitialized: true });
  };

  StyledMapControlsContainer = (this.props.viewMode === "sheet" &&
    SheetMapControlsContainer) ||
  WindowMapControlsContainer;

  /* This function looks for the end of all transitions on a d3.selectAll collection
   * d3 only has builtin support for the "end" event on each and every element in the selectAll collection.
   * 
   * Takes the original transition and a callback to call at the end of ends as parameters.
   */

  transitionEnded(transition, callback) {
    if (typeof callback !== "function")
      throw new Error("Wrong callback in endall");
    if (transition.size() === 0) {
      callback();
    }
    var n = 0;
    transition
      .each(() => {
        ++n;
      })
      .on("end", d => {
        if (!--n) callback(...arguments);
      });
  }

  componentDidMount() {
    if (this.props.countries) {
      console.log("Awas! fast world loading!");

      this.countries = this.filterCountries(this.props.countries);
      this.renderD3World({ update: false });
    }

    this.setState({ worldInitialized: true });
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.countries && nextProps.countries) {
      console.log("countries received");
      this.countries = this.filterCountries(nextProps.countries);
      this.renderD3World({ update: false });
      this.setState({ worldInitialized: true });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.worldInitialized && this.props.countries) {
      /*ren
       * Render the initial world with the default settings
       * 
       * Normally this would live in `componentWillMount` but the loading 
       * process of the topojson file already lives there and we have
       * to be sure it is properly loaded and in the store before
       * continuing. The `worldInitialized` field in the state is
       * used to convey this.
       */
      console.log("initialize d3 world");

      this.countries = this.filterCountries(this.props.countries);
      this.renderD3World({ update: true });
      this.setState({ worldInitialized: true });
    } else if (
      prevState.rotation[0] !== this.state.rotation[0] ||
      prevState.rotation[1] !== this.state.rotation[1]
    ) {
      /* Update the world, because the `rotation` in the state has changed
       * 
       * the `aninmateMapTransition` field in the props is used to indicate
       * whether we want to use a d3 animated transition or a instanteneous
       * new projection.
       */
      console.log("update d3 world");
      let rotateInterpolate = interpolate(
        prevState.rotation,
        this.state.rotation
      );

      console.log(`${prevState.rotation} -> ${this.state.rotation}`);

      if (this.props.animateMapTransition) {
        let duration =
          Math.sqrt(
            Math.pow(prevState.rotation[0] - this.state.rotation[0], 2) +
              Math.pow(prevState.rotation[1] - this.state.rotation[1], 2)
          ) * 10;
        select(this.refs.d3countries)
          .selectAll("path")
          .transition()
          .call(this.transitionEnded, this.zoomToCountry)
          .duration(duration)
          .ease(easeLinear)
          .attrTween("d", d => {
            return t => {
              let path = geoPath().projection(
                this.projection.rotate(rotateInterpolate(t))
              );
              return path(d);
            };
          });
        console.log("d3 animations ON");
      } else {
        console.log("d3 animations OFF");
        this.projection.rotate(this.state.rotation);
        select(this.refs.d3countries)
          .selectAll("path")
          .attr("d", d => this.defaultPath(d))
          .on("end", this.zoomToCountry());
      }
    }
  }

  // TODO: The geoTraceroutes should be filled with a selector in this component.
  // To hold all the host.location arrays and should receive those as input
  // That way we can compare the complete list of the summed host.location over all geotraceroutes and see who changed.
  shouldComponentUpdate(nextProps, nextState) {
    const prevTraceroutes = this.props.traceroutes,
      nextTraceroutes = nextProps.traceroutes;
    let prevLocations, nextLocations;

    /*if (!nextState.d3Render && this.state.d3Render) {
      console.log("d3 finished rendering");
      return true;
    }*/
    // if (!this.props.countries || !this.state.places) {
    //   // no geographic info so no updating
    //   return false;
    // }

    if (nextState.d3Render || this.state.d3Render) {
      console.log("d3 busy rendering; no rerender");
      return false;
    }

    // Somebody fiddling with zooming, rerender
    if (
      nextState.zoom !== this.state.zoom ||
      nextState.rotation !== this.state.rotation
    ) {
      return true;
    }

    // no countries, so no rendering
    //if (nextProps.countries.length > 0) {
    //  return true;
    //}

    // traceroutes added or removed.
    if (prevTraceroutes && prevTraceroutes.length !== nextTraceroutes.length) {
      return true;
    }

    // initial rendering of the world
    if (!nextState.worldInitialized && nextProps.countries) {
      //this.setState({ worldInitialized: true });
      return true;
    }

    // the user is dragging the world?
    if (nextState.inTransit) {
      return true;
    }

    if (
      this.props.cities !== nextProps.cities ||
      this.props.countries !== nextProps.countries
    ) {
      return true;
    }

    // sounds logical, but since we set the default to returning false,
    // new children will NOT lead to a rerender out-of-the-box anymore.
    if (
      React.Children.count(this.props.children) !==
      React.Children.count(nextProps.children)
    ) {
      return true;
    }

    // really, nothing happened.
    if (
      prevTraceroutes &&
      prevTraceroutes.length === 0 &&
      nextTraceroutes.length === 0
    ) {
      return false;
    }

    // a location was changed?
    if (prevTraceroutes) {
      prevLocations =
        prevTraceroutes
          .map(tr => tr.hops.map(hop => hop.locationId || "null"))
          .reduce((allLocations, l) => allLocations.concat(l), []) || [];
      nextLocations =
        nextTraceroutes
          .map(tr => tr.hops.map(hop => hop.locationId || "null"))
          .reduce((allLocations, l) => allLocations.concat(l), []) || [];

      if (
        prevLocations.some((l, idx) => {
          return l !== nextLocations[idx];
        })
      ) {
        return true;
      }
    }
    return false;
  }

  mouseMove = e => {
    e.stopPropagation();
    e.preventDefault();
    let zoom = this.state.zoom,
      Δx = (e.pageX - 33) / zoom - this.state.clickPoint[0],
      Δy = (e.pageY - 225) / zoom - this.state.clickPoint[1];
    // minY =
    //   -(
    //     document.querySelector(".mapContainer svg").getBoundingClientRect()
    //       .height - this.mapBounds().height
    //   ) / this.state.zoom,
    // maxY = 0;

    // this sets the pan ranges
    // basically obliviated by the paper-map layout.
    // Δx = Math.max(
    //   -(this.props.width * this.state.zoom - this.mapBounds().width),
    //   Δx
    // );
    // Δx = Math.min(0, Δx);
    // Δy = Math.max(minY, Δy);
    // Δy = Math.min(0, Δy);

    this.state.inTransit &&
      this.state.clickPoint[0] &&
      this.setState({
        move: [Δx, Δy],
        actualPoint: [e.pageX - 30, e.pageY - 227]
      });
  };

  mouseUp = e => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      inTransit: false,
      actualPoint: null
    });
  };

  mouseDown = e => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      inTransit: true,
      clickPoint: [
        (e.pageX - 33) / this.state.zoom - this.state.move[0],
        (e.pageY - 225) / this.state.zoom - this.state.move[1]
      ]
    });
  };

  resetWorldView = () => {
    this.setState({
      zoom: 1,
      move: [0, 0],
      selectedCountry: null,
      rotation: [0, 0]
    });
  };

  zoomTween = ({ selection, duration, zoom, translate, callBack }) => {
    console.log(`zoom: ${zoom}, translate: ${translate}`);
    selection
      .transition()
      .duration(duration)
      .attr("transform", () => {
        console.log("zooming");
        return `scale(${zoom})translate(${translate[0]},${translate[1]})`;
      })
      .on("end", e => {
        console.log("zoomTween ended");
        this.setState({ d3Render: false });
      });
  };

  zoomToTraceroutes = () => {
    // return without further ado if nothing is geolocated (yet).
    if (!this.props.cities || !this.props.cities.length > 0) {
      return;
    }

    const bboxLRTB = this.props.cities.map(c => c.locationCoords).reduce(
        (acc, cur) => {
          const curProj = this.projection(cur);
          return {
            left: Math.min(acc.left, curProj[0]),
            right: Math.max(acc.right, curProj[0]),
            top: Math.min(acc.top, curProj[1]),
            bottom: Math.max(acc.bottom, curProj[1])
          };
        },
        { left: Infinity, right: -Infinity, top: Infinity, bottom: -Infinity }
      ),
      bbox = {
        ...bboxLRTB,
        width: bboxLRTB.right - bboxLRTB.left,
        height: bboxLRTB.bottom - bboxLRTB.top
      },
      windowAvailable = document
        .querySelector(".atlasSurface.map")
        .getBoundingClientRect(),
      zoomCenter = [(bbox.right - bbox.left) / 2, (bbox.bottom - bbox.top) / 2],
      zoomHor = windowAvailable.width / bbox.width,
      zoomVer = windowAvailable.height / bbox.height,
      newZoom = Math.min(zoomHor, zoomVer, MAXZOOM) * 0.9; // overshoot a little bit to have some space around it.
    this.setState({
      zoom: newZoom,
      move: [
        -bbox.left + 5,
        -bbox.top - bbox.height / 2 + windowAvailable.height / 2 / newZoom
      ],
      zoomCenter: [0, 0]
    });
  };

  // TODO: with `transform-origin` set to 1/2 * mapBounds
  // a regular zoom in/out is intuitive (from the center)
  // however: zoomToCountry was implemented as scaling from (0,0) of
  // the containing svg. So that needs to be changed
  // OR zoom in/out needs to take care of translating back to center.
  // Also, note that firefox cannot handle transform-origin: 50% 50%;
  // but instead needs px literals, so basically `${this.mapBounds.width/2}px etc.`

  zoomToCountry = () => {
    if (!this.state.selectedCountry) {
      // This used for a resetWorldView.
      this.setState({
        d3Render: false
      });
      return;
    }
    let country = this.state.selectedCountry,
      countryBounds = this.defaultPath.bounds(country),
      mapBounds = document
        .querySelector(".atlasSurface.map")
        .getBoundingClientRect();

    let w = this.props.width,
      h = this.props.height,
      Δx = countryBounds[1][0] - countryBounds[0][0],
      Δy = countryBounds[1][1] - countryBounds[0][1],
      scale = Math.max(
        1,
        Math.min(8, 0.9 / Math.max(Δx / mapBounds.width, Δy / mapBounds.height))
      ),
      Δw = mapBounds.width / scale / 2,
      Δh = mapBounds.height / scale / 2,
      translate = [
        -countryBounds[0][0] + mapBounds.width / 2 / scale - Δx / 2,
        -countryBounds[0][1] + mapBounds.height / 2 / scale - Δy / 2
      ],
      viewBox = `0 0 ${w} ${h}`;

    console.log(`country :\t${country && country.properties.id}`);
    console.log(`bounds d3 left,top :\t ${countryBounds[0]}`);
    console.log(`bounds d3 right,bottom :\t ${countryBounds[1]}`);
    console.log(`container bounds : \t${w}, ${h}`);
    console.log(`map bounds :\t ${mapBounds.width}, ${mapBounds.height}`);
    console.log(`current zoom :\t ${this.state.zoom}`);
    console.log(`new scale\t: ${scale}`);

    this.setState({
      move: translate,
      zoom: scale,
      d3Render: true,
      viewBox: viewBox,
      mapBounds: mapBounds,
      bounds: countryBounds
    });

    this.zoomTween({
      selection: select(this.refs.d3world),
      duration: 750,
      zoom: scale,
      translate: translate,
      callBack: this.setState({ d3Render: false })
    });
  };

  rotateToCountry = ({ e, countryId }) => {
    e.stopPropagation();

    let country =
        (countryId &&
          this.props.countries.find(c => c.properties.id === countryId)) ||
        null,
      center = centroid(country).geometry.coordinates,
      newRotation = [-center[0], -center[1]];

    if (
      country &&
      (this.state.rotation[0] !== newRotation[0] ||
        this.state.rotation[1] !== newRotation[1])
    ) {
      console.log(`${this.state.rotation} -> ${newRotation}`);
      this.setState({
        rotation: newRotation,
        selectedCountry: country
      });
    } else {
      console.log("should not do anything");
      this.setState({
        rotation: newRotation
      });
    }
  };

  renderGlobeEffects = () => {
    var ocean_fill = (
        <defs>
          <radialGradient id="ocean_fill" cx="75%" cy="25%">
            <stop offset="5%" stopColor="#ddf" />
            <stop offset="100%" stopColor="#9ab" />
          </radialGradient>
        </defs>
      ),
      globe_highlight = (
        <defs>
          <radialGradient id="globe_highlight" cx="50%" cy="40%">
            <stop offset="5%" stopColor="#ffd" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2eaad3" stopOpacity="0.2" />
          </radialGradient>
        </defs>
      ),
      globe_shading = (
        <defs>
          <radialGradient id="globe_shading" cx="50%" cy="40%">
            <stop offset="50%" stopColor="#9ab" stopOpacity="0" />
            <stop offset="100%" stopColor="#3e6184" stopOpacity="0.3" />
          </radialGradient>
        </defs>
      );

    return (
      <svg>
        {ocean_fill}
        {globe_highlight}
        {globe_shading}
        {(this.props.globeProjection && (
          <g>
            <circle
              cx={this.props.width / 2}
              cy={this.props.height / 2}
              className={"noclicks"}
              r={this.projection.scale()}
              fill={"url(#ocean_fill)"}
            />
            <circle
              cx={this.props.width / 2}
              cy={this.props.height / 2}
              r={this.projection.scale()}
              fill={"url(#globe_shading)"}
            />
            <circle
              cx={this.props.width / 2}
              cy={this.props.height / 2}
              r={this.projection.scale()}
              fill={"url(#globe_highlight)"}
            />
          </g>
        )) || (
          // <rect
          //   width={this.props.width}
          //   height={this.props.height}
          //   className={"noclicks"}
          //   fill={"url(#ocean_fill)"}
          //   // clipPath={`url(#clippath_${this.props.id})`}
          // />
          //)

          // draws the outline of the map
          <use
            href={`#outline_${this.props.id}`}
            className="noclicks outline"
            //stroke="none"
            //stroke-width="2pt"
            fill="url('#ocean_fill')"
          />
        )}
      </svg>
    );
  };

  renderGraticules = () => {
    return (
      <g
        strokeWidth={`${Math.min(
          0.4,
          this.props.landStrokeWidth / (this.state.zoom * 1)
        )}pt`}
        ref="graticules"
      >
        {geoGraticule()
          .step([10, 10])
          .lines()
          .map((graticule, idx) => {
            return (
              <path
                className={"graticule"}
                key={"gr_" + idx}
                id={"gr_" + idx}
                d={this.defaultPath(graticule)}
              />
            );
          })}
      </g>
    );
  };

  renderOutlineSphere = mapId => {
    const dSphere = this.defaultPath({ type: "Sphere" });
    //mapId = this.mapContainer.id;
    return (
      <defs>
        <path d={dSphere} id={`outline_${mapId}`} />
      </defs>
    );
  };
  /*
   * deperecated; click go directly to props.openSegment
  clickSegment(data) {
    console.log(`${data.trId}, ${data.startHopId}-${data.endHopId}`);
    console.log(this);
    this.openSegment(data);
  }
  */

  render() {
    if (process.env.NODE_ENV !== "production") {
      console.log("react render triggered");
    }

    const strokeWidthStr = `${this.props.landStrokeWidth / this.state.zoom}pt`,
      rightPosMapBox =
        document.querySelector(".mapContainer") &&
        document.querySelector(".mapContainer").getBoundingClientRect().width;

    const tracerouteSegmentsBBox = (document.querySelector(
        "#traceroute-segments"
      ) &&
        document
          .querySelector("#traceroute-segments")
          .getBoundingClientRect()) || {
        left: 0,
        width: this.props.with,
        top: 0,
        height: this.props.height
      },
      Δtr_w = (tracerouteSegmentsBBox.left + tracerouteSegmentsBBox.width) / 2,
      Δtr_h = (tracerouteSegmentsBBox.top + tracerouteSegmentsBBox.height) / 2;

    const childrenWithMapState = React.Children.map(
      this.props.children,
      child =>
        React.cloneElement(child, {
          projection: this.projection,
          zoomFactor: this.state.zoom,
          inTransit: this.state.inTransit
        })
    );

    const StyledMapControlsContainer =
      (this.props.viewMode == "sheet" && SheetMapControlsContainer) ||
      WindowMapControlsContainer;

    return (
      /* 
       * Remember boys and girls:
       * Safari only wants html transforms on 'g' elements, not on 'svg',
       * IE on the other hand, doesn't like css tranformations (ignores it)
       * html svg transformations use (0,0) of the element as the basis of transforms,
       * except for Chrome, who uses the center of the bounding box of the svg as basis.
       * `transform-origin` is by default for all browsers `50% 50% 0`, meaning the center
       * of the bounding box of the svg. However, firefox doesn't get percentages in
       * `transform-orgin`.
       * html transformations listen to the `transform-origin` css rule.
       * 
       * So here's what we do:
       * - set svg.mapContainer { transform-origin: 0 0 0} in css
       * - calculate all transform to use (0,0) and translate back to center.
       * - use html transformations only
       */

      [
        <StyledGeoMap
          viewMode={this.props.viewMode}
          key="mc"
          id={this.props.id}
          className="mapContainer"
          //width={this.props.width}
          //height={this.props.height}
          //width="100%"
          width={this.props.width}
          height={this.props.height}
          style={{
            strokeWidth: strokeWidthStr,
            cursor: this.state.inTransit && "all-scroll"
          }}
          onMouseMoveCapture={this.mouseMove}
          onMouseDown={this.mouseDown}
          onMouseUp={this.mouseUp}
          onMouseLeave={this.mouseUp}
          innerRef={x => {
            this.mapContainer = x;
          }}
        >
          <g
            ref="d3world"
            transform={`scale(${this.state.zoom}) translate(${
              this.state.move[0]
            },${this.state.move[1]})`}
            style={{
              strokeWidth: strokeWidthStr,
              transformOrigin: `${this.state.zoomCenter[0]}px ${
                this.state.zoomCenter[1]
              }px`
              //transformOrigin: `${this.props.width / 2}px ${this.props.height /2}px`
            }}
            onDoubleClick={e =>
              e.target.id &&
              !this.state.inTransit &&
              this.rotateToCountry({ e: e, countryId: e.target.id })
            }
          >
            {this.renderOutlineSphere(this.props.id)}
            {this.renderGlobeEffects(this.props.id)}
            {this.props.showGraticules && this.renderGraticules()}
            <g className="land" ref="d3countries" />
            {/* {this.state.selectedCountry && (
            <rect
              id="bbox"
              x={this.state.bounds[0][0]}
              y={this.state.bounds[0][1]}
              width={this.state.bounds[1][0] - this.state.bounds[0][0]}
              height={this.state.bounds[1][1] - this.state.bounds[0][1]}
              fill="none"
              stroke="#000"
              strokeWidth="2"
            />*/}
            {this.state.zoomBbox && (
              <rect
                id="bbox"
                fill="none"
                stroke="#00"
                strokeWidth="2"
                x={this.state.zoomBbox.left}
                y={this.state.zoomBbox.top}
                width={this.state.zoomBbox.width}
                height={this.state.zoomBbox.height}
              />
            )}
            {childrenWithMapState}
          </g>
          {/*this.state.actualPoint && (
          <circle
            cx={this.state.actualPoint[0]}
            cy={this.state.actualPoint[1]}
            r={2}
            fill={"red"}
          />
        )*/}
        </StyledGeoMap>,
        <StyledMapControlsContainer
          viewMode={this.props.viewMode}
          key="mcc"
          className="map-controls-container"
          width="80"
          height="240"
          viewBox="-40 0 80 240"
          //transform={`translate(${rightPosMapBox - 150},24)`}
        >
          <g
            className="map-controls"
            // transform={`translate(${rightPosMapBox - 50},24)`}
            transform="translate(0,24)"
          >
            <circle
              cx="12"
              cy="12"
              r="20"
              fill="white"
              stroke="none"
              onClick={e => {
                this.resetWorldView();
              }}
            >
              <title>reset globe view</title>
            </circle>
            <Globe
              strokeWidth="0.5pt"
              onClick={e => {
                this.resetWorldView();
              }}
            />
          </g>
          <g
            className="map-controls"
            // transform={`translate(${rightPosMapBox - 50},72)`}
            transform="translate(0,72)"
            onClick={e => {
              e.stopPropagation();
              let newZoom = this.state.zoom + 1;
              newZoom >= 1 &&
                newZoom <= MAXZOOM &&
                this.setState({ zoom: this.state.zoom + 1 });
            }}
          >
            <circle cx="12" cy="12" r="20" fill="white" stroke="none">
              <title>Zoom in on map</title>
            </circle>
            <ZoomIn strokeWidth="0.5pt" />
          </g>
          <g
            className="map-controls"
            // transform={`translate(${rightPosMapBox - 50},120)`}
            transform="translate(0,120)"
            onClick={e => {
              e.stopPropagation();
              let newZoom = this.state.zoom - 1;
              newZoom >= 1 &&
                this.state.zoom <= MAXZOOM &&
                this.setState({ zoom: newZoom });
            }}
          >
            <circle
              cx="12"
              cy="12"
              r="20"
              fill="white"
              stroke="none"
              title="zoom out"
            >
              <title>Zoom map out</title>
            </circle>
            <ZoomOut strokeWidth="0.5pt" />
          </g>
          <g
            className="map-controls"
            // transform={`translate(${rightPosMapBox - 50},192)`}
            transform="translate(0,192)"
            onClick={this.zoomToTraceroutes}
          >
            <circle
              cx="12"
              cy="12"
              r="20"
              fill="white"
              stroke="none"
              title="zoom out"
            >
              <title>Zoom all traceroutes</title>
            </circle>
            <Map strokeWidth="0.5pt" />
          </g>
        </StyledMapControlsContainer>
      ]
    );
  }
}

GeoMap.propTypes = {
  id: PropTypes.string.isRequired,
  viewMode: PropTypes.string,
  showGraticules: PropTypes.bool,
  showAntarctica: PropTypes.bool,
  scale: PropTypes.number,
  width: PropTypes.number.isRequired,
  height: PropTypes.number,
  rotate: PropTypes.arrayOf(PropTypes.number),
  translate: PropTypes.arrayOf(PropTypes.number),
  projection: PropTypes.func.isRequired
};

GeoMap.defaultProps = {
  viewMode: "sheet",
  showGraticules: true,
  showAntarctica: true,
  landStrokeWidth: 0.1,
  animateMapTransition: true, // use d3 animations, or not.
  // These are d3 projection properties. Changing these calculates a new projection.
  scale: 320, // initial map-scale. differs per projection type. Used immutably
  translate: [0, 0], // do not confuse with the html transform `translate` attribute (which is in `move`). Used immutably
  rotate: [0, 0], // mutable, used to re-project to a country
  // These are the html transformation attributes
  // They are used both by d3 (zoomTween) and react
  // Changing these (in the element state) does NOT re-project. Instead tweens or sets directly the html attribute `transform`
  zoom: 1, // this is the html transform attribute `scale`, used to zoom maps without re-project.
  move: [0, 0] // this is the html transform attribute `translate`, used to zoom without re-project.
};

export default GeoMap;
