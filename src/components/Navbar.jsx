import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/blog-post">Blog Post</Link>
      </li>
      <li>
        <Link href="/login">Login</Link>
      </li>
      <li>
        <Link href="/register">Register</Link>
      </li>
    </ul>
      
    </nav>
  )
}

export default Navbar