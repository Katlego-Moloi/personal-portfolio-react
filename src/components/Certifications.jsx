import { motion } from "framer-motion";
import { useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCards } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

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

const microsoftCerts = [
  {
    id: "azure-ai",
    name: "Azure AI Fundamentals",
    issuer: "Microsoft",
    badge:
      "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg?branch=main",
    // Use the specific badge image for AI-900
    badgeUrl:
      "https://images.credly.com/size/340x340/images/4136ced8-75d5-4afb-8677-40b6236e2672/azure-ai-fundamentals-600x600.png",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/TubatseKatlegoMoloi-5390/7A1AC9123D6A5777?sharingId=2BD380D08A96A4A5",
  },
  {
    id: "m365",
    name: "Microsoft 365 Fundamentals",
    issuer: "Microsoft",
    badgeUrl:
      "https://images.credly.com/size/340x340/images/0c6d9839-f468-4adc-987d-9a9b4e1a2efa/image.png",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/TubatseKatlegoMoloi-5390/32E2E5AC0B9BCD35?sharingId=2BD380D08A96A4A5",
  },
];

const credlyCerts = [
  {
    id: "e2d518f0-1b49-4254-99b2-f454ab55b67b",
    label: "Credly Badge 1",
  },
  {
    id: "c7cc2760-3261-470b-8739-d4e1a693f366",
    label: "Credly Badge 2",
  },
  {
    id: "89661990-df4f-444e-a29e-5d5d5813dba5",
    label: "Credly Badge 3",
  },
  {
    id: "edd5250f-eb13-4dbb-9867-3f1fb64f5b4e",
    label: "Credly Badge 4",
  },
  {
    id: "f5c1c793-9891-496c-92d5-a895c8220277",
    label: "Credly Badge 5",
  },
  {
    id: "cae44ce5-cbdd-42cc-824d-13e484395021",
    label: "Credly Badge 6",
  },
  {
    id: "8f91437f-b25f-4bf3-8941-91cd4b9b52df",
    label: "Credly Badge 7",
  },
  {
    id: "e4486d10-9200-4a62-8017-41b0c78e6afa",
    label: "Credly Badge 8",
  },
  {
    id: "ca123802-5039-4952-83ff-ac7a417a9090",
    label: "Credly Badge 9",
  },
];

export const Certifications = () => {
  useEffect(() => {
    // Load Credly embed script if not already loaded
    if (!document.querySelector('script[src*="credly.com"]')) {
      const script = document.createElement("script");
      script.src = "//cdn.credly.com/assets/utilities/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script already exists, trigger re-render of badges
      if (window.CredlyBadgeWidget) {
        window.CredlyBadgeWidget.init();
      }
    }
  }, []);

  return (
    <motion.section
      id="certifications"
      className="certifications"
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
        Certifications
      </motion.h2>

      {/* Microsoft Certifications */}
      <motion.div
        className="cert-group"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h3 className="cert-group-title">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft"
            className="cert-group-logo"
          />
          Microsoft
        </h3>
        <motion.div
          className="cert-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {microsoftCerts.map((cert) => (
            <motion.a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card ms-cert-card"
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="cert-badge-wrapper">
                <img
                  src={cert.badgeUrl}
                  alt={cert.name}
                  className="ms-badge-img"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="ms-badge-fallback" style={{ display: "none" }}>
                  <span>MS</span>
                </div>
              </div>
              <div className="cert-info">
                <span className="cert-name">{cert.name}</span>
                <span className="cert-issuer">{cert.issuer} Certified</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Credly Badges */}
      <motion.div
        className="cert-group"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h3 className="cert-group-title">CompTIA</h3>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {credlyCerts.map((cert) => (
            <SwiperSlide>
              <motion.div
                key={cert.id}
                className="credly-badge-wrapper"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div
                  data-iframe-width="320"
                  data-iframe-height="300"
                  data-share-badge-id={cert.id}
                  data-share-badge-host="https://www.credly.com"
                />
              </motion.div>
              <motion.div
                style={{
                  position: "absolute",
                  bottom: "3px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 10,
                }}
              >
                <i class="fa-solid fa-hand"></i>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};
