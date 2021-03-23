import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Footer = ({ onClickToggleFooterList, toggleFooterClassname }) => {
  const footerRef = useRef(null);
  useEffect(() => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  const handleClickFooter = () => {
    onClickToggleFooterList();
  };
  return (
    <div className="footer">
      <div className="footer__top">
        <FontAwesomeIcon
          icon={faArrowRight}
          className={
          toggleFooterClassname
            ? 'footer__icon  footer__icon--open'
            : 'footer__icon'
        }
          onClick={handleClickFooter}
        />
        <p className="footer__content" style={{ textAlign: 'center' }}>©OU EST MON PAIN Tous droits réservés 2021</p>
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
      <div ref={footerRef} />
    </div>
  );
};
Footer.propTypes = {
  toggleFooterClassname: PropTypes.bool.isRequired,
  onClickToggleFooterList: PropTypes.func.isRequired,
};

export default Footer;
