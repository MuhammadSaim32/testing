from datetime import datetime
LOG_FILE = "/data/logs.txt"

now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
message = f"[{now}] Cron ran\n"

with open(LOG_FILE, "a") as f:
    f.write(message)

print(message.strip())
