// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
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
import AdminTest from 'src/components/AdminTest';
import Cart from 'src/containers/Cart';

// ==Import FontAwesomeIcon for use Icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faTrashAlt,
  faAngleRight,
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faUser,
  faSignOutAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  faTrashAlt,
  faAngleRight,
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faUser,
  faSignOutAlt,
  faShoppingBasket,
);

// == Composant
const App = ({ fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);

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
        <Route
          exact
          path="/product/:id"
          component={SingleProduct}
        />
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
          <AdminTest />
        </Route>
        <Route exatct path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

// == Export
export default App;
