import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const History = ({ history, historyImg }) => {
  const ok = 'ok';
  return (
    <div className="history">
      <img
        src={historyImg}
        alt="our-history"
        className="history__img"
      />
      <div className="history__content">{history}</div>
    </div>
  );
};

History.propTypes = {
  history: PropTypes.string.isRequired,
  historyImg: PropTypes.string.isRequired,
};

export default History;
