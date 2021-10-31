import React, { useEffect, useState } from 'react';

const ManageOrders = () => {

    const [foods, setFoods] =useState([]);

    useEffect( () =>{

        fetch('http://localhost:5000/orders.order')
        .then(res => res.json())
        .then(data => setFoods(data))

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
                const remaining = foods.filter(food => food._id !== id);
            setFoods(remaining);
            
            }
            
        })



    }
    return (
        <div>
            <h2>Manage Orders</h2>
            {
                foods.map(food => <div key={food._id}>

                    <h3>{food.name}</h3>
                    <button onClick= { () => handleDelete(food._id)}>Delete</button>


                </div>)
            }
        </div>
    );
};

export default ManageOrders;