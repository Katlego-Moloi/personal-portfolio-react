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

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('public/images/money-mart.png')",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> MoneyMart Website </h3>
          <p>
            A modern one page business website built with WebStudio to reduce
            project duration and cost.
          </p>
          <div className="project-tech">
            <span>WebStudio</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('public/images/kovsie-cash-web.png')",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> KovsieCash Website </h3>
          <p>
            Final year Software Engineering project. A web application
            University of the Free State, QwaQwa Campus, designed to streamline
            financial services for students and staff. The system supports basic
            banking functionalities such as account management, fund transfers,
            and transaction histories. The project is built using a
            client-server architecture for secure and efficient operations.
          </p>
          <div className="project-tech">
            <span>ASP.NET MVC</span>
            <span>SQLlite</span>
            <span>MSSQL</span>
            <span>Bootstrap</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('public/images/kovsie-cash-mobile.png')",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> KovsieCash Mobile App </h3>
          <p>
            Final year Software Engineering project. A mobile application for
            the University of the Free State, QwaQwa Campus, designed to
            supplement the web application by providing all the same features in
            a mobile friendly form.
          </p>
          <div className="project-tech">
            <span>Android Studio</span>
            <span>SQLlite</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
