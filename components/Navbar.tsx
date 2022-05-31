import type { NextComponentType } from 'next'
import Link from 'next/link';
import styles from '../styles/Navbar.module.css'

const Navbar: NextComponentType = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <li className={styles.title}><Link href="/"><a>The Golden Cohort</a></Link></li>
        <li><Link href="/"><a>Slides</a></Link></li>
        <li><Link href="/"><a>Login</a></Link></li>
      </ul>
    </div>
  )
}

export default Navbar
