import React,{useState} from 'react';
import {QuizView} from './Quiz.view';

export function Quiz() {

  const [state, setState] = useState({
    background: 'red'
  });

  const { background } = state;

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

  const { correctAnswer } = mockData;

  const green = '#00C897';

  // This function is passed down to <Button/ > component in Quiz.view.js
  const checkAnswer = index => {

    // console.log("I'm checking the answer", index);

    if (index === correctAnswer) {
      alert('Correct!');
      // Change state to green
      setState(prevState => ({
        ...prevState, 
        background: green,
      }));
    }

    else {
      alert('Wrong answer.');
      // Change state to red
      setState(prevState => ({
        ...prevState, 
        background: 'red',
      }));
    }

  };

  return <>
       <QuizView 
       data={mockData} 
       press={checkAnswer}  
       background={background}
       />
  </>;
}
