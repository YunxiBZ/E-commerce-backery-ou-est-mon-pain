// == Import npm
import React, { useEffect } from 'react';
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
import SignupForm from 'src/components/SignupForm';

// == Composant
const App = ({ fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />
      <SignupForm />
      <Products />
      <Slogan />
      <History />
      <OpeningHours />
      <Contact />
      <Categories />
      <Footer />
    </div>
  );
};

App.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

// == Export
export default App;
