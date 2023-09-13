import React from 'react';
import '~/app/styles/Sidebar/Sidebar.scss';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';

const SidebarChannels = () => {
  return (
    <div className='sidebar-right-channels'>
      <div className='sidebar-right-channels-header'>
        <div className='sidebar-right-channels-header-top'>
          <KeyboardArrowDownIcon className='sidebar-right-chennels-header-top-icon' />
          <p className='sidebar-right-chennels-header-top-text'>React Channel</p>
        </div>
        <AddIcon className='sidebar-right-channels-header-plus' />
      </div>
    </div>
  );
};

export default SidebarChannels;
