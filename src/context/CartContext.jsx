import { useState, createContext, useContext, useEffect } from 'react';

const CartContext = createContext({
    cart: [],
    addItem: () => {},
    removeItem: () => {},
    isInCart: () => {},
    clearCart: () => {},
    totalQuantity: 0,
    total: 0,
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(()=>{
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
            return storedCart;
    }) ;

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addItem = (productToAdd) => {
        const { id, quantity, stock } = productToAdd;
    
        if (!isInCart(id)) {
            if (quantity <= stock) {
                setCart([...cart, productToAdd]);
            } else {
                console.error(`No se puede agregar ${quantity} unidades de ${id}. Stock insuficiente.`);
            }
        } else {
            const updatedCart = cart.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: Math.min(item.quantity + quantity, stock),
                      }
                    : item
            );
            setCart(updatedCart);
        }
    };
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const removeItem = (id) => {
        const cartUpdated = cart.filter((prod) => prod.id !== id);
        setCart(cartUpdated);
    };

    const getTotalQuantity = () => {
        let totalQuantity = 0;

        cart.forEach((prod) => {
            totalQuantity += prod.quantity;
        });

        return totalQuantity;
    };

    const totalQuantity = getTotalQuantity();

    const clearCart = () => {
        setCart([]);
    };

    const getTotal = () => {
        let total = 0;

        cart.forEach((prod) => {
            total += prod.price * prod.quantity;
        });

        return total;
    };

    const total = getTotal();

    return (
        <CartContext.Provider
            value={{ cart, addItem, clearCart, removeItem, isInCart, totalQuantity, total }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
