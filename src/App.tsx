import React from 'react';
import './App.scss';
import { BrowserRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
import AppRouter from './components/AppRouter';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        
        <div>
          <AppRouter/>
        </div>
      </div>
    </BrowserRouter>  
  );
}

export default App;
