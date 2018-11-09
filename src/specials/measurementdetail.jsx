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
    font-size: 14.3px;
    color: ${fColor};
  }

  .group-desc {
    font-weight: 100;
    max-width: 460px;
    margin-top: 6px;
  }
`;

export const StyledPropertiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 12px 0;

  @media (min-width: 766px) {
    grid-template-columns: repeat(2, 1fr);
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
  }
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
