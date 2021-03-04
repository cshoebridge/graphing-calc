import Axis from "./Axis"
import Curve from "./Curve"

const Figure = () => {
    return (
        <svg width="750" height="750" viewBox="-1000 -1000 2000 2000">
            <Axis />
            <Curve />
        </svg>
    )
}

export default Figure;