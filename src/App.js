import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Nomatch from './components/Nomatch/Nomatch';
import ProductDetail from './components/ProductDetail/ProductDetail';
function App() {
  return (
    <div>
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
 

    </div>
  );
}

export default App;
