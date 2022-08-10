import { authAPI } from '../api/auth';
import { chatsAPI } from '../api/chats';
import { ChatAPI, UserDTO } from '../api/types';
import type { Dispatch } from '../core';
import { transformUser, apiHasError } from '../utils';
import { transformChat } from '../utils/apiTransformers';

export async function initApp(dispatch: Dispatch<AppState>) {
  dispatch({ isLoading: true });

  try {
    const response = await authAPI.me();

    if (apiHasError(response)) {
      return;
    }

    dispatch({ user: transformUser(response as UserDTO) });
  } catch (err) {
    console.error(err);
  } finally {
    dispatch({ isLoading: false });
  }
}

export async function initChat(dispatch: Dispatch<AppState>) {
  dispatch({ isLoading: true });

  try {
    const response = await chatsAPI.me();

    if (apiHasError(response)) {
      return;
    }

    dispatch({ chat: transformChat(response as ChatAPI) });
  } catch (err) {
    console.error(err);
  } finally {
    dispatch({ isLoading: false });
  }
}
