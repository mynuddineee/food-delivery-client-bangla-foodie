import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';



import './Header.css';


const Header = () => {

    const { user, logOut } = useAuth();
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
                                <button onClick={logOut} type="">Sign Out</button>
                                :
                                <Nav.Link as={HashLink} to ="/signIn">SignIn</Nav.Link>
                            }
                            <Nav.Link as={HashLink} to="/contactUs">Contact Us</Nav.Link>

                            { user.email &&
                                <span style={{color: 'white'}}>Hello: {user.displayName} email:{user.email}</span>
                            }
                            
                            </Nav>
                        </Container>
                    </Navbar>

                    
                </>
        
    );
};

export default Header;