import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

export default function ProductDetail(){
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Props | null>(null);
    const {addToCart} = useContext(CartContext);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data));
    }, [id]);
    

    return (
        <>
          {product && (
            <div className="product-card">
              <h2>{product.title}</h2>
              <img className="img-pd"src={product.image} alt={product.title} />
              <p>{product.description}</p>
              <p className="price">{product.price} €</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          )}
        </>
      );

}