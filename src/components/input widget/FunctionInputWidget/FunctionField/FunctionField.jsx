import { useState } from 'react';
import { addStyles, EditableMathField } from 'react-mathquill';
import './FunctionField.css';
import evaluatex from 'evaluatex'

addStyles();

// className="input-reset ba b--black-20 pa2 mb2 db w-100"

const FunctionField = ({addFunction}) => {
  const [latex, setLatex] = useState('')

  return (
      <div>
        <EditableMathField latex={latex} onChange={(mathField) => {
              setLatex(mathField.latex());
              addFunction(evaluatex(mathField.latex()))
            }
          }
        />
      </div>
  )
}

export default FunctionField;