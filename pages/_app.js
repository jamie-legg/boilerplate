import "../styles/globals.css";
import Layout from "../src/components/layout/Layout";
import Sidebar from "../src/components/sidebar/Sidebar";
import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useTimeoutFn } from "react-use";

function MyApp({ Component, pageProps }) {
  let [isShowing, setIsShowing] = useState(true);
  let [resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);
  return (
    <Layout>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </Layout>
  );
}

export default MyApp;
