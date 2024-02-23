import React, { useState, useEffect } from 'react';
/*
interface TypewriterTextProps {
  phrases: string[];
  interval: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ phrases, interval }) => {
  const [phraseIndex, setPhraseIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [typedText, setTypedText] = useState<string>('');

  const typeWriterEffect = (): void => {
    const currentPhrase = phrases[phraseIndex];
    const char = currentPhrase[charIndex];

    setTypedText((prevText) => prevText + char);
    setCharIndex((prevIndex) => prevIndex + 1);

    if (charIndex === currentPhrase.length - 1) {
      setTimeout(() => {
        setTypedText('');
        setCharIndex(0);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, interval);
    }

    if (charIndex === currentPhrase.length) {
      setCharIndex(0);
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(typeWriterEffect, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [phraseIndex, charIndex]);

  return <span>{typedText}</span>;
};

export default TypewriterText;
 */

import Typewriter from 'typewriter-effect';

interface TypewriterTextProps {
  sentences: string[];
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ sentences, className }) => {
  return (
    <span className={className}>
      <Typewriter
        options={{
          strings: sentences,
          autoStart: true,
          loop: true,
        }}
      />
    </span>
  );
};

export default TypewriterText;
