import Image from 'next/image';

import { Settings } from '@mui/icons-material';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { auth} from '~/app/data/firebase';
import { useAppSelector } from '~/app/data/hooks';

const SidebarChannelSettings = () => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <div className='sidebar-right-channels-settings'>
      <div className='sidebar-right-channels-settings-account'>
        <Image
          src={user?.photo || '/discordIcon.png'}
          alt=''
          width={32}
          height={32}
          onClick={() => auth.signOut()}
        />
        <div className='sidebar-right-channels-settings-account-name'>
          <h4>{user?.displayName}</h4>
          {/* substringで最初から4文字のみ切り出し */}
          <p>#{user?.uid.substring(0, 4)}</p>
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
