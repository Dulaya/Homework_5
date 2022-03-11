import React,{useState} from 'react';
import {QuizView} from './Quiz.view';

export function Quiz() {

  const [background, setBackground] = useState();

  // mock
  const mockData = {
    question: 'Which method add new element at end of array?',
    answers: [
      '.push()',
      '.map()',
      '.concat()',
      '.reduce()',
      '.add()'
    ],
    correctAnswer: 0,
  };

  // This function is passed down to <Button/ > component in Quiz.view.js
  const checkAnswer = (
    userInputIndex, 
    correctAnswerIndex,
    _setBackground,
    wrongColor
    ) => {

    if (userInputIndex === correctAnswerIndex) {
      alert('Correct!');
      _setBackground('green');
    }
    else {
      alert('Wrong answer.');
      _setBackground(wrongColor);
    }
    
  };

  return <>
       <QuizView 
       data={mockData} 
       checkAnswer={checkAnswer}  
       setBackground={setBackground}
       background={background}
       />
  </>;
}
