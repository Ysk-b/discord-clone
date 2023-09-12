import React from 'react';
import '~/app/styles/Sidebar/Sidebar.scss';
import SidebarLeft from '../Molecules/SidebarLeft';
import SidebarRight from '../Molecules/SidebarRight';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarLeft />
      <SidebarRight />
    </div>
  );
};

export default Sidebar;
