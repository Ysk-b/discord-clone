import React from 'react';
import '~/app/styles/Chat/Chat.scss';

import GifIcon from '@mui/icons-material/Gif';
import { AddCircleOutline, CardGiftcardOutlined, EmojiEmotionsOutlined } from '@mui/icons-material';
import ChatMessage from '~/app/components/Molecules/ChatMessage';
import ChatHeader from '~/app/components/Molecules/ChatHeader';
import { useAppSelector } from '~/app/data/hooks';

const Chat = () => {
  const channelName = useAppSelector((state) => state.channelName);

  return (
    <div className='chat'>
      <ChatHeader />
      <div className='chat-messages'>
        <ChatMessage />
      </div>

      <div className='chat-input'>
        <AddCircleOutline className='chat-input-icon' />
        <form className='chat-input-form'>
          <input type='text' placeholder='Send message to #TEST' />
          <button type='submit'>Submit</button>
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
