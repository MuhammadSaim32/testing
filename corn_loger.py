
import time
from datetime import datetime

LOG_FILE = "log.txt"

while True:
    # Get current date and time
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    # Create a message
    message = f"[{now}] Hello from Railway cron job!\n"

    # Print to console
    print(message.strip())

    # Write to log file
    with open(LOG_FILE, "a") as f:
        f.write(message)

    # Wait 5 seconds
    time.sleep(5)
