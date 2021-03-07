import FunctionField from "./FunctionField/FunctionField.jsx";

const FunctionInputWidget = ({fieldCount, addFunction}) => {
    const fields = [];
    for (let i = 0; i < fieldCount; i++) {
        fields.push(
            <FunctionField fieldKey={`inputfield-${i}`} key={`inputfield-${i}`} addFunction={addFunction} />
        );
    }

    return (
        fields
    )
}

export default FunctionInputWidget;