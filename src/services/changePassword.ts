import { dataAPI } from '../api/changePassword';
import { UserDTO } from '../api/types';
import type { Dispatch } from '../core';
import { transformUser, apiHasError } from '../utils';

type ChangePasswordPayload = {
  oldPassword: string;
  newPassword: string;
};

export const changePassword = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: ChangePasswordPayload,
) => {
  dispatch({ isLoading: true });

  const response = await dataAPI.changeData(action);

  if (apiHasError(response)) {
    dispatch({ isLoading: false, loginFormError: response.reason });
    return;
  }

  const responseUser = await dataAPI.me();

  dispatch({ user: transformUser(responseUser as UserDTO) });

  window.location.replace("/chat");
};
