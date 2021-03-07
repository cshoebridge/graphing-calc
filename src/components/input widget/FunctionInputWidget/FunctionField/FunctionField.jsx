import { useState } from 'react';
import { addStyles, EditableMathField } from 'react-mathquill';
import './FunctionField.css';
import { GREEK_ALPHABET } from '../../../../math helpers/mathConstants.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


addStyles();

const FunctionField = ({fieldKey, changeFunction, removeFunction}) => {
  const [latex, setLatex] = useState('');

  return (
    <div className="function-field-container">
      <EditableMathField
        style={{border: "none"}}
        latex={''}
        onChange={(mathField) => {
          changeFunction(mathField.latex(), fieldKey);
          setLatex(mathField.latex());
        }}
      config={{autoCommands: `${GREEK_ALPHABET} sum int`}}/>
      <span className="field-delete" onClick={() => removeFunction(fieldKey)}>
        <FontAwesomeIcon icon="times"/>
      </span>
      <p>{latex}</p>
    </div>
  );
}

export default FunctionField;