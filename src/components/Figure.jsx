import Axes from "./Axes"
import Curve from "./Curve"
import { Grid } from "./Grid";

const AXIS_PADDING = 1.1;

const Figure = ({viewXMax, viewYMax, viewXMin, viewYMin}) => {
    const [viewWidth, viewHeight] = [viewXMax-viewXMin, viewYMax-viewYMin];

    return (
        <svg width={750} height={750} viewBox={`${viewXMin*AXIS_PADDING} ${viewYMin*AXIS_PADDING} ${viewWidth*AXIS_PADDING} ${viewHeight*AXIS_PADDING}`}>
            <Grid spacing={viewWidth}/>
            <Axes viewWidth={viewWidth} viewHeight={viewHeight}/>
            <Curve color={"red"} width={viewWidth/150} domain={{min: viewXMin, max: viewXMax}} func={(x) => x**2}/>
        </svg>
    );
}

export default Figure;