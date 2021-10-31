import React from 'react';
import Delivery from '../Delivery/Delivery';

import Foods from '../Foods/Foods';
import Options from '../Options/Options';
import Banner from './Banner/Banner';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Foods></Foods>
            <Options></Options>
            <Delivery></Delivery>
            
        </div>
    );
};

export default Home;