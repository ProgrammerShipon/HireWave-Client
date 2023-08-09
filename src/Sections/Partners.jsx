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

  console.log(partnerData);

  return (
    <section>
      <div className="container">
        {/* TODO:  Section Title */}

        <div className="flex flex-wrap items-center justify-center gap-6">
          {partnerData &&
            partnerData.map((partner) => (
              <figure className="max-w-[150px] hover:">
                <img src={partner?.logoImg} alt={partner?.name} />
              </figure>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
