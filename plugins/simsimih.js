/* Copyright (C) 2021 Vai838.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.


const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

const BOT_DESC = "Chat with an AI Bot. \n Use .bot <message>"
const BOT = ":"
const NOT_FOUNDAC = "*Invaild Request 🙄*"
const NEED_LOCATIONA = "*Invaild Request 🙄*"


Asena.addCommand({pattern: 'bot ?(.*)', fromMe: false, desc: BOT_DESC}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(NEED_LOCATIONA);
	const url = `https://api.simsimi.net/v2/?text=${match[1]}&lc=en&cf=false`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
	  if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n*᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐ ' + BOT +'* ```' + json.messages[0].response + '```\n\n' , MessageType.text,{quoted: message.data});
	} catch {
		return await message.client.sendMessage(message.jid, NOT_FOUNDAC, MessageType.text);
	}
});
*/
