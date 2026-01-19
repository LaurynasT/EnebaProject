import { useState } from "react";
import NavBar from "../components/navbar/navbar";
import HomePage from "./Homepage";

function Main() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <HomePage searchQuery={searchQuery} />
    </>
  );
}

export default Main;
