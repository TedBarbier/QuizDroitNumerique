import React, { useState } from 'react';

function Question({ questionData, questionIndex, totalQuestions, onAnswerSubmit, userAnswer }) {
    const [selectedOption, setSelectedOption] = useState(userAnswer !== null ? userAnswer : null); // Initialize with userAnswer

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedOption !== null) {
            onAnswerSubmit(selectedOption);
        } else {
            alert("Veuillez sélectionner une réponse avant de soumettre ou passer.");
        }
    };

    const handleSkipQuestion = () => {
        onAnswerSubmit(null); // Pass null to indicate skipped question
        setSelectedOption(null); // Reset selected option for next question
    };

    return (
        <div className="question-card">
            <h3>Question {questionIndex + 1} / {totalQuestions}</h3>
            <p className="scenario">{questionData.scenario}</p>
            <p className="question-text">{questionData.question}</p>
            <form onSubmit={handleSubmit}>
                <ul className="options-list">
                    {questionData.options.map((option, index) => (
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
                <div className="question-buttons"> {/* Container for buttons */}
                    <button type="submit" disabled={selectedOption === null}>Soumettre la réponse</button>
                    <button type="button" className="skip-button" onClick={handleSkipQuestion}>Passer la question</button> {/* Skip button */}
                </div>

                {userAnswer !== null && ( // Show feedback if an answer has been submitted
                    <div className={selectedOption === questionData.correctAnswer ? "feedback correct" : "feedback incorrect"}>
                        {selectedOption === questionData.correctAnswer ? (
                            <p>Correct ! 🎉 {questionData.explanation}</p>
                        ) : (
                            <p>Incorrect. 😔 La bonne réponse est : <strong>{questionData.correctAnswer}</strong>. {questionData.explanation}</p>
                        )}
                    </div>
                )}
            </form>
        </div>
    );
}

export default Question;