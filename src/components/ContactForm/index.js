import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import ScrollToTop from 'src/hooks/ScrollToTop';
// Il faudra importer le component Field pour générer les inputs du form
import Button from 'src/components/Button';
import ContactField from './ContactField';

const ContactForm = ({
  submitForm,
  email,
  firstName,
  lastName,
  phoneNumber,
  message,
  changeField,
  success,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm();
    // ! A FAIRE Envoi du form en méthode post pour que le back envoie le mail
  };
  ScrollToTop();

  return (
    <form autoComplete="off" className="contactForm" onSubmit={handleSubmit}>
      <div className={success ? 'contactForm__success' : 'contactForm__success--modifier'}>
        Formulaire envoyé
      </div>
      <ContactField
        name="last_name"
        placeholder="Nom"
        className="field--modifier"
        value={lastName}
        changeField={changeField}
      />
      <ContactField
        name="first_name"
        placeholder="Prénom"
        className="field--modifier"
        value={firstName}
        changeField={changeField}
      />
      <ContactField
        name="email"
        placeholder="Email"
        value={email}
        changeField={changeField}
      />
      <ContactField
        name="phone_number"
        placeholder="Téléphone"
        className="field--modifier"
        value={phoneNumber}
        changeField={changeField}
      />
      <p className="field__description-label">Message</p>
      <textarea
        value={message}
        className="contactForm__message"
        id="field-message"
        name="message"
        onChange={(event) => changeField('message', event.target.value)}
      />
      <Button value="Envoyer le formulaire" type="submit" className="button--ContactForm" />
    </form>
  );
};

ContactForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
};

export default ContactForm;
