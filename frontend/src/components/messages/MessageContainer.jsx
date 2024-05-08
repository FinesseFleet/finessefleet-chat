import React, { useEffect } from 'react'
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from 'react-icons/ti';
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';

const MessageContainer = () => {
   const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(() => {
      return () => setSelectedConversation(null);
  }, []);

  return (
    <div className='md:min-w-[450px] w-[240px] flex flex-col'>
       {!selectedConversation ? (<NoChatSelected />) : (
         <>
         <div className='bg-slate-200 lg:w-[600px] px-4 py-2 mb-2'>
             <span className='label-text'>To:</span>{" "}
             <span className='text-white-900 font-bold'>{selectedConversation.fullName}</span>
         </div>
         <Messages />
         <MessageInput />
         </>
       )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const {authUser} = useAuthContext();
  return (
    <div className='flex items-center justify-center w-full h-full'>
        <div className='px-4 text-center sm:text-lg lg:pl-40 lg:pr-8 md:text-xl text-black font-semibold flex-col items-center gap-2'>
            <p>Welcome {authUser.fullName}</p>
            <p>Select a chat to start messaging</p>
            <div className="flex items-center justify-center">
            <TiMessages className='text-3xl md:text-6xl text-center ' />
        </div>
        </div>
    </div>
  );
};

