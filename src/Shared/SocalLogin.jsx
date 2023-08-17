
const SocalLogin = () => {
    const handleGoogleLogin = () => {
        console.log("handleGoogleLogin")
    }
    const handleGithubleLogin = () => {
        console.log("handleGithubleLogin")
    }

    return (
        <div className='space-y-2 py-3'>
            <button onClick={handleGoogleLogin} className='w-full flex justify-center items-center border border-green hover:shadow-md hover:shadow-green/20 p-2 h-12 rounded-md'>
                <h3 className='text-xl text-dark font-semibold'>Continue With </h3>
                <img src="https://i.ibb.co/PrvjGn6/google-2.png" className='w-11' alt="" />

            </button>

            <button onClick={handleGithubleLogin} className='w-full flex justify-center items-center border border-green hover:shadow-md hover:shadow-green/20 p-2 h-12 rounded-md'>
                <h3 className='text-xl text-dark font-semibold'>Continue With </h3>
                <img src="https://i.ibb.co/jWK1zcZ/github-PNG40.png" className='w-9' alt="" />
            </button>
        </div>
    );
};

export default SocalLogin;