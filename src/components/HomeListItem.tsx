import React, { useState, useEffect } from "react";
import { RecipeListItem } from "../views/HomeView";

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

        <div className="item__author">By {props.recipe.author}</div>

        <div className="item__created">{props.recipe.createdUTC}</div>
      </div>
    </div>
  );
};

export default HomeListItem;
