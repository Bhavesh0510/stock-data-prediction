from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home_page():
    return "Nothing Just Home it will return nothing"

if __name__ == '__main__':
    app.run(debug = True)