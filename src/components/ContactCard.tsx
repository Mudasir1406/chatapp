import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import images from '../constants/images';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

type IProps = {};

const ContactCard: React.FunctionComponent<IProps> = () => {
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
      <View style={styles.iconsContanier}>
        <View style={styles.iconBox}>
          <FontAwesome name="paper-plane" size={20} color={colors.gray} />
        </View>
        <View style={styles.iconBox}>
          <Feather name="phone" size={20} color={colors.gray} />
        </View>
      </View>
    </View>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  contanier: {
    marginHorizontal: 8,
    borderRadius: 40,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-between',
    marginTop: 2,
    borderBottomWidth: 1,
    borderBlockColor: colors.background1,
    paddingBottom: 20,
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
    color: colors.gray,
    fontWeight: '600',
    marginTop: 6,
  },
  iconsContanier: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.background1,
    marginLeft: 16,
  },
});
