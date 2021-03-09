import Axes from "./Axes/Axes.jsx"
import Curve from "./Curve"
import { Grid } from "./Grid";

const CURVE_COLORS = ['red', 'blue', 'green', 'purple', 'orange', 'yellow', 'pink']


const Figure = ({viewXMax, viewYMax, viewXMin, viewYMin, functions}) => {
    const [viewWidth, viewHeight] = [Math.abs(viewXMax-viewXMin), Math.abs(viewYMax-viewYMin)];

    return (
        <svg width={700} height={700} viewBox={`${viewXMin} ${-viewYMax} ${viewWidth} ${viewHeight}`}>
            <Grid spacing={viewWidth}/>
            <Axes viewWidth={viewWidth} viewHeight={viewHeight}/>
            {
                functions.map((func, i) => 
                    <Curve key={`curve-${i}`}
                        color={CURVE_COLORS[i % CURVE_COLORS.length]} 
                        strokeWidth={viewWidth/200} 
                        domain={{min: viewXMin, max: viewXMax}} 
                        range={{min: viewYMin, max: viewYMax}} 
                        func={(x) => func(x)}/>
                )
            }
           
        </svg>
    );
}

export default Figure;