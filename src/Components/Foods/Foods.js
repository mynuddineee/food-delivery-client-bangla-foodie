import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Food from '../Food/Food';
import './Foods.css';

const Foods = () => {
    const[foodies, setFoodies] = useState([]);

    useEffect( () => {

        fetch('https://guarded-plateau-24650.herokuapp.com/foods')
        .then(res => res.json())
        .then(data => setFoodies(data));
    },[])
    return (
        <div className="mt-4 foods-container">
            <h2>Choose Your Best Foods</h2>

           <div className="container">
                {
                        foodies.map((food) => <Food
                        
                        key ={food._id}
                        food={food}
                        >


                        </Food>)
                    }
           </div>
        </div>
    );
};

export default Foods;