import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Component/Header';
import Banner from './Component/Banner';
import Main from './Component/Main';
import Breakfast from './Component/Breakfast';
import Lunch from './Component/Lunch';
import Dinner from './Component/Dinner';
import Blog from './Component/Blog';
import Footer from './Component/Footer';
import Copyright from './Component/Copyright';
import CartItem from './Component/CartItem';
import Cart from './Component/Cart';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import CartContextProvider from './Component/CartContext';
function App() {
  

  return (
    <CartContextProvider>
    <Router>
      <Header></Header>
      <Banner></Banner>
      <Main></Main>
        <Switch>
          
          <Route path="/breakfast">
            <Breakfast></Breakfast>
          </Route>
          <Route path="/lunch">
            <Lunch></Lunch>
          </Route>
          <Route path="/" exact>
            <Lunch></Lunch>
          </Route>
          <Route path="/dinner">
            <Dinner></Dinner>
          </Route>
          
          <Route path="/cartItem/:id">
            <CartItem></CartItem>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          
        </Switch>
        <Blog></Blog>
        <Footer></Footer>
        <Copyright></Copyright>
    </Router>
    </CartContextProvider>
  );
}

export default App;
