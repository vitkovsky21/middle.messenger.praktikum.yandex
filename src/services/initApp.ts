import authAPI from '../api/auth';
import chatsAPI from '../api/chats';
import { ChatAPI, UserDTO } from '../api/types';
import type { Dispatch } from '../core';
import { transformUser, apiHasError } from '../utils';
import { transformChat } from '../utils/apiTransformers';

export async function initApp(dispatch: Dispatch<AppState>) {
  dispatch({ isLoading: true });

  try {
    const auth: authAPI = new authAPI();
    const response = await auth.me();

    if (apiHasError(response)) {
      window.router.go('/');
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
    const chats: chatsAPI = new chatsAPI();
    const response = await chats.me();

    if (apiHasError(response)) {
      return;
    }

    dispatch({ chat: transformChat(response as ChatAPI[]) });
  } catch (err) {
    console.error(err);
  } finally {
    dispatch({ isLoading: false });
  }
}
