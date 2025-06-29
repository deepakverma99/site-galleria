# Slack API  Assignment

This project demonstrates the use of the Slack API to perform core messaging operations, as outlined in the internship assignment requirements. The application is built using Node.js and the Slack Web API and runs in a Slack Developer Sandbox environment.

## ✅ Features Implemented

### 1. **Authentication via Bot Token**
- OAuth installation flow used to generate a **Bot Token (`xoxb-...`)**
- Token stored in `.env` and accessed securely using `dotenv`

### 2. **Messaging Operations**

| Feature               | Description                                                   |
|-----------------------|---------------------------------------------------------------|
| ✅ Send a Message      | Posts a message to a public Slack channel                    |
| ✅ Schedule a Message  | Schedules a message to appear after 1 minute                  |
| ✅ Retrieve a Message  | Fetches the most recent message from the channel              |
| ✅ Edit a Message      | Updates the content of the most recent message                |
| ✅ Delete a Message    | Deletes the most recent message                               |

### 3. **Developer Sandbox**
- All development and testing was done in a dedicated **Slack Developer Sandbox**
- Ensures that messages do not interfere with any real production workspace

---

## 📁 File Structure

slack-api-assignment/
├── index.js # Main app logic (API calls)
├── .env # Bot token and channel ID
├── package.json # Dependencies and scripts
└── README.md # You're reading it now

yaml
Copy
Edit

---

## ⚙️ Environment Variables (`.env`)

```env
SLACK_BOT_TOKEN=xoxb-your-real-token
CHANNEL_ID=C0XXXXXXX  # Public channel ID (e.g., #all-deepak-verma)
Make sure the bot is invited to the channel using /invite @SlackAPI-Messenger

▶️ Run the App
Development mode (with auto-restart):

npm run dev
Or standard run:

node index.js
📸 Sample Output (Console)

✅ Message Sent: 1751205517.032089
📅 Message Scheduled: ...
📥 Latest Message: 👋 Hello from Slack API!
📝 Message Edited: ...
❌ Message Deleted: ...
📌 Scopes Used (Bot Token)

chat:write

chat:write.public

channels:history

🔐 Notes
Bot messages are only sent to public channels, not DMs

All Slack APIs used are official Web APIs via axios

✍️ Author
Deepak Verma

BCA Student, Invertis University

Slack App Name: SlackAPI-Messenger

Internship Task Completed: ✅


## ✅ Submission Summary for You

Here’s a short paragraph you can include in your submission email or report:

> I have completed the Slack API Internship Task as requested. I created a Node.js application that uses the Slack Web API to authenticate with a bot token and perform all required messaging operations: sending, scheduling, retrieving, editing, and deleting messages — all within a Developer Sandbox environment. The bot operates in a public Slack channel (`#all-deepak-verma`) and uses appropriate scopes and permissions. The entire project is structured cleanly and uses secure token handling with `.env` variables.

---

Would you also like a `.zip` export of your project structure or a sample email draft to submit it?

