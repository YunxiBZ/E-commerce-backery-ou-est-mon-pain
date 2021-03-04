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
import Products from 'src/containers/Products';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Products />

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
