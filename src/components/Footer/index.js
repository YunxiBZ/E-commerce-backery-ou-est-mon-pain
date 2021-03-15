import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Footer = ({ onClickToggleFooterList, toggleFooterClassname }) => (
  <div className="footer">
    <div className="footer__top">
      <FontAwesomeIcon
        icon={faArrowRight}
        className={
          toggleFooterClassname
            ? 'footer__icon  footer__icon--open'
            : 'footer__icon'
        }
        onClick={onClickToggleFooterList}
      />
      <p className="footer__content">©Copyright</p>
    </div>

    <nav
      className={
        toggleFooterClassname
          ? 'footer__list'
          : 'footer__list footer__list--notActive'
      }
    >
      <Link to="/RGPD" className="footer__links">
        RGPD
      </Link>
      <Link to="/CGV" className="footer__links">
        CGV
      </Link>
      <Link to="/Formulaire-de-contact" className="footer__links">
        Formulaire de contact
      </Link>
      <Link to="/Mentions-legales" className="footer__links">
        Mentions légales
      </Link>
      <Link to="/dev" className="footer__links">
        Groupe de dev
      </Link>
    </nav>
  </div>
);

Footer.propTypes = {
  toggleFooterClassname: PropTypes.bool.isRequired,
  onClickToggleFooterList: PropTypes.func.isRequired,
};

export default Footer;
