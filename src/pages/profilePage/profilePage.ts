import { UserDTO } from '../../api/types';
import { BrowseRouter, renderDOM, Store } from '../../core';
import Block from '../../core/Block';
import { logout } from '../../services/auth';
import { changeAvatar } from '../../services/changeData';
import { withRouter, withStore } from '../../utils';

type ProfilePageProps = {
  router: BrowseRouter;
  store: Store<AppState>;
  avatar: () => string;
  email: UserDTO;
  login: UserDTO;
  firstName: UserDTO;
  secondName: UserDTO;
  displayName: UserDTO;
  phone: UserDTO;
};

export class ProfilePage extends Block<ProfilePageProps> {
  constructor(props: ProfilePageProps) {
    super(props);

    this.setProps({
      avatar: () => this.props.store.getState().user?.avatar,
    });
  }

  protected getStateFromProps() {
    this.state = {
      values: {
        file: '',
      },
      exit: () => {
        this.props.store.dispatch(logout);
      },
      back: () => {
        this.props.router.go('/chat');
      },
      profileChange: () => {
        this.props.router.go('/settings');
      },
      profilePassword: () => {
        this.props.router.go('/password');
      },
      changeAvatar: () => {
        const file = document.getElementById('file') as HTMLInputElement;

        if (file.files) {
          const formData = new FormData();

          formData.append('avatar', file.files[0]);

          console.log([...formData]);
          console.log(file.files[0]);

          this.props.store.dispatch(changeAvatar, formData);
          console.log(this.props.store.getState().user?.avatar);
        }
      },
    };
  }

  render() {
    const { values } = this.state;
    return `
        <div class="wrapper">
          <div class="sidebar">
              {{{Link onClick=back }}}
          </div>

          <div class="profile-main">
            <a>
              <div class="circle">

                {{#if store.state.user.avatar}}
                  <img src={{avatar}} alt="#">
                  <label class="avatar-label" for="file"><p>Change avatar</p></label>
                  <input value="${values.file}" name="file" ref="file" type="file" id="file" name="file">
                  <div class="avatar-label">
                    {{{ Button class="avatar-label" type="submit" onClick=changeAvatar text="Upload" }}}
                  </div>
                {{else}}
                  <div class="picture"></div>
                  <label class="picture-label" for="file"><p>Change avatar</p></label>
                  <input value="${values.file}" name="file" ref="file" type="file" id="file" name="file">
                  {{{ Button type="submit" onClick=changeAvatar text="Upload" }}}
                {{/if}}


              </div>
            </a>

            <ul class="info">
            <li class="info-field"> 
              <p>Email</p>
              <p class="value">${this.props.store.getState().user?.email}</p>
            </li>
            <hr>
            <li class="info-field">
              <p>Login</p>
              <p class="value">${this.props.store.getState().user?.login}</p>
            </li>
            <hr>
            <li class="info-field"> 
              <p>First Name</p>
              <p class="value">${this.props.store.getState().user?.firstName}</p>
            </li>
            <hr>
            <li class="info-field">
              <p>Second Name</p>
              <p class="value">${this.props.store.getState().user?.secondName}</p>
            </li>
            <hr>
            <li class="info-field"> 
              <p>Display Name</p>
              <p class="value">${this.props.store.getState().user?.displayName}</p>
            </li>
            <hr>
            <li class="info-field">
              <p>Phone</p>
              <p class="value">${this.props.store.getState().user?.phone}</p>
            </li>
          </ul>

            <div class="links">
              {{{ Link onClick=profileChange text="Change data" }}}
              <hr>
              {{{ Link onClick=profilePassword text="Change password" }}}
              <hr>
              {{{ Link onClick=exit text="Logout" }}}
            </div>

          </div>
        </div>
    `;
  }
}

export default withRouter(withStore(ProfilePage));
