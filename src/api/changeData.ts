import Base from './Base';
import { host } from './http';

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

export default class dataAPI extends Base {
  addUserLogin(data: LoginData) { return this.base.get(`${host}api/v2/user/${data}`); }

  changeData(data: ChangeConfigData) { return this.base.put(`${host}api/v2/user/profile`, { data, headers: { 'Content-Type': 'application/json' } }); }

  changeAvatar(data: AvatarData) { return this.base.put(`${host}/api/v2/user/profile/avatar`, { data }); }

  me() { return this.base.get(`${host}api/v2/auth/user`); }
}
