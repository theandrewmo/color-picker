import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Colors from './Colors';
import NotFound from './NotFound';
import colors from './colorsArray';
import ColorPick from './ColorPick';
import ColorForm from './ColorForm';

/** App
 * 
 * state: colorsData
 * 
 * props: none
 * 
 */

function App() {

  const [colorsData, setColorsData] = useState(colors);
  const navigate = useNavigate();

  const updateColorsData = (newColor) => {
    const existingColor = colorsData.find(color => color.name === newColor.toLowerCase())
    if (!existingColor) {
      setColorsData(prevData => [{name: newColor}, ...prevData])
      navigate('/colors')
    }
    else alert('color already exists');
  }

  return (
    <div className="App">
      <p><button onClick={()=>navigate('/colors/new')}>Add Color</button></p>
        <Routes>
            <Route path='/colors' element={<Colors colorsData={colorsData}/> }/>
            <Route path='/colors/:color' element={<ColorPick colorsData={colorsData}/> }/>
            <Route path='/colors/new' element={<ColorForm updateColorsData={updateColorsData}/>}/>
            <Route path='/*' element={<NotFound />}/>
        </Routes>      
    </div>
  );
}

export default App;
