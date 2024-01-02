import "./styles/quote-box.css"; // Asegúrate de que la ruta sea correcta según tu estructura de archivos

const QuoteBox = () => {
  return (
    <div className="quote-box">
      <div className="author">author</div>
      <div className="quote">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </div>
      <div className="additional-content"></div>
    </div>
  );
};

export default QuoteBox;
