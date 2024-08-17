import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <div className="flex flex-1 flex-col items-center justify-center bg-gradient-to-b from-indigo-600 to-blue-400 py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Welcome to Docso</h1>
        
        <div className="flex flex-col md:flex-row items-center justify-around w-full max-w-5xl">
          
          <div
            className="bg-white shadow-xl rounded-lg p-8 m-4 w-full md:w-2/5 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => navigate('/doctor')}
          >
            <div className="flex flex-col items-center">
              <img 
                src="https://img.icons8.com/color/96/000000/doctor-male.png" 
                alt="Doctor" 
                className="mb-4 w-24 h-24"
              />
              <h2 className="text-2xl font-semibold text-indigo-800 text-center mb-4">Are you a Doctor?</h2>
              <p className="text-gray-600 text-center">Join our network to provide expert healthcare to patients around the world.</p>
            </div>
          </div>
          
          {/* Hospital Card */}
          <div
            className="bg-white shadow-xl rounded-lg p-8 m-4 w-full md:w-2/5 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => navigate('/hospital')}
          >
            <div className="flex flex-col items-center">
              <img 
                src="https://img.icons8.com/color/96/000000/hospital-room.png" 
                alt="Hospital" 
                className="mb-4 w-24 h-24"
              />
              <h2 className="text-2xl font-semibold text-indigo-800 text-center mb-4">Are you a Hospital?</h2>
              <p className="text-gray-600 text-center">Partner with us to bring top-notch medical services to more people.</p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
