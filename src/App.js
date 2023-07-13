import logo from './district.png';
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
    <image src="./logo.svg"/>
    <CanvasDraw 
    imgSrc={logo}
    brushColor='red'
    enablePanAndZoom="true"
    canvasWidth= {0.27*(screenSize.height+screenSize.width)}
    canvasHeight= {0.27*(screenSize.height+screenSize.width)}
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
