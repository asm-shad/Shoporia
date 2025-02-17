import { useState } from "react";
import { GiCrossedAirFlows } from "react-icons/gi";
import { SlMagnifier } from "react-icons/sl";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Term: ", searchTerm);
    setIsOpen(false);
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 bg-white h-24 z-50" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
            />
            {/* Search Icon */}
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <SlMagnifier className="h-6 w-6 text-gray-700"></SlMagnifier>
            </button>
          </div>
          {/* Close Button */}
          <button
            onClick={handleSearchToggle}
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            <GiCrossedAirFlows className="h-6 w-6 text-gray-700 text-gray-600 hover:text-gray-800"></GiCrossedAirFlows>
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <SlMagnifier className="h-6 w-6 text-gray-700"></SlMagnifier>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
