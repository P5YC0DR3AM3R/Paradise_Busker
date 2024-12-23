const { Client, Events, GatewayIntentBits } = require("discord.js");
const commands = require("./command");
require("dotenv").config();

// prepare for client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.MessageCreate, (message) => {
  // parse command
  const cmd = message.content.trim().split(" ");
  if (cmd.length <= 0) return;

  // call command callback
  const func = commands[cmd[0]] ?? null;
  if (func) {
    const user = message.author;
    const args = cmd.slice(1);

    const res = func(user, args);
    if (res) message.reply(res);
  }
});

// start client
client.login(process.env.CLIENT_TOKEN);
