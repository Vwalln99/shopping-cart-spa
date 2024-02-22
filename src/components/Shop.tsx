import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Props{
    id:number;
    title:string;
    description:string;
    price:number;
}

export default function Shop(){
    const [products, setProducts] = useState<Props[]>([]);
    const [cart, setCart] = useState<Props[]>([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []);
    const addToCart = (product: Props) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        console.log(`${product.title} wurde dem Warenkorb hinzugefügt.`);
      };
    
    return(
        <div>
            <h2>Our Products</h2>
            <div>
                {products.map(product =>(
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <Link to={`/shop/${product.id}`}>Details</Link>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}