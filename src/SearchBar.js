import React, { useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
function SearchBar({ setResaults }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    axios
      .get(`http://api.open-notify.org/astros.json`)
      .then((res) => {
        const Data = res.data;
        const arr = Object.values(Data);
        console.log(arr[1]);
        const resaults = arr[1].filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResaults(resaults);
      })
      .catch((err) => console.log(err));
  };
  const HandleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="searchbar flex py-6 justify-center items-center ">
      <div className="border-solid border-2 rounded-md border-[#d7d3d3] w-2/6 py-1 px-2">
        <SearchIcon className="pr-2" color="primary" />
        <input
          className=" focus:outline-none"
          type="text"
          value={input}
          placeholder="search "
          onChange={(e) => HandleChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
