import './App.css';
import Figure from '../components/graph widget/Figure.jsx';
import InputWidget from '../components/input widget/InputWidget.jsx'

const App = () => {

  return (
    <div className="App">
      <div className="shadow-5">
        <InputWidget />
      </div>
      <div className="figure">
        <Figure viewXMax={1} viewYMax={1} viewXMin={-2} viewYMin={-3} />
      </div>
    </div>
  );
}

export default App;
