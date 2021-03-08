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
import SingleProduct from 'src/components/SingleProduct';

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
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  faTrashAlt,
  faAngleRight,
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faUser,
  faSignOutAlt,
  faShoppingCart,
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
        <Route exact path="/infos-pratiques">
          <OpeningHours />
          <Contact />
        </Route>
        <Route exact path="/formulaire-de-contact">
          <ContactForm />
        </Route>
        <Route exatct path="/account">
          <SingleProduct />
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
