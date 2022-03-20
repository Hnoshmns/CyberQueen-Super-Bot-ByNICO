/* For Coded By Cyber Draco

GPL-3.0 - listened under

For Button Code



const Rico = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
const fs = require('fs');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'public') {

var SYSDTXT = ''
if (Config.LANG == 'SI') SYSDTXT = '📣 පද්ධති තත්ත්වය'
if (Config.LANG == 'EN') SYSDTXT = '📣 System stats'

var VER = ''
if (Config.LANG == 'SI') VER = '📲 Version'
if (Config.LANG == 'EN') VER = '📲 Version'

var ALIVEMG = ''
if (Config.ALIVEMSG == 'default') ALIVEMSG = ''
else ALIVEMSG = Config.ALIVEMSG





    Rico.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC,  deleteCommand: false}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "𝐇𝐄𝐘 𝐓𝐇𝐄𝐑𝐄 𝐈 𝐀𝐌 𝐎𝐍𝐋𝐈𝐍𝐄 𝐍𝐎𝐖 💓/n/n 🎁𝐎𝐰𝐧𝐞𝐫 :- 𝐃𝐈𝐍𝐔𝐊𝐀 /n/n 🎁𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧 :- 𝐃𝐈𝐍𝐔𝐊𝐀 /n/n 💝 𝐁𝐋𝐀𝐂𝐊𝐑𝐈𝐂𝐎 𝐁𝐔𝐓𝐓𝐎𝐍 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 💝 /n/n 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐌𝐞 𝐎𝐧 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 :- wa.me/+94×××××"})

var BUTTHANDLE = '';
    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
        BUTTHANDLE = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
    } else {
        BUTTHANDLE = '.';
    }
         

 const buttons = [
  {buttonId: BUTTHANDLE + 'brversion', buttonText: {displayText: SYSDTXT }, type: 1},
  {buttonId: BUTTHANDLE + 'brsystats', buttonText: {displayText: VER }, type: 1},
 ]

const buttonMessage = {
    
    contentText: "ALIVEMSG" ,
    footerText: 'ʙʟᴀᴄᴋʀɪᴄᴏ ʙᴜᴛᴛᴏɴ ᴠᴇʀsɪᴏɴ︎',
    buttons: buttons,
    headerType: 4
    
}

  await message.client.sendMessage (message.jid, buttonMessage, MessageType.buttonsMessage)

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Copyright © 2022 | Black Rico*' })
     }
    }));

    Rico.addCommand({pattern: 'brsystats', fromMe: true, desc: Lang.SYSD_DESC, dontCommandList: true,  deleteCommand: false}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Rico.addCommand({pattern: 'brversion', fromMe: true, desc: Lang.BOT_V, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*⚝ Black Rico Version 🎶*\n\n` + 
                '```Installed version :```\n' +
                Lang.VERS_ION + 
                `\n\nCheck official website : https://github.com/CyberDraco/BlackRico`
           , MessageType.text);
            
        }));
}*/
