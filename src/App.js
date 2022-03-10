import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import divider from './images/divider.svg';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const url = 'https://api.adviceslip.com/advice';

  const getquote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      }, []);
  };

  const id = data.slip ? data.slip.id : '';
  const advice = data.slip ? data.slip.advice : 'Click button for some advice';


  return (
    <div className="App">
      <header className="App-header">
        <div className='advice-card'>
          <div className='quote-id'>
            ADVICE #{id}
          </div>
          <div className='quote'>
            {advice}
          </div>
          <div className='divider-container'>
            <img className='divider' src={divider} alt='divider' />
          </div>
        </div>
        <div className='button-container'>
          <button className='advice-button' onClick={getquote}></button>
        </div>
      </header>
    </div>
  );
}

export default App;
