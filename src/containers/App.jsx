import './App.css';
import Figure from '../components/graph widget/Figure.jsx';
import InputWidget from '../components/input widget/InputWidget.jsx'
import { useEffect, useState } from 'react';

const App = () => {
  const [functions, setFunctions] = useState({});

  useEffect(() => console.log(functions), [functions]);

  return (
    <div className="App">
      <div className="shadow-5">
        <InputWidget
          functions={functions}
          addFunction={() => {
            setFunctions(
              {...functions, [`inputfield-${Object.keys(functions).length + 1}`]: ''}
              )
          }}
          changeFunction={(func, fieldKey) => setFunctions({...functions, [fieldKey]: func })}
          removeFunction={(fieldKey) => {
            console.log('field key: ',fieldKey)
            const {[fieldKey]: omit, ...res} = functions;
            setFunctions(res);
          }}
        />
      </div>
      <div className="figure">
        <Figure viewXMax={5} viewYMax={5} viewXMin={-5} viewYMin={-5} />
      </div>
    </div>
  );
}

export default App;
