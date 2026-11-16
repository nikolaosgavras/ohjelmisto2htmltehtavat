import json

with open("dictionary.json", "r", encoding="utf-8") as file:
    data = json.load(file)

from flask import Flask, jsonify, abort

app = Flask(__name__)
@app.route("/translate/<text>")
def translateText(text):
    finnishText = data.get((text.lower()))
    if finnishText is None:
        abort(404)
    return {
        "English": text.lower(),
        "Finnish": finnishText
    }

@app.route("/words")
def returnAllEnglishWords():
    englishWords = list(data.keys())
    return englishWords
    
@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Word not found", "status": 404}), 404

if __name__ == "__main__":
    app.run(use_reloader=True, host="127.0.0.1", port=3000)