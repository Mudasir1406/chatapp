import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BlurView} from '@react-native-community/blur';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
type IProps = {
  count: number;
  text: string;
  color: string;
};
const {width} = Dimensions.get('window');
const NewMessages: React.FunctionComponent<IProps> = ({count, text, color}) => {
  return (
    <View style={styles.viewcontanier}>
      <View style={styles.countContanier}>
        <Text style={{color: color, fontWeight: '800', fontSize: 12}}>
          {count}
        </Text>
      </View>
      <Text style={{color: color, fontWeight: '800', fontSize: 12}}>
        {text}
      </Text>
      <Icon name="arrow-forward-ios" style={[styles.icon, {color: color}]} />
    </View>
  );
};

export default NewMessages;

const styles = StyleSheet.create({
  viewcontanier: {
    width: 200,

    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#303851',
    paddingRight: 8,
    marginHorizontal: 4,
  },
  countContanier: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#424D67',
  },
  icon: {},
});
