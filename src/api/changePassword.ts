import { HTTPTransport } from "../utils";

const host = 'https://ya-praktikum.tech/';

type ChangePasswordData = {
  oldPassword: string;
  newPassword: string;
}

type PasswordResponseData = {};

export const dataAPI = {
  changeData: (data: ChangePasswordData) =>
    new HTTPTransport().put(`${host}api/v2/user/password`, { data, headers: { "Content-Type": "application/json" } }), 

  me: () => new HTTPTransport().get(`${host}api/v2/auth/user`),

};
