from flask import Flask, Response
from datetime import datetime

app = Flask(__name__)

@app.route("/")
def index():
    return "Cron job running!"

@app.route("/logs")
def show_logs():
    try:
        with open("/data/logs.txt") as f:
            return Response(f.read(), mimetype="text/plain")
    except FileNotFoundError:
        return "No logs yet!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)

