
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


import './FoodDetails.css';

import axios from 'axios';
import { getStoredCart } from '../../utlities/cartData';

const FoodDetails = () => {

  
    let { foodId } = useParams();
    const [foodDetails, setFoodDetails] = useState([]);
    const [singleFoods, setSingleFoods] = useState({});
    useEffect(() =>{

        fetch("https://guarded-plateau-24650.herokuapp.com/foods")
        
        .then((res) => res.json())
        .then((data) => setFoodDetails(data));
       

    },[]);

    useEffect(() =>{

        const exactFood = foodDetails.find((foods) => foods._id === foodId);

        console.log(exactFood );
        setSingleFoods(exactFood );

    },[foodDetails]);


    const { register, handleSubmit, reset, } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {

        const savedCart = getStoredCart();
       data.order = savedCart;
       axios.post('https://guarded-plateau-24650.herokuapp.com/orders', data)
        .then(res => {

            if(res.data.insertedId){

                alert('inserted data successfully');
                reset();
            }
        })
    };

    return (
        <div className="my-4 row ">
          <div className="col-9 ">
                
                  <h3 className="text-primary">Product Details</h3>
                  <h3 className="text-primary pb-4">Food Name: {singleFoods?.name}</h3>

            <Container>
              <Row>
                <Col md={4}>
                  <Card>
                    <Card.Img variant="top" src={singleFoods?.img} />
                  </Card>
                </Col>
                <Col md={5}>
                  <Card style={{ width: "44rem", textAlign: "left"  }}>
                    <Card.Body>
                      <Card.Title><b style={{ fontSize: "16px"}}>Food Name: {singleFoods?.name}</b></Card.Title>
                      <Card.Text>
                          <b style={{ fontSize: "16px"}}> Quantity :{singleFoods?.quantity}</b> <br/>
                          <b style={{ fontSize: "16px"}}> Price : {singleFoods?.price} Taka</b><br/>
                          <b style={{ fontSize: "16px"}}> Restaurant Name : {singleFoods?.restaurant} </b><br/>
                          <b style={{ fontSize: "16px"}}> Restaurant Address : {singleFoods?.address} </b><br/>
                          
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              
            </Container>
          </div>
          <div className="col-3 place-form">
            <h3>Please Place an Order</h3>
            <h3>Foods Ordered: </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input defaultValue={user.displayName} {...register("name")} placeholder="Name" className="place-orders"/><br/>
              <input defaultValue={user.email} {...register("email")} placeholder="Email" className="place-orders"/><br/>
              <textarea {...register("address")} rows="4" cols="22" placeholder="Address" className="place-orders" /><br/>
              <input type="number" {...register("contactNumber")} placeholder="Contact Number" className="place-orders"/><br/>
              
             
              <input type="submit" value="Place Order" className="place-button bg-primary " />
          </form>

          </div>
        </div>
    );
};

export default FoodDetails;