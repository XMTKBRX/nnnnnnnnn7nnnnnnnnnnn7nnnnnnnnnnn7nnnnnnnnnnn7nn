const axios = require('axios');

async function chat(messages) {
    try {
        const res = await axios.post('https://chatbot-ji1z.onrender.com/chatbot-ji1z', { messages });
        return res.data.choices[0].message.content;
    } catch (error) {
        console.error(error);
        throw new Error('Chatbot communication failed');
    }
}

const aa = {
    config: {
        name: "بنتي",
        version: "1.0.0",
        hasPermssion: 0,
        credits: "Takt Asahina",
        description: "العاب",
        commandCategory: "العاب",
        usages: "",
        cooldowns: 5,
    },

    run: async function({ event, api, args }) {
        const coj = args.join(" ");
        if (!coj) {
            const responses = [
                "",
                "",
                "",
                "مين انت 🙉"
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            return out(randomResponse);
        }

        async function out(gry, callback) {
            await api.sendMessage(gry, event.threadID, callback, event.messageID);
        }

        // إرسال الرسالة إلى الذكاء الاصطناعي
        let data = await chat([{ role: "user", content: coj }]);

        return out(data, (error, info) => {
            // تخزين معلومات الرد للتعامل معها لاحقًا
            global.client.handleReply.push({
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            });
        });
    },

    handleReply: async function({ api, event, handleReply }) {
        async function out(gry, callback) {
            await api.sendMessage(gry, event.threadID, callback, event.messageID);
        }

        // إرسال رد المستخدم إلى الذكاء الاصطناعي
        let data = await chat([{ role: "user", content: event.body }]);

        return out(data, (error, info) => {
            // تخزين الرد الجديد للتعامل معه لاحقًا إذا استمر المستخدم في الرد
            global.client.handleReply.push({
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            });
        });
    }
};

// تعريف المعلومات الخاصة بعمر
const owner = {
    name: "عمر",
    facebookId: "100094409873389",
    description: "سيدي ومطوري"
};

module.exports = aa;
