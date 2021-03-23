import React from 'react';
import './styles.scss';
import ScrollToTop from 'src/hooks/ScrollToTop';

function LegalMentions() {
  ScrollToTop();
  return (
    <div className="legal_mentions">
      <h1 className="legal_mentions__title">MENTIONS LEGALES</h1>
      <h2 className="legal_mentions__subtitle">
        RAISON SOCIALE : Holding Strong SAS
      </h2>
      <h2 className="legal_mentions__subtitle">
        ADRESSE DES BUREAUX : 100 rue de la chocolaterie 60500 Chantilly
      </h2>
      <h2 className="legal_mentions__subtitle">
        EMAIL DE CONTACT : ou-est-mon-pain@gmail.com
      </h2>
      <h2 className="legal_mentions__subtitle">
        NUMERO DE TELEPHONE : 01 23 45 56 78
      </h2>
      <h2 className="legal_mentions__subtitle">RCS : 645 158 490</h2>
      <h2 className="legal_mentions__subtitle">CAPITAL SOCIAL : 150 000 brouzoufs</h2>
      <h2 className="legal_mentions__subtitle">
        ADRESSE DU SIEGE SOCIAL : 100 rue de la chocolaterie 60500 Chantilly
      </h2>
      <h2 className="legal_mentions__subtitle">NUMERO DE TVA : 451 179 150 350 32</h2>
      <h2 className="legal_mentions__subtitle">
        DIRECTRICE DE LA PUBLICATION: Mme Cerise Surlegateau
      </h2>
    </div>
  );
}

export default LegalMentions;
