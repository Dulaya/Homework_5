import React,{useState} from 'react';
import {QuizView} from './Quiz.view';

export function Quiz() {

  const [background, setBackground] = useState();

  // mock
  const mockData = {
    question: 'What const is doing?',
    answers: [
      'Create variable',
      'define function',
      'Shot down computer',
      'And one more stupid idea',
    ],
    correctAnswer: 0,
  };

  // This function is passed down to <Button/ > component in Quiz.view.js
  const checkAnswer = (
    answerIndex, 
    correctAnswerIndex,
    _setBackground,
    wrongColor
    ) => {

    if (answerIndex === correctAnswerIndex) {
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
