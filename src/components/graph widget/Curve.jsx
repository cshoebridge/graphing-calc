const DOMAIN_PADDING = 1.75; 
const RANGE_PADDING = 1.75;
const SAFE_DIST_PER_UNIT = 2000; // 2000 is the smallest I've found that renders all functions nicely at most scales

const Curve = ({strokeWidth, color, func, domain, range}) => {
    const coords = [];
    const rangeDiff = Math.abs(range.max - range.min);

    for (let x = domain.min * DOMAIN_PADDING; x < domain.max * DOMAIN_PADDING; x+=(domain.max/SAFE_DIST_PER_UNIT)) { 
        const y = func(x);
        if (Number.isFinite(y) && y < range.max * RANGE_PADDING && y > range.min * RANGE_PADDING) {
            coords.push({x: x, y: func(x)});
        }
    }

    return (
    <g className="curve">
        <path 
            d=
            {
                `M${coords.shift(0).x},${-coords.shift(0).y} ${coords.map((_, i) => {
                    if (i !== 0) {
                        const coordDiff = (coords[i].y - coords[i - 1].y) 

                        if (Math.abs(coordDiff) > rangeDiff) {
                            return `M${coords[i].x},${-coords[i].y}`
                        }
                    }
                    
                    return `L${coords[i].x},${-coords[i].y}`
                    
                }
                ).join(" ")
                }`
            } 
            stroke={color}
            strokeOpacity={0.65}
            strokeWidth={strokeWidth}
            fill="none"
        />
    </g>
    );
}

export default Curve;