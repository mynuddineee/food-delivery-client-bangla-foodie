import React, { useEffect, useState } from 'react';


import './MyOrders.css';


const MyOrders = () => {
    
    const [foodies, setFoodies] =useState([]);
    

    useEffect( () =>{

        fetch('https://guarded-plateau-24650.herokuapp.com/foods')
        .then(res => res.json())
        .then(data => setFoodies(data))

    }, []);

    

    const handleDelete = id =>{

        const url = `https://guarded-plateau-24650.herokuapp.com/${id}`;
        fetch(url, {

            method: 'DELETE'
        })

        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                alert('Deleted');
                const remaining = foodies.filter(food => food._id !== id);
                console.log(remaining);
                foodies(remaining);
            
            }
            
        })

    }



    

    return (
        <div className="product">
            
            
                <div>

                <h2>Manage Orders</h2>
            {
                foodies.map(food => <div key={food._id}>

                    <img className="order-img" src={food.img} alt=""/>
                    <h3>{food.name}</h3>
                    <h3>Price: {food.price} </h3>
                    <button onClick= { () => handleDelete(food._id)}>Delete</button><br/><br/>


                </div>)
            }


                </div>
            
        </div>
    );
};

export default MyOrders ;