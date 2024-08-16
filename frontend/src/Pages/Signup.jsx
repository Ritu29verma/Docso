import React, { useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

export default function Login() {
  const [value, setValue] = useState('');
  const [otp, setOtp] = useState('');
  const [phone, setPhone] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  
  const options = countryList().getData();

  const handleChange = value => {
    setValue(value);
  };

  const handlePhoneChange = e => {
    setPhone(e.target.value);
  };

  const handleOtpChange = e => {
    setOtp(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // submit
    setIsOtpSent(true); 
  };

  const handleOtpSubmit = e => {
    e.preventDefault();
    // OTP 
    console.log('OTP Verified:', otp);
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-black shadow-md rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <div className="flex">
            <div className="w-1/3 mr-2">
              <Select
                options={options}
                value={value}
                onChange={handleChange}
                isSearchable
                className="w-full"
                placeholder="Code"
              />
            </div>
            <input
              className="w-2/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Type phone number"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>

      {isOtpSent && (
        <div className="mt-6">
          <form onSubmit={handleOtpSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
                OTP Verification
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                id="otp"
                name="otp"
                placeholder="Enter OTP"
                value={otp}
                onChange={handleOtpChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Verify OTP
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
