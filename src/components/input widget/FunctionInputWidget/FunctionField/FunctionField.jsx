//import { addStyles, EditableMathField } from 'react-mathquill';
import './FunctionField.css';
//import { GREEK_ALPHABET } from '../../../../math helpers/mathConstants.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { evaluate } from 'mathjs';


//addStyles();

/**
 * to be valid, a function should not always return undefined
 * to check this, we check on the given interval
 * for at least one defined value
 * if one is found, and it is type 'number' the function is deemed valid
 * @param {function} func function to test 
 * @param {number} bottom lower bound of interval
 * @param {number} top upper bound of interval
 */

const isFunctionValid = (func, bottom=-2, top=2) => {
  for (let i = bottom; i < top; i++) {
    if (typeof func(i) === 'number') {
      return true;
    }
    return false;
  }
}


const FunctionField = ({fieldKey, changeFunction, removeFunction}) => {
  //const [latex, setLatex] = useState('');
 
  return (
    <div className="function-field-container">
      <input className="function-in"
        type="text"
        onChange={(event) => {
          let val = event.target.value;
          if (!val.includes('=')) {
            val = `$f(x)=${val}`;
          }
          try {
            const newFunction = evaluate(val);
            if (isFunctionValid(newFunction)) {
              changeFunction(newFunction, fieldKey);
            }
          }
          catch (error) {
            console.log('invalid function syntax: ', val);
          }
        }}
      
      />
      {/* // <EditableMathField
      //   style={{border: "none"}}
      //   latex={''}
      //   onChange={(mathField) => {
      //     changeFunction(mathField.latex(), fieldKey);
      //     setLatex(mathField.latex());
      //   }}
      // config={{autoCommands: `${GREEK_ALPHABET} sum int`}}/>
      // <p>{latex}</p> */}
      <span className="field-delete dim" onClick={() => removeFunction(fieldKey)}>
         <FontAwesomeIcon icon="times"/>
      </span>
    </div>
  );
}

export default FunctionField;