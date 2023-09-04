import { useForm } from 'react-hook-form';

const useHookForm = (operation) => {
    const { reset } = useForm();

    const onHookFormSubmit = (data) => {
        console.log( data)

        //TODO: Update education data
        reset();
    }
    console.log(operation)
    return { onHookFormSubmit }
};

export default useHookForm;