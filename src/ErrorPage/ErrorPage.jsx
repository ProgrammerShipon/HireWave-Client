import Lottie from "lottie-react";
import ErrorAnimation from "../../src/Assets/animation_ll61csxq.json";
import { Link, useRouteError } from "react-router-dom";
import Button from "../Components/Button";

const ErrorPage = () => {
	const { error, status } = useRouteError();

	return (
		<section className="flex flex-col justify-center h-screen item-center">
			<div className="mx-auto w-96">
				<Lottie animationData={ErrorAnimation} loop={true} />
			</div>

			<div className="text-center">
				<p class="text-gray text-2xl">
					Sorry, We couldn't find what you are looking for!
					<br />
					<span className="text-red-500">{error?.message}</span>
				</p>
				<Link className="inline-block mt-5 " to="/">
					<Button>Back to Home </Button>
				</Link>
			</div>
		</section>
	);
};

export default ErrorPage;