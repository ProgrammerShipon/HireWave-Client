import { useState } from 'react';
import { Stepper, Step } from "@tkwant/react-steps";
import { useForm } from 'react-hook-form';

const LoginSteps = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const [curStep, setCurStep] = useState(0);
    const [step2Data, setStep2Data] = useState("");

    const isStep2Valid = () => {
        // Add your validation logic here, e.g., checking if step2Data is not empty
        return step2Data.trim() !== "";
    };

    const handleNextStep = () => {
        if (curStep === 1 && !isStep2Valid()) {
            alert("Step 2 data is required.");
        } else {
            setCurStep(curStep + 1);
        }
    };

    const handlePreviousStep = () => {
        setCurStep(curStep - 1);
    };

    const renderContent = () => {
        switch (curStep) {
            case 0:
                return (
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder="jobType" {...register("jobType", { required: true })} />
                            <select {...register("category", { required: true })}>
                                <option value="Front end devloper">Front end devloper</option>
                            </select>
                            <select {...register("subCategory", { required: true })}>
                                <option value="React app">React app</option>
                            </select>
                        </form>
                    </div>
                );
            case 1:
                return (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder="jobType" {...register("name", { required: true })} />
                            <select {...register("job", { required: true })}>
                                <option value="Front end devloper">Front</option>
                                <option value="Front end devloper">app</option>
                            </select>
                            <select {...register("salary", { required: true })}>
                                <option value="1">200</option>
                                <option value="2">300</option>
                                <option value="2">200</option>
                            </select>

                            <input type="submit" />
                        </form>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <Stepper
                style={{ padding: 10 }}
                curStep={curStep}
                setCurStep={setCurStep}
            >
                <Step label="Step 0 " />
                <Step label="Step 1" />
                <Step label="Step 2" />
                <Step locked={!isStep2Valid()}>??</Step>
                <Step locked={curStep < 2} />
                <Step locked={curStep < 3} />
            </Stepper>
            {renderContent()}

            {/* Previous Button */}
            {curStep > 0 && (
                <button onClick={handlePreviousStep}>Previous</button>
            )}

            {/* Next Button */}
            {curStep < 2 && (
                <button onClick={handleNextStep}>Next</button>
            )}
        </>
    );
};

export default LoginSteps;
