import {View, Text} from 'react-native';
import React from 'react';
import {Button} from '../../dumb/button/Button';
import {styles} from './Quiz.style';

export function QuizView({data, press, color, background}) {

  return (
    <View>
      <Text>{data.question}</Text>
      {data.answers.map((currentAnswer, index) => (
        <View key={'answer-' + index} style={styles.answerContainer}>
            {/*onPress calls the checkAnswer function from Quiz.js*/}
            {index === 0 ? 
              <Button 
                onPress={() => {press(index)}} 
                title={currentAnswer}  
                color={background} 
                data={data} 
              />
              : <Button 
                onPress={() => {press(index)}} 
                title={currentAnswer}  
                // Don't need to pass default color
                data={data} 
              />
            }
        </View>
      ))}
    </View>
  );
}
