import React from "react";
import { Header } from "./title/Header";
import { Search } from "./searchBar/Search";

const App = () => {
  return (
    <>
      <section className="container">
        <Header />
        <Search />
      </section>
    </>
  );
};

export default App;
