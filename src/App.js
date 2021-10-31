import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Footer from './Components/Footer/Footer';
import Foods from './Components/Foods/Foods';
import AuthProvider from './Components/Context/AuthProvider';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Food from './Components/Food/Food';
import FoodDetails from './Components/FoodDetails/FoodDetails';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
            <Header></Header>
                <Switch>
                  <Route exact path = "/">
                    <Home></Home>
                  </Route>
                  <Route path = "/home">
                    <Home></Home>
                  </Route>
                  <Route path = "/signIn">
                    <Login></Login>
                  </Route>
                  <Route path = "/signUp">
                    <Register></Register>
                  </Route>
                  <PrivateRoute path = "/foods">
                    <Foods></Foods>
                  </PrivateRoute>
                    
                  
                  <Route exact path = "/food">
                    <Food></Food>
                  </Route>
                  <PrivateRoute path = "/foodDetails/:foodId">
                    <FoodDetails></FoodDetails>
                  </PrivateRoute>
                  <Route path = "*">
                    <PageNotFound></PageNotFound>
                  </Route>
                </Switch> 
            
            <Footer></Footer>
        </Router>
      
      </AuthProvider>
    </div>
  );
}

export default App;
