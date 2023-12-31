'use client';

import '~/app/styles/Sidebar/Sidebar.scss';

import SidebarChannel from '~/app/components/Atom/SidebarChannel';
import SidebarChannelSettings from '~/app/components/Atom/SidebarChannelOption';

import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useAppSelector } from '~/app/data/hooks';
import useCollection from '~/app/hooks/useCollection';

import { db } from '~/app/data/firebase';
import { addDoc, collection } from 'firebase/firestore';

const SidebarChannels = () => {
  // useAppSelectorでグローバルなstate使用を有効化
  // state.user.user('userスライス'内の'userステート')
  const user = useAppSelector((state: any) => state.user.user);
  const { documents: channels } = useCollection('channels');

  // channelName -> フィールド名 : channelName: 入力値
  // prompt()、ダイアログ表示、入力完了した値が変数に入る
  const addChannel = async () => {
    let channelName: string | null = prompt("Let's create a new channel");

    // 条件分岐 -> 変数がnullの場合処理を意図的にskip
    // Firestoreの'channels'というDBに対し、channelNameフィールドを作成の上、channelName変数の値を格納
    if (channelName) {
      await addDoc(collection(db, 'channels'), {
        channelName: channelName,
      });
    }
  };

  return (
    <div className='sidebar-right-channels'>
      <div className='sidebar-right-channels-header'>
        <div className='sidebar-right-channels-header-top'>
          <KeyboardArrowDownIcon className='sidebar-right-chennels-header-top-icon' />
          <p className='sidebar-right-chennels-header-top-text'>React Channel</p>
        </div>
        <AddIcon className='sidebar-right-channels-header-plus' onClick={() => addChannel()} />
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
