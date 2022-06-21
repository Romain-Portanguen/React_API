import { Segment } from 'semantic-ui-react';

function FaqPage() {
  return (
    <Segment>
      <h2>A quoi ça sert ?</h2>
      {/* eslint-disable-next-line max-len */}
      <p>Cette application permet de trouver une liste de dépôts GitHub pour un critère donné.</p>
      <h2>Comment faire une recherche ?</h2>
      <p>Sur la page recherche, complétez le champ de recherche puis validez !</p>
      <h2>Puis-je chercher n'importe quel terme ?</h2>
      <p>Oui, c'est fou hein !</p>
    </Segment>
  );
}

export default FaqPage;
