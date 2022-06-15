import { renderDOM } from '../../core';
import Block from '../../core/Block';
import Chat from '../chat';
import ProfilePage from '../profilePage';

export class ProfileChange extends Block {
  protected getStateFromProps() {
    this.state = {
      values: {
        login: '',
        first_name: '',
        second_name: '',
        phone: '',
        email: '',
      },
      errors: {
        login: '',
        first_name: '',
        second_name: '',
        phone: '',
        email: '',
      },
      toChat: () => {
        renderDOM(new Chat({}));
      },
      blur: () => {
        const profileData = {
          login: (this.refs.login as HTMLInputElement).value,
          first_name: (this.refs.first_name as HTMLInputElement).value,
          second_name: (this.refs.second_name as HTMLInputElement).value,
          phone: (this.refs.phone as HTMLInputElement).value,
          email: (this.refs.email as HTMLInputElement).value,
        };

        const nextState = {
          errors: {
            login: '',
            first_name: '',
            second_name: '',
            phone: '',
            email: '',
          },
          values: { ...profileData },
        };

        const loginValidate = /^[a-z0-9_-]{3,20}$/i.test(profileData.login);
        const emailValidate = /^[a-z0-9_-].+@[a-z0-9_-]+\.[a-z0-9_-]+$/i.test(profileData.email);
        const firstNameValidate = /^[a-zA-Zа-яёА-ЯЁ_-]+$/i.test(profileData.first_name);
        const secondNameValidate = /^[a-zA-Zа-яёА-ЯЁ_-]+$/i.test(profileData.second_name);
        const phoneValidate = /^\+?(\d.*){10,15}$/i.test(profileData.phone);

        if (!profileData.login) {
          nextState.errors.login = 'Login is required';
        } else if (profileData.login.length < 4) {
          nextState.errors.login = 'Login should contain more than 3 chars';
        } else if (!loginValidate) {
          nextState.errors.login = 'Invalid login';
        }

        if (!profileData.first_name) {
          nextState.errors.first_name = 'First Name is required';
        } else if (profileData.first_name[0].toUpperCase() !== profileData.first_name[0]) {
          nextState.errors.first_name = 'First letter should be uppercase';
        } else if (!firstNameValidate) {
          nextState.errors.first_name = 'Invalid first name';
        }

        if (!profileData.second_name) {
          nextState.errors.second_name = 'Second Name is required';
        } else if (profileData.second_name[0].toUpperCase() !== profileData.second_name[0]) {
          nextState.errors.second_name = 'Second letter should be uppercase';
        } else if (!secondNameValidate) {
          nextState.errors.second_name = 'Invalid second name';
        }

        if (!profileData.phone) {
          nextState.errors.phone = 'Phone is required';
        } else if (!phoneValidate) {
          nextState.errors.phone = 'Invalid phone';
        }

        if (!profileData.email) {
          nextState.errors.email = 'Email is required';
        } else if (!emailValidate) {
          nextState.errors.email = 'Invalid email';
        }

        this.setState(nextState);
      },
      toProfile: () => {
        const profileData = {
          login: (this.refs.login as HTMLInputElement).value,
          first_name: (this.refs.first_name as HTMLInputElement).value,
          second_name: (this.refs.second_name as HTMLInputElement).value,
          phone: (this.refs.phone as HTMLInputElement).value,
          email: (this.refs.email as HTMLInputElement).value,
        };

        const nextState = {
          errors: {
            login: '',
            first_name: '',
            second_name: '',
            phone: '',
            email: '',
          },
          values: { ...profileData },
        };

        const loginValidate = /^[a-z0-9_-]{3,20}$/i.test(profileData.login);
        const emailValidate = /^[a-z0-9_-].+@[a-z0-9_-]+\.[a-z0-9_-]+$/i.test(profileData.email);
        const firstNameValidate = /^[a-zA-Zа-яёА-ЯЁ_-]+$/i.test(profileData.first_name);
        const secondNameValidate = /^[a-zA-Zа-яёА-ЯЁ_-]+$/i.test(profileData.second_name);
        const phoneValidate = /^\+?(\d.*){10,15}$/i.test(profileData.phone);

        if (!profileData.login) {
          nextState.errors.login = 'Login is required';
        } else if (profileData.login.length < 4) {
          nextState.errors.login = 'Login should contain more than 3 chars';
        } else if (!loginValidate) {
          nextState.errors.login = 'Invalid login';
        }

        if (!profileData.first_name) {
          nextState.errors.first_name = 'First Name is required';
        } else if (profileData.first_name[0].toUpperCase() !== profileData.first_name[0]) {
          nextState.errors.first_name = 'First letter should be uppercase';
        } else if (!firstNameValidate) {
          nextState.errors.first_name = 'Invalid first name';
        }

        if (!profileData.second_name) {
          nextState.errors.second_name = 'Second Name is required';
        } else if (profileData.second_name[0].toUpperCase() !== profileData.second_name[0]) {
          nextState.errors.second_name = 'Second letter should be uppercase';
        } else if (!secondNameValidate) {
          nextState.errors.second_name = 'Invalid second name';
        }

        if (!profileData.phone) {
          nextState.errors.phone = 'Phone is required';
        } else if (!phoneValidate) {
          nextState.errors.phone = 'Invalid phone';
        }

        if (!profileData.email) {
          nextState.errors.email = 'Email is required';
        } else if (!emailValidate) {
          nextState.errors.email = 'Invalid email';
        }

        this.setState(nextState);

        if (!nextState.errors.login
              && !nextState.errors.email
              && !nextState.errors.first_name
              && !nextState.errors.second_name
              && !nextState.errors.phone) {
          renderDOM(new ProfilePage({}));
        }

        console.log('action/profileChange', profileData);
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
                <div>
                  <p>Email</p>
                  {{{ Input class="value"
                      value="${values.email}"
                      ref="email"
                      onBlur=blur
                      type="email"
                      placeholder="email@email.com" }}}
                </div>
              </li>
              {{{ InputError error="${errors.email}"}}}
              <hr>

              <li class="info-field">
                <div>
                  <p>Login</p>
                  {{{ Input class="value" 
                      value="${values.login}"
                      ref="login"
                      onBlur=blur
                      type="text"
                      placeholder="vladlogin" }}}
                </div>
              </li>
              {{{ InputError error="${errors.login}"}}}
              <hr>

              <li class="info-field"> 
                <div>
                  <p>First Name</p>
                  {{{ Input class="value" 
                      value="${values.first_name}"
                      ref="first_name"
                      onBlur=blur
                      type="text"
                      placeholder="Vlad" }}}
                </div>
              </li>
              {{{ InputError error="${errors.first_name}"}}}
              <hr>

              <li class="info-field">
                <div>
                  <p>Second Name</p>
                  {{{ Input class="value" 
                      value="${values.second_name}"
                      ref="second_name"
                      onBlur=blur
                      type="text"
                      placeholder="Vladov" }}}
                </div>
              </li>
              {{{ InputError error="${errors.second_name}"}}}
              <hr>

              <li class="info-field"> 
                <div>
                  <p>Display Name</p>
                  {{{ Input class="value"
                      placeholder="VladVladov" }}}
                </div>
              </li>
              {{{ InputError }}}
              <hr>

              <li class="info-field">
                <div>
                  <p>Phone</p>
                  {{{ Input class="value" 
                      value="${values.phone}"
                      ref="phone"
                      onBlur=blur
                      type="tel"
                      placeholder="+7 (777) 777 77 77" }}}
                </div>
              </li>
              {{{ InputError error="${errors.phone}"}}}
              <hr>

            </ul>
  
            <div class="links">
              {{{ Link class="btn" onClick=toProfile text="Save" }}}
            </div>
  
          </div>
        </div>
    `;
  }
}
