import React from "react";

const Input = ({ query, setQuery }) => {
  return (
    <div className="flex justify-center p-4 rounded-lg shadow-xl max-w-lg mx-auto gap-3">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
      <button className="mt-2 bg-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-purple-700 transition duration-200">
        Search
      </button>
    </div>
  );
};

export default Input;
