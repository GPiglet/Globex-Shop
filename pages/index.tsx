import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Header from '../components/Header'
import NotificationBar from '../components/Notifications'
import EventCarousel from '../components/Events'

const Home: NextPage = () => {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Libre Baskerville',
        'Arial',
        'sans-serif'
      ].join(',')
    },
    palette: {
      primary: {
        main: '#272727',
      },
      // secondary: {
        // main: '#EAA34D',
      // }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Globex Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header theme={theme}/>
      <NotificationBar theme={theme} />
      <EventCarousel theme={theme} />

    </ThemeProvider>
  )
}

export default Home