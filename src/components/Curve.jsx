const DOMAIN_PADDING = 1.25;

const Curve = ({width, color, func, domain}) => {
    const coords = [];

    for (let x = domain.min * DOMAIN_PADDING; x < domain.max * DOMAIN_PADDING; x+=(domain.max/100)) {
        const y = func(x);
        if (y) {
            coords.push({x: x, y: func(x)});
        }
    }
    console.log(coords);

    return (
    <g>
        <path 
            d={`M${coords.shift(0).x},${-coords.shift(0).y} ${coords.map((coord) => `L${coord.x},${-coord.y}`).join(" ")}`} 
            stroke={color}
            strokeOpacity={0.5}
            strokeWidth={width}
            fill="none"
        />
    </g>
    );
}

export default Curve;