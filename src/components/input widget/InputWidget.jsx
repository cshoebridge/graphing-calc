import FunctionInputWidget from "./FunctionInputWidget/FunctionInputWidget.jsx"
import InputHeader from "./InputHeader/InputHeader.jsx"
import Scroll from "./Scroll.jsx";

const InputWidget = ({count, incrementCount, addFunction}) => {
    return (
      <div>
        <div className="bg-light-gray bb pa2">
          <InputHeader incrementCount={incrementCount}/>
        </div>
        <Scroll>
          <FunctionInputWidget fieldCount={count} addFunction={addFunction}/>
        </Scroll>
      </div>
    )
}

export default InputWidget;