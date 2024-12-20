import Link from "next/link"

const home = () => {
  return (
    <div>
      <h1>Home</h1>
      <h2>Products</h2>
      <Link href='auth/login'>
      Login Here <br />
      </Link>
      <Link href='auth/signup'>
      Dont have an account! Signup Here <br />
      </Link>
      <Link href='/cart'>
      See items you have Added to cart <br />
      </Link> 
      <Link href='/profile'>
      Profile Information <br />
      </Link> 
    </div>
  )
}

export default home