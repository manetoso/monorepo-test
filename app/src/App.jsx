import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

const isDev = process.env.NODE_ENV === 'development';
const baseURL = isDev ? 'http://localhost:3001' : '';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState({});

  const handleFetch = async () => {
    const response = await fetch(`${baseURL}/api`);
    const data = await response.json();
    setTimeout(() => {
      setIsLoading(false);
      setApiData(data.message);
    }, 1200);
  };
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className='App'>
      <div>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      {isLoading ? <p>Loading...</p> : <p>{apiData}</p>}
    </div>
  );
}

export default App;
