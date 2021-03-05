import React from 'react';
import { BASE_GRIDLINE_COUNT } from "../Grid";

const LINES_PER_TICK = 5

const AxisTicks = ({spacing, count=BASE_GRIDLINE_COUNT}) => {
    const tickXOffset = spacing/100;
    const tickYOffset = spacing/50;
    const fontSize = spacing/50

    const horizontalTicks = [];
    for (let i = -spacing; i < spacing; i+=LINES_PER_TICK*spacing/count) {
        horizontalTicks.push(
            <text key={`h-tick-${i}`} textAnchor="middle" x={i} y={tickYOffset} fontSize={fontSize}>{Math.round((i + Number.EPSILON) * 100) / 100
            }</text>
        );
    }

    const verticalTicks = [];
    for (let i = -spacing; i < spacing; i+=LINES_PER_TICK*spacing/count) {
        verticalTicks.push(
            <text key={`v-tick-${i}`} x={tickXOffset} y={i + spacing/125} fontSize={fontSize}>{-Math.round((i + Number.EPSILON) * 100) / 100
            }</text>
        );
    }
    return (
        <g>
            {horizontalTicks}
            {verticalTicks}
        </g>
    );
}

export default AxisTicks;