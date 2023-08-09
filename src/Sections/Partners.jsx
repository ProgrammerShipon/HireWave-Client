import { useEffect, useState } from "react";

const Partners = () => {
  const [partnerData, setData] = useState(null);

  // Todo: Partner Fetching Data 
  useEffect(() => {
    fetch("OurPartners.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container">
        {/* TODO:  Section Title */}

        <div className="flex flex-wrap items-center justify-center gap-6">
          {partnerData &&
            partnerData.map((partner, i) => (
              <figure
                key={i}
                className="max-w-[150px] p-4 rounded-sm transition duration-200 border-green/10 shadow-md hover:shadow-green/50 cursor-pointer gap-5 hover:shadow-lg"
              >
                <img
                  className="w-full h-auto"
                  src={partner?.logoImg}
                  alt={partner?.name}
                />
              </figure>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
