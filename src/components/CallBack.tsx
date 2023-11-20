import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type IProps = {};

const CallBack: React.FunctionComponent<IProps> = () => {
  return (
    <View style={styles.contanier}>
      <View style={styles.icon}>
        <Icon name="phone-outline" color={colors.white} size={23} />
      </View>
      <Text style={styles.text}>Call back</Text>
    </View>
  );
};

export default CallBack;

const styles = StyleSheet.create({
  contanier: {
    backgroundColor: colors.background1,
    borderRadius: 30,
    flexDirection: 'row',
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingRight: 16,
  },
  icon: {
    backgroundColor: colors.green,
    width: 35,
    height: 35,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    marginLeft: 4,
    fontWeight: '700',
    fontSize: 12,
  },
});
