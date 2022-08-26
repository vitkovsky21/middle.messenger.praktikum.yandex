import {
  renderDOM, registerComponent, HashRouter, BrowseRouter,
} from './core';
import { Store } from './core/Store';
import { defaultState } from './store';
import { initApp, initChat } from './services/initApp';
import { diffObjectsDeep, getScreenComponent, Screens } from './utils';

import "./styles/style.css"

import button from './components/button';
import input from './components/input';
import link from './components/link';
import inputError from './components/inputError';
import chat from './components/chat';
import message from './components/message';

registerComponent(button);
registerComponent(input);
registerComponent(link);
registerComponent(inputError);
registerComponent(chat);
registerComponent(message);

declare global {
  interface Window {
    store: Store<AppState>;
    router: BrowseRouter;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const store = new Store<AppState>(defaultState);
  const router = new BrowseRouter();

  window.router = router;
  window.store = store;

  store.on('changed', (prevState, nextState) => {
    if (process.env.DEBUG) {
      console.log(
        '%cstore updated',
        'background: #222; color: #bada55',
        nextState,
      );
      console.log(JSON.stringify(diffObjectsDeep.map(prevState, nextState)));
    }

    if (prevState.screen !== nextState.screen) {
      const Page = getScreenComponent(nextState.screen);
      renderDOM(new Page({}));
    }
  });

  /**
   * Инициализируем роутинг
   */

  // router
  //  .use('#login', () => store.dispatch({ screen: Screens.Login }))
  //  .use('#chat', () => store.dispatch({ screen: Screens.Chat }))
  //  .use('#', () => store.dispatch({ screen: Screens.Login }))
  //  .onRouteChange();

  router
    .use('/login', getScreenComponent(Screens.Login))
    .use('/chat', getScreenComponent(Screens.Chat))
    .use('/signUp', getScreenComponent(Screens.SignUpPage))
    .use('/profilePage', getScreenComponent(Screens.ProfilePage))
    .use('/settings', getScreenComponent(Screens.ProfileChangePage))
    .use('/password', getScreenComponent(Screens.ProfilePassword))
    .use('/error', getScreenComponent(Screens.ErrorExist))
    .use('/', getScreenComponent(Screens.Login))
    .use('*', getScreenComponent(Screens.ErrorExist))
    .start();

  setTimeout(() => {
    console.log('222');
    store.dispatch(initApp);
  }, 100);
});
