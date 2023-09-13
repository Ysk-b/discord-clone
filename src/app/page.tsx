'use client';

import React from 'react';
import '~/app/styles/App.scss';

import { useAppSelector } from './data/hooks';

import Sidebar from './components/Organisms/Sidebar';
import Chat from './components/Organisms/Chat';
import Login from './components/Atom/Login';

const App = () => {
  // reduxを介して、userはglobalな変数として利用可能?
  const user = useAppSelector((state) => state.user)
  console.log(user);

  return (
    <div className='app'>
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
