import React from 'react';
import '~/app/styles/App.scss';

import Sidebar from './components/Organisms/Sidebar';
import Chat from './components/Organisms/Chat';
import Login from './components/Atom/Login';

const App = () => {
  // 初期値をnullに設定
  const user = null;

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
