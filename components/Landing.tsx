import type { NextComponentType } from 'next'
import styles from '../styles/Landing.module.css'

const Landing: NextComponentType = () => {
  return (
    <div className={styles.landing_container}>
      <div className={styles.landing}>
        <div className={styles.firstline}>
          The Golden Cohort
        </div>
        <div className={styles.secondline}>
          Yearbook
        </div>
      </div>
    </div>
  )
}

export default Landing
