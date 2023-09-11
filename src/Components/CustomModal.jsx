import React from 'react';
import { ImCancelCircle } from 'react-icons/im';
import { useEffect } from 'react';

const CustomModal = ({ isModalOpen, setIsModalOpen, handleModal, children }) => {

    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (event.target.id === 'modal-overlay') {
            setIsModalOpen(false)
          }
        };
    
        window.addEventListener('click', handleOutsideClick);
    
        return () => {
          window.removeEventListener('click', handleOutsideClick);
        };
      }, []);

    return (
        <div 
            id="modal-overlay" 
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 ${
            isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
            <div className={`relative p-8 bg-white w-[480px] rounded-lg`}>
                <button
                className="absolute top-0 right-0 m-3 text-gray-600 hover:text-gray-800"
                onClick={()=> handleModal("cancel")}
                >
                <div className='mt-3 mr-2'>
                    <div onClick={()=> handleModal("cancel")} className='text-red-500 text-xl cursor-pointer hover:bg-red-100 rounded-full p-2'><ImCancelCircle /></div>
                </div>

                </button>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default CustomModal;