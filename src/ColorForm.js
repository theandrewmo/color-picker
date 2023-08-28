import { useState } from "react";

/** ColorForm
 * 
 * state: colorInput, color
 * 
 * props: updateColorsData
 * 
 */

const ColorForm = ( {updateColorsData} ) => {

    const INITIAL_STATE = '';
    const [colorInput, setColorInput] = useState(INITIAL_STATE)
    const [color, setColor] = useState(INITIAL_STATE)

    const handleColorChange = (e) => {
        setColor(e.target.value)
        setColorInput(INITIAL_STATE)
    }

    const handleColorSubmit = (e) => {
        e.preventDefault();
        updateColorsData(color);
    }
 
    return (
        <>
         <form onSubmit={handleColorSubmit}>
            <label htmlFor="color">Color: </label>
            <input id='color' name='color' onChange={handleColorChange}></input>
            <button>Submit</button>
         </form>
        </>
    )
}

export default ColorForm;