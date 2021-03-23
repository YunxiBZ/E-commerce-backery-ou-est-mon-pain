import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const History = ({
  history1,
  history2,
  history3,
  history4,
  history5,
  historyImg,
}) => {
  const ok = 'ok';
  return (
    <div className="history">
      <img
        src={historyImg}
        alt="our-history"
        className="history__img"
      />
      <div className="history__content">
        <p>{history1}</p>
        <p>{history2}</p>
        <p>{history3}</p>
        <p>{history4}</p>
        <p>{history5}</p>
      </div>
    </div>
  );
};

History.propTypes = {
  history1: PropTypes.string.isRequired,
  history2: PropTypes.string.isRequired,
  history3: PropTypes.string.isRequired,
  history4: PropTypes.string.isRequired,
  history5: PropTypes.string.isRequired,
  historyImg: PropTypes.string.isRequired,
};

export default History;
