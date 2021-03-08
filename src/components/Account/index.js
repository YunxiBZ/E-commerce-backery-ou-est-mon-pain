import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const Account = () => {
  const ok = 'truc';

  return (
    <div className="account">
      <section className="account__userInterface">
        <div className="account__info">
          <p className="account__infoData">Prénom</p>
          <FontAwesomeIcon
            icon={faPen}
          />
        </div>
        <div className="account__info">
          <p className="account__infoData">Nom</p>
          <FontAwesomeIcon
            icon={faPen}
          />
        </div>
        <div className="account__info">
          <p className="account__infoData">téléphone</p>
          <FontAwesomeIcon
            icon={faPen}
          />
        </div>
        <div className="account__info">
          <p className="account__infoData">email</p>
          <FontAwesomeIcon
            icon={faPen}
          />
        </div>
      </section>
    </div>
  );
};

export default Account;
