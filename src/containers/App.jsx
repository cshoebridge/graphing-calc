import './App.css';
import Figure from '../components/Figure.jsx';

const App = () => {
  return (
    <div className="App">
      <Figure viewXMax={2000} viewYMax={2000} viewXMin={-1000} viewYMin={-1000} />
    </div>
  );
}

export default App;
