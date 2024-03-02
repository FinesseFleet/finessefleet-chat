import React, { useState } from 'react';
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
  const[inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

 const {loading, signup} = useSignup();

const handleCheckboxChange = (gender) => {
  setInputs({...inputs, gender})
};

const handleSubmit = async (e) => {
  e.preventDefault();
   await signup(inputs);
};

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-blue-900 bg-opacity-80'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up
          <span className='text-orange-400'> FinesseFleet Chat</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2 '>
              <span className='text-base label-text text-orange-400'>Full Name</span>
            </label>
            <input type='text' placeholder='Enter Your Name' className='w-full input input-bordered h-10' 
              value={inputs.fullName}
              onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
            />
          </div>
          <div>
            <label className='label p-2 '>
              <span className='text-base label-text text-orange-400'>Username</span>
            </label>
            <input type='text' placeholder='Enter Unique Username' className='w-full input input-bordered h-10' 
            value={inputs.username}
            onChange={(e) => setInputs({...inputs, username: e.target.value})}
            />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text text-orange-400'>Password</span>
            </label>
            <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10' 
            value={inputs.password}
            onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
          </div>
          <div>
            <label className='label pb'>
              <span className='text-base label-text text-orange-400'>Confirm Password</span>
            </label>
            <input type='password' placeholder='Confirm Your Password' className='w-full input input-bordered h-10' 
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
            />
          </div>
          <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender} />

          < Link to='/login' className='text-sm hover:underline hover:text-white mt-2 inline-block text-orange-400'>
            Already have an account?
          </Link>
          <div>
          <button className='btn btn-block btn-sm mt-2 border-slate-700'
          disabled={loading}
          >
            {loading ? <span className='loading loading-spinner'></span> : 'Sign Up'}
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;