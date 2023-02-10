import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import GradientBackground from '@/components/GradientBackground'
import Typewriter from 'typewriter-effect';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
          <Head>
        <title>Spaghettify🍝</title>

      </Head>
      {/* <div className='relative flex-row'> */}
        <GradientBackground />

      {/* </div> */}
    </>
  )
}
