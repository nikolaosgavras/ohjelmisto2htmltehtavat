from checkForPrime import onko_alkuluku

from flask import Flask

app = Flask(__name__)
@app.route("/prime_number/<number>")
def providePrimeInfo(number):
    return {
        "Number": number,
        "isPrime": onko_alkuluku(number)
    }

if __name__ == "__main__":
    app.run(use_reloader=True, host="127.0.0.1", port=3000)