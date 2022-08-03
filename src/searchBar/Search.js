import React, { useState } from "react";
import { Layout } from "../layout/Layout";
import { Loading } from "../layout/Loading";
import { Error } from "../layout/Error";

const url = "https://api.github.com/users/";
export const Search = () => {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [fetched, setFetched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(url + text);
    if (text) {
      setIsLoading(true);
      setIsError(false);
      fetch(url + text)
        .then((resp) => {
          if (resp.status >= 200 && resp.status <= 299) {
            return resp.json();
          } else {
            setIsError(true);
            setIsLoading(false);
          }
        })
        .then((user) => {
          console.log(user);
          setIsLoading(false);
          setIsError(false);
          return <Layout {...user} key={user.id} />;
        })
        .catch(() => {
          setIsError(true);
          setIsLoading(false);
        });
    }

    setText("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <svg style={{ width: "30px", height: "30px" }} viewBox="0 0 24 24">
          <path
            fill="#2a68db"
            d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
          />
        </svg>
        <input
          type="text"
          placeholder=" Search GitHub username..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
      {isLoading && <Loading />}
      {isError && <Error />}
    </>
  );
};
