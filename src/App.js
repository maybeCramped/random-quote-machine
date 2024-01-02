import './App.css';
import QuoteBox from './components/QuoteBox';

const App = ()=> {
  return (
    <div className="App">
        <h1>Random Quote Generator</h1>
        <div className='container'>
          <QuoteBox/>
        </div>
    </div>
  );
}

export default App;
