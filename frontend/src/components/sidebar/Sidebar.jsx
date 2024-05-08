import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogutButton from './LogutButton';

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 w-[170px] sm:w-[300px] md:w-[450px] flex flex-col'>
        <SearchInput />
        <div className='divider px-3'></div>
        <Conversations />
        <LogutButton />
        
    </div>
  );
};

export default Sidebar;