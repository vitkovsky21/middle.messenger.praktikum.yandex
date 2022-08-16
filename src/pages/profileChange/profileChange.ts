import { BrowseRouter, Store } from '../../core';
import Block from '../../core/Block';
import { changeData } from '../../services/changeData';
import { withRouter, withStore } from '../../utils';

type ProfileChangePageProps = {
  router: BrowseRouter;
  store: Store<AppState>;
  avatar: () => string;
};

export class ProfileChangePage extends Block<ProfileChangePageProps> {
  constructor(props: ProfileChangePageProps) {
    super(props);

    this.setProps({
      avatar: () => this.props.store.getState().user?.avatar,
    });
  }

  protected getStateFromProps() {
    this.state = {
      values: {
        login: '',
        first_name: '',
        second_name: '',
        display_name: '',
        phone: '',
        email: '',
      },
      errors: {
        login: '',
        first_name: '',
        second_name: '',
        display_name: '',
        phone: '',
        email: '',
      },
      back: () => {
        this.props.router.go("/profilePage");
      },
      blur: () => {
        const profileData = {
          login: (this.refs.login as HTMLInputElement).value,
          first_name: (this.refs.first_name as HTMLInputElement).value,
          second_name: (this.refs.second_name as HTMLInputElement).value,
          display_name: (this.refs.display_name as HTMLInputElement).value,
          phone: (this.refs.phone as HTMLInputElement).value,
          email: (this.refs.email as HTMLInputElement).value,
        };

        const nextState = {
          errors: {
            login: '',
            first_name: '',
            second_name: '',
            display_name: '',
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

        if (!profileData.display_name) {
          nextState.errors.display_name = 'Display name is required';
        } else if (profileData.display_name.length < 2) {
          nextState.errors.display_name = 'Display name should contain more than 3 chars';
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
          display_name: (this.refs.display_name as HTMLInputElement).value,
          phone: (this.refs.phone as HTMLInputElement).value,
          email: (this.refs.email as HTMLInputElement).value,
        };

        const nextState = {
          errors: {
            login: '',
            first_name: '',
            second_name: '',
            display_name: '',
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

        if (!profileData.display_name) {
          nextState.errors.display_name = 'Display name is required';
        } else if (profileData.display_name.length < 2) {
          nextState.errors.display_name = 'Display name should contain more than 3 chars';
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
              && !nextState.errors.display_name
              && !nextState.errors.phone) {
                this.props.store.dispatch(changeData, profileData);
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
              {{{Link onClick=back }}}
          </div>

          <div class="profile-main">
            <a onClick=toChat>
              <div class="circle">
                {{#if store.state.user.avatar}}
                  <img src={{avatar}} alt="#">
                {{else}}
                  <div class="picture"></div>
                {{/if}}
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
                      placeholder="your@email.com" }}}
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
                      placeholder="login" }}}
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
                      placeholder="Name" }}}
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
                      placeholder="Surname" }}}
                </div>
              </li>
              {{{ InputError error="${errors.second_name}"}}}
              <hr>

              <li class="info-field">
              <div>
                <p>Display Name</p>
                {{{ Input class="value" 
                    value="${values.display_name}"
                    ref="display_name"
                    onBlur=blur
                    type="text"
                    placeholder="NameSurname" }}}
              </div>
              </li>
              {{{ InputError error="${errors.display_name}"}}}
              <hr>

              <li class="info-field">
                <div>
                  <p>Phone</p>
                  {{{ Input class="value" 
                      value="${values.phone}"
                      ref="phone"
                      onBlur=blur
                      type="tel"
                      placeholder="+7-(911)-911-9111" }}}
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

export default withRouter(withStore(ProfileChangePage))