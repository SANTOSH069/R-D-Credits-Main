"use client";
import { useState } from "react";

const FormBuilder = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(formData);

    setTimeout(() => {
      setFormData({ firstName: "", lastName: "", email: "", phone: "" });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className='min-h-screen bg-white flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-2'>
            Form Builder
          </h1>
          <p className='text-gray-500 text-sm'>
            Fill in your details below
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* First Name & Last Name Row */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='flex flex-col space-y-2'>
              <label htmlFor='firstName' className='text-sm font-semibold text-gray-700'>
                First Name
              </label>
              <input
                id='firstName'
                type='text'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                placeholder='John'
                required
                className='px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all duration-200'
              />
            </div>

            <div className='flex flex-col space-y-2'>
              <label htmlFor='lastName' className='text-sm font-semibold text-gray-700'>
                Last Name
              </label>
              <input
                id='lastName'
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                placeholder='Doe'
                required
                className='px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all duration-200'
              />
            </div>
          </div>

          {/* Email & Phone Row */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='flex flex-col space-y-2'>
              <label htmlFor='email' className='text-sm font-semibold text-gray-700'>
                Email
              </label>
              <input
                id='email'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='john@example.com'
                required
                className='px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all duration-200'
              />
            </div>

            <div className='flex flex-col space-y-2'>
              <label htmlFor='phone' className='text-sm font-semibold text-gray-700'>
                Phone
              </label>
              <input
                id='phone'
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder='+1 (555) 000-0000'
                required
                className='px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all duration-200'
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full bg-gray-900 text-white font-semibold py-2.5 rounded-lg hover:bg-gray-800 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 cursor-pointer ease-in-out '
          >
            {submitted ? "✓ Submitted" : "Submit"}
          </button>
        </form>

        {/* Footer Text */}
        <p className='text-center text-gray-500 text-xs mt-8'>
          Your information is secure and will not be shared
        </p>
      </div>
    </div>
  );
};

export default FormBuilder; 