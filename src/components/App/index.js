// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Header from 'src/containers/Header';
import Footer from 'src/containers/Footer';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Footer className="footer" />
  </div>
);

// == Export
export default App;
