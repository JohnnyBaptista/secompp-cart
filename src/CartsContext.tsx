import React, { createContext, useContext, useState, ReactNode } from "react";

type ProductType = {
  title: string;
  description: string;
  id: number;
  price: number;
  quantity: number;
};

type CartContextType = {
  cart: ProductType[];
  cartTotal: number;
  addToCart: (product: ProductType) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType>({} as CartContextType);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ProductType[]>([]);

  const addToCart = (product: ProductType) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);
      if (existingProduct) {
        return prevCart.map((p) =>
          p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        cartTotal: cart.reduce((total, product) => total + product.quantity, 0),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
