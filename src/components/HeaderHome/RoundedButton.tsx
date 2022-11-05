import React, {FunctionComponent} from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {LIGTH_THEME} from '../../theme/colors';

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
    width: '30%',
    borderRadius: 100,
    marginVertical: 12,
    backgroundColor: LIGTH_THEME.secondary,
  },
});

export default RoundedButton;
