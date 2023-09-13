import React from 'react';

import GifIcon from '@mui/icons-material/Gif';
import { AddCircleOutline, CardGiftcardOutlined, EmojiEmotionsOutlined } from '@mui/icons-material';
import ChatMessage from '../Molecules/ChatMessage';
import ChatHeader from '../Molecules/ChatHeader';

const Chat = () => {
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
