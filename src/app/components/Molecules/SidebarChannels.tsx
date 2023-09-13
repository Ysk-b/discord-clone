'use client';

import React, { useEffect, useState } from 'react';
import '~/app/styles/Sidebar/Sidebar.scss';

import SidebarChannel from '~/app/components/Atom/SidebarChannel';
import SidebarChannelSettings from '~/app/components/Atom/SidebarChannelOption';

import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { db } from '~/app/data/firebase';
import { DocumentData, collection, onSnapshot, query } from 'firebase/firestore';

interface ChannelProps {
  id: string;
  channel: DocumentData;
}

const SidebarChannels = () => {
  const [channels, setChannels] = useState<ChannelProps[]>([]);
  const queryData = query(collection(db, 'channels'));

  useEffect(() => {
    onSnapshot(queryData, (querySnapshot) => {
      const channelsResults: ChannelProps[] = [];
      querySnapshot.docs.forEach((doc) =>
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        }),
      );
      setChannels(channelsResults);
    });
  }, []);

  return (
    <div className='sidebar-right-channels'>
      <div className='sidebar-right-channels-header'>
        <div className='sidebar-right-channels-header-top'>
          <KeyboardArrowDownIcon className='sidebar-right-chennels-header-top-icon' />
          <p className='sidebar-right-chennels-header-top-text'>React Channel</p>
        </div>
        <AddIcon className='sidebar-right-channels-header-plus' />
      </div>
      <div className='sidebar-right-channels-list'>
        {channels.map((channel) => (
          <SidebarChannel channel={channel} id={channel.id} key={channel.id} />
        ))}
      </div>
      <SidebarChannelSettings />
    </div>
  );
};

export default SidebarChannels;
