import { addStyles, EditableMathField } from 'react-mathquill';
import './FunctionField.css';

addStyles();

// className="input-reset ba b--black-20 pa2 mb2 db w-100"

const FunctionField = () => {
    return (
        <div>
          <EditableMathField latex={'\\frac{1}{\\sqrt{2}}\\cdot 2'} onChange={() => {return}}/>
        </div>
    )
}

export default FunctionField;