import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const style = {
  container: {
    marginHorizontal: 20,
    marginVertical: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: '#ff0000',
    borderRadius: 20,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
};

export const Button = ({title, color = '#ff0000', size, ...rest}) => {

  return (
    <TouchableOpacity style={[style.container, {backgroundColor: color}]} {...rest}>
      <Text style={style.title}> {title}</Text>
    </TouchableOpacity>
  );
};
