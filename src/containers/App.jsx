import './App.css';
import Figure from '../components/Figure.jsx';
import FunctionField from '../components/FunctionField';
import AddFunctionButton from '../components/AddFunctionButton';

const App = () => {

  return (
    <div className="App">
      <div className="inputs">
        <FunctionField />
        <FunctionField />
        <FunctionField />
        <div className="addButton">
          <AddFunctionButton />
        </div>
      </div>
      <div className="figure">
        <Figure viewXMax={10} viewYMax={10} viewXMin={-10} viewYMin={-10} />
      </div>
    </div>
  );
}

export default App;
