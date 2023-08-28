import { Navigate, Link } from "react-router-dom";

/** Color
 * 
 * state: none
 * 
 * props: color
 * 
 */

const Color = ( { color } ) => {
    
    if (!color) return <Navigate to='/colors' />

    return (
        <>
            <p>{ color.name }</p>
            <Link to='/colors'> Back to all colors </ Link>
        </>
    )
}

export default Color;