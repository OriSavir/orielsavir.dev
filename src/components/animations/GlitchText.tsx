import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState(text);
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        const glitchedText = text
          .split('')
          .map(char => 
            Math.random() > 0.8 
              ? String.fromCharCode(Math.floor(Math.random() * 26) + 65) 
              : char
          )
          .join('');
        
        setDisplayText(glitchedText);
        
        setTimeout(() => {
          setDisplayText(text);
        }, 200);
      }
    }, 100);
    
    return () => clearInterval(glitchInterval);
  }, [text]);
  
  return <span className={className}>{displayText}</span>;
};

export default GlitchText;
