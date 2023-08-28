import { Link } from "react-router-dom";

/**
 * 
 * Not found page
 * 
 * state: none
 * 
 * props: none
 * 
 */

const NotFound = () => {
 return (
    <>
    Not Found
    <p>
        <Link to='/colors'>
            Colors
        </Link>
    </p>
    </>
 )
}

export default NotFound;
