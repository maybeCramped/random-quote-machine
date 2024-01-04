import { useState } from 'react';
import quotes from '../quote-storage';

function useRandomQuote() {
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote);

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  function generateNewQuote() {
    const newQuote = getRandomQuote();
    setCurrentQuote(newQuote);
  }

  return { currentQuote, generateNewQuote };
}

export default useRandomQuote;
