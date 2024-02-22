import { Outlet, Link } from "react-router-dom";


export default function Home(){
    return(
        <div className="home">
        <h1>Herzlich willkommen in meinem Shop!</h1>
        <Link to="/shop" className="shop-btn"> Zum Shop</Link>
        <Outlet />
        </div>
    )
}