import map from './district.png';
import './index.css';
import Header from './displayComponents';
import CanvasDraw from 'react-canvas-draw';
import { Whiteboard } from 'react-whiteboard-pdf';
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
    <div className='container-fluid'>
    <Whiteboard/>
    
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
