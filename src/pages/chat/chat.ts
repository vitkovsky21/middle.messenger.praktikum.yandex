import { BrowseRouter, Store } from '../../core';
import Block from '../../core/Block';
import { addUser, createChat, getChats, getMessages, openChat, sendMessage } from '../../services/chats';
import { withRouter, withStore } from '../../utils';
import { initChat } from '../../services/initApp';


type ChatProps = {
  router: BrowseRouter;
  store: Store<AppState>;
  chatList?: ChatInfo[] | null;
  chat: ChatInfo[] | null
  selectedChat: ChatInfo;
  user: User;
  thisId: number;
  userId: number;
  previousMsg: ArchiveMessages[];
  messages: ChatInfo[]
  otherMessages: ChatInfo[]
};

export class Chat extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super(props);
  }

  componentDidMount() {
    const promise = Promise.resolve('success');

    promise
      .then(() => {  
        this.props.store.dispatch(initChat)
        this.props.store.dispatch(getChats)
      })

    setTimeout(() => {
      if (!this.props.store.getState().chat) {
        this.props.router.go('/login');
      }
    }, 1500)
  }

  protected getStateFromProps() {
    this.state = {
      values: {
        message: '',
        userid: ''
      },
      errors: {
        message: '',
      },
      chatList: {
        title: ''
      },
      connect: {
        id: ''
      },
      onConnectChat: (chat: ChatInfo) => {

        let id = chat.path[0].id
        let featuredChat = chat.path[0]

        const connectChatData = {
          featuredId: id
        }

        const nextState = {
          values: {...connectChatData}
        }

        this.props.thisId = id
        this.props.userId = this.props.store.getState().user.id;
        
        this.setState(nextState)
        this.setProps({ selectedChat: featuredChat })
        
        setTimeout(() => {
          console.log("AUU")        
          this.props.store.dispatch(openChat, { userId: this.props.store.getState().user.id, chatId: id });
        }, 300)
        setTimeout(() => {
          this.props.store.dispatch(getMessages, {id: this.props.selectedChat.id})
        }, 1000)
        setTimeout(() => {
          let elements = document.getElementsByClassName('msg')
          for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove('loader') 
          }
          let msgArr: any = this.props.store.getState().messages
          for (let i = 0; i < elements.length; i++) {
            console.log(msgArr[i].user_id)
            if (msgArr[i].user_id == this.props.userId) {
              elements[i].classList.add('your-message')
            } else {
              elements[i].classList.add('users-message')
            }
          }

          setTimeout(() => {
            document.getElementsByClassName("msg")[elements.length-1].scrollIntoView()
          }, 100)
          
        }, 1300)   
        

      },
      toProfilePage: () => {
        console.log(this.props.store.getState().chat);
        this.props.router.go('/profilePage');
      },
      add: () => {
        const addUserData = {
          userid: (this.refs.userid as HTMLInputElement).value
        }

        const nextState = {
          values: {...addUserData}
        }

        let numUserId = Number(addUserData.userid)
        addUser(numUserId, this.props.thisId)

        this.setState(nextState);
        
      },
      createChat: () => {
        const createChatData = {
          title: (this.refs.title as HTMLInputElement).value
        };

        const nextState = {
          errors: {
            message: ''
          },
          values: { ...createChatData },
        };

        this.setState(nextState);
        this.props.store.dispatch(createChat, createChatData)

        setTimeout(() => {
          let elements = document.getElementsByClassName('msg')
          let msgArr: any = this.props.store.getState().messages

          for (let i in elements) {
            if (msgArr) {
              if (msgArr[i].user_id == this.props.userId) {
                elements[i].classList.add('your-message')
              } else {
                elements[i].classList.add('users-message')
              }
            }
          }
        }, 1300)
        
        
        setTimeout(() => { 
          this.props.router.go("/chat")    
        }, 1400)  

      },
      send: () => {
        const chatData = {
          message: (this.refs.message as HTMLInputElement).value,
        };

        const nextState = {
          values: { ...chatData },
        };

        this.setState(nextState);
        this.props.store.dispatch(sendMessage, {id: this.props.selectedChat.id, msg: chatData.message})

        const promise = Promise.resolve('success');

        promise
          .then(() => {          
    
            if (!this.props.messages) {
              this.props.messages = [this.props.store.getState().message]
            }
  
            this.setState(nextState);

            this.props.store.dispatch(getMessages, {id: this.props.selectedChat.id, msg: chatData.message})
            this.setState(nextState);
          })
        .then(() => {
          setTimeout(() => {
            let elements = document.getElementsByClassName('msg')
            for (let i = 0; i < elements.length; i++) {
              elements[i].classList.remove('loader') 
            }
            
            let msgArr: any = this.props.store.getState().messages
  
            for (let i = 0; i < elements.length; i++) {
              console.log(msgArr[i].user_id)
              if (msgArr[i].user_id == this.props.userId) {
                elements[i].classList.add('your-message')
              } else {
                elements[i].classList.add('users-message')
              }
            }

            setTimeout(() => {
              document.getElementsByClassName("msg")[elements.length-1].scrollIntoView()
            }, 100)
            
          }, 1300)
        })
        
      },
    };
  }

  render() {
    const { values, chatList } = this.state;

    return `
      <div class="wrapper">
        <div class="list">

          <div class="profile">
            {{{ Link onClick=toProfilePage to="./pages" text="Profile >" }}}
          </div>

          {{{ Input class="field" type="search" placeholder="Search" }}}

          <div class="friend-list">
          {{#each store.state.chatList }}
              <hr>
              {{{ Chat title="{{title}}" id="{{id}}" messageContent="{{message.content}}" onClick=../onConnectChat }}}
              {{#if message.content}}
                <p class="last-message">{{message.content}}</p>
                <p class="time" style="visibility:visible">{{message.time}}</p>
              {{else}}
                <p class="last-message">No conversations yet.</p>
                <p class="time">t</p>
              {{/if}}
          {{/each}}
          <hr>
          </div>

          <div class="new-chat">
            {{{ Input class="field" value="${chatList.title}" ref="title" type="search" placeholder="Create new chat" }}}
            {{{ Link text="Create >" onClick=createChat}}} 
          </div>
        </div>

        <div class="chat"> 
          <div class="chat-user">
            {{#if store.state.values.userid}}
              {{{ Input class="field" value="${values.userid}" ref="userid" type="search" placeholder="Add user to chat" }}}
            {{else}}
              {{{ Input class="field" value="" ref="userid" type="search" placeholder="Add user to chat by ID" }}}
            {{/if}}
              {{{ Button text="Add >" onClick=add}}}
          </div>
          <hr class="line">
        
          {{#if selectedChat}}
            <div class="chat-messages">
              {{#each store.state.messages}}
                <div class="msg loader"><p>{{content}}</p></div>
              {{/each}}
            </div>
          {{/if}}

          <hr class="line">
          <div class="message-input"> 
            {{#if store.state.values.message}}
              {{{ Input value="${values.message}" ref="message" class="field" type="text" placeholder="Message" }}}
            {{else}}
              {{{ Input value="" ref="message" class="field" type="text" placeholder="Message" }}}
            {{/if}}
              {{{ Link onClick=send }}}
          </div>
        </div>
      <div>
    `;
  }
}

export default withRouter(withStore(Chat))