import { renderDOM } from '../../core';
import Block from '../../core/Block';
import Chat from '../chat';
import ProfilePage from '../profilePage';

export class ProfilePassword extends Block {
  protected getStateFromProps() {
    this.state = {
      values: {
        password: '',
        repeat: '',
      },
      errors: {
        password: '',
        repeat: '',
      },
      blur: () => {
        const profileData = {
          password: (this.refs.password as HTMLInputElement).value,
          repeat: (this.refs.repeat as HTMLInputElement).value,
        };

        const nextState = {
          errors: {
            password: '',
            repeat: '',
          },
          values: { ...profileData },
        };

        const passwordValidate = /^(?=.*\d)(?=.*[A-Z])\w{8,40}$/i.test(profileData.password);

        if (!profileData.password) {
          nextState.errors.password = 'Password is required';
        } else if (profileData.password.length < 8) {
          nextState.errors.password = 'Password should contain more than 8 chars';
        } else if (!passwordValidate) {
          nextState.errors.password = 'Invalid password';
        }

        if (profileData.repeat !== profileData.password || !profileData.repeat) {
          nextState.errors.repeat = 'Repeat the password';
        }

        this.setState(nextState);
      },
      toChat: () => {
        renderDOM(new Chat({}));
      },
      toProfile: () => {
        const profileData = {
          password: (this.refs.password as HTMLInputElement).value,
          repeat: (this.refs.repeat as HTMLInputElement).value,
        };

        const nextState = {
          errors: {
            password: '',
            repeat: '',
          },
          values: { ...profileData },
        };

        const passwordValidate = /^(?=.*\d)(?=.*[A-Z])\w{8,40}$/i.test(profileData.password);

        if (!profileData.password) {
          nextState.errors.password = 'Password is required';
        } else if (profileData.password.length < 8) {
          nextState.errors.password = 'Password should contain more than 8 chars';
        } else if (!passwordValidate) {
          nextState.errors.password = 'Invalid password';
        }

        if (profileData.repeat !== profileData.password || !profileData.repeat) {
          nextState.errors.repeat = 'Repeat the password';
        }

        this.setState(nextState);

        if (!nextState.errors.password && !nextState.errors.repeat) {
          renderDOM(new ProfilePage({}));
        }

        console.log('action/profilePassword', profileData);
      },
    };
  }

  render() {
    const { errors, values } = this.state;

    return `
        <div class="wrapper">
          <div class="sidebar">
              {{{Link onClick=toChat }}}
          </div>

          <div class="profile-main">
            <a onClick=toChat>
              <div class="circle">
                <div class="picture"></div>
                <p>Change avatar</p>
              </div>
            </a>

            <ul class="info">
              <li class="info-field"> 
                <p>Email</p>
                {{{ Input class="value"
                          value="${values.password}"
                          ref="password"
                          onBlur=blur
                          type="password"
                          placeholder="password" }}}
              </li>
              {{{ InputError error="${errors.password}"}}}
              <hr>

              <li class="info-field">
                <p>Repeat Password</p>
                {{{ Input class="value" 
                          value="${values.repeat}"
                          ref="repeat"
                          onBlur=blur
                          type="password"
                          placeholder="repeat password" }}}
              </li>
              {{{ InputError error="${errors.repeat}"}}}
              <hr>
              
  
            <div class="links">
              {{{ Link class="btn" onClick=toProfile text="Save" }}}
            </div>
  
          </div>
        </div>
    `;
  }
}
