import React, { useState } from "react";
import Cards from "./Your Notes/Cards";

const Inputs = () => {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");

  const [Task, setTask] = useState([{}]);

  function handelFormSubmit(e) {
    e.preventDefault();

    let copyTask = [...Task];

    copyTask.push({ Title: Title, Description: Desc });
    setTask(copyTask);
    console.log(Task);

    setTask('')
    setDesc('') 
  }

  return (
    <form className="flex flex-col  w-1/2 h-full p-10 gap-10">
      <input
        type="text"
        placeholder="Enter the title"
        className="text-white border-2 border-white w-4/5 h-15 "
        value={Title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter the description"
        className="text-white w-4/5 h-1/3 border-2 border-white "
        value={Desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <button
        onClick={handelFormSubmit}
        type="submit"
        className="bg-white px-10 py-4 w-4/5 h-10 flex justify-center items-center text-lg rounded-sm"
      >
        Add note
      </button>
    </form>
  );
};

export default Inputs;
