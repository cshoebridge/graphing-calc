import FunctionField from "./FunctionField";

const FunctionInputWidget = ({fieldCount}) => {
    const fields = [];
    for (let i = 0; i < fieldCount; i++) {
        fields.push(
            <FunctionField key={`inputfield-${i}`}/>
        );
    }

    return (
        fields
    )
}

export default FunctionInputWidget;