declare global {
  export type Nullable<T> = T | null;

  export type Keys<T extends Record<string, unknown>> = keyof T;
  export type Values<T extends Record<string, unknown>> = T[Keys<T>];

  export type Indexed = { [key: string]: any };

  export type AppState = {
    screen: Screens | null;
    isLoading: boolean;
    loginFormError: string | null;
    signUpFormError: string | null;
    user: User | null;
    chat: ChatInfo[] | null;
    chatList: ChatInfo[] | ChatInfo | null;
    connectChat: ConnectChat | null
    message: ChatInfo | null;
    messages: ChatInfo[] | null;
    otherMessages: ChatInfo[] | null;
  };

  export type User = {
      id: number;
      login: string;
      password?: string;
      firstName: string;
      secondName?: string;
      displayName?: string;
      avatar?: any;
      phone?: string;
      email?: string;
  };

  export type ChatList = {
    title: string;
    id?: number;
  };

  export type ChatInfo = {
    id?: number;
    title?: string;
    avatar?: any;
    unreadCount?: number;
    message?: Message;
  };

  export type Message = {
    user: User<Omit<User, "id">>;
  
    time: string;
    content: string;
  };

  export type UsersMessages = {
    id: number;
    userId: number;
    chatId: number;
    content: string;
    time: Date;
  };

  export type ArchiveMessages = {
    id: number;
    userId: number;
    chatId: number;
    content: any[];
    time: Date;
  };

  export type ConnectChat = {
    id: number;
  };
}

export {}
