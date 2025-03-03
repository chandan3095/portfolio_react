import { useRef } from "react";
import "./_services.scss";
import { motion, useInView } from "framer-motion";
import data from "./data/data";
import peopleImg from "../../assets/people.webp";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src={peopleImg} alt="" />
          <h3>
            <b style={{ color: "orange" }}>Unique</b> Ideas
          </h3>
        </div>
        <div className="title">
          <h3>
            <b style={{ color: "orange" }}>For Your</b> Business.
          </h3>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {data.map((item) => (
          <div key={item.id} className="box">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>{item.buttonText}</button>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
