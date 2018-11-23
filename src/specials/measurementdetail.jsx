import React from "react";
import styled from "styled-components";

import { SinglePropertyBox } from "../generic/simpleBoxes";
import { fColor } from "../themes/colors";

export const MeasurementDetail = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

const StyledSubGroup = styled.div`
  margin: 12px 0 24px;

  h5.title {
    margin: 12px 6px;
    font-weight: 600;
    font-size: 15.6px;
    color: ${fColor};
  }

  .group-desc {
    font-weight: 100;
    max-width: 750px;
    margin-left: 6px;
  }
`;

const StyledPropertiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 12px 0;
  margin-left: 6px; /* conform to template */

  @media (min-width: 766px) {
    grid-template-columns: repeat(2, 1fr);

    /* spanAllColumns boxes keep on spanning */
    .property-box.span-all-columns {
      grid-column: 1/-1;
    }
  }

  @media (min-width: 916px) {
    grid-template-columns: ${props =>
      (props.forceRows &&
        `repeat(${props.forceRows},${100 / props.forceRows}%)`) ||
      "50% 50%"};
    grid-auto-flow: ${props => (!props.forceRows && "column") || "unset"};

    .property-box.left {
      order: 0;
      grid-column: 1 / 1;
    }

    .property-box.right {
      order: 1;
      grid-column: 2 / 2;
    }

    .property-box.span-all-columns {
      /* order: 0; */
      grid-column: 1 / -1;
    }
  }
`;

const StyledPropertiesFlow = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export class SubGroup extends React.Component {
  render() {
    return (
      <StyledSubGroup>
        {!this.props.hidden && <h5 className="title">{this.props.title}</h5>}
        {this.props.description && (
          <p className="group-desc">{this.props.description}</p>
        )}
        <StyledPropertiesGrid forceRows={this.props.forceRows}>
          {React.Children.map(this.props.children, c => {
            if (!c) {
              return;
            }

            if (this.props.forceRows) {
              return c;
            }
            return (
              React.cloneElement(c, {
                extraclasses:
                  (c.props.spanAllColumns && "property-box span-all-columns") ||
                  (c.props && c.props.readOnly && "property-box right") ||
                  "property-box left"
              }) || <SinglePropertyBox name="NOT AVAILABLE" value="-" />
            );
          })}
        </StyledPropertiesGrid>
      </StyledSubGroup>
    );
  }
}

export class FlowGroup extends React.Component {
  render() {
    return (
      <StyledSubGroup>
        {!this.props.hidden && <h5 className="title">{this.props.title}</h5>}
        {this.props.description && (
          <p className="group-desc">{this.props.description}</p>
        )}
        <StyledPropertiesFlow>{this.props.children}</StyledPropertiesFlow>
      </StyledSubGroup>
    );
  }
}
