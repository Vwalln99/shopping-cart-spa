import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartProvider";

interface Props{
    id:number;
    title:string;
    image:string;
    description:string;
    price:number;
    quantity: number;
}

export default function Shop(){
    const [products, setProducts] = useState<Props[]>([]);
    //const [cart, setCart] = useState<Props[]>([]);
    const {addToCart} = useContext(CartContext);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []);

    
    return(
        <div>
            <h2>Our Products</h2>
            <div className="container">
                {products.map(product =>(
                    <div key={product.id} className="products">
                        <h3>{product.title}</h3>
                        <img className="img"src={product.image} alt={product.title} />
                        <p className="price">{product.price} €</p>
                        <Link to={`/shop/${product.id}`}>Details</Link>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}