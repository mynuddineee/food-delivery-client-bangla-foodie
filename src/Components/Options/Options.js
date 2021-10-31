import React from 'react';
import './Options.css';
import banner4 from '../../images/banner/pharmacy.jpg';
import banner5 from '../../images/banner/groceries.jpg';
import banner6 from '../../images/banner/restaurants.jpg';

const Options = () => {
    return (
        <div className="container-fluid mb-4">
            <div>
                 <h2>Select Your Needs</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                        <img src={banner4} className="card-img-top img-card" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Pharmacy</h5>
                            <p className="card-text">You can order your medicine at any time 24/7.</p>
                        </div>
                        <button className="btn btn-primary "type="">Select</button>
                    </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src={banner5} className="card-img-top img-card" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Groceries</h5>
                            <p className="card-text">You can order your daily needs with discounted price.</p>
                        </div>
                        <button className="btn btn-primary "type="">Select</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src={banner6} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Restaurants</h5>
                            <p className="card-text">You can order your favorite foods with discounted price.</p>
                        </div>
                        <button className="btn btn-primary "type="">Select</button>
                        </div>
                    </div>
                    
                </div>
        </div>
    );
};

export default Options;