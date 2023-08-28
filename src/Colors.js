import { Link } from "react-router-dom";

/** Colors
 * 
 * state: none
 * 
 * props: colorsData
 * 
 */

const Colors = ( {colorsData} ) => {

    return (
        <>
            All the colors are here
           {colorsData.map(color=> (<Link key={color.name} to={`/colors/${color.name}`}><p>{color.name}</p></Link>))}
        </>
    )
}

export default Colors;