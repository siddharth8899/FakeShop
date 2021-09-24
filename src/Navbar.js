import { lazy, Suspense } from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cart from "./Cart";
import Loader from './Loader';
import Product from "./Product";
import './navbar.css'

//import Products from './Products'
const Products = lazy(() => import("./Products"))

const Navbar = () => {
  return (
    <>

      <div className="navbar">
        <Link to='/' className="home">HOME </Link>
        <Link to='/cart' className="cart"> CART </Link>
      </div>

      <Switch>
        <Route exact path="/">
          <Suspense fallback={<Loader />}>
            <Products />
          </Suspense>
          {/* <Products /> */}
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </>
  )
}

export default Navbar
