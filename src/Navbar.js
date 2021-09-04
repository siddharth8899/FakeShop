import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Cart from "./Cart";
import Products from './Products'

const Navbar = () => {
    return (
        <>
        <Link to = '/' >HOME </Link>
        <Link to = '/cart' > CART </Link>

        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
        </>
    )
}

export default Navbar
