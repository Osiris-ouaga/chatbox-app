import React from 'react';
import { createRoot } from 'react-dom/client';  // Import createRoot from 'react-dom/client'
import './index.css';
import './App.css';
import App from './App';
import Connexion from './components/Connexion';
import NotFound from './components/NotFound';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));  // Import createRoot from 'react-dom/client'

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Connexion />} />
      <Route path='/pseudo/:pseudo' element={<App />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

// Use the new root API to render your Root component
root.render(<Root />);

serviceWorker.unregister();
