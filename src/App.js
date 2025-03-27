import React, { useState } from 'react';
import Question from './components/Question';
import questionsData from './questionsData'; // We'll create this file

function App() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [userAnswers, setUserAnswers] = useState(Array(questionsData.length).fill(null)); // Track user answers

    const currentQuestion = questionsData[currentQuestionIndex];

    const handleAnswerSubmit = (selectedAnswer) => {
        const updatedUserAnswers = [...userAnswers];
        updatedUserAnswers[currentQuestionIndex] = selectedAnswer;
        setUserAnswers(updatedUserAnswers);

        if (selectedAnswer === currentQuestion.correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < questionsData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResults(true);
        }
    };

    const handleRestartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowResults(false);
        setUserAnswers(Array(questionsData.length).fill(null));
    };


    return (
        <div className="app">
            <h1>Droit du Numérique - Partiel d'Entraînement</h1>

            {showResults ? (
                <div className="results">
                    <h2>Résultats du Quiz</h2>
                    <p>Votre Score : {score} sur {questionsData.length}</p>
                    <button onClick={handleRestartQuiz}>Recommencer le Quiz</button>
                </div>
            ) : (
                <>
                    <p className="scenario-intro">
                        Bienvenue au partiel d'entraînement en Droit du Numérique d'Innovatech Solutions ! <br/>
                        Innovatech Solutions, une entreprise technologique dynamique, est confrontée à divers scénarios juridiques dans le monde numérique. <br/>
                        Répondez aux questions pour tester vos connaissances en "Droit du Numérique" et aider Innovatech à relever ces défis !
                    </p>
                    <Question
                        questionData={currentQuestion}
                        questionIndex={currentQuestionIndex}
                        totalQuestions={questionsData.length}
                        onAnswerSubmit={handleAnswerSubmit}
                        userAnswer={userAnswers[currentQuestionIndex]} // Pass user's current answer
                    />
                </>
            )}
        </div>
    );
}

export default App;