import React from 'react';
import '../Styles/Letter.css';

const BirthdayLetter = () => {
  return (
    <div className="letter-container">
      <div className="letter-paper">
        <h2 className="letter-title">🎂 A Birthday Message for You</h2>
        <p className="letter-text">
          ASHU,
        </p>
        <p className="letter-text">
          On this special day, I want to wish you a very Happy Birthday! 🎉 You bring so much joy,
          love, and positivity to everyone around you. May your year be filled with wonderful memories,
          laughter, and everything your heart desires.
        </p>
        <p className="letter-text">
          Enjoy every moment, and remember—you’re truly cherished. 💖
        </p>
        <p className="letter-signature">With love, <br /> [Your Name]</p>
      </div>
    </div>
  );
};

export default BirthdayLetter;
