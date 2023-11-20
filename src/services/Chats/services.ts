import {AxiosGet, AxiosPost} from '../../utils/api-methods';
import {BASE_URL_CHATAPP_API, configDataType} from '../config';

const setErrorMessage = (message: string) => ({
  title: 'Address Service',
  message,
});

const GetChats_api = () => `${BASE_URL_CHATAPP_API}/api/chat/restore`;
const adminLogin_api = () => `${BASE_URL_CHATAPP_API}/api/login/admin`;
const getMessages_api = (threadId: string) =>
  `${BASE_URL_CHATAPP_API}/api/chat/messages?threadId=${threadId}`;

export const getChats = (configData: configDataType) =>
  AxiosGet(GetChats_api(), configData, setErrorMessage('Error in getChats'));

export const getChatsMessages = (
  threadId: string,
  configData: configDataType,
) =>
  AxiosGet(
    getMessages_api(threadId),
    configData,
    setErrorMessage('Error in getChats'),
  );

export const login = (
  email: string,
  password: string,
  configData: configDataType,
) =>
  AxiosPost(adminLogin_api(), configData, setErrorMessage('Error in login'), {
    email: email,
    password: password,
  });
