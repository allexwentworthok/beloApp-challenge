import React, {FunctionComponent} from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

interface Props {
  action: any;
  title: string;
}

const RoundedButton: FunctionComponent<Props> = ({action, title}) => {
  return (
    <Button mode="contained" style={styles.roudedButton} onPress={action}>
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({
  roudedButton: {
    borderRadius: 100,
    marginVertical: 12,
  },
});

export default RoundedButton;
