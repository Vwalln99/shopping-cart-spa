import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Props{
    id:number;
    title:string;
    description:string;
    price:number;
    addToCart: (product: Props) => void;
}

export default function ProductDetail({addToCart}:Props){
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Props | null>(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data));
    }, [id]);
    return(
        <>
        if(!product) return <div>Loading...</div>;
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <p>{product?.price}</p>
        <button onClick={() => addToCart(product!)}>Add to Cart</button>
        </>
    )

}