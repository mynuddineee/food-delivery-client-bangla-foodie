
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from 'react-router-dom';

import './FoodDetails.css';

const FoodDetails = () => {


    let { foodId } = useParams();
    const [foodDetails, setFoodDetails] = useState([]);
    const [singleFoods, setSingleFoods] = useState({});
    useEffect(() =>{

        fetch("http://localhost:5000/foods")
        
        .then((res) => res.json())
        .then((data) => setFoodDetails(data));
       

    },[]);

    useEffect(() =>{

        const exactFood = foodDetails.find((foods) => foods._id === foodId);

        console.log(exactFood );
        setSingleFoods(exactFood );

    },[foodDetails]);

    return (
        <div className="my-4 ">
            <h3 className="text-primary">Food Id:{foodId}</h3>
            <h3 className="text-primary pb-4">Food Name: {singleFoods?.name}</h3>
      <Container>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={singleFoods?.img} />
            </Card>
          </Col>
          <Col md={5}>
            <Card style={{ width: "50rem" }}>
              <Card.Body>
                <Card.Title><b style={{ fontSize: "20px"}}>Food Name: {singleFoods?.name}</b></Card.Title>
                <Card.Text>
                     <b style={{ fontSize: "20px"}}> Price : {singleFoods?.price}</b><br/>
                     
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
        </div>
    );
};

export default FoodDetails;