import { createContext, useContext, useState, ReactNode } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  updateQuantity: (id: number, newQuantity: number) => void;
  removeItem: (id: number) => void;
  calculateTotal: () => number;
  onClose: () => void; 
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [, setIsOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const removeItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const onClose = () => {
    setIsOpen(false);
    console.log("Warenkorb geschlossen.");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeItem,
        calculateTotal,
        onClose, 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
