
import { useCart } from "./CartProvider";

export default function Cart() {
  const { cart, calculateTotal, removeItem, updateQuantity, onClose } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {cart.length > 0 ? (
          cart.map((item) => (
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
          ))
        ) : (
          <p>Der Warenkorb ist leer.</p>
        )}
      </div>
      <h3>Total: € {calculateTotal()}</h3>
      <button onClick={onClose}>Close</button>
    </div>
  );
}