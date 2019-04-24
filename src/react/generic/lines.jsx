import React from 'react';

export const HookGlyph = (props) => {
    const elmHeight = 10 + 10 + (props.hopNr - 1) * 25; // topMargin + bottomMargin + li height
    return <svg className={"icon hook " +  props.className} x="0px" y="0px" width="32px" height={elmHeight + "px"}
                viewBox={"0 0 32 " + (elmHeight - 2)}>
        <polyline points={"32,13 20,13 20," + (elmHeight - 5) + " 32," + (elmHeight - 5)}/>
        <text x="10" y= {10 + elmHeight / 2} textAnchor="end">{props.text}</text>
    </svg>
};
