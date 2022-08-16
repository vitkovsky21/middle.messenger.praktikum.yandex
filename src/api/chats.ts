import { HTTPTransport } from '../utils';

const host = 'https://ya-praktikum.tech/';

type CreateChatData = {
  title: string;
}

type userRequest = {
  users: any[]
  chatId: number;
}

export const chatsAPI = {
  createChat: (data: CreateChatData) => new HTTPTransport().post(`${host}api/v2/chats`, { data, headers: { 'Content-Type': 'application/json' } }),

  addUserToChat: (data: userRequest) => new HTTPTransport().put(`${host}api/v2/chats/users`, { data, headers: { 'Content-Type': 'application/json' } }),

  me: () => new HTTPTransport().get(`${host}api/v2/chats`),

  getToken: (chatId: number) => new HTTPTransport().post(`${host}/api/v2/chats/token/${chatId}`),

};
