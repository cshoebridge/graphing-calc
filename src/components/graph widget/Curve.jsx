const DOMAIN_PADDING = 1.75; 
const SAFE_DIST_PER_UNIT = 2000; // 2000 is the smallest I've found that renders all functions nicely at most scales

const Curve = ({strokeWidth, color, func, domain}) => {
    const coords = [];

    for (let x = domain.min * DOMAIN_PADDING; x < domain.max * DOMAIN_PADDING; x+=(domain.max/SAFE_DIST_PER_UNIT)) { 
        const y = func(x);
        if (Number.isFinite(y)) {
            coords.push({x: x, y: func(x)});
        }
    }

    return (
    <g className="curve">
        <path 
            d=
            {
                `M${coords.shift(0).x},${-coords.shift(0).y} ${coords.map((coord, i) => 
                    `L${coord.x},${coord.y}`)
                    .join(" ")
                }`
            } 
            stroke={color}
            strokeOpacity={0.5}
            strokeWidth={strokeWidth}
            fill="none"
        />
    </g>
    );
}

export default Curve;