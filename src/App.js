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
            <h1>Droit du Numérique - Training Partial</h1>

            {showResults ? (
                <div className="results">
                    <h2>Quiz Results</h2>
                    <p>Your Score: {score} out of {questionsData.length}</p>
                    <button onClick={handleRestartQuiz}>Restart Quiz</button>
                </div>
            ) : (
                <>
                    <p className="scenario-intro">
                        Welcome to the Innovatech Solutions Digital Law Training Quiz! <br/>
                        Innovatech Solutions, a dynamic tech company, is facing various legal scenarios in the digital world. <br/>
                        Answer the questions to test your knowledge of "Droit du Numérique" and help Innovatech navigate these challenges!
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