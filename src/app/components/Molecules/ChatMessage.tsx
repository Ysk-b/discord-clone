import { Avatar } from '@mui/material';
import React from 'react';

const ChatMessage = () => {
  return (
    <div className='chat-messages-message'>
      <Avatar />
      <div className='chat-messages-message-info'>
        <h4>
          TEST
          <span className='chat-messages-message-info-timestamp'></span>
        </h4>
        <p>TEST</p>
      </div>
    </div>
  );
};

export default ChatMessage;
