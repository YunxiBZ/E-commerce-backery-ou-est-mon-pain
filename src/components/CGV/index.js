import React from "react";
import "./styles.scss";

function CGV() {
  return (
    <div className="Container">
      <h1 className="CGVTitle">Conditions générales de vente</h1>
      <p>
        Les présentes conditions régissent les ventes de produits exclusivement
        sur le site ou-est-mon-pain.surge.sh. Elles sont accessibles sur le
        présent site par l’acheteur au moment de la commande.
      </p>
      <h2 className="CGVSubtitle">1. Mentions légales</h2>
      <p>
        Société Où-est-mon-pain, SIRET 14255869472356, 26 rue des pissenlits,
        95100, Argenteuil, Le Service Client de la boutique en ligne est
        disponible pour vous renseigner à tout moment et répondre à vos
        questions par téléphone : 06 15 26 73 62 (prix d’un appel local à partir
        d’un poste fixe).
      </p>
      <h2 className="CGVSubtitle">2.Prix et produits</h2>
      <p>
        Les prix figurant sur ce site sont indiqués en € toutes taxes comprises.
        Les produits commandés sont facturés au prix en vigueur lors de
        l’enregistrement de la commande. Les produits demeurent l’entière
        propriété de la société Où-est-mon-pain jusqu’à l’encaissement du prix
        indiqué.
      </p>
      <h2 className="CGVSubtitle">3.Commande et validation de transaction</h2>
      <p>
        Lorsque vous confirmez votre commande en cliquant sur le bouton «
        valider les informations », vous déclarez avoir pris connaissance et
        avoir accepté l’intégralité des présentes conditions générales de vente.
        Dès enregistrement de votre commande, un accusé réception vous sera
        envoyé par courrier électronique après validation du paiement. Nous nous
        réservons le droit d’annuler toute commande d’un client avec lequel il
        existerait un litige relatif au paiement d’une commande antérieure. Le
        contrat est conclu lors de la confirmation du règlement par la banque.
      </p>
      <h2 className="CGVSubtitle">4. Paiement</h2>
      <p>
        Le règlement de vos achats s’effectue en €. Plusieurs moyens de paiement
        sont possibles : Par carte bancaire : il s’effectue en ligne lors de
        votre commande. Vos données bancaires sont cryptées lors de la
        transaction (technologie SSL). Par Paypal.
      </p>
      <h2 className="CGVSubtitle">5. Retrait de commandes</h2>
      <p>
        Les retraits de commandes doivent se faire le jour exact qui figure sur
        votre validation de commande.
      </p>
      <h2 className="CGVSubtitle">
        6. Droits de rétractation : Le remboursement
      </h2>
      <p>Non valable sur nos produits.</p>
      <h2 className="CGVSubtitle">7. Garantie du consommateur</h2>
      <p>
        Dans l’hypothèse où un problème apparaîtrait lors d’un retrait de
        commande, la boulangerie se laisse la possibilité de proposer d’autres
        produits en remplacement.
      </p>
      <h2 className="CGVSubtitle">8. Règles de confidentialité</h2>
      <p>
        Pour effectuer une commande, vous êtes amenés à nous communiquer
        certaines informations qui feront l’objet de traitements informatiques.
        En confirmant votre commande, vous nous permettez le traitement de votre
        dossier. Conformément à loi du 6 janvier 1978, vous pouvez accéder à ces
        informations, demander leur modification ou leur rectification ou exiger
        de ne plus figurer dans notre base de données en nous envoyant un
        courrier électronique à : ou-est-mon-pain@gmail.com .
      </p>
      <h2 className="CGVSubtitle">9. Textes applicables - Juridiction</h2>
      <p>
        Le présent contrat est soumis à la loi française. Dans l’hypothèse où un
        litige naîtrait de la présente relation contractuelle, l’utilisateur et
        la société Où-est-mon-pain s’engagent avant toute action judiciaire à
        rechercher une solution amiable. En cas de litige, vous pouvez vous
        rendre au greffe du tribunal le plus proche de votre domicile.
      </p>
    </div>
  );
}

export default CGV;
