import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';



import './Header.css';


const Header = () => {

    const { user, logOut } = useAuth();
    const history = useHistory();
    const handleMyOrder = () => {

        
            history.push('/myOrders');
        
    }
    const handleAddFood = () => {

        
        history.push('/addFood');
    
}
const manageOrder = () => {

        
    history.push('/manageOrders');

}
    return (
        
                <>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            
                            <Navbar.Brand href="/home">Bangla Foodie</Navbar.Brand>
                                <Nav className="me-auto">
                                <Nav.Link as= {HashLink} to = "/home#home">Home</Nav.Link>
                            
                            <Nav.Link as={HashLink} to ="/signUp">SignUp</Nav.Link>
                            
                            {
                                user.email?
                                
                                <button onClick={logOut} className="btn btn-primary button-link"type="">Sign Out</button>
                                
                                :
                                <Nav.Link as={HashLink} to ="/signIn">SignIn</Nav.Link>
                            }
                             {
                                user.email?
                                <button onClick={handleMyOrder} type="" className="btn btn-primary button-link ">My Orders</button>
                                
                                :
                                <Nav></Nav>
                            }
                             {
                                user.email?
                                <button onClick={manageOrder} type="" className="btn btn-primary button-link ">Manage All Orders</button>
                                
                                :
                                <Nav></Nav>
                            }
                             {
                                user.email?
                                <button onClick={handleAddFood}  type="" className="btn btn-primary button-link ">Add Food</button>
                                
                                :
                                <Nav></Nav>
                            }
                            <Nav.Link as={HashLink} to="/contactUs">Contact Us</Nav.Link>

                            { user.email &&
                                <span style={{color: 'white', textAlign: 'left', paddingLeft:'120px'}}>Hello: {user.displayName} <br/> email: {user.email}</span>
                            }
                            
                            </Nav>
                        </Container>
                    </Navbar>

                    
                </>
        
    );
};

export default Header;