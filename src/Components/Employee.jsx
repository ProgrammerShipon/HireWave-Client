import { FaRegUser } from "react-icons/fa";
export default function Employee({ employ }) {
  return (
    <section>
      <div className=" h-[100%] bg-white rounded-md px-3  py-5">
        <span
          className={`mt-1 ${
            employ.active === "online"
              ? "bg-green py-1 px-3 rounded-full text-dark"
              : "bg-red-500 py-1 px-3 rounded-full text-white"
          }`}
        >
          {employ.active === "online" ? "Online" : "Offline"}
        </span>
        <img
          className="w-40 mx-auto h-40 rounded-full object-cover "
          src={employ.images}
          alt="employee-images"
        />

        <article className="pl-4 text-center py-5">
          <h3 className="text-black text-2xl"> {employ.name}</h3>
          <p className="text-xl  text-dark">{employ.pation}</p>

          <div className="text-center py-3">
            {Object.values(employ.skills).map((skill, index) => (
              <span
                key={index}
                className="mr-2 border-2 border-green text-dark bg-[#ffffff] shadow-sm py-1 px-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          <p className=" pt-6 text-dark text-lg">{employ.about}</p>
          <br />
          <br />
          <a href="#" className="border-t-4 text-lg   border-gray  py-2">
            view profile
          </a>
        </article>
      </div>
    </section>
  );
}
