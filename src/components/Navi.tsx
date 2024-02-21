import {Link} from "react-router-dom";

export default function Navi(){
    return(
        <nav>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="cart">Cart</Link>
            </ul>
        </nav>
    );
}