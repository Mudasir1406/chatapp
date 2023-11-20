import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../constants/images';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

type IProps = {};

const ChatsHeader: React.FunctionComponent<IProps> = () => {
  return (
    <View style={styles.contanier}>
      <View style={styles.imageContanier}>
        <Image source={images.user} style={styles.userImage} />
        <Text style={styles.text}>Hello, Patrick</Text>
      </View>
      <View style={styles.imageContanier}>
        <View style={styles.iconContanier}>
          <Icon name="search-outline" style={styles.icon} size={25} />
        </View>
        <View style={styles.iconContanier}>
          <Fontisto name="plus-a" style={styles.icon} size={20} />
        </View>
      </View>
    </View>
  );
};

export default ChatsHeader;

const styles = StyleSheet.create({
  contanier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 4,
  },
  imageContanier: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  icon: {
    color: colors.secondary,
  },
  iconContanier: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
});
