import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SocialLogin from "../Components/SocialLogin";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";

// react icons
import { BiUserPin } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import { MdAlternateEmail, MdLockOutline } from "react-icons/md";

const SignUpForm = () => {
  const { axiosSecure } = useAxios();
  const { signUpUser, profileUpdate } = useAuth();

  // navigate
  const navigate = useNavigate();
  const from = "/select_role";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    const onSubmit = (data) => {
        if (data.password.length < 6) {
            return toast.warning("password should be 6 characters", {
                position: "top-right",
                autoClose: 4000,
                theme: "light",
            });
        }
        if (data.password !== data.confirm) {
            return toast.warning("password didn't match", {
                position: "top-right",
                autoClose: 4000,
                theme: "light",
            });
        }

        signUpUser(data.email, data.password)
          .then((result) => {
              profileUpdate(result.user, data.name)
                .then(() => {
                    navigate(from, { replace: true });
                  })
                  .catch((error) => {
                      toast.error(error.message, {
                          position: "top-right",
                          autoClose: 4000,
                          theme: "light",
                      });
                  });
          })
    };

  return (
    <section className="py-20 md:py-[120px] duration-300">
      <div className="container">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-lg mx-auto p-10 shadow-2xl rounded-xl"
        >
          <h1 className="text-dark text-5xl font-bold mb-10 drop-shadow-lg text-center">
            Sign Up
          </h1>

          {/* name input field */}
          <div className="flex items-center border border-green rounded-lg gap-3 p-3">
            <label htmlFor="name">
              {" "}
              <BiUserPin className="text-green text-2xl" />
            </label>
            <input
              className="w-full border-none outline-none"
              id="name"
              placeholder="Enter full name"
              {...register("name", { required: true })}
            />
          </div>

          {errors.name && (
            <span className="text-sm text-red ml-1">Name is required</span>
          )}

          {/* email input */}
          <div className="flex items-center border border-green rounded-lg gap-3 p-3 mt-3">
            <label htmlFor="email">
              {" "}
              <MdAlternateEmail className="text-green text-2xl" />
            </label>
            <input
              type="email"
              className="w-full border-none outline-none"
              id="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
          </div>
          {errors.email && (
            <span className="text-sm text-red-400 ml-1">Email is required</span>
          )}

          {/* password input */}
          <div className="flex items-center border border-green rounded-lg gap-3 p-3 mt-3">
            <label htmlFor="password">
              {" "}
              <MdLockOutline className="text-green text-2xl" />
            </label>
            <input
              type="password"
              className="w-full border-none outline-none"
              id="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </div>
          {errors.password && (
            <span className="text-sm text-red-400 ml-1">
              Password is required
            </span>
          )}

          {/* confirm password input */}
          <div className="flex items-center border border-green rounded-lg gap-3 p-3 mt-3">
            <label htmlFor="confirm">
              {" "}
              <BsShieldCheck className="text-green text-2xl" />
            </label>
            <input
              type="password"
              className="w-full border-none outline-none"
              id="confirm"
              placeholder="Confirm password"
              {...register("confirm", { required: true })}
            />
          </div>
          {errors.password && (
            <span className="text-sm text-red-400 ml-1">
              Confirm password is required
            </span>
          )}

          {/* sign up button */}
          <button
            className="bg-dark text-white w-full hover:text-white px-5 py-3 rounded-lg hover:bg-green duration-300 shadow-xl hover:shadow-green/20 mt-4"
            type="submit"
          >
            Sign Up
          </button>

          <div className="flex items-center gap-3 mx-5 my-5">
            <span className="border-t border-purple w-full block"></span>
            <span className="text-green">OR</span>
            <span className="border-t border-purple w-full block"></span>
          </div>

          <SocialLogin />

          <p className="mt-5 text-center text-gray">
            Already have an account?{" "}
            <Link className="text-green font-medium underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUpForm;
