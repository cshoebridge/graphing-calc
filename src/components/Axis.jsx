const Axis = () => {
    return (
        <g>
            <line x1={-1000} y1={0} x2={1000} y2={0} stroke="black" strokeWidth={2}/>
            <line x1={0} y1={-1000} x2={0} y2={1000} stroke="black" strokeWidth={2}/>
        </g>
    )
}

export default Axis;