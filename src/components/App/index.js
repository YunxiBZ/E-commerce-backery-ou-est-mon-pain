// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Header from 'src/containers/Header';
import Footer from 'src/containers/Footer';
import Categories from 'src/components/Categories';
import History from 'src/containers/History';
import OpeningHours from 'src/containers/OpeningHours';
import Slogan from 'src/containers/Slogan';
import Contact from 'src/containers/Contact';
import Product from 'src/containers/Product';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Product />
    <Product />
    <Product />

    <Slogan />
    <History />
    <OpeningHours />
    <Contact />
    <Categories />
    <Footer />
  </div>
);

// == Export
export default App;
