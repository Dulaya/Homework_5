import {View, Text} from 'react-native';
import React from 'react';
import {Button} from '../../dumb/button/Button';
import {styles} from './Quiz.style';

export function QuizView({
  data, 
  checkAnswer, 
  background,
  setBackground
}) {

  return (
    <View>
      <Text style={styles.question}>{data.question}</Text>
      {data.answers.map((currentAnswer, answerIndex) => (
        <View key={'answer-' + answerIndex} style={styles.answerContainer}>
          {/*onPress calls the checkAnswer function from Quiz.js*/}
          <Button 
            onPress={() => {
              checkAnswer(
                answerIndex, 
                data.correctAnswer,
                setBackground, 
                )}} 
            title={currentAnswer} 
            color={answerIndex === data.correctAnswer ? 
              // pass undefined for default color
              background : undefined} 
            data={data} 
          />
        </View>
      ))}
    </View>
  );
}
