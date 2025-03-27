const questionsData = [
    {
        category: "Cloud Souverain et Données",
        scenario: "Innovatech Solutions développe un nouveau logiciel d'IA pour le diagnostic médical. Ils envisagent d'utiliser des services cloud pour stocker les données des patients et exécuter leurs algorithmes.",
        question: "Quel type de déploiement cloud serait le plus conforme aux principes de 'Cloud Souverain' et aux exigences légales françaises pour les données sensibles comme les informations médicales ?",
        options: [
            "Cloud Public",
            "Cloud Privé",
            "Cloud Hybride",
            "Cloud Souverain"
        ],
        correctAnswer: "Cloud Souverain",
        explanation: "Un Cloud Souverain garantit que les données sont hébergées et traitées sur le territoire national et en vertu du droit français, ce qui est crucial pour les données sensibles, comme souligné dans le matériel de cours."
    },
    {
        category: "Protection des Logiciels",
        scenario: "Innovatech Solutions souhaite protéger le code source de son nouveau logiciel contre la copie et la distribution non autorisées.",
        question: "Quel principal mécanisme juridique en France protège le code source d'un logiciel ?",
        options: [
            "Brevets",
            "Marques",
            "Droit d'auteur",
            "Secret Commercial"
        ],
        correctAnswer: "Droit d'auteur",
        explanation: "En France, les logiciels sont principalement protégés par le droit d'auteur, comme expliqué dans la section 'La protection des logiciels par le droit d’auteur' du cours."
    },
    {
        category: "Cybersurveillance et Vie Privée des Salariés",
        scenario: "Un employé d'Innovatech Solutions utilise intensivement l'accès internet de l'entreprise pour des achats personnels en ligne pendant les heures de travail. L'entreprise surveille l'utilisation d'internet pour garantir la productivité et la sécurité.",
        question: "En droit français, quelles sont les principales limites à la capacité d'Innovatech Solutions de surveiller l'utilisation d'internet par ses employés ?",
        options: [
            "Aucune limite si la politique de l'entreprise est claire",
            "La surveillance n'est autorisée qu'avec le consentement de l'employé",
            "La surveillance doit être transparente, loyale, justifiée et proportionnée au but recherché",
            "La surveillance est totalement interdite pour protéger la vie privée des employés"
        ],
        correctAnswer: "La surveillance doit être transparente, loyale, justifiée et proportionnée au but recherché",
        explanation: "Le droit du travail français (Code du Travail), tel que couvert dans 'La cybersurveillance des salariés dans l’entreprise', exige que la surveillance de l'employeur soit transparente, loyale, justifiée par la tâche et proportionnée au résultat souhaité, en respectant les droits des employés."
    },
    {
        category: "Contrats Informatiques",
        scenario: "Innovatech Solutions souhaite fournir à un client un logiciel de gestion de projet. Ils doivent définir les termes de la mise à disposition du logiciel.",
        question: "Quel type de contrat informatique est le plus approprié pour définir les conditions d'utilisation d'un logiciel par un client, en incluant les droits d'utilisation et les restrictions ?",
        options: [
            "Contrat de maintenance",
            "Contrat d'intégration",
            "Contrat de licence",
            "Contrat d'infogérance"
        ],
        correctAnswer: "Contrat de licence",
        explanation: "Le contrat de licence est spécifiquement conçu pour définir les droits d'utilisation d'un logiciel, les restrictions et les conditions de mise à disposition au client, comme expliqué dans 'Les contrats informatiques'."
    },
    {
        category: "Contrats Informatiques",
        scenario: "Après l'acquisition d'un logiciel sous licence, le client d'Innovatech Solutions rencontre des problèmes de fonctionnement et souhaite une assistance continue.",
        question: "Quel type de contrat complémentaire Innovatech Solutions devrait-il proposer pour assurer le bon fonctionnement du logiciel et fournir une assistance technique ?",
        options: [
            "Contrat de licence",
            "Contrat d'intégration",
            "Contrat de maintenance",
            "Contrat d'infogérance"
        ],
        correctAnswer: "Contrat de maintenance",
        explanation: "Le contrat de maintenance est destiné à garantir le bon fonctionnement du logiciel après sa mise en place et à fournir une assistance corrective et évolutive, en complément du contrat de licence."
    },
    {
        category: "Contrats Informatiques",
        scenario: "Un client d'Innovatech Solutions, une grande entreprise, souhaite externaliser la gestion complète de son système d'information.",
        question: "Quel type de contrat permettrait à Innovatech Solutions de prendre en charge la gestion globale du système d'information du client, incluant matériel, logiciels et personnel ?",
        options: [
            "Contrat de licence",
            "Contrat d'intégration",
            "Contrat de maintenance",
            "Contrat d'infogérance"
        ],
        correctAnswer: "Contrat d'infogérance",
        explanation: "Le contrat d'infogérance (ou outsourcing) est conçu pour l'externalisation de la gestion complète du système d'information d'une entreprise à un prestataire spécialisé."
    },
    {
        category: "Contrats Informatiques",
        scenario: "Innovatech Solutions doit mettre en place un système d'information complexe pour un nouveau client. Cela implique la conception, le choix des solutions et l'intégration de différents éléments.",
        question: "Quel type de contrat est le plus adapté pour les prestations de conception et de mise en œuvre d'un système d'information par Innovatech Solutions ?",
        options: [
            "Contrat de licence",
            "Contrat d'intégration",
            "Contrat de maintenance",
            "Contrat d'infogérance"
        ],
        correctAnswer: "Contrat d'intégration",
        explanation: "Le contrat d'intégration concerne les opérations de conception et de mise en place d'un système d'information, incluant le choix des solutions et l'assemblage des différents composants."
    },
    {
        category: "Données Personnelles et RGPD",
        scenario: "Innovatech Solutions collecte des données personnelles de ses utilisateurs via son application mobile. Ils doivent s'assurer de respecter la réglementation en vigueur.",
        question: "Quelle réglementation européenne encadre principalement la collecte et le traitement des données personnelles, imposant des obligations aux entreprises comme Innovatech Solutions ?",
        options: [
            "Directive 95/46/CE",
            "Loi Informatique et Libertés (LIL)",
            "Règlement Général sur la Protection des Données (RGPD)",
            "Convention Européenne des Droits de l'Homme"
        ],
        correctAnswer: "Règlement Général sur la Protection des Données (RGPD)",
        explanation: "Le Règlement Général sur la Protection des Données (RGPD) est la réglementation européenne de référence en matière de protection des données personnelles, applicable à Innovatech Solutions."
    },
    {
        category: "Données Personnelles et RGPD",
        scenario: "Innovatech Solutions souhaite envoyer des newsletters promotionnelles à ses clients.",
        question: "Selon le RGPD, quelle condition de licéité doit être respectée pour envoyer des newsletters promotionnelles basées sur des données personnelles ?",
        options: [
            "Intérêt légitime de l'entreprise",
            "Obligation légale",
            "Consentement de la personne concernée",
            "Exécution d'un contrat"
        ],
        correctAnswer: "Consentement de la personne concernée",
        explanation: "Le consentement explicite de la personne concernée est l'une des bases légales principales pour le traitement de données personnelles à des fins de prospection commerciale comme l'envoi de newsletters."
    },
    {
        category: "Données Personnelles et RGPD",
        scenario: "Un client d'Innovatech Solutions souhaite savoir quelles données personnelles l'entreprise détient sur lui.",
        question: "Quel droit fondamental du RGPD permet à un individu de demander à Innovatech Solutions de lui fournir une copie des données personnelles qu'elle possède à son sujet ?",
        options: [
            "Droit de rectification",
            "Droit à l'oubli",
            "Droit d'accès",
            "Droit d'opposition"
        ],
        correctAnswer: "Droit d'accès",
        explanation: "Le droit d'accès, prévu par le RGPD, permet à toute personne de demander à une organisation de confirmer si des données la concernant sont traitées et d'en obtenir une copie."
    },
    {
        category: "Données Personnelles et RGPD",
        scenario: "Un client d'Innovatech Solutions constate que ses informations personnelles (adresse) sont incorrectes dans la base de données de l'entreprise.",
        question: "Quel droit du RGPD permet à ce client de demander à Innovatech Solutions de corriger ses données inexactes ?",
        options: [
            "Droit de rectification",
            "Droit à l'oubli",
            "Droit d'accès",
            "Droit d'opposition"
        ],
        correctAnswer: "Droit de rectification",
        explanation: "Le droit de rectification, prévu par le RGPD, garantit aux individus la possibilité de faire corriger les données personnelles inexactes les concernant."
    },
    {
        category: "Données Personnelles et RGPD",
        scenario: "Un ancien client d'Innovatech Solutions souhaite que l'entreprise supprime toutes ses données personnelles de ses systèmes.",
        question: "Quel droit du RGPD permet à cet ancien client de demander la suppression de ses données personnelles, sous certaines conditions ?",
        options: [
            "Droit de rectification",
            "Droit à l'oubli",
            "Droit d'accès",
            "Droit d'opposition"
        ],
        correctAnswer: "Droit à l'oubli",
        explanation: "Le droit à l'oubli (ou droit à l'effacement), prévu par le RGPD, permet aux individus de demander la suppression de leurs données personnelles, notamment lorsque leur conservation n'est plus nécessaire."
    },
    {
        category: "Données Personnelles et RGPD",
        scenario: "Un client d'Innovatech Solutions ne souhaite plus recevoir de publicités ciblées de l'entreprise.",
        question: "Quel droit du RGPD permet à ce client de s'opposer à l'utilisation de ses données personnelles à des fins de prospection commerciale ?",
        options: [
            "Droit de rectification",
            "Droit à l'oubli",
            "Droit d'accès",
            "Droit d'opposition"
        ],
        correctAnswer: "Droit d'opposition",
        explanation: "Le droit d'opposition, prévu par le RGPD, permet aux individus de s'opposer à tout moment au traitement de leurs données personnelles à des fins de prospection, y compris le profilage lié à cette prospection."
    },
    {
        category: "Cybersécurité",
        scenario: "Innovatech Solutions est victime d'une cyberattaque de type DDoS qui rend ses services en ligne inaccessibles.",
        question: "Quel type de risque de cybersécurité est principalement illustré par une attaque DDoS ?",
        options: [
            "Vol de données",
            "Atteinte à la disponibilité des services",
            "Altération de données",
            "Espionnage industriel"
        ],
        correctAnswer: "Atteinte à la disponibilité des services",
        explanation: "Une attaque DDoS (Distributed Denial of Service) vise principalement à rendre un service indisponible en le surchargeant de requêtes, affectant sa disponibilité."
    },
    {
        category: "Cybersécurité",
        scenario: "Un employé d'Innovatech Solutions reçoit un email frauduleux lui demandant de cliquer sur un lien et de saisir ses identifiants de connexion.",
        question: "Quel type d'attaque de cybersécurité est décrit dans ce scénario, visant à tromper l'utilisateur pour obtenir des informations confidentielles ?",
        options: [
            "Ransomware",
            "Phishing",
            "SQL Injection",
            "Malware"
        ],
        correctAnswer: "Phishing",
        explanation: "Le phishing est une technique d'attaque qui consiste à se faire passer pour une entité de confiance (ici, via un email) afin d'obtenir des informations sensibles de la victime."
    },
    {
        category: "Cybersécurité",
        scenario: "Le système informatique d'Innovatech Solutions est infecté par un logiciel malveillant qui chiffre les données et demande une rançon pour les déchiffrer.",
        question: "Quel type de logiciel malveillant est décrit dans ce scénario, bloquant l'accès aux données jusqu'au paiement d'une rançon ?",
        options: [
            "Virus",
            "Cheval de Troie",
            "Ransomware",
            "Spyware"
        ],
        correctAnswer: "Ransomware",
        explanation: "Un ransomware est un logiciel malveillant qui chiffre les données d'un système et exige une rançon en échange de la clé de déchiffrement, bloquant ainsi l'accès aux informations."
    },
    {
        category: "Cybersécurité",
        scenario: "Innovatech Solutions met en place des mesures de sécurité pour protéger son réseau informatique.",
        question: "Parmi les mesures suivantes, laquelle relève de la 'sécurité informatique' et vise à protéger les infrastructures et les données ?",
        options: [
            "Cloud Souverain",
            "Droit d'auteur",
            "Cybersécurité",
            "Sécurité du réseau"
        ],
        correctAnswer: "Sécurité du réseau",
        explanation: "La sécurité du réseau englobe l'ensemble des mesures techniques et organisationnelles visant à protéger les infrastructures informatiques (réseaux, serveurs, postes de travail) et les données contre les menaces."
    },
    {
        category: "Droit à l'image et Vie Privée",
        scenario: "Un employé d'Innovatech Solutions est photographié à son insu lors d'une pause déjeuner dans un lieu public. La photo est ensuite diffusée sur les réseaux sociaux sans son consentement.",
        question: "Selon le droit français, quel droit fondamental de l'employé est potentiellement violé par la diffusion de cette photo sans son autorisation ?",
        options: [
            "Droit à la liberté d'expression",
            "Droit d'auteur",
            "Droit à l'image",
            "Droit à la propriété intellectuelle"
        ],
        correctAnswer: "Droit à l'image",
        explanation: "Le droit à l'image, reconnu par la jurisprudence française, permet à toute personne de s'opposer à la fixation et à la diffusion de son image sans son consentement, même dans un lieu public."
    },
    {
        category: "Droit à l'image et Vie Privée",
        scenario: "Un article de blog publie des informations très détaillées sur la vie privée d'un dirigeant d'Innovatech Solutions, sans son accord.",
        question: "Quel droit fondamental est potentiellement violé par la publication de ces informations intrusives sur la vie privée du dirigeant ?",
        options: [
            "Droit à la liberté d'expression",
            "Droit à l'information",
            "Droit au respect de la vie privée",
            "Droit à la réputation"
        ],
        correctAnswer: "Droit au respect de la vie privée",
        explanation: "Le droit au respect de la vie privée, protégé par l'article 9 du Code civil et la Convention Européenne des Droits de l'Homme, garantit à chacun le droit de maîtriser les informations relatives à sa vie privée et de s'opposer à leur divulgation."
    },
    {
        category: "Droit à l'image et Vie Privée",
        scenario: "Innovatech Solutions souhaite utiliser la photo d'un de ses employés pour une campagne publicitaire.",
        question: "Avant de diffuser cette photo, que doit impérativement obtenir Innovatech Solutions pour respecter le droit à l'image de l'employé ?",
        options: [
            "L'accord du service marketing",
            "L'accord oral de l'employé",
            "L'autorisation écrite de l'employé",
            "L'accord de la CNIL"
        ],
        correctAnswer: "L'autorisation écrite de l'employé",
        explanation: "Pour utiliser l'image d'une personne, il est impératif d'obtenir son autorisation écrite préalable, afin de respecter son droit à l'image et de se prémunir contre tout litige."
    },
    {
        category: "Preuve Electronique",
        scenario: "Dans un litige commercial, Innovatech Solutions souhaite utiliser des emails échangés avec un client comme preuve.",
        question: "En droit français, les emails sont-ils recevables comme mode de preuve devant un tribunal ?",
        options: [
            "Non, car ce ne sont pas des documents papier",
            "Oui, sous certaines conditions de fiabilité et de loyauté",
            "Non, sauf si certifiés par un huissier",
            "Oui, systématiquement et sans conditions"
        ],
        correctAnswer: "Oui, sous certaines conditions de fiabilité et de loyauté",
        explanation: "La preuve électronique, incluant les emails, est recevable en justice en France, sous réserve de respecter les principes de fiabilité et de loyauté de la preuve, appréciés souverainement par les juges."
    },
    {
        category: "Preuve Electronique",
        scenario: "Lors d'un contrôle de cybersurveillance, Innovatech Solutions découvre des emails personnels clairement identifiés comme tels sur le poste d'un employé.",
        question: "Innovatech Solutions peut-il utiliser ces emails personnels comme preuve dans une procédure disciplinaire contre l'employé ?",
        options: [
            "Oui, car ils ont été découverts sur le matériel de l'entreprise",
            "Non, car cela violerait le secret des correspondances privées",
            "Oui, si l'employé a été préalablement informé de la surveillance",
            "Oui, mais uniquement si le contenu est illicite"
        ],
        correctAnswer: "Non, car cela violerait le secret des correspondances privées",
        explanation: "Le secret des correspondances privées protège les emails personnels des employés, même découverts sur le matériel de l'entreprise. Leur utilisation comme preuve disciplinaire serait généralement illégale."
    },
    {
        category: "Signature Electronique",
        scenario: "Innovatech Solutions souhaite signer électroniquement des contrats avec ses partenaires commerciaux.",
        question: "Selon le droit français, quel est le principe fondamental qui encadre la signature électronique pour lui conférer la même valeur juridique qu'une signature manuscrite ?",
        options: [
            "La liberté contractuelle",
            "La neutralité technologique",
            "L'équivalence fonctionnelle",
            "La force probante par défaut"
        ],
        correctAnswer: "L'équivalence fonctionnelle",
        explanation: "Le principe d'équivalence fonctionnelle est au cœur du régime juridique de la signature électronique. Il vise à reconnaître à la signature électronique la même valeur juridique que la signature manuscrite si elle remplit certaines conditions de fiabilité."
    },
    {
        category: "Signature Electronique",
        scenario: "Innovatech Solutions utilise une solution de signature électronique pour ses contrats. La solution repose sur un certificat électronique qualifié délivré par un tiers de confiance.",
        question: "Ce type de signature électronique est-il présumé fiable au sens du droit français ?",
        options: [
            "Non, la fiabilité doit toujours être prouvée",
            "Oui, car elle repose sur un certificat qualifié",
            "Seulement si le contrat est supérieur à 1500 euros",
            "Non, la loi française ne reconnaît pas la signature électronique"
        ],
        correctAnswer: "Oui, car elle repose sur un certificat qualifié",
        explanation: "La loi française, notamment l'article 1367 du Code Civil, pose une présomption de fiabilité pour les signatures électroniques qui reposent sur un certificat électronique qualifié, comme dans ce cas."
    },
    {
        category: "Open Innovation",
        scenario: "Innovatech Solutions souhaite adopter une démarche d'open innovation pour développer de nouveaux produits.",
        question: "Quel est le principe fondamental de l'open innovation, qui la distingue de l'innovation fermée ?",
        options: [
            "Le secret et la confidentialité",
            "Le partage et la collaboration",
            "Le contrôle interne strict",
            "La propriété exclusive des innovations"
        ],
        correctAnswer: "Le partage et la collaboration",
        explanation: "L'open innovation repose sur le principe du partage et de la collaboration avec des acteurs externes à l'entreprise (partenaires, clients, universités...), contrairement à l'innovation fermée qui se limite aux ressources internes."
    },
    {
        category: "Open Innovation",
        scenario: "Innovatech Solutions envisage d'utiliser des licences libres pour certains de ses logiciels.",
        question: "Quel avantage majeur des licences libres favorise l'open innovation et la collaboration ?",
        options: [
            "La restriction de l'utilisation du logiciel",
            "La gratuité du logiciel",
            "L'accès au code source et la possibilité de modification",
            "La protection maximale de la propriété intellectuelle"
        ],
        correctAnswer: "L'accès au code source et la possibilité de modification",
        explanation: "Les licences libres offrent un accès au code source et autorisent sa modification et sa redistribution, ce qui favorise la collaboration, le partage et l'innovation ouverte."
    },
    {
        category: "Open Innovation",
        scenario: "Innovatech Solutions participe à un hackathon pour développer de nouvelles fonctionnalités pour son logiciel.",
        question: "Le hackathon est un exemple de quelle stratégie d'open innovation, visant à stimuler la créativité et l'innovation collaborative ?",
        options: [
            "Intrapreneuriat",
            "Crowdfunding",
            "Hackathon",
            "Licence Libre"
        ],
        correctAnswer: "Hackathon",
        explanation: "Le hackathon est une méthode d'open innovation qui consiste à organiser un événement collaboratif intensif pour développer rapidement des solutions innovantes, souvent autour d'un défi ou d'une problématique."
    },
    {
        category: "Droit d'Auteur des Logiciels",
        scenario: "Un développeur salarié d'Innovatech Solutions crée un logiciel dans le cadre de ses fonctions.",
        question: "A qui appartiennent les droits patrimoniaux (droits d'exploitation) sur ce logiciel, créé par un salarié dans l'exercice de ses fonctions ?",
        options: [
            "Au développeur salarié",
            "A Innovatech Solutions, l'employeur",
            "Conjointement au salarié et à l'employeur",
            "Au client qui a commandé le logiciel"
        ],
        correctAnswer: "A Innovatech Solutions, l'employeur",
        explanation: "En France, sauf stipulation contraire, les droits patrimoniaux sur les logiciels créés par des salariés dans l'exercice de leurs fonctions sont automatiquement dévolus à l'employeur, comme le précise l'article L.113-9 du CPI."
    },
    {
        category: "Droit d'Auteur des Logiciels",
        scenario: "Innovatech Solutions souhaite adapter un logiciel existant pour répondre aux besoins spécifiques d'un client.",
        question: "L'adaptation d'un logiciel existant est-elle considérée comme un acte relevant du droit d'auteur du logiciel original ?",
        options: [
            "Non, car c'est une nouvelle création",
            "Oui, car cela constitue une modification et une reproduction",
            "Seulement si l'adaptation est importante",
            "Non, si l'adaptation est demandée par un client"
        ],
        correctAnswer: "Oui, car cela constitue une modification et une reproduction",
        explanation: "L'adaptation d'un logiciel, au sens du droit d'auteur, est considérée comme un acte de reproduction et de modification qui relève des droits patrimoniaux de l'auteur du logiciel original."
    },
    {
        category: "Droit d'Auteur des Logiciels",
        scenario: "Innovatech Solutions veut breveter une innovation logicielle.",
        question: "En Europe, les logiciels en tant que tels sont-ils brevetables ?",
        options: [
            "Oui, systématiquement",
            "Non, jamais",
            "Non, sauf exception si le logiciel apporte une contribution technique",
            "Oui, mais seulement aux Etats-Unis"
        ],
        correctAnswer: "Non, sauf exception si le logiciel apporte une contribution technique",
        explanation: "En Europe, la brevetabilité des logiciels est limitée. Les logiciels 'en tant que tels' sont exclus de la brevetabilité, sauf s'ils apportent une 'contribution technique' à l'état de la technique, comme expliqué dans 'La brevetabilité du logiciel'."
    },
    {
        category: "Responsabilité du Prestataire Informatique",
        scenario: "Innovatech Solutions, prestataire informatique, propose une solution logicielle à un client. Le client rencontre des problèmes importants après la mise en œuvre.",
        question: "En cas de litige, quel type d'obligation pèse principalement sur Innovatech Solutions en tant que prestataire informatique, en matière d'information et de conseil envers son client ?",
        options: [
            "Obligation de résultat",
            "Obligation de moyens",
            "Obligation de garantie",
            "Obligation de confidentialité"
        ],
        correctAnswer: "Obligation de moyens",
        explanation: "En général, l'obligation d'information et de conseil du prestataire informatique est considérée comme une obligation de moyens, c'est-à-dire qu'il doit mettre en œuvre tous les moyens raisonnables pour informer et conseiller son client, sans garantir un résultat précis."
    },
    {
        category: "Responsabilité du Prestataire Informatique",
        scenario: "Avant la signature d'un contrat, Innovatech Solutions ne fournit pas toutes les informations nécessaires au client sur les limitations de la solution logicielle proposée.",
        question: "En cas de défaut d'information précontractuelle, quelle peut être la conséquence juridique pour Innovatech Solutions ?",
        options: [
            "Responsabilité délictuelle",
            "Responsabilité pénale",
            "Responsabilité contractuelle",
            "Aucune responsabilité si le contrat est signé"
        ],
        correctAnswer: "Responsabilité contractuelle",
        explanation: "Le défaut d'information précontractuelle peut engager la responsabilité contractuelle du prestataire informatique, même si le contrat est signé, car cela peut affecter le consentement éclairé du client."
    },
    {
        category: "Responsabilité du Prestataire Informatique",
        scenario: "Le client d'Innovatech Solutions ne coopère pas suffisamment et ne fournit pas les informations nécessaires pour la bonne réalisation du projet informatique.",
        question: "Le manquement du client à son devoir de collaboration peut-il exonérer partiellement ou totalement la responsabilité d'Innovatech Solutions en cas de problème ?",
        options: [
            "Non, jamais",
            "Oui, partiellement ou totalement, selon le degré de manquement du client",
            "Seulement si le contrat le prévoit explicitement",
            "Oui, uniquement partiellement"
        ],
        correctAnswer: "Oui, partiellement ou totalement, selon le degré de manquement du client",
        explanation: "Le devoir de collaboration du client est une obligation réciproque. Le manquement du client à ce devoir peut atténuer, voire exonérer, la responsabilité du prestataire informatique, si ce manquement a contribué au problème."
    },
    {
        category: "Intelligence Artificielle et IoT",
        scenario: "Innovatech Solutions développe des objets connectés pour la maison intelligente.",
        question: "Quels sont les principaux défis juridiques posés par le développement et l'usage des objets connectés (IoT) en matière de droit du numérique ?",
        options: [
            "Uniquement des problèmes de sécurité",
            "Uniquement des problèmes de propriété intellectuelle",
            "Des problèmes de sécurité, de vie privée et de responsabilité",
            "Aucun problème juridique spécifique"
        ],
        correctAnswer: "Des problèmes de sécurité, de vie privée et de responsabilité",
        explanation: "Les objets connectés (IoT) soulèvent des défis juridiques majeurs en matière de sécurité des données, de protection de la vie privée (collecte massive de données, captation d'images) et de responsabilité en cas de dysfonctionnement ou d'accident."
    },
    {
        category: "Intelligence Artificielle et IoT",
        scenario: "Innovatech Solutions utilise l'intelligence artificielle dans ses logiciels.",
        question: "Quel défi juridique majeur est posé par le développement de l'intelligence artificielle en matière de responsabilité ?",
        options: [
            "Faciliter l'identification du responsable en cas d'erreur",
            "Rendre plus simple l'application du droit d'auteur",
            "Complexifier l'attribution de responsabilité en cas de dommage",
            "Aucun défi particulier en matière de responsabilité"
        ],
        correctAnswer: "Complexifier l'attribution de responsabilité en cas de dommage",
        explanation: "L'autonomie croissante des systèmes d'IA complexifie l'attribution de responsabilité en cas de dommage, car il peut être difficile de déterminer qui est responsable (concepteur, utilisateur, IA elle-même)."
    }
];

export default questionsData;