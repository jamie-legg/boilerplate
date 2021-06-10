import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../src/components/layout/Layout'
import Sidebar from '../src/components/sidebar/Sidebar'
import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useTimeoutFn } from 'react-use'
import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  let [isShowing, setIsShowing] = useState(true)
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500)
  const spring = {
    type: "",
    damping: 40,
    stiffness: 100,
    when: "afterChildren"
  };
  return (
    <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap" rel="stylesheet" />
    </Head>
    <AnimatePresence>
    <div className="page-transition-wrapper">
    <Sidebar visible={true} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Component {...pageProps} />
      </motion.div>
      </div>
    </AnimatePresence>
  </div>




  )
}

export default MyApp