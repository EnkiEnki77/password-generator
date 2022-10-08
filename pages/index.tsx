import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GeneratedPassword from '../components/GeneratedPassword'
import PasswordParameters from '../components/PasswordParameters'
import Slider from '../components/Slider'
import Title from '../components/Title'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-black px-4 py-16 gap-4 ">
      <Head>
        <title>Password Generator</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet"/>
      </Head>
      <Title/>
      <GeneratedPassword/>
      <PasswordParameters/>
    </div>
  )
}

export default Home
