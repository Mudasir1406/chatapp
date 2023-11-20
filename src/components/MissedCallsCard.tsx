import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import images from '../constants/images';
import CallBack from './CallBack';

type IProps = {};

const MissedCallsCard: React.FunctionComponent<IProps> = () => {
  return (
    <View style={styles.contanier}>
      <View style={styles.infoContanier}>
        <View style={styles.imageContanier}>
          <Image source={images.user} style={styles.image} />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Robert James</Text>
          <Text style={styles.userEmail}>r.james93</Text>
        </View>
      </View>
      <CallBack />
    </View>
  );
};

export default MissedCallsCard;

const styles = StyleSheet.create({
  contanier: {
    backgroundColor: colors.secondary,
    marginHorizontal: 8,
    borderRadius: 40,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-between',
    shadowColor: colors.secondary,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginTop: 2,
  },
  infoContanier: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageContanier: {
    borderWidth: 2,
    borderColor: colors.background,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 23,
  },
  userInfo: {
    justifyContent: 'flex-start',
    marginLeft: 6,
  },
  userName: {
    fontSize: 14,
    color: colors.white,
    fontWeight: '600',
  },
  userEmail: {
    fontSize: 12,
    color: colors.white,
    fontWeight: '600',
    marginTop: 6,
  },
});
