import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PartyPopper } from "lucide-react";
import ConfettiWrapper from "./Confetti";
import "../Styles/Home.css"; // Import the CSS file

function Home() {
  const [countdown, setCountdown] = useState(3); // Initial countdown is 3
  const [isCountdownFinished, setIsCountdownFinished] = useState(false);

  useEffect(() => {
    if (countdown === 0) {
      setIsCountdownFinished(true);
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div className="home-container">
      <ConfettiWrapper />

      {/* Show only countdown and confetti initially */}
      {!isCountdownFinished && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="birthday-message countdown"
        >
          {countdown}
        </motion.div>
      )}

      {/* Show the actual birthday message and the button after countdown */}
      {isCountdownFinished && (
        <>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="birthday-message birthday-message-lg"
          >
            Happy Birthday Ashu 🎉
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="birthday-text"
          >
            Wishing you a very very happy birthday meri jaan! 😍😍😍🎉🎉🎉 ASHU. As you know, aaj ka din mere liye kitna precious and masha allah kitna khaas hai. Me pure saal bss isi din ka intzaar krta hu aakhikaar itna khaas jo h ❤️❤️💕💕.... I just pray on this beautiful and lucky day, allah aapki har har jaiz dua kabool kre 🙌🏻🙌🏻, aapko acchi se acchi naimato se nawaaze 🙌🏻🙌🏻, Allah aapke haq me behtar se behtar cheez ata farmae 💕💕💕, Aapki saari preshaniya Allah SWT dur kre, aapko aapke mummy papa ko bahut bahut khush rkhe.🙌🏻🙌🏻🙌🏻 And Really i am very very thankful to have you in my life, Wish hum ese hi rahe 🤞🏻🤞🏻. thank you for every moment in which you helped me💕💕❤️❤️❤️. Zyada to kuch khaas nhi pr ye chota sa, wish karne ka tareeka change kiya h Hope, Apko accha lage ☺️☺️
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="start-button"
            onClick={() => (window.location.href = "/gallery")}
          >
            <div className="flex items-center gap-2">
              <PartyPopper className="icon" />
              Start the Surprise
            </div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="start-button"
            onClick={() => (window.location.href = "/carousel")}
          >
            <div className="flex items-center gap-2">
              <PartyPopper className="icon" />
              View Gallery
            </div>
          </motion.button>
        </>
      )}
    </div>
  );
}

export default Home;
