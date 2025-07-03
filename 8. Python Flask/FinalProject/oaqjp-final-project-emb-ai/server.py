"""
Flask web application for emotion detection.
"""

from flask import Flask, request, render_template
from EmotionDetection import emotion_detector

app = Flask(__name__)

@app.route('/emotionDetector', methods=['GET'])
def detect_emotion():
    """
    Handles the GET request to detect emotions from the provided text.
    Returns a formatted string of emotions or an error message if the text is invalid.
    """
    text_to_analyze = request.args.get('textToAnalyze')

    if text_to_analyze and text_to_analyze.strip():
        emotion_result = emotion_detector(text_to_analyze)

        if emotion_result['dominant_emotion'] is None:
            return "Invalid text! Please try again."

        formatted_result = (
            f"For the given statement, the system response is: "
            f"'anger': {emotion_result['anger']}, "
            f"'disgust': {emotion_result['disgust']}, "
            f"'fear': {emotion_result['fear']}, "
            f"'joy': {emotion_result['joy']}, and "
            f"'sadness': {emotion_result['sadness']}. "
            f"The dominant emotion is {emotion_result['dominant_emotion']}."
        )
        return formatted_result

    return "Invalid text! Please try again."

@app.route('/')
def index():
    """
    Renders the main index page for the application.
    """
    return render_template('index.html')

if __name__ == "__main__":
    app.run(host='localhost', port=5000, debug=True)
