import React, { useContext, useState } from "react";
import { SideCart } from '../components/SideCart';

const ShoppingCartContext = React.createContext();

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
    const [shoppingCart, setShoppingCart] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    function openCart() {
        setIsOpen(true);
    }
    function closeCart() {
        setIsOpen(false);
    }
    function getTotalItems() {
        return shoppingCart.reduce(
            (quantity, item) => item.quantity + quantity,
            0
        )
    }
    function getItemQuantity(id) {
        return shoppingCart.find(item => item.id === id)?.quantity || 0;
    }

    function increaseItemQuantity(id) {
        setShoppingCart(currItems => {
            if(currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }];
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                })
            }
        });
    }

    function decreaseItemQuantity(id) {
        setShoppingCart(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id);
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                })
            }
        });
    }

    function removeFromCart(id) {
        setShoppingCart(currItems => {
            return currItems.filter(item => item.id !== id);
        })
    }

    const value = { isOpen, shoppingCart, getTotalItems, setShoppingCart, getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart, openCart, closeCart };

    return (
        <ShoppingCartContext.Provider value={value}>
            {children}
            <SideCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    );
}