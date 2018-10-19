import React from "react";
import styled from "styled-components";

import { SinglePropertyBox } from "@ripe-rnd/ui-components";

export const MeasurementDetail = styled.div`
  /* maximum in www template w/ sidebar enabled */
  max-width: 866px;
  position: relative;
  margin-bottom: 24px;
`;

const StyledSubGroup = styled.div`
  margin-bottom: 12px;
`;

export const StyledPropertiesGrid = styled.div`
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
  
  .title {
    margin: 12px 0;
  }
`;

export class SubGroup extends React.Component {
  render() {
    return (
      <StyledSubGroup>
        {!this.props.hidden && <h5 className="title">{this.props.title}</h5>}
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
