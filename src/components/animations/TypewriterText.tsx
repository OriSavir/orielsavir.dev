import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  colors: string[];
  typingSpeed?: number;
  cursorBlinkSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  colors,
  typingSpeed = 100,
  cursorBlinkSpeed = 500,
  delayBetweenTexts = 500,
  className = '',
}) => {
  const [displayedText, setDisplayedText] = useState<string[]>(
    Array(texts.length).fill('')
  );
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (currentTextIndex >= texts.length) {
      setIsTypingComplete(true);
      setShowCursor(false);
      return;
    }

    if (currentCharIndex < texts[currentTextIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => {
          const newTexts = [...prev];
          newTexts[currentTextIndex] =
            texts[currentTextIndex].substring(0, currentCharIndex + 1);
          return newTexts;
        });
        setCurrentCharIndex(currentCharIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentTextIndex(currentTextIndex + 1);
        setCurrentCharIndex(0);
      }, delayBetweenTexts);

      return () => clearTimeout(timeout);
    }
  }, [
    currentTextIndex,
    currentCharIndex,
    texts,
    typingSpeed,
    delayBetweenTexts,
  ]);

  useEffect(() => {
    if (isTypingComplete) {
      return;
    }

    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(interval);
  }, [cursorBlinkSpeed, isTypingComplete]);

  return (
    <span className={className}>
      {displayedText.map((text, index) => (
        <span
          key={index}
          className={colors[index]}
          style={{ position: 'relative' }}
        >
          {text}
          {currentTextIndex === index && showCursor && (
            <span
              className={`${colors[index]} opacity-70`}
              style={{ marginLeft: '2px' }}
            >
              _
            </span>
          )}
          {index < displayedText.length - 1 && ' '}
        </span>
      ))}
    </span>
  );
};

export default TypewriterText;
