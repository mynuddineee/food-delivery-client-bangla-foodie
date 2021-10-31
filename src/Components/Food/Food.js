import React from 'react';
import { NavLink } from 'react-router-dom';

const Food = ({food}) => {

    const{name, img, price, _id,restaurant} = food;

    return (
        <div>
            <div className="container-fluid">
                <div className="row g-4">
                        <div className="col my-4">
                            <div className="card">
                            <img src={img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Food Name: {name}</h5>
                                <h6 className="card-text">Price: {price}</h6>
                                <h6 className="card-text">Restaurant Name: {restaurant}</h6>
                                
                                <br/>
                                <NavLink to={`/foodDetails/${_id}`}

                                
                                >
                                    <button className="btn btn-primary "type="">Place Order</button>
                                </NavLink>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Food;