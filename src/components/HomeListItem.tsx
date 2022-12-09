import React, { useState, useEffect } from "react";
import { RecipeListItem } from "../views/HomeView";
import { Code } from "@mantine/core";

import "../styles/HomeListItemStyles.scss";

const HomeListItem = (props: { recipe: RecipeListItem }) => {
  return (
    <div className="item-container">
      <div className="item__image-container">
        <img
          src={props.recipe.imageURL}
          alt={props.recipe.title}
          className="item__image"
        />
      </div>

      <div className="item__info-container">
        <div className="item__title">{props.recipe.title}</div>

        <div className="item__author">
          By <Code className="item__author-code">u/{props.recipe.author}</Code>
        </div>

        <div className="item__created">
          {new Date(props.recipe.createdUTC * 1000).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default HomeListItem;
