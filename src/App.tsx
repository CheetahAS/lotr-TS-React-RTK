import React from 'react';
import './App.scss';
import { BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <ErrorBoundary>
              <AppRouter/>
          </ErrorBoundary>
        </div>
      </div>
    </BrowserRouter>  
  );
}

export default App;


