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
                return rest;
              });
            }
          }
        />
      </div>
      <div className="figure">
        <Figure viewXMax={5} viewYMax={5} viewXMin={-5} viewYMin={-5} />
      </div>
    </div>
  );
}

export default App;
