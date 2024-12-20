import React from 'react';
import Link from 'next/link';

const cart = () => {
  return (
    <div>
      <p>Cart</p>
      <Link href='/'>
      Return Home <br />
      </Link> 
    </div>
  )
}

export default cart