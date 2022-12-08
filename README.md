# **Team EVO - Where's My Project?**

Recommend recipes from the subreddit `r/recipes` based on user input.

### **Install Backend Dependencies**

This app uses a `python3` virtual environment to manage backend dependencies. Run the following commands to setup the backend:

```
$ cd api
$ python3 -m venv venv
$ . venv/bin/activate
$ pip install -r requirements.txt
```

**On Windows:**

```
> cd api
> py -3 -m venv venv
> venv\Scripts\activate
> pip install -r requirements.txt
```

### **Install Frontend Dependencies**

This app uses `npm` to manage frontend dependencies. Run the following command to setup the frontend:

```
$ npm i
```

## **Available Scripts**

To start the app, run the following commands in the project directory:

### `npm run start-api` 

**On Windows:**

### `npm run start-api-win`

> Runs the backend.\
> Connects to PRAW and serves data to the frontend.

### `npm start`

> Runs the frontend.\
> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
