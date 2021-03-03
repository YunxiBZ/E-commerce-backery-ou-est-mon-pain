// == Import npm
import React from 'react';

// == Import
import Footer from 'src/components/Footer';
import './styles.scss';
import Header from 'src/containers/Header';
import Categories from 'src/components/Categories';
import History from 'src/containers/History';
import OpeningHours from 'src/containers/OpeningHours';
import Slogan from 'src/containers/Slogan';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Slogan />
    <History />
    <OpeningHours />
    <Categories />
    <Footer />
  </div>
);

// == Export
export default App;
