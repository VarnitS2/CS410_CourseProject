import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { IconX } from "@tabler/icons";
import { Code } from "@mantine/core";
import { RecipeDetailItem, RecipeListItem } from "./HomeView";

import "../styles/RecipeDetailViewStyles.scss";

const RecipeDetailView = (props: {
  recipeSubmission: RecipeListItem | undefined;
  recipeDetail: RecipeDetailItem | undefined;
  onCloseCallback: () => void;
}) => {
  return (
    <div className="detail-container">
      <div className="detail__close-button" onClick={props.onCloseCallback}>
        <IconX />
      </div>

      <div className="detail__image-container">
        <img
          src={props.recipeSubmission?.imageURL}
          alt={props.recipeSubmission?.title}
          className="detail__image"
        />

        <div className="detail__author">
          <Code className="detail__author-code">u/{props.recipeSubmission?.author}</Code>
        </div>

        <div className="detail__created">
            {new Date(props.recipeSubmission!.createdUTC * 1000).toLocaleDateString()}
        </div>
      </div>

      <div className="detail__recipe-container">
        <div className="detail__recipe-title">Recipe</div>

        <div className="detail__recipe-content">
          <ReactMarkdown>{props.recipeDetail!.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailView;
