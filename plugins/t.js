const Asena = require("./events");
const Build = require('../config');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('admin');

let Work_Mode = Build.WORKTYPE == 'public' ? false : true
var ric = '📛 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 𝐆𝐑𝐎𝐔𝐏 𝐉𝐎𝐈𝐍𝐄𝐃 📛'
var jsc = '🌟 𝐆𝐑𝐎𝐔𝐏 𝐉𝐎𝐈𝐍𝐄𝐃 𝐒𝐔𝐂𝐂𝐄𝐒𝐅𝐔𝐋 🌟\n᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ'
var descjoin = 'To Join A Group'
var desjoon = 'To Join Support Group'

Asena.addCommand({pattern: 'join ?(.*)', fromMe: true, desc: descjoin}, (async (message, match) => {

    match = match || message.reply_message.text
    if (!match) return await message.sendMessage(Lang.JOIN_ERR)
    const wa = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/
    const [_, code] = match.match(wa) || []
    if (!code) return await message.sendMessage(Lang.JOIN_ERR)
    const { size } = await message.inviteCodeInfo(code)
    if (size > 256) return await message.sendMessage("*📛 ɢʀᴏᴜᴘ ɪꜱ ꜰᴜʟʟ! 📛*")
    await message.client.acceptInvite(code)
    return await message.sendMessage(jsc)

}
