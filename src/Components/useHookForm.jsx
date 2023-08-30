import { useForm } from 'react-hook-form';
import useModal from '../Components/useModal';

const useHookForm = (operation) => {
    const { setIsModalOpen } = useModal();
    const { reset } = useForm();

    const onHookFormSubmit = (data) => {
        console.log( data)

        //TODO: Update education data
        setIsModalOpen(false)
        reset();
    }
    console.log(operation)
    return { onHookFormSubmit }
};

export default useHookForm;