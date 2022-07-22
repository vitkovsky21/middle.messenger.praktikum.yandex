import { renderDOM } from '../../core';
import Block from '../../core/Block';
import Chat from '../chat';
import LoginPage from '../loginPage';

export class SignUpPage extends Block {
  protected getStateFromProps() {
    this.state = {
      values: {
        login: '',
        password: '',
        first_name: '',
        second_name: '',
        phone: '',
        email: '',
      },
      errors: {
        login: '',
        password: '',
        first_name: '',
        second_name: '',
        phone: '',
        email: '',
      },
      signUp: () => {
        const signUpData = {
          login: (this.refs.login as HTMLInputElement).value,
          password: (this.refs.password as HTMLInputElement).value,
          first_name: (this.refs.first_name as HTMLInputElement).value,
          second_name: (this.refs.second_name as HTMLInputElement).value,
          phone: (this.refs.phone as HTMLInputElement).value,
          email: (this.refs.email as HTMLInputElement).value,
        };

        const nextState = {
          errors: {
            login: '',
            password: '',
            first_name: '',
            second_name: '',
            phone: '',
            email: '',
          },
          values: { ...signUpData },
        };

        const loginValidate = /^[a-z0-9_-]{3,20}$/i.test(signUpData.login);
        const passwordValidate = /^(?=.*[0-9])(?=.*[A-Z])\w{8,40}$/i.test(signUpData.password);
        const emailValidate = /^[a-z0-9_-].+@[a-z0-9_-]+\.[a-z0-9_-]+$/i.test(signUpData.email);
        const firstNameValidate = /^[a-zA-Zа-яёА-ЯЁ_-]+$/i.test(signUpData.first_name);
        const secondNameValidate = /^[a-zA-Zа-яёА-ЯЁ_-]+$/i.test(signUpData.second_name);
        const phoneValidate = /^\+?(\d.*){10,15}$/i.test(signUpData.phone);

        if (!signUpData.login) {
          nextState.errors.login = 'Login is required';
        } else if (signUpData.login.length < 4) {
          nextState.errors.login = 'Login should contain more than 3 chars';
        } else if (!loginValidate) {
          nextState.errors.login = 'Invalid login';
        }

        if (!signUpData.password) {
          nextState.errors.password = 'Password is required';
        } else if (!passwordValidate) {
          nextState.errors.password = 'Invalid password';
        }

        if (!signUpData.first_name) {
          nextState.errors.first_name = 'First Name is required';
        } else if (signUpData.first_name[0].toUpperCase() !== signUpData.first_name[0]) {
          nextState.errors.first_name = 'First letter should be uppercase';
        } else if (!firstNameValidate) {
          nextState.errors.first_name = 'Invalid first name';
        }

        if (!signUpData.second_name) {
          nextState.errors.second_name = 'Second Name is required';
        } else if (signUpData.second_name[0].toUpperCase() !== signUpData.second_name[0]) {
          nextState.errors.second_name = 'Second letter should be uppercase';
        } else if (!secondNameValidate) {
          nextState.errors.second_name = 'Invalid second name';
        }

        if (!signUpData.phone) {
          nextState.errors.phone = 'Phone is required';
        } else if (!phoneValidate) {
          nextState.errors.phone = 'Invalid phone';
        }

        if (!signUpData.email) {
          nextState.errors.email = 'Email is required';
        } else if (!emailValidate) {
          nextState.errors.email = 'Invalid email';
        }

        this.setState(nextState);

        if (!nextState.errors.login
            && !nextState.errors.password
            && !nextState.errors.email
            && !nextState.errors.first_name
            && !nextState.errors.second_name
            && !nextState.errors.phone) {
          renderDOM(new Chat({}));
        }

        console.log('action/signUp', signUpData);
      },
      signIn: () => {
        renderDOM(new LoginPage({}));
      },
      blur: () => {
        const signUpData = {
          login: (this.refs.login as HTMLInputElement).value,
          password: (this.refs.password as HTMLInputElement).value,
          first_name: (this.refs.first_name as HTMLInputElement).value,
          second_name: (this.refs.second_name as HTMLInputElement).value,
          phone: (this.refs.phone as HTMLInputElement).value,
          email: (this.refs.email as HTMLInputElement).value,
        };

        const nextState = {
          errors: {
            login: '',
            password: '',
            first_name: '',
            second_name: '',
            phone: '',
            email: '',
          },
          values: { ...signUpData },
        };

        const loginValidate = /^[a-z0-9_-]{3,20}$/i.test(signUpData.login);
        const passwordValidate = /^(?=.*[0-9])(?=.*[A-Z])\w{8,40}$/i.test(signUpData.password);
        const emailValidate = /^[a-z0-9_-].+@[a-z0-9_-]+\.[a-z0-9_-]+$/i.test(signUpData.email);
        const firstNameValidate = /^[a-zA-Zа-яёА-ЯЁ_-]+$/i.test(signUpData.first_name);
        const secondNameValidate = /^[a-zA-Zа-яёА-ЯЁ_-]+$/i.test(signUpData.second_name);
        const phoneValidate = /^\+?(\d.*){10,15}$/i.test(signUpData.phone);

        if (!signUpData.login) {
          nextState.errors.login = 'Login is required';
        } else if (signUpData.login.length < 4) {
          nextState.errors.login = 'Login should contain more than 3 chars';
        } else if (!loginValidate) {
          nextState.errors.login = 'Invalid login';
        }

        if (!signUpData.password) {
          nextState.errors.password = 'Password is required';
        } else if (!passwordValidate) {
          nextState.errors.password = 'Invalid password';
        }

        if (!signUpData.email) {
          nextState.errors.email = 'Email is required';
        } else if (!emailValidate) {
          nextState.errors.email = 'Invalid email';
        }

        if (!signUpData.first_name) {
          nextState.errors.first_name = 'First Name is required';
        } else if (signUpData.first_name[0].toUpperCase() !== signUpData.first_name[0]) {
          nextState.errors.first_name = 'First letter should be uppercase';
        } else if (!firstNameValidate) {
          nextState.errors.first_name = 'Invalid first name';
        }

        if (!signUpData.second_name) {
          nextState.errors.second_name = 'Second Name is required';
        } else if (signUpData.second_name[0].toUpperCase() !== signUpData.second_name[0]) {
          nextState.errors.second_name = 'Second letter should be uppercase';
        } else if (!secondNameValidate) {
          nextState.errors.second_name = 'Invalid second name';
        }

        if (!signUpData.phone) {
          nextState.errors.phone = 'Phone is required';
        } else if (!phoneValidate) {
          nextState.errors.phone = 'Invalid phone';
        }

        this.setState(nextState);
      },
    };
  }

  render() {
    const { errors, values } = this.state;

    return `
      <div class="sign">
        <form id="form">
          <h3 class="heading">Sign In</h3>
          <div class="fields">

            <p>Email</p>
            {{{ Input 
                value="${values.email}"
                type="email" 
                name="email" 
                onBlur=blur
                ref="email"
                id="email" 
                placeholder=""}}}
            {{{ InputError error="${errors.email}"}}}

            <p>Login</p>
            {{{ Input 
                value="${values.login}"
                type="text" 
                name="login"
                onBlur=blur
                ref="login"
                id="login" 
                placeholder=""}}}
            {{{ InputError error="${errors.login}"}}}

            <p>Password</p>
            {{{ Input 
                value="${values.password}"
                type="password" 
                name="password" 
                onBlur=blur
                id="password"
                ref="password" }}}
            {{{ InputError error="${errors.password}"}}}

            <p>First Name</p>
            {{{ Input 
                value="${values.first_name}"
                type="text"
                name="first_name"
                onBlur=blur
                id="first_name"
                ref="first_name" }}}
            {{{ InputError error="${errors.first_name}"}}}

            <p>Second Name</p>
            {{{ Input 
                value="${values.second_name}"
                type="text"
                name="second_name"
                onBlur=blur
                id="second_name"
                ref="second_name" }}}
            {{{ InputError error="${errors.second_name}"}}}

            <p>Phone</p>
            {{{ Input 
              value="${values.phone}"
              type="tel"
              name="phone"
              onBlur=blur
              id="phone"
              ref="phone" }}}
            {{{ InputError error="${errors.phone}"}}}

            <div class="buttons">
              {{{ Button class="btn" onClick=signUp text="Enter" }}}
              {{{ Link class="btn link" onClick=signIn to="Login" text="Sign In" }}}
            </div>

          </div>
        </form>
      </div>
    `;
  }
}
