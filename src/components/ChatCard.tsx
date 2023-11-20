import React, {useState} from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Dimensions,
} from 'react-native';

import {SwipeListView} from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import colors from '../constants/colors';
import images from '../constants/images';
import {useNavigation} from '@react-navigation/native';
const {height} = Dimensions.get('screen');

type IProps = {
  listData: [];
  setListData: () => void;
  userData: any;
};
const ChatCard: React.FunctionComponent<IProps> = ({
  listData,
  setListData,
  userData,
}) => {
  console.log(listData);
  const navigation = useNavigation();
  const [currentOpendRow, setCurrentOpenedRow] = useState<string>();
  let rowSwipeAnimatedValues: never[] = [];
  listData.forEach((_, i) => {
    rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
  });
  const closeRow = (
    rowMap: {[x: string]: {closeRow: () => void}},
    rowKey: string | number,
  ) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap: any, rowKey: string) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.id === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = (rowKey: any) => {
    setCurrentOpenedRow(rowKey);
  };

  const onSwipeValueChange = (swipeData: {key: any; value: any}) => {
    const {key, value} = swipeData;
    // rowSwipeAnimatedValues[key].setValue(Math.abs(value));
  };

  const renderItem = (data: {
    item: {
      text:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | Iterable<React.ReactNode>
        | React.ReactPortal
        | null
        | undefined;
      key: string;
      id: string;
    };
  }) => (
    <TouchableHighlight
      onPress={() =>
        navigation.navigate('Chat', {
          userData: userData,
          threadID: data.item.id,
        })
      }
      style={[
        styles.rowFront,
        {
          borderTopRightRadius: data.item.id === currentOpendRow ? 50 : 0,
          borderBottomRightRadius: data.item.id === currentOpendRow ? 50 : 0,
          overflow: 'hidden',
        },
      ]}
      underlayColor={colors.primary}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '94%',
          marginHorizontal: 12,
        }}>
        <View style={styles.chat}>
          {data.item.lastMessage?.user?.avatar === null ? (
            <Image source={images.user} style={styles.userImage} />
          ) : (
            <Image
              source={{uri: data.item?.lastMessage?.user?.avatar}}
              style={styles.userImage}
            />
          )}
          <View style={{justifyContent: 'flex-start'}}>
            <Text style={styles.userName}>
              {data.item.lastMessage?.user?.name || ''}
            </Text>
            {data.item.lastMessage?.type === 'image' ? (
              <Text style={styles.lastMessage}>Photo</Text>
            ) : (
              <Text style={styles.lastMessage}>
                {data.item.lastMessage?.text || ''}
              </Text>
            )}
          </View>
        </View>
        {data.item.id !== currentOpendRow &&
          data.item.lastMessage?.CreatedAt && (
            <Text style={styles.lastMessage}>
              {new Date(data.item.lastMessage?.CreatedAt)
                .toISOString()
                .slice(0, 10)}
            </Text>
          )}
      </View>
    </TouchableHighlight>
  );

  const renderHiddenItem = (
    data: {item: {key: string | number}},
    rowMap: any,
  ) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, data.item.id)}
        activeOpacity={0.8}>
        <Animated.View
          style={[
            styles.trash,
            // {
            //   transform: [
            //     {
            //       scale: rowSwipeAnimatedValues[data.item.key].interpolate({
            //         inputRange: [45, 90],
            //         outputRange: [0, 1],
            //         extrapolate: 'clamp',
            //       }),
            //     },
            //   ],
            // },
          ]}>
          <Icon name="trash-can-outline" style={styles.icon} size={20} />
        </Animated.View>
        <Text style={styles.hiddenIconText}>delete</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => {}}>
        <Animated.View
          style={[
            styles.trash,
            // {
            //   transform: [
            //     {
            //       scale: rowSwipeAnimatedValues[data.item.key].interpolate({
            //         inputRange: [45, 90],
            //         outputRange: [0, 1],
            //         extrapolate: 'clamp',
            //       }),
            //     },
            //   ],
            // },
          ]}>
          <Icon name="volume-variant-off" style={styles.icon} size={20} />
        </Animated.View>
        <Text style={styles.hiddenIconText}>mute</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.backRightBtn, {right: 110}]}
        onPress={() => {}}>
        <Animated.View
          style={[
            styles.trash,
            // {
            //   transform: [
            //     {
            //       scale: rowSwipeAnimatedValues[data.item.key].interpolate({
            //         inputRange: [45, 90],
            //         outputRange: [0, 1],
            //         extrapolate: 'clamp',
            //       }),
            //     },
            //   ],
            // },
          ]}>
          <SimpleLineIcons name="pin" style={styles.icon} size={20} />
        </Animated.View>
        <Text style={styles.hiddenIconText}>pin</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        keyExtractor={item => item.id}
        rightOpenValue={-165}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onRowDidOpen}
        onSwipeValueChange={onSwipeValueChange}
        showsVerticalScrollIndicator={false}
        disableRightSwipe={true}
        onRowClose={() => setCurrentOpenedRow('-1')}
        useAnimatedList={true}
        swipeGestureBegan={rowkey => setCurrentOpenedRow(rowkey)}
        contentContainerStyle={{paddingBottom: 50}}
      />
    </View>
  );
};
export default ChatCard;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: height - 400,
    paddingBottom: 50,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: 80,
    flexDirection: 'row',
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: colors.secondary,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 50,
  },
  backRightBtnLeft: {
    right: 55,
  },
  backRightBtnRight: {
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  },
  trash: {
    height: 30,
    width: 30,
    backgroundColor: colors.white,
    borderRadius: 15,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: colors.grayOutline,
  },
  hiddenIconText: {
    color: colors.white,
    fontSize: 12,
    marginTop: 4,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  userName: {
    color: colors.white,
    fontWeight: '800',
    marginBottom: 8,
    fontSize: 16,
  },
  lastMessage: {
    color: colors.white,
    fontWeight: '400',
    fontSize: 12,
  },
  chat: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});
