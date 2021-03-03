import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const OpeningHours = ({ openingTime, hotBread }) => {
  const ok = 'ok';
  return (
    <div className="opening">
      <h2 className="opening__title">Nos horaires d'ouverture</h2>
      {Object.entries(openingTime).map(([key, value]) => (
        <p key={key} className="opening__day">
          {key} - {value}
        </p>
      ))}
      <h2 className="opening__title opening__title--modifier">Horaires pains chauds</h2>
      <div className="opening__breadSection">
        {Object.entries(hotBread).map(([key, value]) => (
          <p key={key} className="opening__bread">
            {value}
          </p>
        ))}
      </div>
    </div>
  );
};

OpeningHours.propTypes = {
  openingTime: PropTypes.object.isRequired,
  hotBread: PropTypes.object.isRequired,
};

export default OpeningHours;
