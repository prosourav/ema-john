import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Nomatch from './components/Nomatch/Nomatch';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';


export const UserContext = createContext();

function App(props) {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <h3>loggedIn User email: {loggedInUser.email}</h3>
    <Header></Header>
    <Router>
      <Switch>

       <Route path='/shop'>
       <Shop></Shop>
       </Route>

       <Route path='/review'>
        <Review></Review>
       </Route>

       <Route path='/manage'>
        <Inventory></Inventory>
       </Route>

       <Route path='/shipment'>
        <Shipment></Shipment>
       </Route>

       <Route path='/login'>
       <Login></Login>
      </Route>

       <Route exact path='/'>
         <Shop></Shop>
       </Route>

       <Route path='/product/:prdKey'>
         <ProductDetail></ProductDetail>
       </Route>

       <Route path='*'>
         <Nomatch></Nomatch>
       </Route>

      </Switch>
    </Router>
 

    </UserContext.Provider>
  );
}

export default App;
