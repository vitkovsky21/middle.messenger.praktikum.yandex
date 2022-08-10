import { ChatAPI, ChatDTO, ChatListDTO, MessageDTO, UserDTO } from '../api/types';

export const transformUser = (data: UserDTO): User => {
  return {
    login: data.login,
    firstName: data.first_name,
    secondName: data.second_name,
    displayName: data.display_name,
    avatar: data.avatar ? `https://ya-praktikum.tech/api/v2/resources${data.avatar}` : null,
    phone: data.phone,
    email: data.email,
    id: data.id,
  };
};

export const transformChat = (data: ChatAPI[]): ChatList[] => {
  return data.map((data) => {
    return {
      title: data.title,
      id: data.id
    };
  })
};

export const transformUsersMessages = (data: ChatDTO): UsersMessages => {
  return {
      id: data.id,
      userId: data.user_id,
      chatId: data.chat_id,
      content: data.content,
      time: data.time
  };
};


export const transformChatList = (data: ChatListDTO[]): ChatInfo[] => {
  return data.map((i) => {
      return {
          id: i.id,
          title: i.title,
          avatar: i.avatar,
          unreadCount: i.unread_count,
          message: transformMessage(i.last_message)
      } as ChatInfo;
  });
};

export const transformMessage = (data: MessageDTO): Message | null => {
  if (data) {
      return {
          user: transformUser(data.user),
          time: new Date(data.time).toLocaleDateString(),
          content: data.content
      };
  }

  return null;
};

export const transformUsersToAdd = (data: User[]): User[] => {
  return data.map((index): User => {
      return {
          id: index.id,
          avatar: index.avatar,
          login: index.login,
          firstName: index.firstName,
          secondName: index.secondName,
          displayName: index.displayName,
          email: index.email,
          phone: index.phone
      } as User;
  });
};
