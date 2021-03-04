const Curve = ({width, color, func, domain}) => {
    const coords = [];
    for (let x = domain.min; x < domain.max; x+=0.1) {
        coords.push({x: x, y: -func(x)});
    }

    return (
    <g>
        <path 
            d={`M${coords.pop(0).x},${coords.pop(0).y} ${coords.map((coord) => `L${coord.x},${coord.y}`).join(" ")} `} 
            strokeWidth={width}
            fill="none"
            stroke={color}
        />
    </g>
    );
}

export default Curve;