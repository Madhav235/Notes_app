import React from "react";
import Cards from "./Cards";

const YourNotes = () => {
  return (
    <div className="bg-blue-600 w-1/2 h-full p-10">
      <h1 className="text-white text-4xl mb-4">Your Notes</h1>
      <div className="flex gap-4 flex-wrap">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default YourNotes;
