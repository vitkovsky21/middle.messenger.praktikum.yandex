import { HTTPTransport } from '../utils';
import Base from './Base';
import { host } from './http';

type CreateChatData = {
  title: string;
}

type UserRequest = {
  users: any[]
  chatId: number;
}

export default class chatsAPI extends Base {
  createChat(data: CreateChatData) { return this.base.post(`${host}api/v2/chats`, { data, headers: { 'Content-Type': 'application/json' } }); }

  addUserToChat(data: UserRequest) { return this.base.put(`${host}api/v2/chats/users`, { data, headers: { 'Content-Type': 'application/json' } }); }

  me() { return this.base.get(`${host}api/v2/chats`); }

  getToken(chatId: number) { return this.base.post(`${host}/api/v2/chats/token/${chatId}`); }
}
