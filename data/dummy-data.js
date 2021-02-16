import ChatMessage from "../models/ChatMessage";
import ChatRoom from "../models/ChatRoom";

export const USERS = [
    new User('Felix Sandgren', '1234', 'felix@sandgren.dk', '', 'MSc in Medicine', true),
    new User('Thomas Nielsen', '1234', 'felix2@sandgren.dk', '', 'MSc2 in Medicine', true)
];

export const CHATMESSAGES = [
    new ChatMessage(new Date(2021, 0, 1, 20, 10, 1), 'Hello anyone our there!', USERS[0]),
    new ChatMessage(new Date(2021, 0, 1, 20, 12, 1), 'Hello I am here', USERS[1]),
    new ChatMessage(new Date(2021, 0, 1, 20, 14, 1), 'Hello how are you!', USERS[0]),
    new ChatMessage(new Date(2021, 0, 1, 20, 15, 1), 'Hello looking at a React Native teacher right now..!', USERS[1]),
];

export const CHATROOM = [
    new ChatRoom(new Date(2021, 0, 1, 2, 0, 0), 'CBS Surf', CHATMESSAGES),
    new ChatRoom(new Date(2021, 0, 1, 2, 1, 0), 'CBS Students', []),
    new ChatRoom(new Date(2021, 0, 1, 2, 2, 0), 'CBS Poker', [])
];