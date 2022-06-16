import { renderDOM, registerComponent } from './core';

import LoginPage from './pages/loginPage';

import button from './components/button';
import input from './components/input';
import link from './components/link';
import inputError from './components/inputError';

registerComponent(button);
registerComponent(input);
registerComponent(link);
registerComponent(inputError);

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new LoginPage({}));
});
