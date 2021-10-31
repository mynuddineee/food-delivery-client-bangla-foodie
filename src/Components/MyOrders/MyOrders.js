import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';


const MyOrders = () => {
    let { orderId } = useParams();
    const [orderDetails, setOrderDetails] = useState({});
  
    useEffect(() =>{

        fetch(`https://guarded-plateau-24650.herokuapp.com/foods/${orderId}`)
        
        .then((res) => res.json())
        .then((data) => setOrderDetails(data));
       

    },[]);

    

    return (
        <div className="product">
            <div>
            <div className="container-fluid">
                <div className="row g-4">
                        <div className="col my-4">
                            <div className="card">
                            <img src={orderDetails?.img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Food Name: {orderDetails?.name}</h5>
                                <h6 className="card-text">Price: {orderDetails?.price}</h6>
                                <h6 className="card-text">Quantity: {orderDetails?.quantity}</h6>
                                <h6 className="card-text">Restaurant Name: {orderDetails?.restaurant}</h6>
                                
                                <br/>
                               
                                <button className="btn-regular">Remove</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default MyOrders ;