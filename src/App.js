import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResaultsList from "./SearchResaultsList";
import SearchResault from "./SearchResault";
import Header from "./Header";
import { Ripple, initTE } from "tw-elements";

initTE({ Ripple });
function App() {
  const [resaults, setResaults] = useState([]);

  return (
    <div>
      <Header />
      <SearchBar setResaults={setResaults} />
      <SearchResaultsList resaults={resaults} />
      <div>
        <SearchResault />
      </div>
    </div>
  );
}

export default App;

