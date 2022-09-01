import authAPI from '../api/auth';
import { UserDTO } from '../api/types';
import type { Dispatch } from '../core';
import { transformUser, apiHasError } from '../utils';

type LoginPayload = {
    login: string;
    password: string;
};

type SignUpPayload = {
  login: string;
  password: string;
  first_name: string;
  second_name: string;
  email: string;
  phone: string;
};

export const login = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: LoginPayload,
) => {
  dispatch({ isLoading: true });

  const auth: authAPI = new authAPI();

  const response = await auth.login(action);

  if (apiHasError(response)) {
    dispatch({ isLoading: false, loginFormError: response.reason });
    return;
  }

  const responseUser = await auth.me();

  dispatch({ isLoading: false, loginFormError: null });

  if (apiHasError(response)) {
    dispatch(logout);
    return;
  }

  dispatch({ user: transformUser(responseUser as UserDTO) });

  window.router.go('/chat');
};

export const logout = async (dispatch: Dispatch<AppState>) => {
  dispatch({ isLoading: true });
  const auth: authAPI = new authAPI();

  await auth.logout();

  dispatch({ isLoading: false, user: null });

  window.router.go('/login');
};

export const signUp = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: SignUpPayload,
) => {
  dispatch({ isLoading: true });
  const auth: authAPI = new authAPI();

  const response = await auth.signUp(action);

  if (apiHasError(response)) {
    dispatch({ isLoading: false, signUpFormError: response.reason });
    return;
  }

  const responseUser = await auth.me();

  dispatch({ isLoading: false, signUpFormError: null });

  if (apiHasError(response)) {
    dispatch(logout);
    return;
  }

  dispatch({ user: transformUser(responseUser as UserDTO) });

  window.router.go('/chat');
};
