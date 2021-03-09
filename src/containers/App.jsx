import './App.css';
import Figure from '../components/graph widget/Figure.jsx';
import InputWidget from '../components/input widget/InputWidget.jsx'
import { useEffect, useState } from 'react';

const App = () => {
  const [functions, setFunctions] = useState({'inputfield-1': ''});

  useEffect(() => console.log(functions), [functions]);

  return (
    <div className="App">
      <div className="shadow-5">
        <InputWidget
          functions={functions}
          addFunction={() => {
            setFunctions(functions => ({...functions, [`inputfield-${Object.keys(functions).length + 1}`]: ''})  )
          }
          }
          changeFunction={(func, fieldKey) => {
              setFunctions(functions => ({...functions, [fieldKey]: func}));
            }
          }
          removeFunction={(fieldKey) => {
              setFunctions(functions => {
                const {[fieldKey]: omit, ...rest} = functions;
                return Object.keys(rest).length === 0 ? {'input-field-1': ''} : rest;
              });
            }
          }
        />
      </div>
      <div className="figure">
        <Figure 
          viewXMax={10} 
          viewYMax={10} 
          viewXMin={-10} 
          viewYMin={-10} 
          functions={Object.values(functions).filter(func => typeof func === 'function')}
        />
      </div>
    </div>
  );
}

export default App;
