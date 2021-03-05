import './App.css';
import Figure from '../components/Figure.jsx';
import InputWidget from '../components/InputWidget'

const App = () => {

  return (
    <div className="App">
      <div className="shadow-5">
        <InputWidget />
      </div>
      <div className="figure">
        <Figure viewXMax={10} viewYMax={10} viewXMin={-10} viewYMin={-10} />
      </div>
    </div>
  );
}

export default App;
