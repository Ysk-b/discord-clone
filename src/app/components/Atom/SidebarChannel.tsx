import { DocumentData } from 'firebase/firestore';
import React from 'react';
import { useAppDispatch } from '~/app/data/hooks';
import { setChannelInfo } from '~/app/features/channelSlice';
import '~/app/styles/Sidebar/Sidebar.scss';

interface SidebarChannelProps {
  id: string;
  channel: DocumentData;
}

const SidebarChannel = ({ id, channel }: SidebarChannelProps) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className='sidebar-right-channels-list-item'
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channel.channel.channelName,
          }),
        )
      }
    >
      <span className='sidebar-right-channels-list-item-hash'>#</span>
      <p className='sidebar-right-channels-list-item-text'>{channel.channel.channelName}</p>
    </div>
  );
};

export default SidebarChannel;
