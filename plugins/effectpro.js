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
Asena.addCommand({pattern: 'textpro', fromMe: true, desc: Lang.TET_DESC}, (async (message, match) => {
    const msg ='   ┏━━━━━°❀❀°━━━━━┓\n   ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐ LOGO PACK\n   ┗━━━━━°❀❀°━━━━━┛' + '\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gstyle' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gstyle CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'smetalic' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.smetalic CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'swater3d' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.swater3d CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cutpaper' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cutpaper CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lshadow' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lshadow CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gedge' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gedge CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'anglewing' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.anglewing CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fwing' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fwing CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lgream' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lgream CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'yasuo' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.yasuo CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lstage' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lstage CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'vgalaxy' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.vgalaxy CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fdragon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fdragon CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'viettel' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.viettel CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'birthday' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.birthday CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'blove' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.blove CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'frgg' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.frgg CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '1bcake' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.1bcake CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '4bcake' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.4bcake  CyberQueen' + ']\n\n' +
            '   ┏━━━━━°❀❀°━━━━━┓\n   ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐ LOGO PACK\n   ┗━━━━━°❀❀°━━━━━┛' + '\n'            

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: msg }) 
 }));
}
if (Config.WORKTYPE == 'public') {
Asena.addCommand({pattern: 'textpro', fromMe: true, desc: Lang.TET_DESC, dontAddCommandList: true}, (async (message, match) => {
     const msg ='   ┏━━━━━°❀❀°━━━━━┓\n   ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐ LOGO PACK\n   ┗━━━━━°❀❀°━━━━━┛' + '\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gstyle' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gstyle CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'smetalic' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.smetalic CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'swater3d' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.swater3d CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cutpaper' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cutpaper CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lshadow' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lshadow CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gedge' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gedge CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'anglewing' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.anglewing CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fwing' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fwing CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lgream' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lgream CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'yasuo' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.yasuo CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lstage' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lstage CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'vgalaxy' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.vgalaxy CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fdragon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fdragon CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'viettel' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.viettel CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'birthday' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.birthday CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'blove' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.blove CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'frgg' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.frgg CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '1bcake' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.1bcake CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '4bcake' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.4bcake  CyberQueen' + ']\n\n' +
            '   ┏━━━━━°❀❀°━━━━━┓\n   ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐ LOGO PACK\n   ┗━━━━━°❀❀°━━━━━┛' + '\n' 

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: msg }) 
 }));
}
if (Config.WORKTYPE == 'public') {
Asena.addCommand({pattern: 'textpro', fromMe: false, desc: Lang.TET_DESC, dontAddCommandList: true}, (async (message, match) => {
     const msg ='   ┏━━━━━°❀❀°━━━━━┓\n   ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐ LOGO PACK\n   ┗━━━━━°❀❀°━━━━━┛' + '\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gstyle' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gstyle CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'smetalic' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.smetalic CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'swater3d' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.swater3d CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cutpaper' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cutpaper CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lshadow' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lshadow CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gedge' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gedge CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'anglewing' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.anglewing CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fwing' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fwing CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lgream' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lgream CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'yasuo' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.yasuo CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lstage' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lstage CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'vgalaxy' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.vgalaxy CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fdragon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fdragon CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'viettel' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.viettel CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'birthday' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.birthday CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'blove' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.blove CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'frgg' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.frgg CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '1bcake' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.1bcake CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '4bcake' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.4bcake  CyberQueen' + ']\n\n' +
            '   ┏━━━━━°❀❀°━━━━━┓\n   ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐ LOGO PACK\n   ┗━━━━━°❀❀°━━━━━┛' + '\n' 

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: msg }) 
 }));
}*/

