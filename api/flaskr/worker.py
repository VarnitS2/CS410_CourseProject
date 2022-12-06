from flask import (
    Blueprint, g, request
)
from flask.json import jsonify

import praw

bp = Blueprint('api', __name__, url_prefix='/api')

reddit = praw.Reddit(
    client_id="YZNymb_ZR0hhtC6gVuY5uw",
    client_secret="SDDTH-9AUVUXWsP2AMLwA4S-gQkADg",
    password="CS410@UIUC",
    username="CS410WheresMyRecipe",
    user_agent="CS410-final web app",
)


@bp.route('/getsubreddit', methods=['GET'])
def getsubreddit():
    if request.method == 'GET':
        try:
            subreddit = reddit.subreddit('recipes')

            return jsonify(status=200, message=subreddit.display_name)

        except Exception as e:
            return jsonify(status=500, message=e)
