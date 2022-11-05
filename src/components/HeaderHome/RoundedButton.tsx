import React, {FunctionComponent} from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {PropsButton} from './interfaces';

const RoundedButton: FunctionComponent<PropsButton> = ({action, title}) => {
  return (
    <Button mode="contained" style={styles.roudedButton} onPress={action}>
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({
  roudedButton: {
    borderRadius: 6,
    marginVertical: 12,
  },
});

export default RoundedButton;
