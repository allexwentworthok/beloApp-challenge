import React, {FunctionComponent} from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {PropsButton} from './interfaces';

const RoundedButton: FunctionComponent<PropsButton> = ({
  action,
  title,
  disable,
}) => {
  return (
    <Button
      mode="contained"
      disabled={!disable ? false : disable}
      style={styles.roudedButton}
      onPress={action}>
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({
  roudedButton: {
    borderRadius: 6,
    width: 150,
    marginVertical: 12,
  },
});

export default RoundedButton;
