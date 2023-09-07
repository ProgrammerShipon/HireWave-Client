import Lottie from "lottie-react";
import Animation from "../Assets/loader.json";
const PageLoader = () => {
    return (
        <div className='w-64 h-72 mx-auto flex items-center justify-center overflow-hidden'>
            <Lottie animationData={Animation}
                className="w-full"
            ></Lottie>
        </div>
    );
};

export default PageLoader;