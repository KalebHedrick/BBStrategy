import map from './district.png';
import './index.css';
import Header from './displayComponents';
import CanvasDraw from 'react-canvas-draw';
import { useState, useEffect } from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { Container } from 'bootstrap';
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
  
  return (<div className = "container-fluid p-0">
    <Header/>
    <div className='row no-gutters'>
    <div className='col-sm'>
    <div className='d-flex'>
    <ButtonGroup color = "primary" className = "SelectionContainer" variant="contained" aria-label="outlined button group">
  <Button className='Selector'>One</Button>
  <Button className='Selector'>Two</Button>
  <Button className='Selector'>Three</Button>
</ButtonGroup>
    </div>
    </div>
    <div className='col-sm'>
    <div className='no-padding' style= {{backgroundColor: "Red"}}>
    <img src={map} class="mx-auto d-block map-image"></img>
    </div>
    </div>
    </div>
    </div>);
}
function getCurrentDimension(){
  return {
      width: window.innerWidth,
      height: window.innerHeight
  }
}
export default App;
