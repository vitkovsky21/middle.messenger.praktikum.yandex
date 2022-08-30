import Base from './Base';
import { host } from './http';

type LoginRequestData = {
    login: string;
    password: string;
};

type SignUpRequestData = {
  login: string;
  password: string;
  first_name: string;
  second_name: string;
  email: string;
  phone: string;
}

export default class authAPI extends Base {
  signUp(data: SignUpRequestData): Promise<unknown> { return this.base.post(`${host}api/v2/auth/signup`, { data, headers: { 'Content-Type': 'application/json' } }); }

  login(data: LoginRequestData): Promise<unknown> { return this.base.post(`${host}api/v2/auth/signin`, { data, headers: { 'Content-Type': 'application/json' } }); }

  me(): Promise<unknown> { return this.base.get(`${host}api/v2/auth/user`); }

  logout(): Promise<unknown> { return this.base.post(`${host}api/v2/auth/logout`); }
}
