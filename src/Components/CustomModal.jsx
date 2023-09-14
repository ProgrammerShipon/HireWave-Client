import { useEffect } from 'react';

// react icons
import { IoCloseSharp } from 'react-icons/io5';

const CustomModal = ({ isModalOpen, larger, setIsModalOpen, handleModal, children }) => {

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
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 overflow-scroll transition-opacity duration-300 ${isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      <div className={`relative bg-white ${larger ? `w-[750px]` : "w-[480px]"} rounded-lg`}>
        <button
          className="absolute top-2 right-2 w-9 h-9 flex items-center justify-center bg-purple/20 text-purple text-xl hover:bg-red-400/20 hover:text-red-500 shadow-lg hover:shadow-red-400/20 rounded-full duration-300 z-30 group"
          onClick={() => handleModal("cancel")}
        >
          <IoCloseSharp size='24' className='group-hover:rotate-180 duration-300' />
        </button>
        <div className='p-5'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;