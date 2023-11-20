import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
type IProps = {
  active: string;
};
const {width} = Dimensions.get('window');

const BottomTab: React.FunctionComponent<IProps> = ({active}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.contanier}>
      {active === 'Chats' ? (
        <Pressable
          style={styles.inner}
          onPress={() => navigation.navigate('Chats')}>
          <Icon name="chat" style={{color: colors.secondaryLight}} size={30} />
          <Text style={styles.text}>Chats</Text>
          <View style={styles.dot} />
        </Pressable>
      ) : (
        <Pressable
          style={styles.inner}
          onPress={() => navigation.navigate('Chats')}>
          <Icon
            name="chat-outline"
            style={{color: colors.secondaryLight}}
            size={30}
          />
          <Text style={styles.text}>chats</Text>
          <View style={[styles.dot, {backgroundColor: colors.primary}]} />
        </Pressable>
      )}
      {active === 'Calls' ? (
        <Pressable
          style={styles.inner}
          onPress={() => navigation.navigate('Calls')}>
          <Icon name="phone" style={{color: colors.secondaryLight}} size={30} />
          <Text style={styles.text}>calls</Text>
          <View style={styles.dot} />
        </Pressable>
      ) : (
        <Pressable
          style={styles.inner}
          onPress={() => navigation.navigate('Calls')}>
          <Icon
            name="phone-outline"
            style={{color: colors.secondaryLight}}
            size={30}
          />
          <Text style={styles.text}>calls</Text>
          <View style={[styles.dot, {backgroundColor: colors.primary}]} />
        </Pressable>
      )}
      <Pressable
        style={styles.edit}
        onPress={() => navigation.navigate('Contacts')}>
        <Icon
          name="pencil-outline"
          style={{color: colors.secondaryLight}}
          size={32}
        />
      </Pressable>
      {active === 'Contacts' ? (
        <Pressable
          style={styles.inner}
          onPress={() => navigation.navigate('Contacts')}>
          <Icon
            name="account"
            style={{color: colors.secondaryLight}}
            size={30}
          />
          <Text style={styles.text}>contacts</Text>
          <View style={styles.dot} />
        </Pressable>
      ) : (
        <Pressable
          style={styles.inner}
          onPress={() => navigation.navigate('Contacts')}>
          <Icon
            name="account-outline"
            style={{color: colors.secondaryLight}}
            size={30}
          />
          <Text style={styles.text}>contacts</Text>
          <View style={[styles.dot, {backgroundColor: colors.primary}]} />
        </Pressable>
      )}
      {active === 'Settings' ? (
        <Pressable
          style={styles.inner}
          onPress={() => navigation.navigate('Settings')}>
          <Ionicons
            name="settings"
            style={{color: colors.secondaryLight}}
            size={25}
          />
          <Text style={styles.text}>settings</Text>
          <View style={styles.dot} />
        </Pressable>
      ) : (
        <Pressable
          style={styles.inner}
          onPress={() => navigation.navigate('Settings')}>
          <Ionicons
            name="settings-outline"
            style={{color: colors.secondaryLight}}
            size={25}
          />
          <Text style={styles.text}>settings</Text>
          <View style={[styles.dot, {backgroundColor: colors.primary}]} />
        </Pressable>
      )}
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  contanier: {
    height: 80,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.bottomTab,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: colors.secondary,
    fontSize: 12,
  },
  inner: {
    alignItems: 'center',
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: colors.secondary,
    borderRadius: 5,
    marginTop: 4,
  },
  edit: {
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 60,
    left: width * 0.5 - 30,
    zIndex: 100,
  },
});
