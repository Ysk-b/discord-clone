import { DocumentData } from 'firebase/firestore';
import React from 'react';
import '~/app/styles/Sidebar/Sidebar.scss';

interface SidebarChannelProps {
  id: string;
  channel: DocumentData; 
}

const SidebarChannel = ({ id, channel }: SidebarChannelProps) => {
  return (
    <div className='sidebar-right-channels-list-item'>
      <span className='sidebar-right-channels-list-item-hash'>#{channel.name}</span>
      <p className='sidebar-right-channels-list-item-text'>{channel.name}</p>
    </div>
  );
};

export default SidebarChannel;
