import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore';
import { db } from "../../service/firebase/firebaseConfig";

const Checkout = () => {
    const [orderId, setOrderId] = useState('');
    const [loading, setLoading] = useState(false);
    const { cart, total, clearCart } = useCart();

    const createOrder = async (userData) => {
        try {
            setLoading(true);
    
            const objOrder = {
                buyer: {
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone,
                },
                items: cart,
                total,
            };
    
            const batch = writeBatch(db);
            const outOfStock = [];
    
            const ids = cart.map((prod) => prod.id);
    
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids));
    
            const { docs } = await getDocs(productsRef);
    
            docs.forEach(async (documentSnapshot) => {
                const fields = documentSnapshot.data();
                const stockDb = fields.stock;
    
                const productAddedToCart = cart.find((prod) => prod.id === documentSnapshot.id);
                const prodQuantity = productAddedToCart.quantity;
    
                if (stockDb >= prodQuantity) {
                    batch.update(documentSnapshot.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: documentSnapshot.id, ...fields });
                }
            });
    
            if (outOfStock.length === 0) {
                const ordersRef = collection(db, 'orders');
    
                const { id } = await addDoc(ordersRef, objOrder);
                batch.commit();
                clearCart();
                setOrderId(id);
                console.log(`El id de su orden es ${id}`);
            } else {
                console.log('No hay stock de algun producto');
            }
        } catch (error) {
            console.error('Hubo un error generando la orden');
        } finally {
            setLoading(false);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const userData = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
        };

        await createOrder(userData);
    };

    if (loading) {
        return <h1>Se está generando su orden...</h1>;
    }

    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>;
    }

    return (
        <>
            <h1>Checkout</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Nombre:
                    <input type="text" name="name" required />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <br />
                <label>
                    Teléfono:
                    <input type="tel" name="phone" required />
                </label>
                <br />
                <button type="submit">Crear orden</button>
            </form>
        </>
    );
};

export default Checkout;