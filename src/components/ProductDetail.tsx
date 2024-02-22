import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Props{
    id:number;
    title:string;
    description:string;
    price:number;
    
}

export default function ProductDetail(){
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Props | null>(null);
    const [cart, setCart] = useState<Props[]>([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data));
    }, [id]);
    
    const addToCart = (product: Props) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        console.log(`${product.title} wurde dem Warenkorb hinzugefügt.`);
      };
    return(
        <>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <p>{product?.price}</p>
        <button onClick={() => addToCart(product!)}>Add to Cart</button>
        </>
    )

}