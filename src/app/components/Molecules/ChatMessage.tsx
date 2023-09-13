import React from 'react';
import '~/app/styles/Chat/Chat.scss';

import { Avatar } from '@mui/material';

const ChatMessage = () => {
  return (
    <div className='chat-messages-message'>
      <Avatar />
      <div className='chat-messages-message-info'>
        <p>
          TEST
          <span className='chat-messages-message-info-timestamp'></span>
        </p>
        <p>TEST</p>
      </div>
    </div>
  );
};

export default ChatMessage;
