'use client';

import '~/app/styles/Sidebar/Sidebar.scss';

import SidebarChannel from '~/app/components/Atom/SidebarChannel';
import SidebarChannelSettings from '~/app/components/Atom/SidebarChannelOption';

import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useAppSelector } from '~/app/data/hooks';
import useCollection from '~/app/hooks/useCollection';

const SidebarChannels = () => {
  const user = useAppSelector((state) => state.user);
  const { documents: channels } = useCollection('channels');

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
