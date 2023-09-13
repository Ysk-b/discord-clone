import React from 'react';
import '~/app/styles/App.scss';
import Sidebar from './components/Organisms/Sidebar';
import { Chat } from '@mui/icons-material';

const App = () => {
  return (
    <div className='app'>
      <Sidebar />
      <Chat />
    </div>
  );
};

export default App;
