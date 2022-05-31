import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import Yearbook from '../components/Yearbook'
import { motion } from "framer-motion"

const Home: NextPage = () => {
  return (
    <div>
      {/* <motion.div 
        className={styles.slide_container}
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>

        <iframe className={styles.slide} src="https://www.youtube.com/embed/SZeRrg9N_MI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </motion.div> */}
      <Navbar />
      <Landing />
      <Yearbook/>

      <footer className={styles.footer}>
        <a
          href=""
        >
          {"Footer stuff :]"}
        </a>
      </footer>
    </div>
      

  )
}

export default Home
