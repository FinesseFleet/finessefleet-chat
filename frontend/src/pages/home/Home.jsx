import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';

const Home = () => {
  return (
    <>
    <div className='flex flex-col'>
    <h6 className='font-bold mb-4 text-left text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-red-600'>FinesseFleet Chat</h6>
    <div className='flex h-[550px] md:w-[800px] lg:w-[1000px]  sm:h-[550px] md:h-[550px] rounded-lg overflow-hidden bg-white bg-opacity-80 bg-clip-padding backdrop-filter border border-gray-400  backdrop-blur-lg shadow-2xl '>
      <Sidebar />
      <MessageContainer />
    </div>
    </div>
    </>
  );
};

export default Home;