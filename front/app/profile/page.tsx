import React from 'react';
import Link from 'next/link';

const profile = () => {
  return (
    <div>
      <p>Profile</p>
      <Link href='/'>
      Return Home <br />
      </Link> 
    </div>
  )
}

export default profile