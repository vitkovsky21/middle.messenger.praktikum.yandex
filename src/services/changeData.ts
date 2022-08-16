import { dataAPI } from '../api/changeData';
import { UserDTO } from '../api/types';
import type { Dispatch } from '../core';
import { transformUser, apiHasError } from '../utils';

type ChangeDataPayload = {
  login: string;
  first_name: string;
  second_name: string;
  email: string;
  phone: string;
};

type ChangeAvatarPayload = {
  avatar: File;
}

export const changeData = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: ChangeDataPayload,
) => {
  dispatch({ isLoading: true });

  const response = await dataAPI.changeData(action);

  if (apiHasError(response)) {
    dispatch({ isLoading: false, loginFormError: response.reason });
    return;
  }

  const responseUser = await dataAPI.me();

  dispatch({ user: transformUser(responseUser as UserDTO) });

  window.router.go('/chat');
};

export const changeAvatar = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: ChangeAvatarPayload,
) => {
  const response = await dataAPI.changeAvatar(action);

  console.log(response);

  dispatch({ user: transformUser(response as UserDTO) });

  window.router.go('/profilePage');
};
