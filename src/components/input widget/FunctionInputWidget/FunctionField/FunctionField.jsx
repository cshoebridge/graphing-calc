import { useState } from 'react';
import { addStyles, EditableMathField } from 'react-mathquill';
import './FunctionField.css';
import { GREEK_ALPHABET } from '../../../../math helpers/mathConstants.js'

addStyles();

const FunctionField = ({addFunction}) => {
  const [latex, setLatex] = useState('');

  return (
    <div className="function-field-container">
      <EditableMathField
        style={{border: "none"}}
        latex={''}
        onChange={(mathField) => {
          setLatex(mathField.latex());
        }}
      config={{autoCommands: `${GREEK_ALPHABET} sum int`}}/>
      <i className="field-delete">X</i>
      <p>{latex}</p>
    </div>
  );
}

export default FunctionField;