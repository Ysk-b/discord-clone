import React from 'react';
import '~/app/styles/Chat/Chat.scss';

import { Avatar } from '@mui/material';
import { Timestamp } from 'firebase/firestore';

interface ChatMessageProps {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

const ChatMessage = ({ message, timestamp, user }: ChatMessageProps) => {
  return (
    <div className='chat-messages-message'>
      <Avatar src={user?.photo}  />
      <div className='chat-messages-message-info'>
        <p>
          {user?.displayName}
          <span className='chat-messages-message-info-timestamp'>
            {timestamp ? new Date(timestamp.toDate()).toLocaleString() : ''}
          </span>
        </p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
