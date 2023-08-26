import { Link } from "react-router-dom";

const DashTitle = ({ title }) => {
    return (
        <div>
            <h2 className="text-2xl font-medium text-dark drop-shadow-lg">{title}</h2>

            <div className="flex items-center gap-2">
                <Link to="/dashboard/dashboardHome"
                    className="text-lightGray hover:text-green duration-300"
                >Dashboard</Link> /
                <p className="text-green tracking-wider font-light">{title}</p>
            </div>
        </div>
    );
};

export default DashTitle;