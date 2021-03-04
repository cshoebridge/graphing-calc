import React from 'react';

export const BASE_GRIDLINE_COUNT = 20;
const GRIDLINE_COLOR = "#b0b0b0"

export const Grid = ({ spacing, count=BASE_GRIDLINE_COUNT }) => {
    const gridlineWidth = spacing/(count * 20);

    const verticalLines = [];
    for (let i = -spacing; i < spacing; i+=spacing/count) {
        verticalLines.push(
            <g>
                <line key={`vertical-line-${i}`} x1={i} y1={-spacing} x2={i} y2={spacing} stroke={GRIDLINE_COLOR} strokeWidth={gridlineWidth}/>
            </g>
        );
    }

    const horizontalLines = [];
    for (let i = -spacing; i < spacing; i+=spacing/count) {
        horizontalLines.push(
            <g>
                <line key={`horizontal-line-${i}`} x1={-spacing} y1={i} x2={spacing} y2={i} stroke={GRIDLINE_COLOR} strokeWidth={gridlineWidth}/>
            </g>
        );
    }

    return (
        <g className="grid">
            {verticalLines}
            {horizontalLines}
        </g>
    )
}
