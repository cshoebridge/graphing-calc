import './App.css';
import Figure from '../components/graph widget/Figure.jsx';
import InputWidget from '../components/input widget/InputWidget.jsx'
import { useEffect, useState } from 'react';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";


const App = () => {
  const [functions, setFunctions] = useState({'inputfield-1': ''});
  const [view, setView] = useState({
    xMax: 10,
    yMax: 10,
    xMin: -10,
    yMin: -10
  });

  useEffect(() => console.log(functions, view), [functions, view]);

  const addFunction = () => {
    setFunctions(functions => ({...functions, [`inputfield-${Object.keys(functions).length + 1}`]: ''}))
  }

  const changeFunction = (func, fieldKey) => {
    setFunctions(functions => ({...functions, [fieldKey]: func}));
  }

  const removeFunction = (fieldKey) => {
    setFunctions(functions => {
      const {[fieldKey]: omit, ...rest} = functions;
      return Object.keys(rest).length === 0 ? {'input-field-1': ''} : rest;
    });
  }

  const zoomIn = () => {
    setView(view => (
       {
        xMax: view.xMax * 0.75,
        yMax: view.yMax * 0.75,
        xMin: view.xMin * 0.75,
        yMin: view.yMin * 0.75
      }
    ))
  }

  const zoomOut = () => {
    setView(view => (
      {
        xMax: view.xMax * 1.25,
        yMax: view.yMax * 1.25,
        xMin: view.xMin * 1.25,
        yMin: view.yMin * 1.25
      }
    ))
  }

  return (
    <div className="App">
      <div className="shadow-5">
        <InputWidget
          functions={functions}
          addFunction={addFunction}
          changeFunction={changeFunction}
          removeFunction={removeFunction}
        />
      </div>
      <div className="figure">
        <ReactScrollWheelHandler
          upHandler={zoomIn}
          downHandler={zoomOut}
        >
          <Figure 
            viewXMax={view.xMax} 
            viewYMax={view.yMax} 
            viewXMin={view.xMin} 
            viewYMin={view.yMin} 
            functions={Object.values(functions).filter(func => typeof func === 'function')}
          />
        </ReactScrollWheelHandler>
      </div>
    </div>
  );
}

export default App;
