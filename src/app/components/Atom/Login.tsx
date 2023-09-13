import React from 'react';
import Image from 'next/image';

import '~/app/styles/Login/Login.scss';

import { Button } from '@mui/material';

const Login = () => {
  return (
    <div className='login'>
      <div className='login-logo'>
        <Image src='/discordIcon.png' alt='discordIcon' width={20} height={20} />
      </div>
      <Button className='login-btn'>LOGIN</Button>
    </div>
  );
};

export default Login;
