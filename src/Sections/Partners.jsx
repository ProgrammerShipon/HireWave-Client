import SectionTitle from "../Components/SectionTitle";
import usePartnerData from "../Hooks/usePartnerData";

const Partners = () => {
  const [partnerData] = usePartnerData();

  return (
    <section className="py-20 md:py-[120px]">
      <div className="container">
        {/* section title */}
        <SectionTitle title='Our Partners' para='We Have Worked with 10,000+ Trusted Companies' />

        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 md:mt-16 max-w-6xl">
          {
            partnerData.map((partner, i) => (
              <figure
                key={i}
                className="max-w-[150px] p-4 rounded-lg duration-300 shadow-xl shadow-green/10 cursor-pointer gap-5"
              >
                <img
                  className="w-full h-auto"
                  src={partner?.logoImg}
                  alt={partner?.name}
                />
              </figure>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Partners;
