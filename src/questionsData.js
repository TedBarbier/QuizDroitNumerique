const questionsData = [
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
    },
    {
        category: "Responsabilité du Prestataire Informatique - Limites de l'Obligation d'Information",
        scenario: "Innovatech Solutions, prestataire informatique, est poursuivi par un client pour défaut d'information. Le client était un expert en informatique et avait rédigé un cahier des charges très précis.",
        question: "Dans ce contexte, comment le niveau d'expertise du client et la présence d'un cahier des charges précis peuvent-ils impacter l'étendue de l'obligation d'information d'Innovatech Solutions ?",
        options: [
            "L'obligation d'information du prestataire est renforcée.",
            "L'obligation d'information du prestataire est inchangée.",
            "L'obligation d'information du prestataire peut être atténuée, voire limitée.",
            "L'obligation d'information devient une obligation de résultat."
        ],
        correctAnswer: "L'obligation d'information du prestataire peut être atténuée, voire limitée.",
        explanation: "L'expertise du client et un cahier des charges précis indiquent une capacité du client à comprendre ses besoins et les aspects techniques, ce qui peut atténuer l'obligation d'information du prestataire, qui reste une obligation de moyens, comme vu dans 'Les limites de l’obligation d’information'."
    },
    {
        category: "Sanctions pour Défaut d'Information",
        scenario: "Innovatech Solutions manque à son obligation d'information précontractuelle envers un client. Le contrat est signé, mais des problèmes surviennent lors de l'exécution.",
        question: "Quelle est la principale sanction encourue par Innovatech Solutions pour ce défaut d'information précontractuelle, une fois le contrat conclu et en phase d'exécution ?",
        options: [
            "Nullité du contrat pour vice du consentement.",
            "Responsabilité délictuelle du prestataire.",
            "Responsabilité contractuelle du prestataire.",
            "Responsabilité pénale pour tromperie."
        ],
        correctAnswer: "Responsabilité contractuelle du prestataire.",
        explanation: "Bien que le défaut d'information ait lieu en phase précontractuelle, la jurisprudence tend à engager la responsabilité contractuelle du prestataire une fois le contrat conclu, si ce défaut affecte l'exécution, comme expliqué dans 'Les sanctions pour défaut d’information'."
    },
    {
        category: "Droit d'Auteur des Logiciels - Originalité",
        scenario: "Innovatech Solutions développe un logiciel de gestion de base de données. Il utilise des algorithmes standards et des interfaces utilisateur classiques.",
        question: "Selon la jurisprudence Pachot, le logiciel d'Innovatech Solutions sera-t-il automatiquement protégé par le droit d'auteur, même en utilisant des éléments standards ?",
        options: [
            "Oui, tout logiciel est protégé par le droit d'auteur.",
            "Non, l'originalité est une condition nécessaire à la protection par le droit d'auteur.",
            "Oui, si le logiciel est déposé auprès de l'APP.",
            "Non, car les bases de données ont un régime de protection spécifique."
        ],
        correctAnswer: "Non, l'originalité est une condition nécessaire à la protection par le droit d'auteur.",
        explanation: "La jurisprudence Pachot précise que l'originalité d'un logiciel réside dans un effort personnalisé allant au-delà de la simple mise en œuvre d'une logique automatique et contraignante. Un logiciel utilisant des éléments standards pourrait manquer d'originalité et donc de protection par le droit d'auteur, comme vu dans 'Les conditions de la protection'."
    },
    {
        category: "Droit d'Auteur des Logiciels - Objet de la Protection",
        scenario: "Innovatech Solutions a une idée révolutionnaire pour un nouveau logiciel de réseau social. Ils souhaitent protéger cette idée avant même de développer le code.",
        question: "Le droit d'auteur sur les logiciels protège-t-il l'idée à la base du logiciel, ou uniquement la forme concrète que prend cette idée ?",
        options: [
            "Le droit d'auteur protège l'idée et sa mise en forme.",
            "Le droit d'auteur protège uniquement l'idée révolutionnaire.",
            "Le droit d'auteur protège uniquement la mise en forme du logiciel (code source, etc.).",
            "L'idée peut être protégée par brevet, mais pas par droit d'auteur."
        ],
        correctAnswer: "Le droit d'auteur protège uniquement la mise en forme du logiciel (code source, etc.).",
        explanation: "Le droit d'auteur ne protège pas les idées en tant que telles, mais uniquement l'expression de ces idées, c'est-à-dire la mise en forme concrète du logiciel (code source, interfaces, etc.), comme expliqué dans 'L’objet de la protection'."
    },
    {
        category: "Droit d'Auteur des Logiciels - Droits Moraux",
        scenario: "Un développeur salarié d'Innovatech Solutions crée un logiciel. L'entreprise souhaite modifier ce logiciel sans mentionner le nom du développeur.",
        question: "Innovatech Solutions peut-il légalement modifier le logiciel sans citer le nom du développeur, au regard des droits moraux de l'auteur ?",
        options: [
            "Oui, l'employeur a tous les droits sur le logiciel.",
            "Non, le droit moral au nom du développeur doit être respecté.",
            "Oui, si le contrat de travail le prévoit.",
            "Non, le développeur conserve tous les droits moraux et patrimoniaux."
        ],
        correctAnswer: "Non, le droit moral au nom du développeur doit être respecté.",
        explanation: "Bien que les droits patrimoniaux soient dévolus à l'employeur, le développeur salarié conserve ses droits moraux, notamment le droit au nom, qui impose de citer son nom comme auteur du logiciel, comme vu dans 'Les droits moraux'."
    },
    {
        category: "Droit d'Auteur des Logiciels - Brevetabilité en Europe",
        scenario: "Innovatech Solutions a développé un algorithme logiciel qui améliore significativement l'efficacité énergétique des serveurs.",
        question: "Cette invention logicielle, apportant une contribution technique concrète, pourrait-elle être brevetée en Europe, malgré l'exclusion des logiciels de la brevetabilité ?",
        options: [
            "Non, les logiciels ne sont jamais brevetables en Europe.",
            "Oui, si elle apporte une contribution technique et remplit les critères de brevetabilité.",
            "Oui, car l'efficacité énergétique est un critère de brevetabilité spécifique.",
            "Non, car elle concerne le domaine de l'informatique."
        ],
        correctAnswer: "Oui, si elle apporte une contribution technique et remplit les critères de brevetabilité.",
        explanation: "En Europe, bien que les logiciels 'en tant que tels' soient exclus, une invention logicielle apportant une 'contribution technique' à l'état de la technique, comme une amélioration de l'efficacité énergétique, peut être brevetable si elle remplit les autres critères (nouveauté, activité inventive, application industrielle), comme expliqué dans 'La brevetabilité du logiciel'."
    },
    {
        category: "Cybercriminalité - Atteintes aux Systèmes",
        scenario: "Un ancien employé d'Innovatech Solutions, sans autorisation, accède au système informatique de l'entreprise pour consulter d'anciens emails.",
        question: "Quel type d'infraction de cybercriminalité cet ancien employé commet-il principalement, au regard des atteintes aux systèmes de traitement automatisé de données ?",
        options: [
            "Atteinte à l'intégrité des données.",
            "Entrave au fonctionnement du système.",
            "Accès et maintien frauduleux dans un STAD.",
            "Introduction frauduleuse de données."
        ],
        correctAnswer: "Accès et maintien frauduleux dans un STAD.",
        explanation: "L'accès et le maintien frauduleux dans un Système de Traitement Automatisé de Données (STAD) sans autorisation constituent l'infraction principale dans ce cas, même sans altération ou intention de nuire, comme vu dans 'Les atteintes aux systèmes'."
    },
    {
        category: "Cybercriminalité - Atteintes aux Données",
        scenario: "Un concurrent d'Innovatech Solutions pirate le système informatique de l'entreprise et supprime des fichiers de données clients importants.",
        question: "Quel type d'infraction de cybercriminalité ce concurrent commet-il principalement, au regard des atteintes aux données ?",
        options: [
            "Accès et maintien frauduleux.",
            "Entrave au fonctionnement du système.",
            "Suppression ou modification frauduleuse de données.",
            "Collecte illégale de données personnelles."
        ],
        correctAnswer: "Suppression ou modification frauduleuse de données.",
        explanation: "La suppression frauduleuse de données contenues dans un système informatique constitue une infraction spécifique de cybercriminalité, distincte de l'accès frauduleux, comme vu dans 'Atteintes volontaires aux données indépendamment de l’accès ou du maintien frauduleux'."
    },
    {
        category: "Cybercriminalité - Responsabilité Pénale",
        scenario: "Un employé d'Innovatech Solutions est reconnu coupable d'accès frauduleux au système informatique de l'entreprise.",
        question: "Outre l'emprisonnement et l'amende, quelles peines complémentaires cet employé peut-il également encourir, selon le Code pénal ?",
        options: [
            "Uniquement une interdiction d'exercer une fonction publique.",
            "Uniquement une confiscation du matériel utilisé.",
            "Des peines complémentaires variées, incluant interdiction de droits civiques, fermeture d'établissement, etc.",
            "Aucune peine complémentaire en matière de cybercriminalité."
        ],
        correctAnswer: "Des peines complémentaires variées, incluant interdiction de droits civiques, fermeture d'établissement, etc.",
        explanation: "Le Code pénal prévoit un large éventail de peines complémentaires pour les infractions de cybercriminalité, allant de l'interdiction de droits civiques à la fermeture d'établissements, comme détaillé dans 'Atteintes volontaires aux données indépendamment de l’accès ou du maintien frauduleux'."
    },
    {
        category: "Blockchain - Définition et Fonctionnement",
        scenario: "Innovatech Solutions s'intéresse à la technologie blockchain pour sécuriser des transactions.",
        question: "Quelle est la caractéristique principale de la blockchain qui assure la sécurité et l'intégrité des transactions enregistrées ?",
        options: [
            "La centralisation des données dans un serveur unique.",
            "Le cryptage des données et la validation distribuée des transactions.",
            "L'anonymat complet des utilisateurs.",
            "La rapidité des transactions, sans vérification."
        ],
        correctAnswer: "Le cryptage des données et la validation distribuée des transactions.",
        explanation: "La blockchain repose sur la cryptographie pour sécuriser les données et un mécanisme de validation distribuée des transactions par les utilisateurs du réseau (mineurs), garantissant ainsi l'intégrité et la sécurité, comme expliqué dans 'Définition et explication'."
    },
    {
        category: "Blockchain - Applications",
        scenario: "Innovatech Solutions souhaite utiliser la blockchain au-delà des cryptomonnaies, par exemple pour la traçabilité de produits.",
        question: "Parmi les applications suivantes de la blockchain, laquelle correspond à une utilisation en tant que registre pour améliorer la traçabilité ?",
        options: [
            "Transfert de bitcoins.",
            "Création de smart contracts.",
            "Certification de diplômes.",
            "Suivi de la chaîne d'approvisionnement."
        ],
        correctAnswer: "Suivi de la chaîne d'approvisionnement.",
        explanation: "L'utilisation de la blockchain comme registre permet d'assurer une meilleure traçabilité des produits en enregistrant de manière immuable et transparente toutes les étapes de la chaîne d'approvisionnement, comme vu dans 'Le potentiel de la Blockchain'."
    },
    {
        category: "Blockchain - Smart Contracts",
        scenario: "Innovatech Solutions développe des 'smart contracts' basés sur la blockchain.",
        question: "Quelle est la caractéristique principale des 'smart contracts' qui les distingue des contrats traditionnels ?",
        options: [
            "Ils sont rédigés en langage juridique complexe.",
            "Ils s'exécutent automatiquement lorsque les conditions sont remplies, sans intervention humaine.",
            "Ils nécessitent l'intervention d'un notaire pour être valides.",
            "Ils ne sont pas opposables devant les tribunaux."
        ],
        correctAnswer: "Ils s'exécutent automatiquement lorsque les conditions sont remplies, sans intervention humaine.",
        explanation: "Les smart contracts sont des programmes informatiques autonomes qui exécutent automatiquement les termes d'un contrat une fois que les conditions prédéfinies sont remplies, sans nécessiter d'intervention humaine, comme expliqué dans 'Le potentiel de la Blockchain'."
    },
    {
        category: "Preuve Electronique - Recevabilité",
        scenario: "Innovatech Solutions produit en justice des captures d'écran de messages diffamatoires publiés sur un réseau social par un concurrent.",
        question: "Le juge doit-il automatiquement accepter ces captures d'écran comme preuve, ou peut-il en apprécier la recevabilité et la force probante ?",
        options: [
            "Le juge doit automatiquement accepter les captures d'écran.",
            "Le juge peut refuser les captures d'écran comme preuve.",
            "Le juge apprécie souverainement la recevabilité et la force probante des captures d'écran.",
            "Seules les captures d'écran certifiées par un expert sont recevables."
        ],
        correctAnswer: "Le juge apprécie souverainement la recevabilité et la force probante des captures d'écran.",
        explanation: "En matière de preuve électronique, le juge conserve un pouvoir souverain d'appréciation de la recevabilité et de la force probante des éléments produits, tels que des captures d'écran, en tenant compte du contexte et des principes de loyauté et de fiabilité, comme vu dans 'La recevabilité des modes de preuve'."
    },
    {
        category: "Signature Electronique - Conditions de Fiabilité",
        scenario: "Innovatech Solutions utilise une signature électronique simple pour valider des documents internes.",
        question: "Une signature électronique simple bénéficie-t-elle de la même présomption de fiabilité qu'une signature électronique qualifiée, au sens du droit français ?",
        options: [
            "Oui, toutes les signatures électroniques ont la même valeur juridique.",
            "Non, seule la signature électronique qualifiée bénéficie d'une présomption de fiabilité.",
            "Oui, si elle est apposée par un dirigeant de l'entreprise.",
            "Non, la signature simple n'a aucune valeur juridique."
        ],
        correctAnswer: "Non, seule la signature électronique qualifiée bénéficie d'une présomption de fiabilité.",
        explanation: "Seule la signature électronique qualifiée, qui repose sur un certificat qualifié et un dispositif sécurisé de création de signature, bénéficie d'une présomption de fiabilité en droit français. La signature simple est recevable comme preuve, mais sa fiabilité doit être prouvée, comme expliqué dans 'Les conditions de fiabilité de la signature électronique'."
    },
    {
        category: "Archivage Numérique - Valeur Juridique",
        scenario: "Innovatech Solutions souhaite archiver numériquement ses contrats clients pour des raisons de simplification et d'économies.",
        question: "L'archivage électronique de documents, réalisé dans les règles de l'art, permet-il de conserver la même valeur juridique que l'archivage papier, notamment en cas de contrôle ou de litige ?",
        options: [
            "Non, seuls les documents papier ont une valeur juridique.",
            "Oui, l'archivage électronique a la même valeur juridique que l'archivage papier sous conditions.",
            "Non, l'archivage électronique n'est pas reconnu par la loi française.",
            "Oui, systématiquement et sans conditions."
        ],
        correctAnswer: "Oui, l'archivage électronique a la même valeur juridique que l'archivage papier sous conditions.",
        explanation: "L'archivage électronique, réalisé dans le respect des normes et des conditions de sécurité et de fiabilité, permet de conférer aux documents numériques la même valeur juridique que les originaux papier, notamment en termes de preuve, comme vu dans 'L’archivage numérique'."
    },
    {
        category: "Open Innovation - Modèles Economiques",
        scenario: "Innovatech Solutions souhaite adopter un modèle économique 'freemium' pour son nouveau logiciel.",
        question: "Quel est le principe du modèle économique 'freemium' dans le contexte de l'open innovation et des logiciels ?",
        options: [
            "Logiciel entièrement gratuit et open source.",
            "Logiciel payant avec code source fermé.",
            "Logiciel avec une version de base gratuite et des fonctionnalités avancées payantes.",
            "Logiciel dont le prix est libre et déterminé par l'utilisateur."
        ],
        correctAnswer: "Logiciel avec une version de base gratuite et des fonctionnalités avancées payantes.",
        explanation: "Le modèle 'freemium' consiste à proposer une version de base d'un logiciel ou d'un service gratuitement, afin d'attirer un large public, et à monétiser des fonctionnalités avancées ou des services complémentaires payants, comme vu dans 'Les modèles économiques'."
    },
    {
        category: "Open Innovation - Défis Juridiques",
        scenario: "Innovatech Solutions hésite à s'engager dans l'open innovation, craignant un manque de sécurité juridique pour ses innovations.",
        question: "L'open innovation implique-t-elle nécessairement un manque de sécurité juridique pour les entreprises, notamment en matière de propriété intellectuelle ?",
        options: [
            "Oui, l'open innovation est incompatible avec la propriété intellectuelle.",
            "Non, l'open innovation peut être encadrée juridiquement, notamment par les licences libres et ouvertes.",
            "Oui, car le partage des innovations rend leur protection impossible.",
            "Non, la sécurité juridique est renforcée en open innovation."
        ],
        correctAnswer: "Non, l'open innovation peut être encadrée juridiquement, notamment par les licences libres et ouvertes.",
        explanation: "Contrairement à une idée reçue, l'open innovation n'implique pas un manque de sécurité juridique. Les licences libres et ouvertes offrent un cadre juridique adapté pour encadrer le partage et la collaboration, tout en protégeant les droits des créateurs, comme vu dans 'Aspects juridiques de l’open innovation'."
    },
    {
        category: "Droit à l'Image - Personnes Publiques",
        scenario: "Un magazine people publie des photos d'un dirigeant d'Innovatech Solutions en vacances à la plage, sans son autorisation.",
        question: "Le droit à l'image du dirigeant est-il automatiquement limité du fait de sa notoriété publique, justifiant la publication de ces photos sans son consentement ?",
        options: [
            "Oui, les personnes publiques n'ont pas de droit à l'image.",
            "Non, les personnes publiques conservent un droit à l'image, mais avec des limites.",
            "Oui, si les photos sont prises dans un lieu public.",
            "Non, le droit à l'image est absolu pour tous."
        ],
        correctAnswer: "Non, les personnes publiques conservent un droit à l'image, mais avec des limites.",
        explanation: "Même les personnes publiques conservent un droit à l'image et au respect de leur vie privée. Cependant, ce droit est limité par le droit à l'information du public. La jurisprudence recherche un équilibre entre ces droits, comme vu dans 'Le droit à l’image'."
    },
    {
        category: "Droit à l'Image - Information Légitime",
        scenario: "Un journal publie une photo d'un employé d'Innovatech Solutions arrêté par la police dans le cadre d'une enquête pour fraude.",
        question: "La publication de cette photo, sans le consentement de l'employé, peut-elle être justifiée au nom du droit à l'information légitime du public ?",
        options: [
            "Non, la vie privée prime toujours.",
            "Oui, si l'arrestation est d'intérêt public et la photo illustre l'information.",
            "Non, car il s'agit d'une affaire judiciaire.",
            "Oui, car l'employé a commis une infraction."
        ],
        correctAnswer: "Oui, si l'arrestation est d'intérêt public et la photo illustre l'information.",
        explanation: "Le droit à l'image peut être limité au nom du droit à l'information légitime du public. La publication d'une photo illustrant une information d'intérêt public, comme une arrestation dans une affaire de fraude, peut être justifiée, sous certaines conditions d'équilibre et de proportionnalité, comme vu dans 'Le droit à l’image'."
    }
];

export default questionsData;