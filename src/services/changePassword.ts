import passwordAPI from '../api/changePassword';
import { UserDTO } from '../api/types';
import type { Dispatch } from '../core';
import { transformUser, apiHasError } from '../utils';

type ChangePasswordPayload = {
  old_password: string;
  new_password: string;
};

export const changePassword = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: ChangePasswordPayload,
) => {
  dispatch({ isLoading: true });
  const pass: passwordAPI = new passwordAPI();

  const response = await pass.changeData(action);

  if (apiHasError(response)) {
    dispatch({ isLoading: false, loginFormError: response.reason });
    return;
  }

  const responseUser = await pass.me();

  dispatch({ user: transformUser(responseUser as UserDTO) });

  window.router.go('/chat');
};
