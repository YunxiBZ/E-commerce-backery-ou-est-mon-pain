// == Import npm
import React from 'react';

// == Import
import Footer from 'src/components/Footer';
import './styles.scss';
import Header from 'src/containers/Header';
import Categories from 'src/components/Categories';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Categories />
    <Footer />
  </div>
);

// == Export
export default App;
