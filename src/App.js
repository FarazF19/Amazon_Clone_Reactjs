import React from 'react'
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Checkout, Homepage , NavBar, ProductPage, SearchResults } from './components'

const App = () => {
  return (
    
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route path='/search' element={<SearchResults/>} />
        <Route path='/products/:id' element={<ProductPage/>} />
        <Route path='/checkout' element={<Checkout/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App