import { Outlet, Link } from "react-router-dom";


export default function Home(){
    return(
        <>
        <h1>Herzlich willkommen in meinem Shop!</h1>
        <p>Hier finden Sie alles was Sie brauchen.</p>
        <Link to="/shop"> Zum Shop</Link>
        <Outlet />
        </>
    )
}