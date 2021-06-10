import { motion } from "framer-motion";
import Link from "next/link";

interface IHomeProps {

}

export default function Home(props: IHomeProps) {
  const config = {
    type: "spring",
    damping: 20,
    stiffness: 100
  };
  return (
    <>
    <div className="title">The Buddy Project</div>
    <a href="worlds">Let's go</a>
    </>
  )
}
