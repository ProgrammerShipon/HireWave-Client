
const SearchSuggestCandidates = ({ suggestData }) => {
    return (
        <div className={`absolute top-full flex flex-col mt-2 rounded-md left-0 z-30 bg-white w-full p-6 shadow-xl ${suggestData.length > 4 && 'h-96 overflow-y-scroll'} ${open && searchName.length ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} origin-top duration-300`}>
            {
                suggestData.length > 0 ? suggestData.map((person, index) => (
                    <div key={index}
                        className="drop-shadow-lg cursor-pointer tracking-wider flex items-center gap-3 border border-transparent rounded-md hover:border-green hover:shadow-lg hover:shadow-green/20 duration-300 p-3"
                        onClick={() => setSearchName(person.name)}
                    >
                        <div className="w-12 h-12 overflow-hidden rounded-full shadow-lg">
                            <img src={person.images} className="w-full object-cover object-center" alt={person.name} />
                        </div>
                        <div>
                            <p className="leading-5 text-green">{person.name}</p>
                            <p className="text-gray italic text-sm">{person.category}</p>
                        </div>
                    </div>
                )) : <p className="text-center">No data found! </p>
            }
        </div>
    );
};

export default SearchSuggestCandidates;