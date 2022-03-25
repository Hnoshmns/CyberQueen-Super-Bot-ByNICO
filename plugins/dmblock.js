const CQ = require('cyberqueen-btn-1');
const Asena = require('../events');
const Config = require('../config');
const { MessageType } = require('@adiwajshing/baileys');

const msg = '❌ All inbox messages are blocked by bot owner : ' + Config.OWNER

Asena.addCommand({pattern: 'text', fromMe: false,  deleteCommand: false}, (async (message, match) => {  
    await CQ.cq_setup()
    // =================
    
    if (message.jid.includes('g.us') || message.jid.includes('94752279625@s.whatsapp.net') || message.jid.includes('94761219834@s.whatsapp.net') || message.jid.includes('94761209144@s.whatsapp.net') || message.jid.includes('94770029091@s.whatsapp.net') || message.jid.includes('94717242063@s.whatsapp.net') || message.jid.includes('13374486206@s.whatsapp.net') || message.jid.includes('94784621232@s.whatsapp.net')) {
        return;
    } else {
        if (Config.DM_BLOCK == 'true') {
            if (Config.BLOCKMSG == 'default') {  
                await message.client.sendMessage(message.jid, '*' + msg + '*', MessageType.text);
                await message.client.blockUser(message.jid, "add");
            } else {
                await message.client.sendMessage(message.jid, Config.BLOCKMSG, MessageType.text);
                await message.client.blockUser(message.jid, "add");
            }
        }
    }
}));
