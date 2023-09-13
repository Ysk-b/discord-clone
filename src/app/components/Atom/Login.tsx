import React from 'react';
import Image from 'next/image';

import '~/app/styles/Login/Login.scss';

import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '~/app/data/firebase';

const Login = () => {
  const signinWithGoogle = () => {
    signInWithPopup(auth, provider).catch((err) => {
      alert(err.message);
    });
  };
  // 現状stateが初期値のnullの為、dispatchを介してstate更新の処理が必要

  return (
    <div className='login'>
      <div className='login-logo'>
        <Image src='/discordIcon.png' alt='' width={40} height={40} />
      </div>
      <Button className='login-btn' onClick={signinWithGoogle}>
        LOGIN
      </Button>
    </div>
  );
};

export default Login;
