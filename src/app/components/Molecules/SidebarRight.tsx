import React from 'react';

import '~/app/styles/Sidebar/Sidebar.scss';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SidebarRight = () => {
  return (
    <div className='sidebar-right-top'>
      <p className='sidebar-right-top-text'>DISCORD</p>
      <KeyboardArrowDownIcon className='sidebar-right-top-icon' />
    </div>
  );
};

export default SidebarRight;
