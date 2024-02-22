import {Link } from "react-router-dom"

export default function Navi(){
    return(
        <>
        <nav className="nav">
            <ul>
                <Link to="/" className="navi">Home</Link>
                <Link to="/shop" className="navi">Shop</Link>
                <Link to="cart" className="navi">Cart</Link>
            </ul>
        </nav>
        </>
    )
}