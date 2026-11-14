import React, {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("tawfeerCart");

      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "tawfeerCart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  const addToCart = (product) => {

    setCartItems((prevItems) => {

      const existingItem = prevItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );
      }

      return [
        ...prevItems,
        {
          ...product,
          quantity: 1
        }
      ];
    });
  };

  const updateQuantity = (productId, newQuantity) => {

    if (newQuantity < 1) {
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: newQuantity
            }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {

    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => item.id !== productId
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalPrice,
        totalItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
}