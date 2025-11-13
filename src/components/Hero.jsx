import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> 🗣️ howdy, my name is </span>
          </motion.div>

          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Katlego Moloi
          </motion.h1>

          <motion.h2 style={{ color: "#654ea3" }}>
            {" "}
            Software Engineer & Creative{" "}
          </motion.h2>

          <motion.p style={{ marginBottom: "30px" }}>
            a passionate IT professional and developer dedicated to creating
            practical, impactful digital solutions. With a strong foundation in
            Computer Science and Business Management, I am currently looking
            into more frameworks for faster web development and love turning
            ideas into seamless, user-focused applications that solve real
            problems and drive innovation.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View my Work
            </motion.a>

            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/Katlego-Moloi" target="_blank">
              <i className="fab fa-github"></i>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/tubatse-katlego-moloi/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>

            <motion.a href="https://leetcode.com/u/user6473KO/" target="_blank">
              <i className="fas fa-terminal"></i>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/i.luv.bluee/"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="hero-image">
            {/* 3D model will be added here at some point */}
            <div
              style={{
                display: "block",
                backgroundColor: "#654ea3",
                width: "100%",
                height: "100%",
              }}
            ></div>
          </div>
        </motion.div>

        <motion.div
          className="floating-card"
          animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="card-content">
            <span className="card-icon"> 💻 </span>
            <span className="card-text">
              {" "}
              Currently working on something awesome!
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
