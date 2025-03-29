import React, { useState, useEffect, useRef } from 'react';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function Question({ questionData, questionIndex, totalQuestions, onAnswerSubmit, userAnswer, score }) {
    const [selectedOption, setSelectedOption] = useState(userAnswer !== null ? userAnswer : null);
    const [shuffledOptions, setShuffledOptions] = useState([]);
    const correctAnswerIndexRef = useRef(null);
    const [feedbackVisible, setFeedbackVisible] = useState(false);

    useEffect(() => {
        setSelectedOption(null);
        setFeedbackVisible(false);
        const optionsCopy = [...questionData.options];
        shuffleArray(optionsCopy);
        setShuffledOptions(optionsCopy);

        correctAnswerIndexRef.current = questionData.options.indexOf(questionData.correctAnswer);

    }, [questionIndex, questionData.options, questionData.correctAnswer]);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleAnswerSubmit = () => {
        const isCorrect = selectedOption === questionData.correctAnswer;
        onAnswerSubmit(isCorrect);
        setFeedbackVisible(true);
    };

    const handleSkipQuestion = () => {
        onAnswerSubmit(null);
        setSelectedOption(null);
        setFeedbackVisible(false);
    };

    const getCorrectAnswerFromShuffled = () => {
        if (correctAnswerIndexRef.current !== null) {
            return shuffledOptions[correctAnswerIndexRef.current];
        }
        return questionData.correctAnswer;
    };

    return (
        <div className="question-card">
            <h3>Question {questionIndex + 1} / {totalQuestions}</h3>
            <p className="scenario">{questionData.scenario}</p>
            <p className="question-text">{questionData.question}</p>
            <form onSubmit={(e) => { e.preventDefault(); handleAnswerSubmit(); }}>
                <ul className="options-list">
                    {shuffledOptions.map((option, index) => (
                        <li key={index}>
                            <label>
                                <input
                                    type="radio"
                                    name={`question-${questionIndex}`}
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={handleOptionChange}
                                />
                                {option}
                            </label>
                        </li>
                    ))}
                </ul>
                <div className="question-buttons">
                    <button type="submit" disabled={selectedOption === null}>Soumettre la réponse</button>
                    <button type="button" className="skip-button" onClick={handleSkipQuestion}>Passer la question</button>
                </div>

                {feedbackVisible && (
                    <div className={selectedOption === getCorrectAnswerFromShuffled() ? "feedback correct" : "feedback incorrect"}>
                        {selectedOption === getCorrectAnswerFromShuffled() ? (
                            <p>Correct ! 🎉 {questionData.explanation}</p>
                        ) : (
                            <p>Incorrect. 😔 La bonne réponse est : <strong>{getCorrectAnswerFromShuffled()}</strong>. {questionData.explanation}</p>
                        )}
                        <p className="current-score">Score actuel : {score} / {questionIndex + 1}</p>
                    </div>
                )}
            </form>
        </div>
    );
}

export default Question;