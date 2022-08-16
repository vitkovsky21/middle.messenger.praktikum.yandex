import { HTTPTransport } from '../utils';

const host = 'https://ya-praktikum.tech/';

type ChangeConfigData = {
  login: string;
  first_name: string;
  second_name: string;
  email: string;
  phone: string;
}

type LoginData = {
  login: string;
}

type AvatarData = {
  avatar: any;
}

export const dataAPI = {
  addUserLogin: (data: LoginData) => new HTTPTransport().get(`${host}api/v2/user/${data}`),

  changeData: (data: ChangeConfigData) => new HTTPTransport().put(`${host}api/v2/user/profile`, { data, headers: { 'Content-Type': 'application/json' } }),

  changeAvatar: (data: AvatarData) => new HTTPTransport().put(`${host}/api/v2/user/profile/avatar`, { data }),

  me: () => new HTTPTransport().get(`${host}api/v2/auth/user`),
};
