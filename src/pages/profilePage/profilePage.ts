import { renderDOM } from '../../core';
import Block from '../../core/Block';
import Chat from '../chat'
import LoginPage from '../loginPage';
import ProfileChange from '../profileChange';
import ProfilePassword from '../profilePassword';

export class ProfilePage extends Block {
  protected getStateFromProps() {
    this.state = {
      exit: () => {
        renderDOM(new LoginPage({}));
      },
      toChat: () => {
        renderDOM(new Chat({}))
      },
      profileChange: () => {
        renderDOM(new ProfileChange({}));
      },
      profilePassword: () => {
        renderDOM(new ProfilePassword({}));
      },
    };
  }

  render() {
    return `
        <div class="wrapper">
          <div class="sidebar">
              {{{Link onClick=toChat }}}
          </div>

          <div class="profile-main">
            <a>
              <div class="circle">
                <div class="picture"></div>
                <p>Change avatar</p>
              </div>
            </a>

            <h4>Name</h4>
            <ul class="info">
              <li class="info-field"> 
                <p>Email </p>
                <p class="value">email@email.com</p>
              </li>
              <hr>
              <li class="info-field">
                <p>Login </p>
                <p class="value">vladlogin</p>
              </li>
              <hr>
              <li class="info-field"> 
                <p>First Name</p>
                <p class="value">Vlad </p>
              </li>
              <hr>
              <li class="info-field">
                <p>Second Name </p>
                <p class="value">Vladov</p>
              </li>
              <hr>
              <li class="info-field"> 
                <p>Display Name </p>
                <p class="value">VladVladov</p>
              </li>
              <hr>
              <li class="info-field">
                <p>Phone </p>
                <p class="value">+7 (777) 777 77 77</p>
              </li>
            </ul>

            <div class="links">
              {{{ Link onClick=profileChange text="Change data" }}}
              <hr>
              {{{ Link onClick=profilePassword text="Change password" }}}
              <hr>
              {{{ Link onClick=exit text="Exit" }}}
            </div>

          </div>
        </div>
    `;
  }
}
