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
    const [userAnswer, setUserAnswer] = useState(null);
    useEffect(() => {
        const questionsCopy = [...originalQuestionsData];
        shuffleArray(questionsCopy);
        setShuffledQuestionsData(questionsCopy);
    }, []);

    const handleAnswerSubmit = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setUserAnswer(null);
    };

    if (!shuffledQuestionsData || shuffledQuestionsData.length === 0) {
        return <div>Loading quiz...</div>;
    }

    return (
        <div className="app">
            <h1>Droit du Numérique - Partiel d'Entraînement</h1>

            {currentQuestionIndex < shuffledQuestionsData.length ? (
                <>
                    <p className="scenario-intro">
                        Bienvenue au partiel d'entraînement en Droit du Numérique d'Innovatech Solutions ! <br/>
                        Innovatech Solutions, une entreprise technologique dynamique, est confrontée à divers scénarios juridiques dans le monde numérique. <br/>
                        Répondez aux questions pour tester vos connaissances en "Droit du Numérique" et aider Innovatech à relever ces défis !
                    </p>
                    <Question
                        questionData={shuffledQuestionsData[currentQuestionIndex]}
                        questionIndex={currentQuestionIndex}
                        totalQuestions={shuffledQuestionsData.length}
                        onAnswerSubmit={handleAnswerSubmit}
                        onNextQuestion={handleNextQuestion}
                        userAnswer={userAnswer}
                        score={score}
                    />
                </>
            ) : (
                <div className="results">
                    <h2>Quiz Completed!</h2>
                    <p>Your score: {score} / {shuffledQuestionsData.length}</p>
                    <button onClick={() => {
                        const questionsCopy = [...originalQuestionsData];
                        shuffleArray(questionsCopy);
                        setShuffledQuestionsData(questionsCopy);
                        setCurrentQuestionIndex(0);
                        setScore(0);
                        setUserAnswer(null);
                    }}>Recommencer le Quiz</button>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default App;