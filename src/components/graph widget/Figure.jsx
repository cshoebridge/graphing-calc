import Axes from "./Axes/Axes.jsx"
import Curve from "./Curve"
import { Grid } from "./Grid";


const Figure = ({viewXMax, viewYMax, viewXMin, viewYMin}) => {
    const [viewWidth, viewHeight] = [Math.abs(viewXMax-viewXMin), Math.abs(viewYMax-viewYMin)];

    return (
        <svg width={700} height={700} viewBox={`${viewXMin} ${-viewYMax} ${viewWidth} ${viewHeight}`}>
            <Grid spacing={viewWidth}/>
            <Axes viewWidth={viewWidth} viewHeight={viewHeight}/>
            <Curve color={"red"} strokeWidth={viewWidth/200} domain={{min: viewXMin, max: viewXMax}} range={{min: viewYMin, max: viewYMax}} func={(x) => x**100}/>
        </svg>
    );
}

export default Figure;