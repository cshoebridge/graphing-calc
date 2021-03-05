import AddFunctionButton from "../AddFunctionButton/AddFunctionButton.jsx"

const InputHeader = ({incrementCount}) => {
    return (
        <AddFunctionButton onClick={incrementCount}/>
    );
}

export default InputHeader;