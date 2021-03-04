const Axis = ({viewWidth, viewHeight}) => {
    return (
        <g>
            <line x1={-viewHeight} y1={0} x2={viewWidth} y2={0} stroke="black" strokeWidth={4}/>
            <line x1={0} y1={-viewHeight/2} x2={0} y2={viewHeight} stroke="black" strokeWidth={4}/>
        </g>
    )
}

export default Axis;