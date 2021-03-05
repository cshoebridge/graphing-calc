import FunctionInputWidget from "./FunctionInputWidget/FunctionInputWidget.jsx"
import InputHeader from "./InputHeader/InputHeader.jsx"

const InputWidget = ({count, incrementCount, addFunction}) => {
    return (
      <div>
        <div className="bg-light-gray bb pa2">
          <InputHeader incrementCount={incrementCount}/>
        </div>
          <FunctionInputWidget fieldCount={count} addFunction={addFunction}/>
      </div>
    )
}

export default InputWidget;