import React from 'react';

const GRIDLINE_COUNT = 20;
const GRIDLINE_COLOR = "#b0b0b0"
const GRIDLINES_WIDTH = 2

const Grid = ({ width, height }) => {
    const verticalLines = [];
    for (let i = -width; i < width; i+=width/GRIDLINE_COUNT) {
        verticalLines.push(
            <line key={`vertical-line-${i}`} x1={i} y1={-height} x2={i} y2={height} stroke={GRIDLINE_COLOR} strokeWidth={GRIDLINES_WIDTH}/>
        );
    }

    const horizontalLines = [];
    for (let i = -height; i < height; i+=height/GRIDLINE_COUNT) {
        horizontalLines.push(
            <line key={`horizontal-line-${i}`} x1={-width} y1={i} x2={width} y2={i} stroke={GRIDLINE_COLOR} strokeWidth={GRIDLINES_WIDTH}/>
        );
    }

    return (
        <React.Fragment>
            <g>
                {verticalLines}
                {horizontalLines}
            </g>
        </React.Fragment>
    )
}

export default Grid;