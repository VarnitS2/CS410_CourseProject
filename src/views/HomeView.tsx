import React, { useState, useEffect } from "react";
import { TextInput, Code } from "@mantine/core";
import { IconSearch } from "@tabler/icons";

import "../styles/HomeStyles.scss";

const HomeView = () => {
  const [searchText, setSearchText] = useState<string>("");

  const [showDetailFlag, setShowDetailFlag] = useState<boolean>(false);
  const [noResultsFlag, setNoResultsFlag] = useState<boolean>(false);

  return (
    <div className="landing-container">
      <div className={showDetailFlag ? "landing-blur" : "landing"}>
        <div className="landing__title-container">
          <div>Where's My Recipe?</div>
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
            icon={<IconSearch size="20px" />}
            autoComplete="off"
          />
        </div>

        <div className="landing__list-container">
          <ul className="landing__list">
            {searchText === "" ? (
              <div className="landing__list-empty">Enter a search query to get started (ex. chicken) </div>
            ) : noResultsFlag ? (
              <div className="landing__list-empty">No results</div>
            ) : (
              <div></div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
