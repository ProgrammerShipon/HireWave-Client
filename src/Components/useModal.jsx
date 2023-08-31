import { useState } from 'react';

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = (action) => {
    if (action === 'edit') {
      setIsModalOpen(true);
    } else if (action === 'cancel') {
      setIsModalOpen(false);
    }
  };

  return {
    isModalOpen,
    setIsModalOpen,
    handleModal,
  };
};

export default useModal;
