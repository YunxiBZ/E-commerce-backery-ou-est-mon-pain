import React from 'react';
import './styles.scss';
// Il faudra importer le component Field pour générer les inputs du form
import Button from 'src/components/Button';
import ContactField from './ContactField';

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Envoi du form en méthode post pour que le back envoie le mail
  };

  return (
    <form autoComplete="off" className="contactForm" onSubmit={handleSubmit}>
      <ContactField
        name="Nom"
        placeholder="Nom"
      />
      <ContactField
        name="Prénom"
        placeholder="Prénom"
      />
      <ContactField
        name="Email"
        placeholder="Email"
      />
      <ContactField
        name="Téléphone"
        placeholder="Téléphone"
      />
      <textarea />
      <Button value="Envoyer le formulaire" type="submit" />
    </form>
  );
};

export default ContactForm;
