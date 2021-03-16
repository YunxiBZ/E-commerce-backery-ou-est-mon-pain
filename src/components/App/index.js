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
import ContactForm from 'src/containers/ContactForm';
import SingleProduct from 'src/containers/SingleProduct';
import Account from 'src/containers/Account';
import Admin from 'src/containers/Admin';
import Cart from 'src/containers/Cart';
import RGPD from 'src/components/RGPD';
import CategoryPage from 'src/containers/CategoryPage';
import PageNotFound from 'src/components/PageNotFound';
import CGV from 'src/components/CGV';
import LegalMentions from 'src/components/LegalMentions';
import Dev from 'src/components/Dev';
import useScrollToTop from 'src/hooks/ScrollToTop';

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
  faUserCog,
  faUserEdit,
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
  faUserCog,
  faUserEdit,
  faShoppingBasket,
  faUserEdit,
  faUserEdit,
);

// == Composant
const App = ({ fetchData, loginSuccess, fetchOrderList }) => {
  useEffect(() => {
    fetchData();
  }, []);
  useScrollToTop();

  const string = localStorage.getItem('userData');
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
          <Categories />
          <OpeningHours />
          <Contact />
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
        <Route exact path="/rgpd">
          <RGPD />
        </Route>
        <Route exact path="/cgv">
          <CGV />
        </Route>
        <Route exact path="/dev">
          <Dev />
        </Route>
        <Route exact path="/Mentions-legales">
          <LegalMentions />
        </Route>
        <Route exact component={CategoryPage} path="/category/:category" />
        <Route component={PageNotFound} />
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
