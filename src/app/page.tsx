'use client';

import React, { useEffect } from 'react';
import '~/app/styles/App.scss';

import { useAppDispatch, useAppSelector } from './data/hooks';

import Sidebar from './components/Organisms/Sidebar';
import Chat from './components/Organisms/Chat';
import Login from './components/Atom/Login';
import { auth } from './data/firebase';
import { login, logout } from './features/userSlice';

const App = () => {
  // reduxを介して、userはglobalな変数として利用可能?
  const user = useAppSelector((state) => state.user.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser);
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          }),
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

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
