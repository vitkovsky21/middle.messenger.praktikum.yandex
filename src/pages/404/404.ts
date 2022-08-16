import Block from '../../core/Block';
import { withRouter, withStore } from '../../utils';

export class ErrorExist extends Block {
  protected getStateFromProps() {
    this.state = {
      toChat: () => {
        window.router.go('/');
      },
    };
  }

  render() {
    return `
        <div class="errors">
          <h2 class="heading">404</h2>
          <p>This page doesn't exist.</p>
          {{{ Link class="btn link" onClick=toChat text="Back to login page." }}}
        </div>
    `;
  }
}

export default withRouter(withStore(ErrorExist));
