import { authAPI } from '../api/auth';
import { dataAPI } from '../api/changeData';
import { chatsAPI } from '../api/chats';
import { connectChatAPI } from '../api/connectChat';
import { ChatAPI, ChatListDTO, ConnectChatAPI, UserDTO, UserToAdd } from '../api/types';
import message from '../components/message';
import type { Dispatch } from '../core';
import { apiHasError } from '../utils';
import { transformChat, transformChatList, transformUsersMessages, transformUsersToAdd } from '../utils/apiTransformers';

const activeChat: Record<any, WebSocket> = {};

type CreateChatPayload = {
  title: string;
};

type ConnectChatPayload = {
  userId: number;
  chatId: number;
};

type sendMessagePayload = {
  id: number;
  msg: string;
};

type GetChatsPayload = {
  offset?: number;
  limit?: number;
  title?: string;
}

type AddUsersData = {
  users: any[],
  chatId: number
}

let userId: any;
let tkn: number;

export const createChat = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: CreateChatPayload,
) => {
  dispatch({ isLoading: true });

  const response = await chatsAPI.createChat(action);

  if (apiHasError(response)) {
    dispatch({ isLoading: false, loginFormError: response.reason });
    return;
  }

  const responseUser = await chatsAPI.me();

  console.log(responseUser)

  dispatch({ chatList: transformChat(responseUser as ChatAPI[]) });

};


export const getChats = async (dispatch: Dispatch<AppState>, state: AppState, payload: GetChatsPayload) => {
  dispatch({ isLoading: true });

  const response = await chatsAPI.me();

  dispatch({ chatList: transformChatList(response as ChatListDTO[]) });
};


  export const sendMessage = async (
    dispatch: Dispatch<AppState>,
    state: AppState,
    payload: sendMessagePayload,
  ) => {
    let socket: WebSocket;

  
    const responseToken = tkn;
    console.log(responseToken)
    const socketURL = `wss://ya-praktikum.tech/ws/chats/${userId}/${payload.id}/${responseToken}`; 
  
    socket = new WebSocket(socketURL);
    
    socket.addEventListener('open', () => {
      
      console.log(payload.msg)
      console.log('Соединение установлено');
    
      socket.send(JSON.stringify({
        content: payload.msg,
        type: 'message',
      }));
    });
  
    socket.addEventListener('close', event => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }
    
      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });
    
    socket.addEventListener("message", event => {
        console.log('Получены данные', event.data);
        let msgData: any[] = JSON.parse(event.data);
        console.log(msgData)
        if (!Array.isArray(msgData)) {
          msgData = [msgData];
        }
  
        const messages = msgData.map((msg: any) => transformUsersMessages(msg));
        messages.sort((a: UsersMessages, b: UsersMessages) =>
          { return a.id - b.id; });
  
        console.log(messages[0].content)
  
        messages[0].id = Number(payload.id)
        console.log(msgData[0].content)
  
        dispatch({ message: msgData[0].content });
    });
  };

  export const getMessages = async (
    dispatch: Dispatch<AppState>,
    state: AppState,
    payload: sendMessagePayload,
  ) => {
    let socket: WebSocket;
  
    const responseToken = tkn;
    const socketURL = `wss://ya-praktikum.tech/ws/chats/${userId}/${payload.id}/${responseToken}`; 
  
    socket = new WebSocket(socketURL);
    
    socket.addEventListener('open', () => {
    
      socket.send(JSON.stringify({
        content: '0',
        type: 'get old',
      }));
    });
  
    socket.addEventListener('close', event => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }
    
      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });
    
    socket.addEventListener("message", event => {
        console.log('Получены данные', event.data);
        let msgData: any[] = JSON.parse(event.data);
        console.log(msgData)
        if (!Array.isArray(msgData)) {
          msgData = [msgData];
        }
  
        const messages = msgData.map((msg: any) => transformUsersMessages(msg));
        messages.sort((a: UsersMessages, b: UsersMessages) =>
          { return a.id - b.id; });

        console.log(msgData)

        let othersMsgData: any;
        let myMsgData: any;

        for (let item of msgData) {

          if (item.user_id !== userId) {
            if (!othersMsgData) {
              othersMsgData = [item]
            } else {
              othersMsgData.push(item)
            }
          } 
          
          else {
            if (!myMsgData) {
              myMsgData = [item]
            } else {
              myMsgData.push(item)
            }
          }

        }

        if (othersMsgData) { 
          dispatch({ otherMessages: othersMsgData.reverse() })
        }
        if (myMsgData) {
          dispatch({ messages: msgData.reverse() });
        }
        else {
          dispatch({ messages: []})
          dispatch({ otherMessages: []})
        }
    });
  };



  export const addUser = async (userId: number, chatId: number) => {
    await chatsAPI.addUserToChat({ users: [userId], chatId: chatId } as AddUsersData);
  };



export const openChat = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  payload: ConnectChatPayload,
) => {
  let socket: WebSocket;

  userId = payload.userId;

  const responseToken = await chatsAPI.getToken(payload.chatId);
  tkn = responseToken.token;
  const socketURL = `wss://ya-praktikum.tech/ws/chats/${payload.userId}/${payload.chatId}/${responseToken.token}`; 

  socket = new WebSocket(socketURL);
  
  socket.addEventListener('open', () => {
    console.log('Соединение установлено');
  
    // socket.send(JSON.stringify({
    //   content: 'Моё первое сообщение миру!',
    //   type: 'message',
    // }));
  });

  socket.addEventListener('close', event => {
    if (event.wasClean) {
      console.log('Соединение закрыто чисто');
    } else {
      console.log('Обрыв соединения');
    }
  
    console.log(`Код: ${event.code} | Причина: ${event.reason}`);
  });
  
  socket.addEventListener("message", event => {
      console.log('Получены данные', event.data);
      let msgData: any[] = JSON.parse(event.data);
      console.log(msgData)
      if (!Array.isArray(msgData)) {
        msgData = [msgData];
      }

      const messages = msgData.map((msg: any) => transformUsersMessages(msg));
      messages.sort((a: UsersMessages, b: UsersMessages) =>
        { return a.id - b.id; });


      messages[0].chatId = Number(payload.chatId)
      console.log("OPEN", messages)

      dispatch({ messages: messages });
  });
};
