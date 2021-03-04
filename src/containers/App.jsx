import './App.css';
import Figure from '../components/Figure.jsx';

const App = () => {
  return (
    <div className="App">
      <Figure viewXMax={10} viewYMax={10} viewXMin={-10} viewYMin={-10} />
    </div>
  );
}

export default App;
