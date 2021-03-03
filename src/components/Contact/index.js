import React from 'react';
import maps from 'src/assets/image-maps.PNG';
import './styles.scss';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';

const Contact = ({ adress, phoneNumber }) => {
  const ok = 'ok';

  return (
    <div className="contact">
      <div className="contact__section">
        <h3 className="contact__title">Nous Contacter</h3>
        <section className="contact__infos">
          <p className="contact__info">{adress}</p>
          <p className="contact__info">{phoneNumber}</p>
        </section>
        <section className="contact__links">
          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="facebook page"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="contact__icon"
            />
          </a>
          <a
            href="http://googlemaps.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="facebook page"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="contact__icon"
            />
          </a>
          <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="facebook page"
          >
            <FontAwesomeIcon
              icon={faMapMarked}
              className="contact__icon"
            />
          </a>
        </section>
      </div>
      <div className="contact__section">
        <a href="http://googlemaps.com" target="_blank" rel="noopener noreferrer">
          <img src={maps} alt="preview de maps" className="contact__image" />
        </a>
      </div>
    </div>
  );
};

Contact.propTypes = {
  adress: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
};

export default Contact;
