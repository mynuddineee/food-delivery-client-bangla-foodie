import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddFood.css';

const AddFood = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        
        console.log(data);
        axios.post('https://guarded-plateau-24650.herokuapp.com/foods', data)
        .then(res => {

            if(res.data.insertedId){

                alert('inserted data successfully');
                reset();
            }
        })
    
    }
    return (
        <div>
            <h2>Add A Food</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input  {...register("img")} placeholder="Image Url" className="place-order"/><br/>
              <input  {...register("name")} placeholder="Food Name" className="place-order"/><br/>
              <input type="number" {...register("price")} placeholder="Price" className="place-order"/><br/>
              <input  {...register("restaurant")} placeholder="Restaurant Name" className="place-order"/><br/>
              <input  {...register("address")} placeholder="Restaurant Address" className="place-order"/><br/>
              <input type="number" {...register("quantity")} placeholder="Food Quantity" className="place-order"/><br/>
              
              
             
              <input type="submit" value="Add Food" className="place-button bg-primary " />
          </form>
        </div>
    );
};

export default AddFood;