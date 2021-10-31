import React from 'react';

import banner7 from '../../images/banner/delivery1.jpg';
import banner8 from '../../images/banner/delivery2.jpg';
import banner9 from '../../images/banner/delivery3.jpg';
import './Delivery.css';

const Delivery = () => {
    return (
        <div className="container-fluid mb-4">
            <div>
                 <h2>Delivery Fee</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                        <img src={banner7} className="card-img-top img-card" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Delivery Within 1 KM</h5>
                            <p className="card-text">Delivery Fee: 0 Taka</p>
                        </div>
                        <button className="btn btn-primary "type="">Select</button>
                    </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src={banner8} className="card-img-top img-card" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Delivery Within 3 KM</h5>
                            <p className="card-text">Delivery Fee: 30 Taka</p>
                        </div>
                        <button className="btn btn-primary "type="">Select</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src={banner9} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Delivery Within 5 KM</h5>
                            <p className="card-text">Delivery Fee: 60 Taka</p>
                        </div>
                        <button className="btn btn-primary "type="">Select</button>
                        </div>
                    </div>
                    
                </div>
        </div>
    );
};

export default Delivery;