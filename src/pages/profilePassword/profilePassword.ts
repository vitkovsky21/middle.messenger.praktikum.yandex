import { dataAPI } from '../../api/changePassword';
import { BrowseRouter, Store } from '../../core';
import Block from '../../core/Block';
import { changePassword } from '../../services/changePassword';
import { withRouter, withStore } from '../../utils';

type PasswordProps = {
  router: BrowseRouter;
  store: Store<AppState>;
  avatar: () => string;
};

export class ProfilePassword extends Block<PasswordProps> {
  constructor(props: PasswordProps) {
    super(props);

    this.setProps({
      avatar: () => this.props.store.getState().user?.avatar,
    });
  }
  
  protected getStateFromProps() {
    this.state = {
      values: {
        oldPassword: '',
        newPassword: '',
      },
      errors: {
        oldPassword: '',
        newPassword: '',
      },
      blur: () => {
        const passwordData = {
          oldPassword: (this.refs.oldPassword as HTMLInputElement).value,
          newPassword: (this.refs.newPassword as HTMLInputElement).value,
        };

        const nextState = {
          errors: {
            oldPassword: '',
            newPassword: '',
          },
          values: { ...passwordData },
        };

        const oldPasswordValidate = /^(?=.*\d)(?=.*[A-Z])\w{8,40}$/i.test(passwordData.oldPassword);
        const newPasswordValidate = /^(?=.*\d)(?=.*[A-Z])\w{8,40}$/i.test(passwordData.newPassword);

        if (!passwordData.oldPassword) {
          nextState.errors.oldPassword = 'Password is required';
        } else if (passwordData.oldPassword.length < 8) {
          nextState.errors.oldPassword = 'Password should contain more than 8 chars';
        } else if (!oldPasswordValidate) {
          nextState.errors.oldPassword = 'Invalid password';
        }

        if (!passwordData.newPassword) {
          nextState.errors.newPassword = 'Password is required';
        } else if (passwordData.newPassword.length < 8) {
          nextState.errors.newPassword = 'Password should contain more than 8 chars';
        } else if (!newPasswordValidate) {
          nextState.errors.newPassword = 'Invalid password';
        }

        this.setState(nextState);
      },
      back: () => {
        this.props.router.go("/profilePage");
      },
      toProfile: () => {
        const passwordData = {
          oldPassword: (this.refs.oldPassword as HTMLInputElement).value,
          newPassword: (this.refs.newPassword as HTMLInputElement).value,
        };

        const nextState = {
          errors: {
            oldPassword: '',
            newPassword: '',
          },
          values: { ...passwordData },
        };

        const oldPasswordValidate = /^(?=.*\d)(?=.*[A-Z])\w{8,40}$/i.test(passwordData.oldPassword);
        const newPasswordValidate = /^(?=.*\d)(?=.*[A-Z])\w{8,40}$/i.test(passwordData.newPassword);

        if (!passwordData.oldPassword) {
          nextState.errors.oldPassword = 'Password is required';
        } else if (passwordData.oldPassword.length < 8) {
          nextState.errors.oldPassword = 'Password should contain more than 8 chars';
        } else if (!oldPasswordValidate) {
          nextState.errors.oldPassword = 'Invalid password';
        }

        if (!passwordData.newPassword) {
          nextState.errors.newPassword = 'Password is required';
        } else if (passwordData.newPassword.length < 8) {
          nextState.errors.newPassword = 'Password should contain more than 8 chars';
        } else if (!newPasswordValidate) {
          nextState.errors.newPassword = 'Invalid password';
        }

        this.setState(nextState);

        if (!nextState.errors.oldPassword && !nextState.errors.newPassword) {
          this.props.store.dispatch(changePassword, passwordData);
        }

        console.log('action/profilePassword', passwordData);
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
                <p>Old Password</p>
                {{{ Input class="value"
                          value="${values.oldPassword}"
                          ref="oldPassword"
                          onBlur=blur
                          type="password"
                          placeholder="old password" }}}
              </li>
              {{{ InputError error="${errors.oldPassword}"}}}
              <hr>

              <li class="info-field">
                <p>New Password</p>
                {{{ Input class="value" 
                          value="${values.newPassword}"
                          ref="newPassword"
                          onBlur=blur
                          type="password"
                          placeholder="new password" }}}
              </li>
              {{{ InputError error="${errors.newPassword}"}}}
              <hr>
              
  
            <div class="links">
              {{{ Link class="btn" onClick=toProfile text="Save" }}}
            </div>
  
          </div>
        </div>
    `;
  }
}

export default withRouter(withStore(ProfilePassword))
