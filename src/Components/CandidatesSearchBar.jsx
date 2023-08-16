import { useForm } from "react-hook-form"

// react icons
import { ImFilter } from "react-icons/im";
import { BiSearchAlt, BiMap, BiCategory } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";

const CandidatesSearchBar = ({ candidatesData, candidates, searchName, setSearchName, setSearchLocation, setSearchCategory }) => {
    const inputRef = useRef(null);
    const [open, setOpen] = useState(false);

    const handleClickOutside = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-8 gap-5">
            <div className="relative md:col-span-3 flex items-center gap-1 border border-purple px-3 py-3 rounded"
                // onBeforeInput={() => setOpen(open)}
                onFocus={() => setOpen(true)}
                ref={inputRef}
            >
                <label htmlFor="name">
                    <BiSearchAlt size='20px' className="text-gray" />
                </label>
                <input id="name" type="text"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    placeholder="Search Candidates Name "
                    className="w-full text-lg placeholder:bg-transparent focus:outline-none"
                />

                {/* search name suggestions */}
                <div className={`absolute top-full flex flex-col mt-2 rounded-md left-0 z-30 bg-white w-full p-6 shadow-xl ${candidates.length > 4 && 'h-96 overflow-y-scroll'} ${open && searchName.length ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} origin-top duration-300`}>
                    {
                        candidates.length > 0 ? candidates.map((person, index) => (
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
            </div>

            {/* location */}
            <div className="relative md:col-span-2 flex items-center gap-1 border border-purple px-3 py-3 rounded">
                <label htmlFor="location">
                    <BiMap size='20px' className="text-gray" />
                </label>
                <input id="location" type="text"
                    onChange={(e) => setSearchLocation(e.target.value)}
                    placeholder="Search by Location"
                    className="w-full text-lg placeholder:bg-transparent focus:outline-none" />
            </div>

            <div className="relative md:col-span-2 flex items-center gap-1 border border-purple px-3 py-3 rounded">
                <label htmlFor="category">
                    <BiCategory size='20px' className="text-gray" />
                </label>
                <select
                    id="category"
                    onChange={(e) => setSearchCategory(e.target.value)}
                    className='md:col-span-2 w-full focus:outline-none' defaultValue='Select Category'>
                    <option value="">Select Category</option>

                    {
                        Array.from(new Set(candidatesData.map(item => item.category))).map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))
                    }
                </select>
            </div>

            <button className='hidden lg:flex items-center justify-center gap-2 bg-dark text-white px-8 py-3 text-lg rounded-md hover:bg-green hover:shadow-green/20 duration-300' >
                Filter  <ImFilter />
            </button>
        </div>
    );
};

export default CandidatesSearchBar;