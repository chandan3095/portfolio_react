import "./_navbar.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaGithubAlt,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
const Navbar = () => {
  const motionProps = {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      staggerDirection: 1,
    },
  };
  return (
    <div className="navbar">
      {/* sidebar  */}
      <div className="wrapper">
        <div>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="logo"
          >
            Chandan Dev
          </motion.span>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={motionProps}
          className="social"
        >
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
            }}
            href="#"
          >
            <FaFacebookF />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
            }}
            href="#"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
            }}
            href="#"
          >
            <FaGithubAlt />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
            }}
            href="#"
          >
            <FaLinkedinIn />
          </motion.a>
          <Sidebar />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
