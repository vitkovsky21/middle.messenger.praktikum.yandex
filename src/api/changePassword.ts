import Base from './Base';
import { host } from './http';

type ChangePasswordData = {
  old_password: string;
  new_password: string;
}

export default class passwordAPI extends Base {
  changeData(data: ChangePasswordData) { return this.base.put(`${host}api/v2/user/password`, { data, headers: { 'Content-Type': 'application/json' } })}

  me() {return this.base.get(`${host}api/v2/auth/user`)}

};
