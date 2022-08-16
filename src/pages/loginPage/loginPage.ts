import Block from '../../core/Block';
import { BrowseRouter, HashRouter, Store } from '../../core';
import { login } from '../../services/auth';
import { withRouter, withStore } from '../../utils';
import { initChat } from '../../services/initApp';

type LoginPageProps = {
  router: BrowseRouter;
  store: Store<AppState>;
};

export class LoginPage extends Block<LoginPageProps> {
  constructor(props: LoginPageProps) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      if (this.props.store.getState().user) {
        console.log(this.props.store.getState().user);
        this.props.router.go('/chat');
      }
    }, 1500);
  }

  protected getStateFromProps() {
    this.state = {
      values: {
        login: '',
        password: '',
      },
      errors: {
        login: '',
        password: '',
      },
      login: () => {
        let isError = false;
        const loginData = {
          login: (this.refs.login as HTMLInputElement).value,
          password: (this.refs.password as HTMLInputElement).value,
        };

        const nextState = {
          errors: {
            login: '',
            password: '',
          },
          values: { ...loginData },
        };

        const loginValidate = /^[a-z0-9_-]{3,20}$/i.test(loginData.login);
        const passwordValidate = /^(?=.*\d)(?=.*[A-Z])\w{8,40}$/i.test(loginData.password);

        if (!loginData.login) {
          isError = true;
          nextState.errors.login = 'Login is required';
        } else if (loginData.login.length < 4) {
          isError = true;
          nextState.errors.login = 'Login should contain more than 3 chars';
        } else if (!loginValidate) {
          isError = true;
          nextState.errors.login = 'Invalid login';
        }

        if (!loginData.password) {
          isError = true;
          nextState.errors.password = 'Password is required';
        } else if (!passwordValidate) {
          isError = true;
          nextState.errors.password = 'Invalid password';
        }

        this.setState(nextState);

        if (!isError) {
          this.props.store.dispatch(login, loginData);
        }
      },
      signUp: () => {
        this.props.router.go('/signUp');
      },
      blur: () => {
        const loginData = {
          login: (this.refs.login as HTMLInputElement).value,
          password: (this.refs.password as HTMLInputElement).value,
        };

        const nextState = {
          errors: {
            login: '',
            password: '',
          },
          values: { ...loginData },
        };

        const loginValidate = /^[a-z0-9_-]{3,20}$/i.test(loginData.login);
        const passwordValidate = /^(?=.*\d)(?=.*[A-Z])\w{8,40}$/i.test(loginData.password);

        if (!loginData.login) {
          nextState.errors.login = 'Login is required';
        } else if (loginData.login.length < 3) {
          nextState.errors.login = 'Login should contain more than 3 chars';
        } else if (!loginValidate) {
          nextState.errors.login = 'Invalid login';
        }

        if (!loginData.password) {
          nextState.errors.password = 'Password is required';
        } else if (!passwordValidate) {
          nextState.errors.password = 'Invalid password';
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

            <p>Login</p>
              {{{ Input
                  value="${values.login}"
                  type="text" 
                  name="login"
                  onBlur=blur
                  ref="login"
                  id="login" 
                  placeholder="" }}}
              {{{ InputError error="${errors.login}"}}}

            <p>Password</p>
            {{{ Input 
                value="${values.password}"
                onBlur=blur
                type="password" 
                name="password" 
                id="password"
                ref="password" }}}
            {{{ InputError error="${errors.password}"}}}

          </div>

          <div class="buttons">
            {{{ Button class="btn" onClick=login  text="Enter" }}}
            {{{ Link class="btn link" onClick=signUp to="signUpPage" text="Sign Up" }}}
          </div>
          
        </form>
      </div>
    `;
  }
}

export default withRouter(withStore(LoginPage));
