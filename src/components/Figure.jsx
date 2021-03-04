import Axis from "./Axis"
import Curve from "./Curve"
import Grid from "./Grid";

const Figure = ({viewXMax, viewYMax, viewXMin, viewYMin}) => {
    const [viewWidth, viewHeight] = [viewXMax-viewXMin, viewYMax-viewYMin];
    return (
        <svg width="750" height="750" viewBox={`${viewXMin} ${viewYMin} ${viewWidth} ${viewHeight}`}>
            <Grid width={viewWidth} height={viewHeight}/>
            <Axis viewWidth={viewWidth} viewHeight={viewHeight}/>
            <Curve />
        </svg>
    );
}

export default Figure;