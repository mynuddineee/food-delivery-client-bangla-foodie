import { useState, useEffect } from 'react';
import { getStoredCart } from '../../utlities/cartData';

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getStoredCart();

        const keys = Object.keys(savedCart);

        fetch('https://guarded-plateau-24650.herokuapp.com/foods/byKeys', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(keys)
        })

        .then(res => res.json())
        .then(foods =>{
            console.log(foods);
             if (foods.length) {
            
            const storedCart = [];
            for (const key in savedCart) {
                const addedFood= foods.find(foodie=> foodie.key === key);
                if (addedFood) {
                    // set quantity
                    const quantity = savedCart[key];
                    addedFood.quantity = quantity;
                    storedCart.push(addedFood);
                }
            }
            setCart(storedCart);
        }
        })
       

    }, []);

    return [cart, setCart];
}

export default useCart;