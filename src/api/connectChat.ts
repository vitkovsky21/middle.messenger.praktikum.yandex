import { HTTPTransport } from '../utils';
import { host } from './http';

type ConnectChatData = {
  id: number;
}

export const connectChatAPI = {
  connectChat: (data: ConnectChatData) => new HTTPTransport().post(`${host}/api/v2/chats/token/1`, { data, headers: { 'Content-Type': 'application/json' } }),

  me: () => new HTTPTransport().get(`${host}api/v2/chats`),

};
