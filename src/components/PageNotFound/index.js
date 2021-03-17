import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function PageNotFound() {
  return (
    <div className="PageNotFound">
      <div className="PageNotFound__text-top">
        <p className="PageNotFound__text-oups"> Oups !</p>
        <p className="PageNotFound__text"> Vous avez l'air perdu...</p>
        <p className="PageNotFound__text">Souhaiteriez-vous retourner vers</p>
        <p className="PageNotFound__text">votre boulangerie préférée ?</p>
      </div>
      <Link to="/" className="PageNotFound__btn">Accueil</Link>

    </div>
  );
}

export default PageNotFound;
