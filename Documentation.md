# CS 410 Final Project Documentation: Where's My Recipe?
Omar Elhayes - oelhay2 \
Varnit Sinha - varnits2

## Overview

The main purpose of this app is to create a simple search engine for recipes that include the
popularity of the recipe. Essentially, a user would search for an ingredient they would like to use and the app would then find the best matching meals and their corresponding recipes.

This project revolves around the use of the Reddit PRAW API. The code accesses the PRAW API by creating a developer account and registering it with Reddit. With the developer account, the code gains access to the PRAW library which includes all of the subreddits, posts, comments, users, and many more aspects of Reddit. With the initial set up out of the way, the code then proceeds to focus on the r/recipes subreddit. This is where the main purpose of the code is executed by using three separate functions: the `get_top_all` function, the `search` function, and the `get_recipe` funciton. These functions are the endpoints for the API. A user interface was then developed for the user to be able to use
the search engine. POST and GET requests were used to communicate data between the UI and the three aformentioned functinos in the backend of the program.

## Installation

### Install Backend Dependencies

This app uses `pip` to manage backend dependencies. `pip` is bundled with `python`. Download for your platform from [here](https://www.python.org/downloads/). Once `pip` is installed, run the following commands to setup the backend:

```
$ cd api
$ pip install -r requirements.txt
```

### Install Frontend Dependencies

This app uses `npm` to manage frontend dependencies. Download for your platform from [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). Once `npm` is installed, run the following command to setup the frontend:

```
$ npm i
```

## Running the App

To start the app, run the following commands in the project directory in two separate terminal windows:

### `npm run start-api` 

> Runs the backend.\
> Connects to PRAW and serves data to the frontend.

### `npm start`

> Runs the frontend.\
> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Backend Overview

The backend uses Flask to create endpoints and serve data as `JSON` to the frontend. It accesses the PRAW API and stores the `Reddit` and the `Subreddit` instances in global variables. It also caches the top 500 posts of all time from the subreddit to a global variable to enable faster search.

### Routes

#### `/api/gettopall`
> Retrieves the top 25 recipes of all time to display as a placeholder when the user has not entered any search query.

#### `/api/search`
> Searches through the cached recipes for the queried terms, scores each result based on how closely it matches the search query, and returns a list of such recipes.

#### `/api/getrecipe`
> Once the user has selected a recipe by clicking on it, this endpoint retrieves all the information about it from PRAW.

## Frontend Overview

The frontend uses `TypeScript`, `React`, `HTML`, and `SCSS` to create the user interface. The following libraries are used for various UI components:

* [Mantine](https://mantine.dev/)
* [Tabler Icons](https://tabler-icons.io/)
* [React-Markdown](https://github.com/remarkjs/react-markdown)
* [react-router-dom](https://www.npmjs.com/package/react-router-dom)
* [Sass](https://sass-lang.com/)

### Views

#### `HomeView`
> The landing page for the application. This is where the user enters their search query and view the results. The page displays the top 25 recipes of all time from the subreddit when the search query is empty.

#### `RecipeDetailView`
> The detail page for a recipe. Clicking on a list result item on the `HomeView` page leads to this page. Displays information about the clicked recipe.

## Member Contribution

Both members of the team put in over 20 hours of work each and contributed equally to the project.