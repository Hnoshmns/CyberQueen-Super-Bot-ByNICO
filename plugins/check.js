const Cyber = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');


Cyber.addCommand({pattern: 'check', fromMe: true, deleteCommand: true, desc: 'verify\nonly owner command',}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] ="9420 ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ CONFIRMED 2022|>";
    r_text[2] ="9421 ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ CONFIRMED 2022|>";
    r_text[3] ="9771 ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ CONFIRMED 2022|>";
    r_text[4] ="9891 ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ CONFIRMED 2022|>";
    r_text[5] ="9957 ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ CONFIRMED 2022|>";
    r_text[6] ="9582 ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ CONFIRMED 2022|>";
    r_text[7] ="9719 ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ CONFIRMED 2022|>";
    r_text[8] ="9269 ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ CONFIRMED 2022|>";
  

    var i = Math.floor(09*Math.random())

    await message.client.sendMessage(
        message.jid,(r_text[i])+'.', MessageType.text);

    }));
