from flask import (
    Blueprint, g, request
)
from flask.json import jsonify

import praw

bp = Blueprint('api', __name__, url_prefix='/api')

# PRAW Reddit instance
reddit = praw.Reddit(
    client_id="YZNymb_ZR0hhtC6gVuY5uw",
    client_secret="SDDTH-9AUVUXWsP2AMLwA4S-gQkADg",
    password="CS410@UIUC",
    username="CS410WheresMyRecipe",
    user_agent="CS410-final web app",
)

# Subreddit instance
subreddit = reddit.subreddit('recipes')

# Caching top 500 submissions for future search
top_submissions_all_time = [
    submission for submission in subreddit.top(time_filter='all', limit=500)]

'''
recipe search list return structure:
[{
    'id': submission.id,
    'title': submission.title,
    'author': submission.author,
    'created_utc': submission.created_utc,
    'image_url': submission.url,
    'permalink': submission.permalink
}]

recipe detail return structure:
{
    'id': comment.id,
    'body': comment.body,
    'author': comment.author,
    'created_utc': comment.created_utc,
}
'''

# Get list of top recipes of today
# Result used as placeholder data for no search parameter
@bp.route('/gettoptoday', methods=['GET'])
def get_top_today():
    if request.method == 'GET':
        try:
            return jsonify(status=200, message=[])

        except Exception as e:
            return jsonify(status=500, message=e)


# Search top_submissions_all_time for provided user query and return a list of recipes
# Result used as real data for user search parameter
@bp.route('/search', methods=['POST'])
def search():
    if request.method == 'POST':
        try:
            return jsonify(status=200, message=[])

        except Exception as e:
            return jsonify(status=500, message=e)


# Return recipe details for provided submission_id
# Result used as real data for user selected recipe
@bp.route('/getrecipe', methods=['POST'])
def get_recipe():
    if request.method == 'POST':
        try:
            return jsonify(status=200, message={})

        except Exception as e:
            return jsonify(status=500, message=e)