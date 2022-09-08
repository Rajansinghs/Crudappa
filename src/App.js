import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Component/Home';
import Add from './Component/Add';
import Edit from './Component/Edit';

const App = () => {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path='/'  element= {<Home />}/>
            <Route path='/create' element= {<Add />} />
            <Route path='/edit' element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
