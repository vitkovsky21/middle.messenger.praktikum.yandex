import { renderDOM } from '../../core';
import Block from '../../core/Block';
import Chat from '../chat';

export class errorExist extends Block {
  protected getStateFromProps() {
    this.state = {
      toChat: () => {
        renderDOM(new Chat({}));
      },
    };
  }

  render() {
    return `
        <div class="errors">
          <h2 class="heading">404</h2>
          <p>This page doesn't exist.</p>
          {{{ Link class="btn link" onClick=toChat text="Back to chat." }}}
        </div>
    `;
  }
}
