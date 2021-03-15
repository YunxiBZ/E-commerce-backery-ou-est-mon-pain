// == Import npm
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

// == Import
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import './styles.scss';
import Header from 'src/containers/Header';
import Footer from 'src/containers/Footer';
import Categories from 'src/containers/Categories';
import History from 'src/containers/History';
import OpeningHours from 'src/containers/OpeningHours';
import Slogan from 'src/containers/Slogan';
import Contact from 'src/containers/Contact';
import Products from 'src/containers/Products';
import LoginForm from 'src/containers/LoginForm';
import SignupForm from 'src/containers/SignupForm';
import ContactForm from 'src/components/ContactForm';
import SingleProduct from 'src/containers/SingleProduct';
import Account from 'src/containers/Account';
import Admin from 'src/containers/Admin';
import Cart from 'src/containers/Cart';
<<<<<<< HEAD
=======
=======
>>>>>>> RGPD
=======
>>>>>>> CGV
import "./styles.scss";
import Header from "src/containers/Header";
import Footer from "src/containers/Footer";
import Categories from "src/containers/Categories";
import History from "src/containers/History";
import OpeningHours from "src/containers/OpeningHours";
import Slogan from "src/containers/Slogan";
import Contact from "src/containers/Contact";
import Products from "src/containers/Products";
import LoginForm from "src/containers/LoginForm";
import SignupForm from "src/containers/SignupForm";
import ContactForm from "src/components/ContactForm";
import SingleProduct from "src/containers/SingleProduct";
<<<<<<< HEAD
<<<<<<< HEAD
import PageNotFound from "src/components/PageNotFound";
>>>>>>> custom-404
=======
import Account from "src/containers/Account";
import Admin from "src/containers/Admin";
import Cart from "src/containers/Cart";
import RGPD from "src/components/RGPD";
>>>>>>> RGPD
=======
import Account from "src/containers/Account";
import Admin from "src/containers/Admin";
import Cart from "src/containers/Cart";
>>>>>>> CGV
=======
import CategoryPage from 'src/containers/CategoryPage';
>>>>>>> eee1b21266bd8627998c8a999338ffe84cb053aa

// ==Import FontAwesomeIcon for use Icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faTrashAlt,
  faAngleRight,
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faUser,
  faSignOutAlt,
  faShoppingBasket,
<<<<<<< HEAD
  faUserCog,
  faUserEdit,
<<<<<<< HEAD
<<<<<<< HEAD
} from '@fortawesome/free-solid-svg-icons';
=======
} from "@fortawesome/free-solid-svg-icons";
>>>>>>> custom-404
=======
} from "@fortawesome/free-solid-svg-icons";
>>>>>>> RGPD
=======
} from "@fortawesome/free-solid-svg-icons";
import CGV from "../CGV";
>>>>>>> CGV

library.add(
  fab,
  faTrashAlt,
  faAngleRight,
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faUser,
  faSignOutAlt,
<<<<<<< HEAD
  faShoppingBasket,
  faUserCog,
<<<<<<< HEAD
<<<<<<< HEAD
  faUserEdit,
=======
  faShoppingBasket
>>>>>>> custom-404
=======
  faUserEdit
>>>>>>> RGPD
=======
  faUserEdit
>>>>>>> CGV
);

// == Composant
const App = ({ fetchData, loginSuccess, fetchOrderList }) => {
  useEffect(() => {
    fetchData();
  }, []);

  const string = localStorage.getItem("userData");
  if (string) {
    useEffect(() => {
      // Fetch data from localStorage
      const userData = JSON.parse(string);
      loginSuccess(userData);
      fetchOrderList(userData.token);
    });
  }
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/signup">
          <SignupForm />
        </Route>
        <Route exact path="/">
          <Slogan />
          <History />
          <OpeningHours />
          <Contact />
          <Categories />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/product/:id" component={SingleProduct} />
        <Route exact path="/infos-pratiques">
          <OpeningHours />
          <Contact />
        </Route>
        <Route exact path="/formulaire-de-contact">
          <ContactForm />
        </Route>
        <Route exact path="/account">
          <Account />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <Route component={PageNotFound} />
=======
        <Route exact path="/RGPD">
          <RGPD />
        </Route>
>>>>>>> RGPD
=======
        <Route exact path="/CGV">
          <CGV />
        </Route>
>>>>>>> CGV
=======
        <Route exact component={CategoryPage} path="/category/:category" />
>>>>>>> eee1b21266bd8627998c8a999338ffe84cb053aa
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  fetchData: PropTypes.func.isRequired,
  loginSuccess: PropTypes.func.isRequired,
  fetchOrderList: PropTypes.func.isRequired,
};

// == Export
export default App;
