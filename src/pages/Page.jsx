import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Cuisine from './Cuisine'
import Favourite from './Favourite'
import Home from './Home'
import Recipe from './Recipe'
import Searched from './Searched'

function Page() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path='/searched/:search' element={<Searched />} />
        <Route path='/recipe/:id' element={<Recipe />} />
        <Route path='/favourites' element={<Favourite />} />
    </Routes>
  )
}

export default Page