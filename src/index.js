import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import Connexion from './components/Connexion';
import NotFound from './components/NotFound';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route, Routes } from 'react-router-dom';  // Import Routes instead of Switch

const Root = () => (
    <BrowserRouter>
        <Routes>  {/* Use Routes instead of Switch */}
            <Route path='/' element={<Connexion />} />
            <Route path='/pseudo/:pseudo' element={<App />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
