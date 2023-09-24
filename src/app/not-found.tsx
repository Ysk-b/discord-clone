import Link from 'next/link';
import React from 'react';

const notFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link href='/'>Go back to home</Link>
    </div>
  );
};

export default notFound;
