import { renderDOM } from '../../core';
import Block from '../../core/Block';
import Chat from '../chat';

export class errorWrong extends Block {
    protected getStateFromProps() {
        this.state = {
            toChat: () => {
                renderDOM(new Chat({}));
            }
        }
      }

  render() {

    return `
        <div class="errors">
          <h2 class="heading">505</h2>
          <p>Oops, something went wrong.</p>
          {{{ Link class="btn link" onClick=toChat text="Back to chat." }}}
        </div>
    `;
  }
}