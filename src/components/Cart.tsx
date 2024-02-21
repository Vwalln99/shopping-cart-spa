import { useState } from "react";

interface Props{
    id:number;
    title:string;
    description:string;
    price:number;
    quantity:number;
    onClose: () => void;
    onUpdate: (id:number, newQuantity:number) => void;
    onRemove:(id:number) => void;

}

export default function Cart({onClose, onUpdate, onRemove}:Props){
 const [cart, setCart] = useState<Props[]>([]);

 const removeItem = (id:number) => {
    setCart(cart.filter(item => item.id !== id));
    onRemove(id);
 };

 const updateQuantity = (id:number, newQuantity:number) => {
    onUpdate(id, newQuantity);
 };

 const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {cart.map(item => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>Preis: ${item.price}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            />
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <h3>Total: € {calculateTotal()}</h3>
      <button onClick={onClose}>Close</button>
    </div>
  );

}