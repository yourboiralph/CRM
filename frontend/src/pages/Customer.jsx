import React, { useContext, useEffect, useState } from 'react'
import Add from '../components/Add'
import axios from 'axios'
import { AppContext } from '../context/AppContext'

const Customer = () => {
  const customerszzz = [
    { name: "Ralph Hernandez", phone: "09171234567", address: "Blk 28 Corvette St.", type: "buyer" },
    { name: "Reynaldo Baja", phone: "09281239876", address: "Lot 12 Palm Grove Subd.", type: "buyer" },
    { name: "Maricel Santos", phone: "09391234567", address: "123 Rizal Avenue", type: "seller" },
    { name: "Jomar Dela Cruz", phone: "09475678901", address: "Unit 5B, Sunrise Tower", type: "buyer" },
    { name: "Angelica Fajardo", phone: "09091235678", address: "45 Mabini Street", type: "buyer" },
    { name: "Darren Salazar", phone: "09182346789", address: "Blk 8 Camella Homes", type: "seller" },
    { name: "Leah Monteverde", phone: "09563456789", address: "Lot 4 Vista Verde", type: "buyer" },
    { name: "Emilio Robles", phone: "09671239876", address: "22 Sampaguita Street", type: "seller" },
    { name: "Trisha Guevarra", phone: "09174561234", address: "Blk 15 Orchid Lane", type: "buyer" },
    { name: "Nathaniel Cruz", phone: "09297654321", address: "Purok 3, San Isidro", type: "seller" },
  ]

  const {backendURL} = useContext(AppContext)

  const [customers, setCustomers] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  const fetchAllCustomers = async () => {
    const response = await axios.get(backendURL + "/api/customers")
    if (response.data){
      setCustomers(response.data)
    }
    
  }

  useEffect(()=>{
    fetchAllCustomers()
  }, [])

  return (
    
    <div>
      <Add isVisible={isVisible} setIsVisible={setIsVisible} />
      <h1>Customer</h1>
      <div className='mt-10'>
        <div onClick={()=>setIsVisible(true)} className='px-4 py-2 bg-cyan-200 inline-block cursor-pointer rounded-md'>
          Add Customer
        </div>

        <div className='mt-4'>
          <div className='grid grid-cols-4 bg-cyan-600 px-4 py-2 font-bold'>
            <h1>NAME</h1>
            <h1>PHONE</h1>
            <h1>ADDRESS</h1>
            <h1>TYPE</h1>
          </div>
        </div>
        <div className=''>
          {customers.map((customer, index) => (
            <div key={index} className={`grid grid-cols-4 ${index % 2 === 0 ? "bg-cyan-100" : "bg-cyan-200"} px-4 py-2`}>
              <h1>{customer.name}</h1>
              <h1>{customer.phone}</h1>
              <h1>{customer.address}</h1>
              <h1>{customer.type}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Customer