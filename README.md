# Team EVO - Where's My Project? 

Recommend recipes from the subreddit `r/recipes` based on user input.

### Install Backend Dependencies

This app uses a virtual environment to manage dependencies. Run the following commands to setup the backend:

```
$ cd api
$ python3 -m venv venv
$ . venv/bin/activate
$ pip install -r requirements.txt
```

## Available Scripts

In the project directory, you can run:

### `npm run start-api`

Runs the backend.\
Connects to PRAW and serves data to the frontend.

### `npm start`

Runs the frontend.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
