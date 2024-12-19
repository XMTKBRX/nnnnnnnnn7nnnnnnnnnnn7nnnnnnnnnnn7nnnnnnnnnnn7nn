module.exports.config = {
  name: "المطور",
  version: "1.0.0",
  hasPermision: 0,
  credits: "𝐢𝐤𝐚 𝐛𝐨𝐭",
  description: "يرسل لك نكتة عشوائية",
  usage: "مطور",
  commandCategory: "ترفية",
  cooldowns: 0,
};

module.exports.run = async function ({ api, event }) {
  const jokes = [m.me/100078235290006];

  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  api.sendMessage(joke, event.threadID, event.messageID);
};
