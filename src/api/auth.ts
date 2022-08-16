import { HTTPTransport } from '../utils';

const host = 'https://ya-praktikum.tech/';

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

export const authAPI = {

  signUp: (data: SignUpRequestData): Promise<unknown> => new HTTPTransport().post(`${host}api/v2/auth/signup`, { data, headers: { 'Content-Type': 'application/json' } }),

  login: (data: LoginRequestData): Promise<unknown> => new HTTPTransport().post(`${host}api/v2/auth/signin`, { data, headers: { 'Content-Type': 'application/json' } }),

  me: (): Promise<unknown> => new HTTPTransport().get(`${host}api/v2/auth/user`),

  logout: (): Promise<unknown> => new HTTPTransport().post(`${host}api/v2/auth/logout`),
};
