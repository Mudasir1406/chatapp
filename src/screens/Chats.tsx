import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Block,
  ChatCard,
  ChatFilter,
  ChatsHeader,
  HomeStory,
  NewMessages,
} from '../components';
import colors from '../constants/colors';
import {getChats, login} from '../services/Chats/services';
import {Socket, io} from 'socket.io-client';

type IProps = {};

const Chats: React.FunctionComponent<IProps> = () => {
  const [user, setUser] = useState(null);
  const [chats, setChats] = useState(null);
  useEffect(() => {
    login('admin@ratehrpay.com', 'rateHRpay@123.3', {})
      .then(data => {
        setUser(data.data);
        return data.data.accessToken;
      })
      .then(token => {
        return getChats({token: token});
      })
      .then(data => {
        const newChats = data.threads.map((item, index) => ({
          ...item,
          key: index,
        }));
        setChats(newChats);
      })
      .catch(err => console.log(err));
  }, []);
  useEffect(() => {
    // Connect to the Socket.IO server
    if (user) {
      const socket = io('https://backend.ratehr.com', {
        transports: ['websocket', 'polling'],
        query: {token: user.accessToken},

        autoConnect: true, // Use only WebSocket
        // Additional configuration if needed
      });
      // Handle events or listen for data from the server
      socket.on('connect', () => {
        console.log('Connected to the server');
      });

      socket.on('message', data => {
        console.log('Received message from server:', data);
        // Handle the received data
      });

      // Optionally, handle disconnect event
      socket.on('disconnect', () => {
        console.log('Disconnected from the server');
      });
    }
  }, [user]); // Ensure this effect runs only once on mount

  return (
    <>
      <Block active="Chats" withoutScroll={true}>
        <ChatsHeader />
        <Text style={styles.headings}>What's new? .</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{padding: 10}}>
          <NewMessages count={2} text="Missed Calls" color="#5D7DA3" />
          <NewMessages count={3} text="New Messages" color="#877547" />
          <NewMessages count={2} text="New Stories" color="#5D7DA3" />
        </ScrollView>
        <Text style={styles.headings}>Stories .</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{padding: 10}}>
          {[0, 0, 0, 0, 0].map((item, index) => (
            <HomeStory userName="Sam" key={index} />
          ))}
        </ScrollView>
        <Text style={styles.headings}>Chats .</Text>
        <ChatFilter />
        {chats && chats.length > 0 && (
          <ChatCard listData={chats} setListData={setChats} userData={user} />
        )}
      </Block>
    </>
  );
};

export default Chats;

const styles = StyleSheet.create({
  headings: {
    color: colors.white,
    marginVertical: 8,
    marginHorizontal: 12,
    fontWeight: '700',
  },
});
