import React, { useState } from 'react';
import toast from 'react-hot-toast';
export default function ContactSection() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
  return (
    <div id='contact' className=' pt-2'>
      <div className="divider divider-success">Contact</div>

      <div className=" mx-auto p-8 bg-white shadow-lg rounded-lg dark:bg-black ">
      <h2 className="text-2xl font-semibold text-center mb-6">Feel free to contact me</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block ">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block ">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label htmlFor="message" className="block ">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <a href={`mailto:${formData.email}?subject=${formData.name}&body=${formData.message}`}>Send Message</a>
          
        </button>
      </form>
    </div>

    </div>
  )
}
