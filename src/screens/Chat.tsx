import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import {useRoute} from '@react-navigation/native';
import {io} from 'socket.io-client';
import {getChatsMessages} from '../services/Chats/services';

const Chat = () => {
  const route = useRoute();
  getChatsMessages(route.params.threadID, {
    token: route.params.userData.accessToken,
  }).then(data => console.log(data, 'ad'));
  // Connect to the Socket.IO server
  const socket = io('https://backend.ratehr.com', {
    transports: ['websocket', 'polling'],
    query: {token: route.params.userData.accessToken},

    autoConnect: true, // Use only WebSocket
    // Additional configuration if needed
  });
  // Handle events or listen for data from the server
  socket.on('connect', () => {
    console.log('Connected to the server');
  });

  socket.on('newMessage', data => {
    console.log('Received message from server:', data);
    // Handle the received data
  });

  const [messages, setMessages] = useState<IMessage>([]);
  const onSend = useCallback((messages = []) => {
    console.log(messages);
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    socket.emit('sendMessage', {
      _id: Math.random(),
      conversationId: route.params.threadID,
      senderId: route.params.userData.user.id,
      text: 'hey',
      status: 0,
      type: 'text',
      isForward: false,
      user: route.params.userData.user,
      event: null,
    });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => {
        onSend(messages);
      }}
      user={{
        _id: route.params.userData.user.id,
      }}
    />
  );
};

export default Chat;

const styles = StyleSheet.create({});
