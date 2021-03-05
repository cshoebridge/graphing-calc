import React from 'react';
import { BASE_GRIDLINE_COUNT } from "../Grid";

const LINES_PER_TICK = 5

const AxisTicks = ({spacing, count=BASE_GRIDLINE_COUNT}) => {
    const tickXOffset = spacing/(count*4);
    const tickYOffset = spacing/(count*1.5);
    const fontSize = spacing/(count*2)

    const horizontalTicks = [];
    for (let i = -spacing; i < spacing; i+=LINES_PER_TICK*spacing/count) {
        horizontalTicks.push(
            <text key={`h-tick-${i}`} textAnchor="middle" x={i} y={tickYOffset} fontSize={fontSize}>{i}</text>
        );
    }

    const verticalTicks = [];
    for (let i = -spacing; i < spacing; i+=LINES_PER_TICK*spacing/count) {
        verticalTicks.push(
            <text key={`v-tick-${i}`} x={tickXOffset} y={i + spacing/(count*7)} fontSize={fontSize}>{-i}</text>
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