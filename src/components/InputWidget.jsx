import FunctionInputWidget from "./FunctionInputWidget"
import InputHeader from "./InputHeader"

const InputWidget = () => {
    return (
      <div>
        <div className="bg-light-gray bb pa2">
          <InputHeader />
        </div>
          <FunctionInputWidget fieldCount={3}/>
      </div>
    )
}

export default InputWidget;