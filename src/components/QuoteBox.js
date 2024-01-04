import useRandomQuote from "../hooks/useRandomQuote";
import "./styles/quote-box.css"; // Asegúrate de que la ruta sea correcta según tu estructura de archivos

const QuoteBox = () => {
  const { currentQuote, generateNewQuote } = useRandomQuote();
  const quoteContentURIEncoded = encodeURIComponent(currentQuote.quote + "\n\n" + "-" + currentQuote.author);
  const twitterURL =
    "https://www.twitter.com/intent/tweet?text=" +
    quoteContentURIEncoded;
  return (
    <div className="quote-box">
      <div className="quote" id="text">
        "{currentQuote.quote}"
        <div className="author" id="author">
          {currentQuote.author}
        </div>
      </div>
      <div className="additional-content">
        <div>
          <a
            id="tweet-quote"
            href={twitterURL}
            target="_blank"
            className="button-link"
            rel="noopener noreferrer"
          >
            twett it
          </a>
     
        </div>
        <button id="new-quote" className="button" onClick={generateNewQuote}>
          new quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
