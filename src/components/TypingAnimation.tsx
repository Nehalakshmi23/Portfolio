import { useState, useEffect } from "react";

const roles = [
  "AI & Data Science Student",
  "ReactJS Developer", 
  "UI-Focused Problem Solver",
  "Hackathon Winner"
];

const TypingAnimation = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentRole.length) {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <div className="h-8 flex items-center">
      <span className="text-lg md:text-xl text-muted-foreground font-body">
        {currentText}
      </span>
      <span className="w-0.5 h-6 bg-primary ml-1 animate-pulse" />
    </div>
  );
};

export default TypingAnimation;
