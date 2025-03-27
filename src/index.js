import React from 'react';

function PracticeExamWebsite() {
  return (
    <div className="exam-container">
      <h1>Partiel de Droit Informatique - Examen d'Entraînement</h1>

      <section className="instructions">
        <h2>Instructions:</h2>
        <ol>
          <li><strong>Durée:</strong> Durée typique d'un partiel (par exemple, 1h30 - ajustez selon la durée réelle de votre examen).</li>
          <li><strong>Répondez à toutes les questions.</strong></li>
          <li><strong>Soyez clair, concis et précis dans vos réponses.</strong></li>
          <li><strong>Vous pouvez vous référer à vos notes de cours (si autorisé lors de votre examen réel, sinon, entraînez-vous sans).</strong></li>
        </ol>
      </section>

      <section className="section">
        <h2>Section 1: Questions de Définition et de Concepts Clés (5 points)</h2>
        <ol>
          <li>
            <strong>Définissez brièvement:</strong>
            <ul>
              <li>Le Cloud Souverain</li>
              <li>La Portabilité des données</li>
              <li>Le Droit à l'image</li>
              <li>Le RGPD</li>
              <li>L'Open Innovation</li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="section">
        <h2>Section 2: Questions à Réponses Courtes (10 points)</h2>
        <ol>
          <li>
            <strong>Expliquez en quelques phrases:</strong>
            <ul>
              <li>Pourquoi le droit d'auteur protège-t-il les logiciels ?</li>
              <li>Quelles sont les trois obligations principales du prestataire informatique en matière d'information envers son client ?</li>
              <li>Citez trois exemples de régulateurs publics dans le domaine du numérique en France et indiquez leur rôle principal.</li>
              <li>Quelles sont les principales différences entre un Cloud public, un Cloud privé et un Cloud souverain en termes de déploiement et de contrôle ?</li>
              <li>Donnez deux exemples de sanctions pour violation de la vie privée.</li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="section">
        <h2>Section 3: Questions de Réflexion et d'Analyse (10 points)</h2>
        <ol>
          <li>
            <strong>Cas Pratique 1: Le Logiciel et le Droit d'Auteur</strong>
            <p>Une jeune startup crée un logiciel innovant pour la gestion de projets. Deux développeurs salariés ont principalement contribué à sa création pendant leurs heures de travail. La startup souhaite protéger son logiciel.</p>
            <ol type="a">
              <li>À qui appartiennent les droits patrimoniaux sur ce logiciel ? Expliquez votre réponse en vous basant sur le cours.</li>
              <li>Quelles sont les actions que la startup peut entreprendre pour protéger son logiciel, au-delà de la protection automatique par le droit d'auteur ?</li>
            </ol>
          </li>
          <li>
            <strong>Cas Pratique 2: Cybersurveillance au Travail</strong>
            <p>Une entreprise souhaite mettre en place un système de surveillance de l'activité internet de ses employés, arguant des risques de sécurité et de perte de productivité.</p>
            <ol type="a">
              <li>Quels sont les intérêts légitimes que l'employeur peut invoquer pour justifier cette cybersurveillance ?</li>
              <li>Quelles sont les limites légales à la cybersurveillance des salariés en France, du point de vue du droit du travail et du respect des libertés individuelles ?</li>
            </ol>
          </li>
          <li>
            <strong>Question Ouverte: L'Avenir du Cloud et les Enjeux Juridiques</strong>
            <p>Selon vous, quels sont les principaux enjeux juridiques liés au développement croissant du Cloud Computing, notamment en termes de :</p>
            <ul>
              <li>Protection des données personnelles</li>
              <li>Souveraineté numérique</li>
              <li>Responsabilité contractuelle</li>
            </ul>
            <p>Développez votre réponse en vous appuyant sur les notions abordées dans le cours.</p>
          </li>
        </ol>
      </section>

      <section className="section">
        <h2>Section 4: Questions Vrai/Faux (5 points)</h2>
        <p>Indiquez si les affirmations suivantes sont <strong>Vraies (V) ou Fausses (F)</strong>. Justifiez brièvement votre réponse uniquement si l'affirmation est <strong>Fausse</strong>.</p>
        <ol type="a">
          <li>
            <label>
              <input type="checkbox" /> L'obligation d'information du prestataire informatique est une obligation de résultat.
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Le droit moral de l'auteur d'un logiciel comprend le droit de repentir ou de retrait.
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> La mention "Copyright" est obligatoire en France pour protéger un logiciel par le droit d'auteur.
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Le RGPD s'applique uniquement aux entreprises de plus de 250 employés.
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Le droit à l'image est un droit absolu et illimité.
            </label>
          </li>
        </ol>
      </section>

      <footer className="footer">
        <p><em>Note importante:</em> Ceci est un examen d'entraînement. Les questions sont conçues pour être représentatives du contenu du cours, mais votre examen réel peut différer. Vérifiez auprès de votre professeur pour les instructions et la portée spécifiques de l'examen.</p>
      </footer>
    </div>
  );
}

export default PracticeExamWebsite;