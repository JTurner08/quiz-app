import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Options are a derivative of?',
			answerOptions: [
				{ answerText: 'Bonds', isCorrect: false },
				{ answerText: 'Futures', isCorrect: false },
				{ answerText: 'Stocks', isCorrect: true },
				{ answerText: 'Foreign Exchange', isCorrect: false },
			],
		},
		{
			questionText: 'Who regulates the financial markets?',
			answerOptions: [
				{ answerText: 'Food and Drug Administration', isCorrect: false },
				{ answerText: 'Securities and Exchange commision', isCorrect: true },
				{ answerText: 'American Heart Association', isCorrect: false },
				{ answerText: 'Federal Deposit Insurance Corporation', isCorrect: false },
			],
		},
		{
			questionText: 'A bear market occurs when?',
			answerOptions: [
				{ answerText: 'Securities prices fall 20% or more', isCorrect: false },
				{ answerText: 'when a market experiences prolonged price declines', isCorrect: false },
				{ answerText: 'widespread pessimism and negative investor sentiment.', isCorrect: false },
				{ answerText: 'All of the Above', isCorrect: true },
			],
		},
		{
			questionText: 'What is the most liquid market in the world?',
			answerOptions: [
				{ answerText: 'Stocks', isCorrect: false },
				{ answerText: 'Bonds', isCorrect: false },
				{ answerText: 'Futures', isCorrect: false },
				{ answerText: 'Forex', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}