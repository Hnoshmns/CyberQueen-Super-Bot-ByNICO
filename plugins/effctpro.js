/* coded by sisula welgamage
2021

const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
//language
const Language = require('../language');
const Lang = Language.getString('wallpaper');

if (Config.WORKTYPE == 'private') {
Asena.addCommand({pattern: 'prologo', fromMe: true, desc: Lang.TET_DESC}, (async (message, match) => {
    const msg ='   ┏━━━━━°❀❀°━━━━━┓\n   ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐ LOGO PACK\n   ┗━━━━━°❀❀°━━━━━┛' + '\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'devil' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.devil CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bear' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bear CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'wolf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.wolf CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'neon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.neon CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'future' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.future CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2neon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2neon CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '3neon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.3neon CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'light' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.light CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'joker' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.joker CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ninja' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ninja CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gerband' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gerband CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bokeh' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bokeh CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'marvel' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.marvel CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2marvel' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2marvel CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'avengers' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.avengers CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'graf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.graf CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2graf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2graf CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lion' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lion CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ice' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ice CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'space' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.space CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'smoke' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.smoke CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'glow' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.glow CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fire' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fire CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'harry' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.harry CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cup' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cup CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cemetery' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cemetery CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'glitch' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.glitch CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cup' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cup CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'leaf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.leaf CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'baloon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.baloon CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'textsnw' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.textsnw CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2grafiti' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2grafiti CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bglxy' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bglxy CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2blackpink' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2blackpink CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '3grfity' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.3grfity CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'rglowing' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.rglowing CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'pcute' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.pcute CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bgrond' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bgrond CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'glpubg' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.glpubg CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lipubg' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lipubg CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'trbear' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.trbear CyberQueen' + ']\n\n' +
            '   ┏━━━━━°❀❀°━━━━━┓\n   ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐ LOGO PACK\n   ┗━━━━━°❀❀°━━━━━┛' + '\n'            

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: msg }) 
 }));
}
if (Config.WORKTYPE == 'public') {
Asena.addCommand({pattern: 'prologo', fromMe: true, desc: Lang.TET_DESC, dontAddCommandList: true}, (async (message, match) => {
    const msg ='   ┏━━━━━°❀❀°━━━━━┓\n   ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐ LOGO PACK\n   ┗━━━━━°❀❀°━━━━━┛' + '\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'devil' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.devil CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bear' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bear CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'wolf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.wolf CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'neon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.neon CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'future' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.future CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2neon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2neon CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '3neon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.3neon CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'light' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.light CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'joker' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.joker CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ninja' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ninja CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gerband' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gerband CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bokeh' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bokeh CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'marvel' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.marvel CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2marvel' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2marvel CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'avengers' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.avengers CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'graf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.graf CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2graf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2graf CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lion' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lion CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ice' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ice CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'space' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.space CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'smoke' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.smoke CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'glow' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.glow CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fire' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fire CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'harry' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.harry CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cup' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cup CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cemetery' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cemetery CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'glitch' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.glitch CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cup' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cup CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'leaf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.leaf CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'baloon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.baloon CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'textsnw' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.textsnw CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2grafiti' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2grafiti CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bglxy' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bglxy CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2blackpink' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2blackpink CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '3grfity' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.3grfity CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'rglowing' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.rglowing CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'pcute' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.pcute CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bgrond' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bgrond CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'glpubg' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.glpubg CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lipubg' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lipubg CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'trbear' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.trbear CyberQueen' + ']\n\n' +
            '   ┏━━━━━°❀❀°━━━━━┓\n   ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐ LOGO PACK\n   ┗━━━━━°❀❀°━━━━━┛' + '\n'            

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: msg }) 
 }));
}
if (Config.WORKTYPE == 'public') {
Asena.addCommand({pattern: 'prologo', fromMe: false, desc: Lang.TET_DESC}, (async (message, match) => {
    const msg ='   ┏━━━━━°❀❀°━━━━━┓\n   ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐA LOGO PACK\n   ┗━━━━━°❀❀°━━━━━┛' + '\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'devil' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.devil CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bear' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bear CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'wolf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.wolf CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'neon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.neon CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'future' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.future CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2neon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2neon CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '3neon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.3neon CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'light' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.light CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'joker' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.joker CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ninja' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ninja CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gerband' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gerband CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bokeh' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bokeh CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'marvel' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.marvel CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2marvel' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2marvel CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'avengers' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.avengers CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'graf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.graf CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2graf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2graf CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lion' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lion CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ice' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ice CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'space' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.space CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'smoke' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.smoke CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'glow' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.glow CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fire' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fire CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'harry' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.harry CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cup' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cup CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cemetery' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cemetery CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'glitch' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.glitch CyberQueen/CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cup' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cup CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'leaf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.leaf CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'baloon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.baloon CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'textsnw' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.textsnw CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2grafiti' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2grafiti CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bglxy' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bglxy CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2blackpink' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2blackpink CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '3grfity' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.3grfity CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'rglowing' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.rglowing CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'pcute' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.pcute CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bgrond' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bgrond CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'glpubg' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.glpubg CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lipubg' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lipubg CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'trbear' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.trbear CyberQueen' + ']\n\n' +
            '   ┏━━━━━°❀❀°━━━━━┓\n   ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐ LOGO PACK\n   ┗━━━━━°❀❀°━━━━━┛' + '\n'            

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: msg }) 
 }));
}*/
