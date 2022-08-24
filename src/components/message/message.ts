import Block from '../../core/Block';

interface MessageProps {
  user: User;
  message: UsersMessages;
  messages: any;
  id: number;
  onClick: () => void;
}

export class Message extends Block {
  constructor({ messages, message, onClick }: MessageProps) {
    super({ messages, message, events: { click: onClick } });

    this.setProps({
      messages: () => this.props.store.getState().message,
    });
  }

  render() {
    return `
      <div class="messages">
        {{#each messages}}
          <div><p class="your-message">{{this.content}}</p></div>
        {{/each}}
      </div
    `;
  }
}
