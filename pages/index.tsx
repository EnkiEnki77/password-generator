import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Slider from '../components/Slider'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Password Generator</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet"/>
      </Head>

      <Slider/>
    </div>
  )
}

export default Home
