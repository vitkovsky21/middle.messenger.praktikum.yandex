export type APIError = {
  reason: string;
};

export type UserDTO = {
  id: number;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  avatar: any;
  phone: string;
  email: string;
};

export type ChatAPI = {
  id?: number;
  title: string;
  offset?: number;
  limit?: number;
}

export type ChatListDTO = {
  id: number;
  title: string;
  avatar: any;
  unread_count: number;
  last_message: MessageDTO;
};

export type MessageDTO = {
  user: UserDTO;

  time: Date;
  content: string;
};

export type ChatDTO = {
  id: number;
  user_id: number;
  chat_id: number;
  content: string;
  time: Date;
};

export type ConnectChatAPI = {
  id: number;
}

export type UserToAdd = Partial<User>[];
