import React from 'react';
import { Route, Routes } from 'react-router-dom';

import * as Pages from './pages';
import { PageWrapper } from './components';
import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<PageWrapper />}>
          <Route index element={<Pages.HomePage />} />
          <Route path='/characters' >
            <Route index element={<Pages.SuperHerosPage />} />
            
          </Route>
          <Route path='/search' element={<Pages.SearchPage />} />
          <Route path='*' element={<Pages.NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
