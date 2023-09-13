import React from 'react';

import '~/app/styles/Sidebar/Sidebar.scss';

import SidebarLeft from '~/app/components/Molecules/SidebarLeft';
import SidebarRight from '~/app/components/Molecules/SidebarRight';
import SidebarChannels from '~/app/components/Molecules/SidebarChannels';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarLeft />
      <div className='sidebar-right'>
        <SidebarRight />
        <SidebarChannels />
      </div>
    </div>
  );
};

export default Sidebar;
