import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextInput, Code } from "@mantine/core";
import { IconSearch } from "@tabler/icons";

import HomeListItem from "../components/HomeListItem";

import "../styles/HomeStyles.scss";

export interface RecipeListItem {
  id: number;
  title: string;
  author: string;
  createdUTC: number;
  imageURL: string;
}

export interface RecipeDetailItem {
  id: number;
  body: string;
  author: string;
  createdUTC: number;
}

const HomeView = () => {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState<string>("");
  const [topRecipesToday, setTopRecipesToday] = useState<any[]>([]);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const [noSearchFlag, setNoSearchFlag] = useState<boolean>(true);
  const [noResultsFlag, setNoResultsFlag] = useState<boolean>(false);
  const [errorFlag, setErrorFlag] = useState<boolean>(false);

  useEffect(() => {
    if (searchText === "") {
      getTopRecipesToday();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const getTopRecipesToday = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch("/api/gettopweekly", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        clearFlags();

        if (data.status === 200) {
          setTopRecipesToday(data.message);
          setNoSearchFlag(true);
        } else {
          setErrorFlag(true);
        }
      })
      .catch((error) => {
        console.error(error);
        clearFlags();
        setErrorFlag(true);
      });
  };

  const getSearchResults = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        search_term: searchText.toLowerCase(),
      }),
    };

    fetch("/api/search", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        clearFlags();

        if (data.status === 200) {
          if (data.message.length === 0) {
            setNoResultsFlag(true);
          } else {
            setSearchResults(data.message);
          }
        } else {
          setErrorFlag(true);
        }
      })
      .catch((error) => {
        console.error(error);
        clearFlags();
        setErrorFlag(true);
      });
  };

  const clearFlags = () => {
    setNoSearchFlag(false);
    setNoResultsFlag(false);
    setErrorFlag(false);
  };

  const listItemClicked = (recipe: RecipeListItem) => {
    // Navigate to recipe detail view
  };

  const searchInputKeyPressed = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      if (searchText !== "") {
        getSearchResults();
      }
    }
  };

  return (
    <div className="landing">
      <div className="landing__title-container">
        <div className="landing__title-hover">Where's My Recipe?</div>
      </div>

      <div className="landing__description">
        This tool retrieves the best recipes from the subreddit
        <Code className="landing__description-code">r/recipes</Code> based on
        user search query
      </div>

      <div className="landing__search-input-container">
        <TextInput
          className="landing__search-input"
          placeholder="Search"
          value={searchText}
          onChange={(event) => setSearchText(event.currentTarget.value)}
          onKeyDown={searchInputKeyPressed}
          icon={<IconSearch size="20px" />}
          autoComplete="off"
        />
      </div>

      <div className="landing__list-container">
        <ul className="landing__list">
          {errorFlag ? (
            <div className="landing__list-empty">
              There was an internal error processing your request. Please try
              again.
            </div>
          ) : noResultsFlag ? (
            <div className="landing__list-empty">No results</div>
          ) : noSearchFlag ? (
            topRecipesToday.map((recipe) => (
              <li
                key={recipe.id}
                className="landing__list-item-container"
                onClick={() => listItemClicked(recipe)}
              >
                <HomeListItem recipe={recipe} />
              </li>
            ))
          ) : (
            searchResults.map((recipe) => (
              <li
                key={recipe.id}
                className="landing__list-item-container"
                onClick={() => listItemClicked(recipe)}
              >
                <HomeListItem recipe={recipe} />
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default HomeView;
