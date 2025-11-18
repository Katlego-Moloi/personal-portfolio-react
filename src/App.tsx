import { useEffect, useState } from "react";
import "./App.css";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Parallax pages={4}>
        <ParallaxLayer
          speed={0.2}
          factor={2.5}
          style={{
            zIndex: -1,
            backgroundImage: 'url("images/collage-background.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center top",
            height: "100%",
            width: "100%",
          }}
        ></ParallaxLayer>

        <ParallaxLayer>
          <Navbar />
          <Hero />
        </ParallaxLayer>

        <ParallaxLayer offset={1}>
          <Projects />
        </ParallaxLayer>

        <ParallaxLayer offset={2}>
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
