import FunctionInputWidget from "./FunctionInputWidget/FunctionInputWidget.jsx"
import InputHeader from "./InputHeader/InputHeader.jsx"
import Scroll from "./Scroll.jsx";

const InputWidget = ({functions, addFunction, changeFunction, removeFunction}) => {
    return (
      <div>
        <div className="bg-light-gray bb pa2">
          <InputHeader addFunction={addFunction}/>
        </div>
        <Scroll>
          <FunctionInputWidget 
            functions={functions} 
            changeFunction={changeFunction} 
            removeFunction={removeFunction}
          />
        </Scroll>
      </div>
    )
}

export default InputWidget;