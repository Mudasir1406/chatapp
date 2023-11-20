import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import colors from '../constants/colors';
type IProps = {};

const ChatFilter: React.FunctionComponent<IProps> = () => {
  return (
    <View style={styles.contanier}>
      <View style={styles.inner}>
        <Icon name="chatbubbles-sharp" style={styles.iconChat} size={25} />
        <Text style={styles.text}>all messages</Text>
        <MaterialIcons
          name="keyboard-arrow-down"
          color={colors.white}
          size={15}
        />
      </View>
      <SimpleLineIcons name="options" color={colors.white} size={20} />
    </View>
  );
};

export default ChatFilter;

const styles = StyleSheet.create({
  contanier: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
  iconChat: {
    color: colors.secondary,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    marginHorizontal: 8,
    fontWeight: '700',
    fontSize: 14,
  },
});
