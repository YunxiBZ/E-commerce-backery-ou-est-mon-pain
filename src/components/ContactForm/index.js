import React from 'react';
import './styles.scss';
// Il faudra importer le component Field pour générer les inputs du form
import Button from 'src/components/Button';
import ContactField from './ContactField';

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // ! A FAIRE Envoi du form en méthode post pour que le back envoie le mail
  };

  return (
    <form autoComplete="off" className="contactForm" onSubmit={handleSubmit}>
      <ContactField
        name="Nom"
        placeholder="Nom"
        className="field--modifier"
      />
      <ContactField
        name="Prénom"
        placeholder="Prénom"
        className="field--modifier"
      />
      <ContactField
        name="Email"
        placeholder="Email"
      />
      <ContactField
        name="Téléphone"
        placeholder="Téléphone"
        className="field--modifier"
      />
      <textarea className="contactForm__message" />
      <Button value="Envoyer le formulaire" type="submit" className="button--ContactForm" />
    </form>
  );
};

export default ContactForm;
