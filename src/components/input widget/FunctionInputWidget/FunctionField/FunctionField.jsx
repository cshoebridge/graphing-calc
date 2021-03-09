import { useState } from 'react';
//import { addStyles, EditableMathField } from 'react-mathquill';
import './FunctionField.css';
//import { GREEK_ALPHABET } from '../../../../math helpers/mathConstants.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { evaluate } from 'mathjs';


//addStyles();

const FunctionField = ({fieldKey, changeFunction, removeFunction}) => {
  //const [latex, setLatex] = useState('');
  const [content, setContent] = useState('')
 
  return (
    <div className="function-field-container">
      <input 
        type="text"
        value={content}
        onChange={(event) => {
          try {
            const newFunction = evaluate(event.target.value);
            changeFunction(newFunction, fieldKey);
          }
          catch (error) {
            console.log('invalid function syntax: ', event.target.value);
          }
          finally {
            setContent(event.target.value);
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