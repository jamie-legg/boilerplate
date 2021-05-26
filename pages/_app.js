import '../styles/globals.css'
import Layout from '../src/components/layout/Layout'
import Sidebar from '../src/components/sidebar/Sidebar'
import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useTimeoutFn } from 'react-use'

function MyApp({ Component, pageProps }) {
  let [isShowing, setIsShowing] = useState(true)
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500)
  return (
    <Layout>
      <Sidebar>
      <Transition
          as={Fragment}
          show={isShowing}
          enter="transform transition duration-[400ms]"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-95 "
        >
          <div className="w-full h-full bg-white rounded-md shadow-lg" />
          </Transition>
          <Component {...pageProps} />
          
      </Sidebar>
    </Layout>

  )
}

export default MyApp