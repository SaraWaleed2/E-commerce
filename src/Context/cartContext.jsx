import { createContext, useState, useEffect } from "react";

export const cartContext = createContext();

export default function CartProvider({ children }) {


    const [cartItems, setCartItems] = useState(() => {
        return localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);


    function addToCart(item) {
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }

    function decrementItemQuantity(id) {
        const newItemQuantity = cartItems.map((item) =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCartItems(newItemQuantity);
    }

    function removeProduct(id) {
        const newItemQuantity = cartItems.filter((item) => item.id !== id);
        setCartItems(newItemQuantity);
    }

    function incrementItemQuantity(id) {
        const newCartItems = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(newCartItems);
    }

    return (
        <cartContext.Provider value={{ cartItems, addToCart, decrementItemQuantity, incrementItemQuantity, removeProduct }}>
            {children}
        </cartContext.Provider>
    );
}