import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Footer from './components/Footer';
import originalQuestionsData from './questionsData';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function App() {
    const [shuffledQuestionsData, setShuffledQuestionsData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [userAnswers, setUserAnswers] = useState(Array(originalQuestionsData.length).fill(null));

    useEffect(() => {
        const questionsCopy = [...originalQuestionsData];
        shuffleArray(questionsCopy);
        setShuffledQuestionsData(questionsCopy);
    }, []);

    const currentQuestion = shuffledQuestionsData[currentQuestionIndex];

    const handleAnswerSubmit = (selectedAnswer) => {
        const updatedUserAnswers = [...userAnswers];
        updatedUserAnswers[currentQuestionIndex] = selectedAnswer;
        setUserAnswers(updatedUserAnswers);

        if (selectedAnswer === currentQuestion.correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < shuffledQuestionsData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResults(true);
        }
    };

    const handleRestartQuiz = () => {
        const questionsCopy = [...originalQuestionsData];
        shuffleArray(questionsCopy);
        setShuffledQuestionsData(questionsCopy);

        setCurrentQuestionIndex(0);
        setScore(0);
        setShowResults(false);
        setUserAnswers(Array(originalQuestionsData.length).fill(null));
    };

    if (!shuffledQuestionsData || shuffledQuestionsData.length === 0) {
        return <div>Loading quiz...</div>;
    }

    return (
        <div className="app">
            <h1>Droit du Numérique - Partiel d'Entraînement</h1>

            {showResults ? (
                <div className="results">
                    <h2>Résultats du Quiz</h2>
                    <p>Votre Score : {score} sur {shuffledQuestionsData.length}</p>
                    <div className="results-review">
                        {shuffledQuestionsData.map((question, index) => (
                            <div key={index} className="result-question-card">
                                <h3>Question {index + 1}</h3>
                                <p className="scenario">{question.scenario}</p>
                                <p className="question-text">{question.question}</p>
                                <p>Votre réponse: <strong>{userAnswers[index] || "Non répondu"}</strong></p>
                                <p>Réponse correcte: <strong>{question.correctAnswer}</strong></p>
                                <p className="explanation">Explication: {question.explanation}</p>
                                {userAnswers[index] === question.correctAnswer ? (
                                    <p className="result-feedback correct">Correct 🎉</p>
                                ) : (
                                    <p className="result-feedback incorrect">Incorrect 😔</p>
                                )}
                            </div>
                        ))}
                    </div>
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
                        totalQuestions={shuffledQuestionsData.length}
                        onAnswerSubmit={handleAnswerSubmit}
                        userAnswer={userAnswers[currentQuestionIndex]}
                        score={score}
                    />
                </>
            )}
            <Footer />
        </div>
    );
}

export default App;