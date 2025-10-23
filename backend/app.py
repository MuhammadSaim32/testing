from flask import Flask
from apscheduler.schedulers.background import BackgroundScheduler
from datetime import datetime
import os

app = Flask(__name__)
LOG_FILE = "logs.txt"

# --- Background Task ---
def log_job():
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    message = f"[{now}] ✅ Cron-style job executed\n"
    print(message.strip())
    with open(LOG_FILE, "a") as f:
        f.write(message)

# --- Setup Scheduler ---
scheduler = BackgroundScheduler()
scheduler.add_job(log_job, "interval", minutes=5)
scheduler.start()

# --- Flask Route ---
@app.route("/")
def home():
    return "🚀 Flask app with internal 5-min job running!"

@app.route("/logs")
def read_logs():
    if not os.path.exists(LOG_FILE):
        return "No logs yet. Wait 5 minutes for the first job run!"
    with open(LOG_FILE, "r") as f:
        logs = f.read()
    return f"<pre>{logs}</pre>"

# --- Run App ---
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)
