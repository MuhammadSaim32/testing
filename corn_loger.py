from datetime import datetime

now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
message = f"[{now}] Hello from Railway cron job!\n"

print(message.strip())

with open("log.txt", "a") as f:
    f.write(message)
