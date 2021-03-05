import AxisTicks from "./AxisTicks"

const SAFE_RENDER_MULTIPLIER = 1.25
const AXIS_COLOR = "black"

const Axes = ({viewWidth, viewHeight}) => {
    const axisWidth = viewHeight/250
    return (
        <g className="axis">
            <line id="xaxis" x1={-viewHeight*SAFE_RENDER_MULTIPLIER} y1={0} x2={viewWidth*SAFE_RENDER_MULTIPLIER} y2={0} stroke={AXIS_COLOR} strokeWidth={axisWidth}/>
            <line id="yaxis" x1={0} y1={-viewHeight*SAFE_RENDER_MULTIPLIER} x2={0} y2={viewHeight*SAFE_RENDER_MULTIPLIER} stroke={AXIS_COLOR} strokeWidth={axisWidth}/>
            <AxisTicks spacing={viewWidth}/>
        </g>
    )
}

export default Axes;