import { useEffect, useState } from "react";
import "./App.css";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Certifications } from "./components/Certifications";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Parallax pages={5}>
        <ParallaxLayer
          speed={0.25}
          factor={7}
          style={{
            zIndex: -2,
            backgroundImage: 'url("images/background-collage.webp")',
            backgroundRepeat: "repeat-y",
            backgroundSize: "100% auto",
            backgroundPosition: "center top",
          }}
        ></ParallaxLayer>

        <ParallaxLayer factor={5} offset={0}>
          <Navbar />
          <Hero />
          <Projects />
          <Certifications />
          <Contact />
          <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>&copy; 2025 JCMK. All rights reserved.</p>
          </motion.footer>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
