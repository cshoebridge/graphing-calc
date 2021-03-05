import './App.css';
import Figure from '../components/graph widget/Figure.jsx';
import InputWidget from '../components/input widget/InputWidget.jsx'
import { useEffect, useState } from 'react';

const App = () => {
  const [functionCount, setFunctionCount] = useState(1);
  const [functions] = useState([]);

  useEffect(() => console.log(functions), [functions]);

  return (
    <div className="App">
      <div className="shadow-5">
        <InputWidget count={functionCount} incrementCount={() => setFunctionCount(functionCount + 1)} addFunction={(func) => functions.push(func)}/>
      </div>
      <div className="figure">
        <Figure viewXMax={1} viewYMax={3} viewXMin={-2} viewYMin={-1} />
      </div>
    </div>
  );
}

export default App;
