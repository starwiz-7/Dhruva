import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Coming from '@components/ComingSoon/comingsoon'
export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>DHRUVA - IIITK</title>
        <meta name="description" content="Dhruva IIITK Technical Fest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Coming/>
    </div>
  )
}
