import React from 'react';

import useCart from '../../Hooks/useCart';
import { removeFromDb } from '../../utlities/cartData';
import MyOrders from '../MyOrders/MyOrders';

const ReviewItem = () => {

    const [cart, setCart] = useCart();
    

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }
    return (
        <div className="">
            <div className="">
                {
                    cart.map(product => <MyOrders
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></MyOrders>)
                }
            </div>
            
        </div>
    );
};

export default ReviewItem;