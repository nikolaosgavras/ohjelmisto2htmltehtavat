import json

with open("dictionary.json", "r", encoding="utf-8") as file:
    data = json.load(file)

def save_dictionary(dictionary):
    with open("dictionary.json", "w", encoding="utf-8") as file:
        json.dump(dictionary, file, ensure_ascii=False, indent=2)

from flask import Flask, jsonify, abort, request

app = Flask(__name__)
@app.route("/add")
def addKeyValuePairToDict():
    englishKey = request.args.get("en")
    finnishValue = request.args.get("fi")

    if not englishKey or not finnishValue:
        abort(400, description='Both "en" and "fi" parameters are required. Try again')

    data[englishKey.strip().lower()] = finnishValue.strip().lower()
    save_dictionary(data)

    return {"added": {"en": englishKey, "fi": finnishValue}}, 201

@app.route("/translate/<text>")
def translateText(text):
    finnishText = data.get((text.lower()))
    if finnishText is None:
        abort(404, description="Word not found")
    return {
        "English": text.lower(),
        "Finnish": finnishText
    }

@app.route("/words")
def returnAllEnglishWords():
    englishWords = list(data.keys())
    return englishWords

@app.errorhandler(400)
def bad_request(error):
    return jsonify({"error": error.description, "status": 400}), 400

@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": error.description, "status": 404}), 404

if __name__ == "__main__":
    app.run(use_reloader=True, host="127.0.0.1", port=3000)