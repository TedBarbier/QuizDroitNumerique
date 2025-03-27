const questionsData = [
    {
        scenario: "Innovatech Solutions is developing a new AI-powered software for medical diagnosis. They are considering using cloud services to store patient data and run their algorithms.",
        question: "Which type of cloud deployment would best align with the principles of 'Cloud Souverain' and French legal requirements for sensitive data like patient information?",
        options: [
            "Public Cloud",
            "Private Cloud",
            "Hybrid Cloud",
            "Sovereign Cloud"
        ],
        correctAnswer: "Sovereign Cloud",
        explanation: "A Sovereign Cloud ensures that data is hosted and processed within the national territory and under French law, crucial for sensitive data as emphasized in the course material."
    },
    {
        scenario: "Innovatech Solutions wants to protect their newly developed software's source code from unauthorized copying and distribution.",
        question: "What primary legal mechanism in France protects software source code?",
        options: [
            "Patents",
            "Trademarks",
            "Copyright",
            "Trade Secrets"
        ],
        correctAnswer: "Copyright",
        explanation: "In France, software is primarily protected by copyright law, as discussed in the 'Protection des logiciels par le droit d’auteur' section of the course."
    },
    {
        scenario: "An employee at Innovatech Solutions is using company internet access extensively for personal online shopping during work hours.  The company monitors internet usage to ensure productivity and security.",
        question: "Under French law, what are the key limitations on Innovatech Solutions' ability to monitor employee internet usage?",
        options: [
            "No limitations if company policy is clear",
            "Monitoring is only allowed with employee consent",
            "Monitoring must be transparent, loyal, justified, and proportionate to the goal",
            "Monitoring is completely prohibited to protect employee privacy"
        ],
        correctAnswer: "Monitoring must be transparent, loyal, justified, and proportionate to the goal",
        explanation: "French labor law (Code du Travail), as covered in 'La cybersurveillance des salariés dans l’entreprise', requires employer monitoring to be transparent, loyal, justified by the task, and proportionate to the desired outcome, respecting employee rights."
    },
    // ... ADD AT LEAST 27 MORE QUESTIONS HERE based on your PDF content ...
];

export default questionsData;