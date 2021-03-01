// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
const App = () => {
  const test = process.env.REACT_APP_BASE_URL;
  console.log(test);
  const truc = process.env.REACT_TEST;
  console.log(truc);
  return (
    <div className="app">
      <h1>Composant : App</h1>
    </div>
  );
};

// == Export
export default App;
