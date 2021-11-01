import React, { useEffect, useState } from 'react';

const ManageOrders = () => {

    const [orders, setOrders] =useState([]);

    useEffect( () =>{

        fetch('https://guarded-plateau-24650.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))

    }, [])

    const handleDelete = id =>{

        const url = `https://guarded-plateau-24650.herokuapp.com/orders/${id}`;
        fetch(url, {

            method: 'DELETE'
        })

        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                alert('Deleted');
                const remaining = orders.filter(order => order._id !== id);
            setOrders(remaining);
            
            }
            
        })



    }
    return (
        <div>
            <h2>Manage All Orders</h2>
            {
                orders?.map(order => (<div key={order._id}>

                    <h3>{order.name}</h3>
                    <h3>{order.email}</h3>
                    <button onClick= { () => handleDelete(order._id)}>Delete</button>


                </div>))
            }
        </div>
    );
};

export default ManageOrders;