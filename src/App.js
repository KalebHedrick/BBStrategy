import map from './district.png';
import './index.css';
import Header from './displayComponents';
import Canvas from './Canvas';
import { useState, useEffect } from 'react';
import { ButtonGroup, Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';
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
  
  return (<>
    <Header/>
    <div className='row container-fluid'>
    <div className='col '>
    <div className='d-flex justify-content-center'>
    <ButtonGroup color = "primary" className = "SelectionContainer" variant="contained" aria-label="outlined button group">
  <Button className='Selector'>One</Button>
  <Button className='Selector'>Two</Button>
  <Button className='Selector'>Three</Button>
</ButtonGroup>
    </div>
    </div>
    <div className='col p-5' align="center">
    <div className='container '>
    
    <div style={{}}>
    <Canvas
        width={screenSize.width}
        height={screenSize.height}
        brushColor={"#ABCEFF"}
        
      />
    </div>
    </div>
    </div>
    </div>
    </>);
}
function getCurrentDimension(){
  return {
      width: window.innerWidth,
      height: window.innerHeight
  }
}
export default App;

const whiteboardControls = {
    PENCIL: true,
    LINE: true,
    RECTANGLE: true,
    ELLIPSE: true,
    TRIANGLE: true,
    TEXT: true,
    SELECT: true,
    ERASER: true,
    CLEAR: true,  
    FILL: true,
    BRUSH: true,
    COLOR_PICKER: true,
    DEFAULT_COLORS: true,
    FILES: true,
    SAVE_AS_IMAGE: true,
    ZOOM: true,
};
const drawingSettings={
  brushWidth: 5, 
  background: false, 
  currentMode: "PENCIL", 
  currentColor: '#000000',
  brushWidth: 5,
  fill: false,
}