import { FaRegUser } from "react-icons/fa";
export default function Employee({ employ }) {
  return (
    <section className=" duration-300 relative border border-green h-[100%] bg-white rounded-md lg:px-3  md:px-2 py-5">
      <p
        className={`inline-block lg:lef-2 lg:right-auto absolute top-2 right-2 ${
          employ.active === "online"
            ? "bg-green py-1 px-3 rounded-full text-dark"
            : "bg-red-500 py-1 px-3 rounded-full text-white"
        }`}
      >
        {employ.active === "online" ? "Online" : "Offline"}
      </p>

      <img
        className="w-40 lg:mx-auto  h-40 rounded-full object-cover"
        src={employ.images}
        alt="employee-images"
      />

      <article className="pl-4 lg:text-center md:text-left py-5">
        <h3 className="text-black text-2xl"> {employ.name}</h3>
        <p className="text-xl  text-dark">{employ.pation}</p>

        <div className="py-3 ">
          {Object.values(employ.skills).map((skill, index) => (
            <span
              key={index}
              className="mr-2 border-2  border-green text-dark bg-[#ffffff] shadow-sm py-1 px-2 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        <br />
        <br />

        <a
          href="#"
          className="border-t-4 text-lg  duration-300  border-gray  py-2"
        >
          view profile
        </a>
      </article>
    </section>
  );
}
