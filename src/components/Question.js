import React, { useState, useEffect } from 'react';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getCorrectAnswerFromShuffled(shuffledOptions, correctAnswer) {
    return shuffledOptions.find(option => option === correctAnswer);
}

function Question({ questionData, questionIndex, totalQuestions, onAnswerSubmit, onNextQuestion, userAnswer, setUserAnswer, score }) {
    const [showResult, setShowResult] = useState(false);
    const [shuffledOptions, setShuffledOptions] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const options = [...questionData.options];
        shuffleArray(options);
        setShuffledOptions(options);
        setIsSubmitted(false);
    }, [questionData]);

    const handleAnswerSubmit = () => {
        const correctAnswer = getCorrectAnswerFromShuffled(shuffledOptions, questionData.correctAnswer);
        const isCorrect = userAnswer === correctAnswer;
        onAnswerSubmit(isCorrect);
        setShowResult(true);
        setIsSubmitted(true);
    };

    return (
        <div>
            <h2>Question {questionIndex + 1} of {totalQuestions}</h2>
            <p>{questionData.question}</p>
                    {shuffledOptions.map((option, index) => (
                <div key={index}>
                    <input
                        type="radio"
                        id={`option-${index}`}
                        name="answer"
                        value={option}
                        checked={userAnswer === option}
                        onChange={() => setUserAnswer(option)}
                        disabled={isSubmitted}
                    />
                    <label htmlFor={`option-${index}`}>{option}</label>
                </div>
            ))}
            <button onClick={handleAnswerSubmit} disabled={isSubmitted}>Submit Answer</button>
                {showResult && (
                <div>
                    <p>{userAnswer === getCorrectAnswerFromShuffled(shuffledOptions, questionData.correctAnswer) ? 'Correct!' : 'Incorrect!'}</p>
                    <button className="next-button" onClick={() => {
                            setShowResult(false);
                            onNextQuestion();
                        }}>Next Question</button>
                    </div>
                )}
        </div>
    );
}

export default Question;