
const SectionTitle = ({ title, para }) => {
    return (
        <div className="text-center">
            <p className="text-xl text-green bg-green/10 inline-block px-4 rounded-full tracking-widest drop-shadow-lg">{title}</p>
            <h1 className="text-dark text-3xl md:text-5xl font-semibold duration-300 mt-1 drop-shadow-xl">{para}</h1>
        </div>
    );
};

export default SectionTitle;