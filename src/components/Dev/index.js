import React from 'react';
import './styles.scss';
import avatarTheo from 'src/assets/avatar-theo.png';
import avatarAntoine from 'src/assets/avatar-antoine.png';
import avatarJB from 'src/assets/avatar-JB.png';
import avatarYunxi from 'src/assets/avatar-yunxi.jpeg';

const Dev = () => {
  const ok = 'truc';

  return (
    <div className="dev">
      <section className="dev__section">
        <img
          src={avatarAntoine}
          alt="avatar dev"
          className="dev__avatar"
        />
        <p className="dev__name">Antoine</p>
        <p className="dev__name">Scrum Master / dev Front</p>
      </section>
      <section className="dev__section">
        <img
          src={avatarTheo}
          alt="avatar dev"
          className="dev__avatar"
        />
        <p className="dev__name">Theo</p>
        <p className="dev__name">Lead Front </p>
      </section>
      <section className="dev__section">
        <img
          src={avatarYunxi}
          alt="avatar dev"
          className="dev__avatar"
        />
        <p className="dev__name">Yunxi</p>
        <p className="dev__name">Product Owner / dev Front</p>
      </section>
      <section className="dev__section">
        <img
          src={avatarJB}
          alt="avatar dev"
          className="dev__avatar"
        />
        <p className="dev__name">Jean-Baptiste</p>
        <p className="dev__name">Lead Back / Git Master</p>
      </section>
    </div>
  );
};

export default Dev;
