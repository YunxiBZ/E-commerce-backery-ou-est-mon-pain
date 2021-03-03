// == Import npm
import React from 'react';

// == Import
import Footer from 'src/containers/Footer';
import './styles.scss';
import Header from 'src/containers/Header';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Footer />
  </div>
);

// == Export
export default App;
