import React, { useContext, useState } from 'react'
import { AppContext } from "../context/AppContext";
import axios from "axios"

const Add = ({isVisible, setIsVisible}) => {
    if(!isVisible) return null;
    const {backendURL} = useContext(AppContext)
    const [formData, setFormData] = useState({
        name: "",
        type: "buyer",
        phone: "",
        address: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(backendURL + "/api/customers", formData)

        setIsVisible(false)
    }

  return (
    <div className='fixed inset-0 bg-black/25 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-[700px] flex flex-col'>
            <button onClick={() => setIsVisible(false)} className='place-self-end cursor-pointer'>X</button>
            <div className='bg-white rounded p-10 shadow-2xl'>
                <h1 className='text-2xl font-bold'>Modal Type</h1>
                <div className='mt-10'>
                    <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-6'>
                        <div className='flex flex-col'>
                            <label className='text-lg ' htmlFor="name">Name</label>
                            <input className='border border-gray-300 rounded-md p-2 focus:outline-none' name='name' type="text" onChange={(e) => setFormData((prev) => ({...prev, name: e.target.value}))} value={formData.name} placeholder='Juan Dela Cruz' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-lg ' htmlFor="address">Address</label>
                            <input className='border border-gray-300 rounded-md p-2 focus:outline-none' name='address' type="text" onChange={(e) => setFormData((prev) => ({...prev, address: e.target.value}))} value={formData.address} placeholder='South Lake Hill St.' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-lg ' htmlFor="phone">Phone</label>
                            <input className='border border-gray-300 rounded-md p-2 focus:outline-none' name='phone' type="text" onChange={(e) => setFormData((prev) => ({...prev, phone: e.target.value}))} value={formData.phone} placeholder='+1 992 8272 912' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-lg ' htmlFor="type">Type</label>
                            <select className='border border-gray-300 rounded-md p-2 focus:outline-none' name="type" onChange={(e) => setFormData((prev) => ({...prev, type: e.target.value}))} value={formData.type} id="">
                                <option value="buyer">Buyer</option>
                                <option value="seller">Seller</option>
                            </select>
                        </div>

                        <button type='submit' className='inline-block w-fit bg-cyan-400 px-4 py-2 rounded-md cursor-pointer'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add