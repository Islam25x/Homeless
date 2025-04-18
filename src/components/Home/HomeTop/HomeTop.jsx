import { useState } from "react";
import "./HomeTop.css";

const HomeTop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search term:", searchTerm);
  };

  return (
    <main>
      <div>
        <div className="Body">
          <div className="landing">
            <div className="text-center">
              <h1>Homeless? Get a home now!</h1>
              <p>Helping 100 million homeless people find a home.</p>
            </div>

            <form className="search-input text-center" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search by location"
                className="rounded-pill"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <i
                className="fa-solid fa-magnifying-glass"
                onClick={handleSearchSubmit}
              ></i>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeTop;
