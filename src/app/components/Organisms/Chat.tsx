'use client';

import React, { useState } from 'react';
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
  addDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '~/app/data/firebase';

const Chat = () => {
  // stateで管理する入力値を送信し、Firestoreのmessages Collectionに格納したい
  const [inputText, setInputText] = useState<string>('');

  const user = useAppSelector((state) => state.user.user);
  const channelId = useAppSelector((state) => state.channel.channelId);
  const channelName = useAppSelector((state) => state.channel.channelName);

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
        <ChatMessage />
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
