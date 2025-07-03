import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BangladeshMap from "./BangladeshMap";

const Coverage = () => {
  const serviceCenters = useLoaderData();
  const [searchText, setSearchText] = useState("");

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-white my-10 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6  pb-3">
        We are available in 64 districts
      </h1>

      {/* Search box */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex justify-center mb-8"
      >
        <input
          type="text"
          placeholder="Search here"
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-md shadow-sm outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="submit"
          className="bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded-r-md font-semibold"
        >
          Search
        </button>
      </form>

      {/* Map with searchText as prop */}
      <BangladeshMap
        serviceCenters={serviceCenters}
        searchText={searchText}
      />
    </div>
  );
};

export default Coverage;
