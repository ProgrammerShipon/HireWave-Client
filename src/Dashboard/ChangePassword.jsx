import { useState } from "react";
import DashTitle from "../Components/DashComponents/DashTitle";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

// react icons
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const ChangePassword = () => {
    const { changePassword } = useAuth();
    const [newPass, setNewPass] = useState('');
    const [show, setShow] = useState(false);
    console.log(newPass)

    const handlePassChange = () => {
        changePassword(newPass)
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Change successfully',
                    showConfirmButton: false,
                    timer: 2500
                });
            }).catch((error) => {
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 4000,
                    theme: "light",
                });
            });
    }
    return (
        <section className="m-5 rounded-md">
            <DashTitle title="Change Password" />

            <div className="py-28 max-w-xl mx-auto">
                <div className="flex flex-col items-start justify-center gap-4 bg-white p-6 rounded-md shadow-4xl shadow-gray/40">
                    <h2 className="mt-10 text-4xl text-green/80 font-semibold text-left">
                        Enter New Password
                    </h2>
                    <label htmlFor="password"
                        className="w-full relative"
                    >
                        <input type={`${show ? "text" : "password"}`}
                            placeholder="New password"
                            onChange={(e) => setNewPass(e.target.value)}
                            className="w-full border border-gray/40 focus:outline-none focus:border-green py-3 px-4 rounded-md text-lg"
                        />
                        <button onClick={() => setShow(!show)} className="absolute top-1/2 right-1 -translate-x-1/2 -translate-y-1/2 text-gray">
                            {
                                !show ? <AiOutlineEye size={24} /> :
                                    <AiOutlineEyeInvisible size={24} />
                            }
                        </button>
                    </label>
                    <div className="w-full text-right">
                        <button className="border border-green py-2 px-8 rounded-md text-dark text-xl hover:bg-green hover:text-white duration-300" onClick={handlePassChange}>Change Password</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChangePassword;
