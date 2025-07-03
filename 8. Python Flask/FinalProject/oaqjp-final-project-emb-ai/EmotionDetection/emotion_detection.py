import requests
import json

def emotion_detector(text_to_analyze):
    url = 'https://sn-watson-emotion.labs.skills.network/v1/watson.runtime.nlp.v1/NlpService/EmotionPredict'
    headers = {"grpc-metadata-mm-model-id": "emotion_aggregated-workflow_lang_en_stock"}

    if not text_to_analyze.strip():  
        return {
            "dominant_emotion": None,
            "joy": None,
            "anger": None,
            "fear": None,
            "sadness": None,
            "disgust": None,
            "surprise": None
        }
    
    input_json = {
        "raw_document": {
            "text": text_to_analyze
        }
    }
    try:
        response = requests.post(url, headers=headers, json=input_json)
        response.raise_for_status()
    except requests.exceptions.HTTPError as err:
        if response.status_code == 400:
            return {
                "dominant_emotion": None,
                "joy": None,
                "anger": None,
                "fear": None,
                "sadness": None,
                "disgust": None,
                "surprise": None
            }
        else:
            raise err
    
    result = response.json()
    emotions = result["emotionPredictions"][0]["emotion"]
    dominant_emotion = max(emotions, key=emotions.get)
    emotions['dominant_emotion'] = dominant_emotion
    return emotions
