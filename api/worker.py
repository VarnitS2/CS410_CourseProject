import praw
import data_analysis

if __name__ == '__main__':
    try:
        reddit = praw.Reddit(
            client_id="YZNymb_ZR0hhtC6gVuY5uw",
            client_secret="SDDTH-9AUVUXWsP2AMLwA4S-gQkADg",
            password="CS410@UIUC",
            username="CS410WheresMyRecipe",
            user_agent="CS410-final web app",
        )

        subreddit = reddit.subreddit('recipes')
        

    except Exception as e:
        print(e)
