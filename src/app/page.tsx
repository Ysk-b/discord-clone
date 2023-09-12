import React from 'react';
import '~/app/styles/App.scss';
import Sidebar from './components/Organisms/Sidebar';

const App = () => {
  return (
    <div className='app'>
      <Sidebar />
    </div>
  );
};

export default App;
