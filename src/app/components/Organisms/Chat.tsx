'use client';

import React, { useEffect, useState } from 'react';
import '~/app/styles/Chat/Chat.scss';

import GifIcon from '@mui/icons-material/Gif';
import { AddCircleOutline, CardGiftcardOutlined, EmojiEmotionsOutlined } from '@mui/icons-material';
import ChatMessage from '~/app/components/Molecules/ChatMessage';
import ChatHeader from '~/app/components/Molecules/ChatHeader';
import { useAppSelector } from '~/app/data/hooks';
import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  Timestamp,
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '~/app/data/firebase';

interface MessagesProps {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

const Chat = () => {
  // stateで管理する入力値を送信し、Firestoreのmessages Collectionに格納したい
  const [inputText, setInputText] = useState<string>('');
  const [messages, setMessages] = useState<MessagesProps[]>([]);

  const user = useAppSelector((state) => state.user.user);
  const channelId = useAppSelector((state) => state.channel.channelId);
  const channelName = useAppSelector((state) => state.channel.channelName);

  useEffect(() => {
    let collectionRef = collection(db, 'channels', String(channelId), 'messages');

    // 1. collectionRefをsnapshotに記載の形式でリアルタイムに切り出す
    // 2. 更新関数に指定し、状態変数に値を格納
    onSnapshot(collectionRef, (snapshot) => {
      let results: MessagesProps[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setMessages(results);
    });
  }, [channelId]);

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    // channelsコレクション 内の messagesコレクション 内に データ格納
    const collectionRef: CollectionReference<DocumentData, DocumentData> = collection(
      db,
      'channels',
      String(channelId),
      'messages',
    );

    const docRef: DocumentReference<DocumentData, DocumentData> = await addDoc(collectionRef, {
      message: inputText,
      timestamp: serverTimestamp(),
      user: user,
    });
  };

  return (
    <div className='chat'>
      <ChatHeader channelName={channelName} />
      <div className='chat-messages'>
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message.message} timestamp={message.timestamp} user={message.user} />
        ))}
      </div>

      <div className='chat-input'>
        <AddCircleOutline className='chat-input-icon' />
        <form className='chat-input-form'>
          <input
            type='text'
            placeholder='Send message to #TEST'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
          />
          <button
            type='submit'
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => sendMessage(e)}
          >
            Submit
          </button>
        </form>

        <div className='chat-input-icons'>
          <CardGiftcardOutlined />
          <GifIcon />
          <EmojiEmotionsOutlined />
        </div>
      </div>
    </div>
  );
};

export default Chat;
