const axios = require('axios');
require('dotenv').config();

const token = process.env.SLACK_BOT_TOKEN;
const channel = process.env.CHANNEL_ID;

const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
};

// 1. Send a Message
async function sendMessage() {
  const response = await axios.post('https://slack.com/api/chat.postMessage', {
    channel,
    text: 'Hello from Slack API!',
  }, { headers });

  const { ok, ts } = response.data;
  console.log('Message Sent:', ok ? ts : 'Failed');
  return ts;
}

// 2. Schedule a Message (60 seconds later)
async function scheduleMessage() {
  const postAt = Math.floor(Date.now() / 1000) + 60;

  const response = await axios.post('https://slack.com/api/chat.scheduleMessage', {
    channel,
    text: 'This message is scheduled 1 minute later!',
    post_at: postAt,
  }, { headers });

  console.log('Message Scheduled:', response.data);
}

// 3. Get Recent Messages
async function getMessages() {
  const response = await axios.get('https://slack.com/api/conversations.history', {
    headers,
    params: {
      channel,
      limit: 1,
    }
  });

  if (!response.data.ok) {
    console.error('Error retrieving messages:', response.data.error);
    return null;
  }

  const messages = response.data.messages;
  if (!messages || messages.length === 0) {
    console.log('No messages found in the channel.');
    return null;
  }

  const message = messages[0];
  console.log('Latest Message:', message.text);
  return message.ts;
}


// 4. Edit a Message
async function editMessage(ts) {
  const response = await axios.post('https://slack.com/api/chat.update', {
    channel,
    ts,
    text: '✏️ Message has been edited!',
  }, { headers });

  console.log('Message Edited:', response.data);
}

// 5. Delete a Message
async function deleteMessage(ts) {
  const response = await axios.post('https://slack.com/api/chat.delete', {
    channel,
    ts,
  }, { headers });

  console.log('Message Deleted:', response.data);
}

// Run all operations
async function run() {
  const ts = await sendMessage();      // send new message
  await scheduleMessage();             // schedule another one
  const lastTs = await getMessages();  // try to fetch latest message

  if (lastTs) {
    await editMessage(lastTs);
    await deleteMessage(lastTs);
  } else {
    console.log('No message found to edit or delete.');
  }
}


run();
