import React from "react";
function SearchResaultsList({ resaults }) {
  let textHandler = (resault) => {
    let name = resault.name;
    console.log(name);
  };
  return (
    <div className="resaults_list">
      {resaults.map((resault, id) => {
        return (
          <div onClick={textHandler} className=" flex justify-center">
            <div key={id} className="flex justify-between w-2/6">
              <h1>{resault.name}</h1>
              <h1>Craft: {resault.craft}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResaultsList;
