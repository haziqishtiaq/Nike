import React from 'react';
import Link from 'next/link';

const product = () => {
  return (
    <div>
      <p>Product</p>
      <Link href='/'>
      Return Home <br />
      </Link> 
    </div>
  )
}

export default product