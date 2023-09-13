import React from 'react';
import Image from 'next/image';

import { Settings } from '@mui/icons-material';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';

const SidebarChannelSettings = () => {
  return (
    <div className='sidebar-right-channels-settings'>
      <div className='sidebar-right-channels-settings-account'>
        <Image src="/discordIcon.png" alt="" width={24} height={24}/>
        <div className='sidebar-right-channels-settings-account-name'>
          <h4>AAA</h4>
          <span>#AAA</span>
        </div>
      </div>

      <div className='sidebar-right-channels-settings-voice'>
        <MicIcon />
        <HeadphonesIcon />
        <Settings />
      </div>
    </div>
  );
};

export default SidebarChannelSettings;
