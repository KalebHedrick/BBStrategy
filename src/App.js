import logo from './logo.svg';
import './App.css';
import Header from './displayComponents';
import CanvasDraw from 'react-canvas-draw';
import { useState, useEffect } from 'react';
function App() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);
    
    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])
  
  return (<div className = "App">
    <Header/>
    <div className='PanelContainer'>
    <div className='LeftPanel'><text>{screenSize.width} {screenSize.height}</text></div>
    <div className='RightPanel'>
    <div className='Canvas'>
    <CanvasDraw 
    backgroundColor='blue'
    canvasWidth= {screenSize.height/4}
    canvasHeight= {screenSize.height/4}
    />
    </div>
    </div>
    </div>
    </div>
  );
}
function getCurrentDimension(){
  return {
      width: window.innerWidth,
      height: window.innerHeight
  }
}
export default App;
