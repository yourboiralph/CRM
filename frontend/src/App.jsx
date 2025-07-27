import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Sidebar from './components/Sidebar'
import Property from './pages/Property'
import Customer from './pages/Customer'

const App = () => {
  return (
    <div className='flex min-h-screen container max-w-screen-2xl'>
      <div className='w-[18%]'>
        <Sidebar />
      </div>
      <div className='w-[70%] my-8 mx-auto'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/add-customer' element={<Customer />} />
          <Route path='/add-property' element={<Property />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App