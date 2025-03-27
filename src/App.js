import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  
  const scenarios = [
    {
      id: 1,
      title: "Fuite de données chez TechConnect",
      scenario: "L'entreprise TechConnect, basée en France, a subi une cyberattaque qui a exposé les données personnelles de 50,000 clients européens, incluant noms, adresses, numéros de téléphone et historiques d'achats. Leur DSI a découvert la brèche mais a attendu 45 jours avant d'en informer la direction, qui n'a toujours pas notifié les autorités 60 jours après l'incident.",
      question: "Quelle réglementation principale s'applique dans ce cas et quelle obligation TechConnect n'a-t-elle pas respectée ?",
      options: [
        "Le RGPD, avec obligation de notification dans les 72 heures à l'autorité de contrôle",
        "La loi Informatique et Libertés, sans délai précis de notification",
        "La directive NIS, avec un délai de notification de 30 jours",
        "Le Cloud Act américain, car les données concernent aussi des clients américains"
      ],
      correctAnswer: 0,
      explanation: "Le Règlement Général sur la Protection des Données (RGPD) s'applique ici. L'article 33 du RGPD impose aux entreprises de notifier une violation de données à l'autorité de contrôle compétente (la CNIL en France) dans les 72 heures après en avoir pris connaissance. TechConnect est clairement en infraction en ayant attendu plus de 60 jours."
    },
    {
      id: 2,
      title: "Marketplace InnovShop et droits des consommateurs",
      scenario: "InnovShop est une marketplace en ligne qui met en relation vendeurs tiers et consommateurs. Suite à plusieurs plaintes concernant des produits défectueux vendus sur sa plateforme, InnovShop affirme n'être qu'un intermédiaire technique et refuse toute responsabilité, renvoyant les clients mécontents directement vers les vendeurs, souvent basés hors UE.",
      question: "Du point de vue du droit, quelle est la position juridique correcte ?",
      options: [
        "InnovShop a raison, une marketplace n'est jamais responsable des produits vendus par des tiers",
        "InnovShop est totalement responsable comme s'il était le vendeur direct de tous les produits",
        "InnovShop a une responsabilité limitée et des obligations d'information sur les vendeurs tiers",
        "Seule la législation du pays du vendeur s'applique, jamais celle du consommateur"
      ],
      correctAnswer: 2,
      explanation: "Selon la directive européenne sur le commerce électronique et la jurisprudence récente de la CJUE, une marketplace comme InnovShop a des obligations spécifiques. Si elle n'est pas responsable au même titre que le vendeur, elle doit néanmoins informer clairement le consommateur sur l'identité du vendeur, faciliter la communication entre vendeurs et acheteurs, et dans certains cas peut être tenue responsable si elle n'a pas agi avec diligence pour retirer des produits problématiques signalés."
    },
    {
      id: 3,
      title: "StartupVision et ses cookies publicitaires",
      scenario: "StartupVision, jeune entreprise de services numériques, a lancé son site web avec un système complet de suivi publicitaire. À l'arrivée sur le site, une bannière informe les utilisateurs que 'En continuant votre navigation, vous acceptez l'utilisation de cookies'. Le site dépose immédiatement des cookies publicitaires et de traçage avant toute action de l'utilisateur.",
      question: "Cette pratique est-elle conforme à la législation européenne ?",
      options: [
        "Oui, car l'information est donnée via la bannière",
        "Oui, si les cookies ne collectent pas de données personnelles",
        "Non, le consentement doit être explicite et préalable au dépôt des cookies non essentiels",
        "Non, mais uniquement pour les cookies tiers, pas pour les cookies propres au site"
      ],
      correctAnswer: 2,
      explanation: "Selon la directive ePrivacy et le RGPD, renforcés par les lignes directrices du CEPD (Comité Européen de la Protection des Données), le simple fait de continuer à naviguer sur un site ne constitue pas un consentement valide. Pour les cookies non essentiels au fonctionnement du site (comme les cookies publicitaires), un consentement explicite, spécifique, libre et éclairé est nécessaire avant leur dépôt. StartupVision est donc en infraction en déposant ces cookies avant d'avoir obtenu ce consentement."
    },
    {
      id: 4,
      title: "CloudStore et transferts de données internationaux",
      scenario: "CloudStore, entreprise française de stockage cloud, utilise des serveurs principalement en Europe mais aussi aux États-Unis pour des raisons de redondance. Dans ses CGU, une simple clause indique que 'les données peuvent être transférées hors UE pour assurer la qualité du service'. Suite à une demande d'accès d'une autorité américaine, des données de clients européens ont été transmises sans qu'ils en soient informés.",
      question: "Quelle est la problématique juridique principale dans cette situation ?",
      options: [
        "Le problème est uniquement contractuel car les CGU mentionnent le transfert",
        "Le transfert est illégal car aucun transfert de données hors UE n'est autorisé",
        "Le transfert est probablement non conforme au RGPD car il manque des garanties appropriées",
        "Seule la loi américaine s'applique car les serveurs sont aux États-Unis"
      ],
      correctAnswer: 2,
      explanation: "Selon le RGPD (articles 44 à 50), les transferts de données vers des pays tiers nécessitent des garanties appropriées pour assurer une protection équivalente à celle de l'UE. Depuis l'invalidation du Privacy Shield par l'arrêt Schrems II, les transferts vers les États-Unis sont particulièrement problématiques. CloudStore aurait dû mettre en place des mesures supplémentaires (comme du chiffrement de bout en bout), informer explicitement les utilisateurs et obtenir leur consentement spécifique. Une simple mention dans les CGU est insuffisante, et la transmission aux autorités américaines sans information constitue une violation du RGPD."
    },
    {
      id: 5,
      title: "SocialApp et l'intelligence artificielle",
      scenario: "SocialApp a développé un système d'IA qui analyse automatiquement les photos des utilisateurs pour identifier les visages, suggérer des tags, et créer des albums thématiques. L'entreprise considère avoir un intérêt légitime à utiliser ces données pour améliorer l'expérience utilisateur et a implémenté cette fonctionnalité par défaut pour tous les comptes.",
      question: "Cette approche est-elle conforme à la réglementation européenne ?",
      options: [
        "Oui, car il s'agit d'un intérêt légitime de l'entreprise",
        "Oui, si SocialApp anonymise les données après traitement",
        "Non, car les données biométriques requièrent un consentement explicite",
        "Non, mais uniquement si les utilisateurs sont des mineurs"
      ],
      correctAnswer: 2,
      explanation: "Les données biométriques (comme les caractéristiques faciales) sont considérées comme des données sensibles selon l'article 9 du RGPD. Leur traitement est en principe interdit, sauf exceptions comme le consentement explicite des personnes concernées. L'intérêt légitime ne peut pas servir de base légale pour ce type de données. SocialApp est donc en infraction en activant cette fonctionnalité par défaut sans obtenir préalablement le consentement explicite des utilisateurs, qui devrait être libre, spécifique, éclairé et univoque."
    }
  ];

  const handleAnswer = (selectedOption) => {
    const newAnswers = { ...userAnswers };
    newAnswers[currentScenario] = selectedOption;
    setUserAnswers(newAnswers);
    
    if (selectedOption === scenarios[currentScenario].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentScenario(0);
    setShowResult(false);
    setScore(0);
    setUserAnswers({});
  };

  const currentQuiz = scenarios[currentScenario];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz de Droit Numérique</h1>
        <h2>Scénarios juridiques en entreprise</h2>
      </header>

      {showResult ? (
        <div className="result-container">
          <h2>Quiz terminé!</h2>
          <h3>Votre score: {score} / {scenarios.length}</h3>
          
          <div className="result-details">
            {scenarios.map((scenario, index) => (
              <div key={scenario.id} className="result-item">
                <h4>Scénario {index + 1}: {scenario.title}</h4>
                <p className={userAnswers[index] === scenario.correctAnswer ? "correct" : "incorrect"}>
                  {userAnswers[index] === scenario.correctAnswer 
                    ? "✓ Correct" 
                    : `✗ Incorrect (Bonne réponse: ${scenario.options[scenario.correctAnswer]})`}
                </p>
                <p className="explanation">{scenario.explanation}</p>
              </div>
            ))}
          </div>
          
          <button className="restart-btn" onClick={resetQuiz}>Recommencer le quiz</button>
        </div>
      ) : (
        <div className="scenario-container">
          <div className="progress-bar">
            <div className="progress" style={{ width: `${((currentScenario + 1) / scenarios.length) * 100}%` }}></div>
          </div>
          
          <h2>{currentQuiz.title}</h2>
          <div className="scenario-text">
            <p>{currentQuiz.scenario}</p>
          </div>
          
          <div className="question-section">
            <h3>{currentQuiz.question}</h3>
            <div className="options">
              {currentQuiz.options.map((option, index) => (
                <button 
                  key={index}
                  className={`option-btn ${userAnswers[currentScenario] === index ? 'selected' : ''}`}
                  onClick={() => handleAnswer(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          
          <button 
            className="next-btn" 
            onClick={handleNext}
            disabled={userAnswers[currentScenario] === undefined}
          >
            {currentScenario < scenarios.length - 1 ? "Suivant" : "Voir les résultats"}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
