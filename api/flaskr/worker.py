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
    'upvotes': submission.score,
    'createdUTC': submission.created_utc,
    'imageURL': submission.url,
}]

recipe detail return structure:
{
    'id': comment.id,
    'body': comment.body,
    'author': comment.author,
    'created_utc': comment.created_utc,
}
'''

# Get list of top 25 recipes of all time
# Result used as placeholder data for no search parameter
@bp.route('/gettopall', methods=['GET'])
def get_top_all():
    if request.method == 'GET':
        try:
            # initialize message to return
            mess = []

            # create dictionary with Submission attributes for each submission in list 'mess'
            for submission in top_submissions_all_time[:25]:
                if not submission.is_self and not submission.author == None and 'i.redd.it' in str(submission.url):
                    mess.append({
                        'id': submission.id,
                        'title': submission.title,
                        'author': submission.author.name,
                        'upvotes': submission.score,
                        'createdUTC': submission.created_utc,
                        'imageURL': submission.url
                    })

            return jsonify(status=200, message=mess)

        except Exception as e:
            return jsonify(status=500, message=e)


# Search top_submissions_all_time for provided user query and return a list of recipes
# Result used as real data for user search parameter
@bp.route('/search', methods=['POST'])
def search():
    if request.method == 'POST':
        try:
            mess = []

            search_query = request.get_json()['search_term'].split(' ')

            for submission in top_submissions_all_time:
                # Filter out meaningless data
                if not submission.is_self and not submission.author == None and 'i.redd.it' in str(submission.url):
                    score = 0
                    title = str(submission.title).lower()

                    for word in search_query:
                        if word in title:
                            score += 1

                    if score > 0:
                        mess.append({
                            'id': submission.id,
                            'title': submission.title,
                            'author': submission.author.name,
                            'upvotes': submission.score,
                            'createdUTC': submission.created_utc,
                            'imageURL': submission.url,
                            'score': score,
                        })

            mess = sorted(
                mess, key=lambda message: message['score'], reverse=True)

            return jsonify(status=200, message=mess)

        except Exception as e:
            return jsonify(status=500, message=e)


# Return recipe details for provided submission_id
# Result used as real data for user selected recipe
@bp.route('/getrecipe', methods=['POST'])
def get_recipe():
    if request.method == 'POST':
        try:
            submission_id = request.get_json()['submission_id']

            mess = {}
            for submission in top_submissions_all_time:
                if submission_id == submission.id:
                    comments = submission.comments
                    for comment in comments:
                        if comment.is_submitter:
                            mess = {
                                'id': comment.id,
                                'body': comment.body,
                                'author': comment.author.name,
                                'createdUTC': comment.created_utc,
                            }

            return jsonify(status=200, message=mess)

        except Exception as e:
            return jsonify(status=500, message=e)
