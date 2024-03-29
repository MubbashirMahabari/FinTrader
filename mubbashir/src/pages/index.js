import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar/navbar'
import { Box } from '@mui/material'
import Hero from '@/components/hero/hero'
import Shovan from '@/components/shovan/shovan'
import Info from '@/components/info/info'
import Infocarousel from '@/components/infocarousel/infocarousel'
import { Expand } from '@mui/icons-material'
import Expert from '@/components/expert/expert'
import Forex from '@/components/forex/forex'
import Demo from '@/components/demo/demo'
import Account from '../components/account/account'
import Accountcarousel from '@/components/accountcarousel/accountcarousel'
import Hints from '@/components/hints/hints'
import Straight from '@/components/straight/straight'
import Platform from '@/components/platform/platform'
import Copytrading from '@/components/copytrading/copytrading'
import Tradingbasic from '@/components/tradingbasic/tradingbasic'
import Advance from '@/components/advance/advance'
import Advantage from '@/components/advantage/advantage'
import Latest from '@/components/latest/latest'
import Awards from '@/components/awards/awards'
import Footer from '@/components/footer/footer'
import Latestcarousel from '@/components/latestcarousel/latestcarousel'
import Herocarousel from '@/components/herocarousel/herocarousel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />


      </Head>

      <Box>
        <Navbar />
        <Hero />
        {/* <Herocarousel /> */}
        <Shovan />
        <Info />
        <Expert />
        <Forex />
        <Demo />
        <Account />
        <Hints />
        <Straight />
        <Platform />
        <Copytrading />
        <Tradingbasic />
        <Advance />
        <Advantage />
        <Latest />
        <Awards />
        <Footer />
      </Box>
    </>
  )
}
