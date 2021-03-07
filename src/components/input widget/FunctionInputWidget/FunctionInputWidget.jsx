import FunctionField from "./FunctionField/FunctionField.jsx";

const FunctionInputWidget = ({functions, changeFunction, removeFunction}) => {
    const fields = [];
    for (let func in functions) {
        fields.push(
            <FunctionField fieldKey={func} key={func} changeFunction={changeFunction} removeFunction={removeFunction}/>
        )
    }

    return (
        fields
    )
}

export default FunctionInputWidget;