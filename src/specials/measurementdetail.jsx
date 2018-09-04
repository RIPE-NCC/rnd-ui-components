import styled from "styled-components";
import React from "react";
import { SinglePropertyBox } from "@ripe-rnd/ui-components";

export const MeasurementDetail = styled.div`
  max-width: 915px;
  position: relative;
  margin-bottom: 24px;
`;

export const StyledSubGroup = styled.div`
  display: grid;
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
`;

export class SubGroup extends React.Component {
  render() {
    return (
      <div>
        {!this.props.hidden && <h5 className="title">{this.props.title}</h5>}
        <StyledSubGroup {...this.props}>
          {React.Children.map(this.props.children, c => {
            if (this.props.forceRows) {
              return c;
            }
            return React.cloneElement(c, {
              extraclasses:
                (c.props.readOnly && "property-box right") ||
                "property-box left"
            }) || <SinglePropertyBox name="NOT AVAILABLE" value="-"/>;
          })}
        </StyledSubGroup>
      </div>
    );
  }
}
