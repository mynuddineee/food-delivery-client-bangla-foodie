import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Delivery from '../Delivery/Delivery';

import Foods from '../Foods/Foods';
import Options from '../Options/Options';
import Banner from './Banner/Banner';
import './Home.css';

const Home = () => {
    const{isLoading} = useAuth();
    if(isLoading) {

        return <Spinner animation="border" variant="primary" />
    }
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