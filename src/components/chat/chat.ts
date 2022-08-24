import Block from '../../core/Block';

interface ChatProps {
  chatListId: ChatInfo;
  title: string;
  id: number;
  messageContent: string;
  time: any;
  onClick: () => void;
  onConnectChat: () => (ChatListId: ChatInfo) => void;
}

export class Chat extends Block {
  constructor({
    chatListId, title, messageContent, id, time, onClick,
  }: ChatProps) {
    super({
      chatListId, title, messageContent, id, time, events: { click: onClick },
    });
  }

  protected render(): string {
    return `
      <div class="friend" id={{id}}>
        <span class="image"></span>
        <div class="info"> 
          <h4>{{title}}</h4>
          <p>{{message.content}}</p>
        </div>
        <div class="time"> 
          <p>{{time}}</p>
        </div>
      </div>
    `;
  }
}
