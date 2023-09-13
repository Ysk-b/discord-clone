import React from 'react';
import '~/app/styles/Chat/Chat.scss';

import { HelpRounded, Notifications, SearchRounded, SendRounded } from '@mui/icons-material';
import PushPinIcon from '@mui/icons-material/PushPin';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const ChatHeader = () => {
  return (
    <div className='chat-header'>
      <div className='chat-header-left'>
        <h3 className='chat-header-left-text'>
          <span className='chat-header-left-text-hash'>#TEST</span>
        </h3>
      </div>

      <div className='chat-header-right'>
        <Notifications />
        <PushPinIcon />
        <PeopleAltIcon />
        <div className='chat-header-right-search'>
          <input type='text' placeholder='検索' className='chat-header-right-search-input' />
          <SearchRounded />
        </div>
        <SendRounded />
        <HelpRounded />
      </div>
    </div>
  );
};

export default ChatHeader;
