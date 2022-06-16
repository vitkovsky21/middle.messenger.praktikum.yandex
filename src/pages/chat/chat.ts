import { renderDOM } from '../../core';
import Block from '../../core/Block';
import ProfilePage from '../profilePage';

export class Chat extends Block {
  protected getStateFromProps() {
    this.state = {
      values: {
        message: '',
      },
      errors: {
        message: '',
      },
      toProfilePage: () => {
        renderDOM(new ProfilePage({}));
      },
      send: () => {
        const chatData = {
          message: (this.refs.message as HTMLInputElement).value,
        };

        const nextState = {
          errors: {
            message: '',
          },
          values: { ...chatData },
        };

        if (!chatData.message) {
          nextState.errors.message = 'Type a message';
        }

        this.setState(nextState);

        console.log('action/message', chatData);
      },
    };
  }

  render() {
    const { errors, values } = this.state;

    return `
      <div class="wrapper">
        <div class="list">
          <div class="profile">
            {{{ Link onClick=toProfilePage to="./pages" text="Profile >" }}}
          </div>
          {{{ Input class="field" type="search" placeholder="Search" }}}
          <div class="friend-list">
          
            <!-- это всё ещё заглушка, в будущем, когда будет настоящий friend-list, буду через отдельный компонент и #foreach делать. -->
            <hr>
            <div class="friend">
              <span class="image"></span>
              <div class="info"> 
                <h4>Name </h4>
                <p>Message</p>
              </div>
              <div class="time"> 
                <p>04:21</p>
              </div>
            </div>

            <hr>
            <div class="friend">
              <span class="image"></span>
              <div class="info"> 
                <h4>Name </h4>
                <p>Message</p>
              </div>
              <div class="time"> 
                <p>04:21</p>
              </div>
            </div>

            <hr>
            <div class="friend">
              <span class="image"></span>
              <div class="info"> 
                <h4>Name </h4>
                <p>Message</p>
              </div>
              <div class="time"> 
                <p>04:21</p>
              </div>
            </div>

            <hr>
            <div class="friend">
              <span class="image"></span>
              <div class="info"> 
                <h4>Name </h4>
                <p>Message</p>
              </div>
              <div class="time"> 
                <p>04:21</p>
              </div>
            </div>

            <hr>
            <div class="friend">
              <span class="image"></span>
              <div class="info"> 
                <h4>Name </h4>
                <p>Message</p>
              </div>
              <div class="time"> 
                <p>04:21</p>
              </div>
            </div>

            <hr>
            <div class="friend">
              <span class="image"></span>
              <div class="info"> 
                <h4>Name </h4>
                <p>Message</p>
              </div>
              <div class="time"> 
                <p>04:21</p>
              </div>
            </div>

            <hr>
            <div class="friend">
              <span class="image"></span>
              <div class="info"> 
                <h4>Name </h4>
                <p>Message</p>
              </div>
              <div class="time"> 
                <p>04:21</p>
              </div>
            </div>

            <hr>
            <div class="friend">
              <span class="image"></span>
              <div class="info"> 
                <h4>Name </h4>
                <p>Message</p>
              </div>
              <div class="time"> 
                <p>04:21</p>
              </div>
            </div>

            <hr>
            <div class="friend">
              <span class="image"></span>
              <div class="info"> 
                <h4>Name </h4>
                <p>Message</p>
              </div>
              <div class="time"> 
                <p>04:21</p>
              </div>
            </div>

            <hr>
            <div class="friend">
              <span class="image"></span>
              <div class="info"> 
                <h4>Name </h4>
                <p>Message</p>
              </div>
              <div class="time"> 
                <p>04:21</p>
              </div>
            </div>

            <hr>
            <div class="friend">
              <span class="image"></span>
              <div class="info"> 
                <h4>Name </h4>
                <p>Message</p>
              </div>
              <div class="time"> 
                <p>04:21</p>
              </div>
            </div>

            <hr>
            <div class="friend">
              <span class="image"></span>
              <div class="info"> 
                <h4>Name </h4>
                <p>Message</p>
              </div>
              <div class="time"> 
                <p>04:21</p>
              </div>
            </div>

            <hr>
          </div>
        </div>

        <div class="chat"> 
          <div class="messages"> 
            <p>Something will be here</p>
          </div>
          <hr class="line">
          <div class="message-input"> 
            {{{ Input value="${values.message}" ref="message" class="field" type="text" placeholder="Message" }}}
            {{{ Link onClick=send }}}
          </div>
        </div>
      <div>
    `;
  }
}
