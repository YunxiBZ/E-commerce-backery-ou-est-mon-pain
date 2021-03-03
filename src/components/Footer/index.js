import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <div className="footer">
    <div className="footer__top">
      <FontAwesomeIcon icon={faArrowRight} />
      <p className="footer__content">Copyright</p>
    </div>

    <nav className="footer__list">
      <Link
        to="/RGPD"
        className="footer__links"
      >
        RGPD
      </Link>
      <Link
        to="/CGV"
        className="footer__links"
      >
        CGV
      </Link>
      <Link
        to="/Formulaire-de-contact"
        className="footer__links"
      >
        Formulaire de contact
      </Link>
      <Link
        to="/Mentions-legals"
        className="footer__links"
      >
        Mentions légals
      </Link>
      <Link
        to="/Groupe-de-dev"
        className="footer__links"
      >
        Groupe de dev
      </Link>
    </nav>

  </div>
);

export default Footer;
