import { useState } from "react";
import "./_sidebar.scss";
import Links from "./Links/Links";
import ToggleButton from "./ToggleButton/ToggleButton";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(20px at 49px 47px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div variants={variants} className="bg">
        <Links />
      </motion.div>
      <ToggleButton open={open} setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
