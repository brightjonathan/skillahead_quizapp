import React, { useState, useEffect } from 'react';
import './Quizapp.css';
import { questions } from './Questions';

const QuizApp = () => {
    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(questions[0].timer);
    const [quizComplete, setQuizComplete] = useState(false);
  
    useEffect(() => {
      const timer = setInterval(() => {
        if (timeLeft > 0) {
          setTimeLeft(timeLeft - 1);
        } else {
          handleNextQuestion();
        }
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, [timeLeft]);
  
    const handleOptionSelect = (option) => {
      if (selectedOption === option) {
        // Deselect the selected option if clicked again
        setSelectedOption('');
      } else {
        // Select the clicked option
        setSelectedOption(option);
      }
    };
  
    const handleNextQuestion = () => {
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
  
      setSelectedOption('');
      if (currentQuestion + 1 < questions.length) {
        setTimeLeft(questions[currentQuestion + 1].timer);
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // If all questions are answered, show the total score
        setQuizComplete(true);
      }
    };
  
    const renderOptions = () => {
      return questions[currentQuestion].options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleOptionSelect(option)}
          className={`option ${
            selectedOption === option ? 'selected' : selectedOption === '' ? '' : 'unselected'
          }`}
        >
          {option}
        </button>
      ));
    };
  
    const renderQuizContent = () => {
      if (quizComplete) {
        return (
          <div className="quiz-container">
            <h1 className="">Quiz Completed!</h1>
            <p className="scoresheet">
              Your Total Score: {score} out of {questions.length}
            </p>
            <p className="totalScore">
              Your Total score is: <span className="score">{score}</span>
            </p>
          </div>
        );
      } else {
        return (
          <div>
            <h1>Quiz App</h1>
            <p className="">Question {currentQuestion + 1}</p>
            <p className="">Time Left: {timeLeft} seconds</p>
            <h2 className="questions">{questions[currentQuestion].questionText}</h2>
            {renderOptions()}
            <button
              onClick={handleNextQuestion}
              disabled={selectedOption === ''}
              className="next-button"
            >
              Next
            </button>
          </div>
        );
      }
    };

    useEffect(() => {
        // Add a confirmation prompt when the user tries to refresh or close the page
        const handleBeforeUnload = (e) => {
          e.preventDefault();
          e.returnValue = '';
        };
    
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, []);
  
    return <div className="quiz-container">{renderQuizContent()}</div>;
  };
  
  export default QuizApp;
