import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../constants/images';
import colors from '../constants/colors';

type IProps = {
  userName: string;
};

const HomeStory: React.FunctionComponent<IProps> = ({userName}) => {
  return (
    <View style={{alignItems: 'center', marginHorizontal: 8}}>
      <View style={styles.contanier}>
        <Image source={images.user} style={styles.image} />
      </View>
      <Text style={styles.nameText}>{userName}</Text>
    </View>
  );
};

export default HomeStory;

const styles = StyleSheet.create({
  contanier: {
    borderWidth: 2,
    borderColor: '#807E94',
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  nameText: {
    fontSize: 12,
    color: colors.white,
  },
});
