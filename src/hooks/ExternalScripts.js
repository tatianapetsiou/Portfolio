import React, { useState, useEffect } from "react";

const Typewriter = ({ text }) => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting) {
        // Type a new character
        setTypedText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);

        // If we've typed the entire string, start deleting
        if (currentIndex + 1 === text.length) {
          setIsDeleting(true);
        }
      } else {
        // Delete the last character
        setTypedText(text.substring(0, currentIndex -1));
        setCurrentIndex(currentIndex -1);

        // If we've deleted the entire string, start typing again
        if (currentIndex === 2) {
          setIsDeleting(false);
        }
      }
    }, 180);

    return () => clearInterval(interval);
  }, [text, typedText, currentIndex, isDeleting]);

  return (
    <span>
      {typedText}
    </span>
  );
};

export default Typewriter;
