import "./_portfolio.scss";
import { motion, AnimatePresence } from "framer-motion";
import portfolioData from "./data/data";
import { useState } from "react";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.4 },
    }),
  };

  return (
    <motion.div
      className="project-card"
      key={project.id}
      custom={index}
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="image-container">
        <img src={project.image} alt={project.title} />
        <div className="title-overlay">{project.title}</div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="hover-content"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <p className="description">{project.description}</p>
              <p className="languages">Technologies: {project.languages}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("live");

  const categories = [
    { id: "live", label: "Live Work" },
    { id: "demo", label: "Demo Work" },
    { id: "figma", label: "Figma Design" },
  ];

  return (
    <div className="portfolio-section">
      <h2 className="section-title">
        <b style={{ color: "orange" }}>Featured</b> Works
      </h2>

      <div className="tabs-container">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`tab-button ${
              activeTab === category.id ? "active" : ""
            }`}
            onClick={() => setActiveTab(category.id)}
          >
            {category.label}
            {activeTab === category.id && (
              <motion.div
                layoutId="activeTab"
                className="tab-indicator"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <motion.div
        className="cards-container"
        key={activeTab}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {portfolioData[activeTab].map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
