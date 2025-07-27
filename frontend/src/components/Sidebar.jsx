import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    const sidebarItems = [
        { name: "Home", path: "/" },
        { name: "Customer", path: "/add-customer" },
        { name: "Properties", path: "/add-property" },
    ]
  return (
    <div className='h-full bg-cyan-100'>
        <div className='p-10'>
            <img src="crmlogo.png" alt="" />
        </div>

        <div className='mt-10 space-y-2 flex flex-col justify-center'>
            {sidebarItems.map((item, index) => (
                <NavLink key={index} to={item.path} className='px-3 py-2'>
                    {item.name}
                </NavLink>    
            ))}
        </div>
    </div>
  )
}

export default Sidebar