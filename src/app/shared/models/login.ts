import { LoginI } from '../interfaces/login-i';

export class Login implements LoginI {
  login: string;
  passwd: string;
  constructor(obj?: Partial<Login>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
