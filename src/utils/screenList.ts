import { BlockClass } from '../core';
import Chat from '../pages/chat';
import LoginPage from '../pages/loginPage';
import ProfileChangePage from '../pages/profileChange';
import ProfilePage from '../pages/profilePage';
import profilePassword from '../pages/profilePassword';
import SignUpPage from '../pages/signUpPage';

export enum Screens {
  Login = 'login',
  Chat = 'chat',
  SignUpPage = 'signUp',
  ProfilePage = 'profilePage',
  ProfileChangePage = 'settings',
  ProfilePassword = 'password'
}

const map: Record<Screens, BlockClass<any>> = {
  [Screens.Login]: LoginPage,
  [Screens.Chat]: Chat,
  [Screens.SignUpPage]: SignUpPage,
  [Screens.ProfilePage]: ProfilePage,
  [Screens.ProfileChangePage]: ProfileChangePage,
  [Screens.ProfilePassword]: profilePassword
};

export const getScreenComponent = (screen: Screens): BlockClass<any> => {
  return map[screen];
};
