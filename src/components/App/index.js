// == Import npm
import React from 'react';

// == Import
import Footer from 'src/components/Footer';
import './styles.scss';
import Header from 'src/containers/Header';
import Categories from 'src/components/Categories';
import History from 'src/containers/History';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <History />
    <Categories />
    <Footer />
  </div>
);

// == Export
export default App;
