import { useParams } from "react-router-dom";
import Color from "./Color";

/** ColorPick
 * 
 * state: none
 * 
 * props: colorsData
 */

const ColorPick = ( {colorsData} ) => {

    const { color } = useParams();
    const foundColor = colorsData.find(c => (c.name === color))

    return (
        <>
        <Color color={foundColor} />
        </>
    )
}

export default ColorPick;