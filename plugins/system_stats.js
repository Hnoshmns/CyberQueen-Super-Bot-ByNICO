/* Copyright (C) 2021 CYBER QUEEN
CODDED BY NICO
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaPublic - TOXIC DEVIL
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ is Alive!```\n\nᎠҽѵҽӀօքҽɾ : ♦️⇝͜͡✪ஓீ͜ɴͥɪᴄᷧᴏᷟ࿐♠\n\n*ᴠᴇʀꜱɪᴏɴ:* ```Version 3.8.4-Public Edition```\n\n*ʏᴏᴜᴛᴜʙᴇ ᴄʜᴀɴɴᴇʟ:* https://www.youtube.com/SLTechnicalTips\n\n*ᴘᴜʙʟɪᴄ ᴄᴏᴍᴍᴀɴᴅꜱ ɢʀᴏᴜᴘ:* https://chat.whatsapp.com/HB1qciGHnMtEIpicPkzwpd\n\n*ᴇʜɪ ɢʀᴏᴜᴘ:* https://chat.whatsapp.com/EaTyMitf8I91O21yZlj1Jf\n\n\n```Thanks For Using ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Copyright © 2022 | ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ is Alive!```\n\nᎠҽѵҽӀօքҽɾ : ♦️⇝͜͡✪ஓீ͜ɴͥɪᴄᷧᴏᷟ࿐♠\n\n*ᴠᴇʀꜱɪᴏɴ:* ```Version 3.8.4-Public Edition```\n\n*ʏᴏᴜᴛᴜʙᴇ ᴄʜᴀɴɴᴇʟ:* https://www.youtube.com/SLTechnicalTips\n\n*ᴘᴜʙʟɪᴄ ᴄᴏᴍᴍᴀɴᴅꜱ ɢʀᴏᴜᴘ:* https://chat.whatsapp.com/HB1qciGHnMtEIpicPkzwpd\n\n*ᴇʜɪ ɢʀᴏᴜᴘ:* https://chat.whatsapp.com/EaTyMitf8I91O21yZlj1Jf\n\n\n```Thanks For Using ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Copyright © 2022 | ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
