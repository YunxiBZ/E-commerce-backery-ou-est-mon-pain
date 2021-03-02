// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Header from 'src/containers/Header';
import ContactForm from 'src/components/ContactForm';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <ContactForm />
  </div>
);

// == Export
export default App;
