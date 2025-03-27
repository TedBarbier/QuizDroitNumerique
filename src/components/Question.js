import React, { useState, useEffect, useRef } from 'react';

// Helper function to shuffle array in place (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function Question({ questionData, questionIndex, totalQuestions, onAnswerSubmit, userAnswer }) {
    const [selectedOption, setSelectedOption] = useState(userAnswer !== null ? userAnswer : null); // Initialize to userAnswer
    const [shuffledOptions, setShuffledOptions] = useState([]); // State for shuffled options
    const correctAnswerIndexRef = useRef(null); // Ref to store correct answer index
    const [feedbackVisible, setFeedbackVisible] = useState(userAnswer !== null); // State to control feedback visibility

    useEffect(() => {
        setSelectedOption(null); // Reset selectedOption when questionIndex changes
        setFeedbackVisible(false); // Hide feedback when question changes

        // Create a copy of options and shuffle it
        const optionsCopy = [...questionData.options];
        shuffleArray(optionsCopy);
        setShuffledOptions(optionsCopy);

        // Find and store the index of the correct answer in the ORIGINAL options array
        correctAnswerIndexRef.current = questionData.options.indexOf(questionData.correctAnswer);

    }, [questionIndex, questionData.options, questionData.correctAnswer]); // Run effect when questionIndex or questionData.options changes


    const handleOptionChange = (e) => {
        const chosenOption = e.target.value;
        setSelectedOption(chosenOption);
        setFeedbackVisible(true); // Show feedback immediately on option selection
        onAnswerSubmit(chosenOption); // Submit answer immediately
    };


    const handleSkipQuestion = () => {
        onAnswerSubmit(null); // Pass null to indicate skipped question
        setSelectedOption(null); // Reset selected option
        setFeedbackVisible(false); // Hide feedback when skipping
    };


    // Function to get the correct answer from shuffled options using the stored index
    const getCorrectAnswerFromShuffled = () => {
        if (correctAnswerIndexRef.current !== null) {
            return shuffledOptions[correctAnswerIndexRef.current];
        }
        return questionData.correctAnswer; // Fallback in case of error
    };


    return (
        <div className="question-card">
            <h3>Question {questionIndex + 1} / {totalQuestions}</h3>
            <p className="scenario">{questionData.scenario}</p>
            <p className="question-text">{questionData.question}</p>
            <form /* No onSubmit here anymore */>
                <ul className="options-list">
                    {shuffledOptions.map((option, index) => ( // Use shuffledOptions for rendering
                        <li key={index}>
                            <label>
                                <input
                                    type="radio"
                                    name={`question-${questionIndex}`}
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={handleOptionChange} /* Call handleOptionChange directly */
                                />
                                {option}
                            </label>
                        </li>
                    ))}
                </ul>
                <div className="question-buttons">
                    {/* Removed Submit Button */}
                    <button type="button" className="skip-button" onClick={handleSkipQuestion}>Passer la question</button>
                </div>

                {feedbackVisible && ( // Conditionally render feedback based on feedbackVisible state
                    <div className={selectedOption === getCorrectAnswerFromShuffled() ? "feedback correct" : "feedback incorrect"}> {/* Compare with shuffled correct answer */}
                        {selectedOption === getCorrectAnswerFromShuffled() ? (
                            <p>Correct ! 🎉 {questionData.explanation}</p>
                        ) : (
                            <p>Incorrect. 😔 La bonne réponse est : <strong>{getCorrectAnswerFromShuffled()}</strong>. {questionData.explanation}</p>
                        )}
                    </div>
                )}
            </form>
        </div>
    );
}

export default Question;