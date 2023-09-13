import React from 'react';
import '~/app/styles/Sidebar/Sidebar.scss';

import Image from 'next/image';

const SidebarLeft = () => {
  return (
    <div className='sidebar-left'>
      <div className='sidebar-left-icon'>
        <Image
          className='sidebar-left-icon-image'
          src='/next.svg'
          alt=''
          width={50}
          height={50}
        />
      </div>
      <div className='sidebar-left-icon'>
        <Image
          className='sidebar-left-icon-image'
          src='/next.svg'
          alt=''
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default SidebarLeft;
