import React from "react";
import { Header } from "./title/Header";
import { Search } from "./searchBar/Search";
import { Layout } from "./layout/Layout";

const App = () => {
  return (
    <>
      <section className="container">
        <Header />
        <Search />
        <Layout />
      </section>
    </>
  );
};

export default App;
