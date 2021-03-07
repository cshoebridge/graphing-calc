import './App.css';
import Figure from '../components/graph widget/Figure.jsx';
import InputWidget from '../components/input widget/InputWidget.jsx'
import { useEffect, useState } from 'react';

const App = () => {
  const [functionCount, setFunctionCount] = useState(1);
  const [functions, setFunctions] = useState({});

  useEffect(() => console.log(functions), [functions]);

  return (
    <div className="App">
      <div className="shadow-5">
        <InputWidget count={functionCount} incrementCount={() => setFunctionCount(functionCount + 1)} addFunction={(func, fieldKey) => setFunctions({...functions, [fieldKey]: func })}/>
      </div>
      <div className="figure">
        <Figure viewXMax={5} viewYMax={5} viewXMin={-5} viewYMin={-5} />
      </div>
    </div>
  );
}

export default App;
