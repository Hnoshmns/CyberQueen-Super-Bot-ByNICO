/*const QueenAmdi = require('queenamdi-public');
const Asena = require('../events');
const Config = require('../config');
const { MessageType } = require('@blackamda/queenamdi-web-api');

const msg = '❌ All inbox messages are blocked by bot owner : ' + Config.OWNER

Asena.addCommand({pattern: 'text', fromMe: false,  deleteCommand: false}, (async (amdiMSG) => {  
    await QueenAmdi.amdi_setup()
    // =================
    if (amdiMSG.message.startsWith('.git')) {
        return;
    }
    // =================
    if (amdiMSG.jid.includes('g.us') || amdiMSG.jid.includes('94752279625@s.whatsapp.net') || amdiMSG.jid.includes('94761219834@s.whatsapp.net') || amdiMSG.jid.includes('94757672873@s.whatsapp.net') || amdiMSG.jid.includes('94774976567@s.whatsapp.net') || amdiMSG.jid.includes('94766426385@s.whatsapp.net') || amdiMSG.jid.includes('94711870791@s.whatsapp.net') || amdiMSG.jid.includes('94759551299@s.whatsapp.net')) {
        return;
    } else {
        if (Config.DM_BLOCK == 'true') {
            if (Config.BLOCKMSG == 'default') {  
                await amdiMSG.client.sendMessage(amdiMSG.jid, '*' + msg + '*', MessageType.text);
                await amdiMSG.client.blockUser(amdiMSG.jid, "add");
            } else {
                await amdiMSG.client.sendMessage(amdiMSG.jid, Config.BLOCKMSG, MessageType.text);
                await amdiMSG.client.blockUser(amdiMSG.jid, "add");
            }
        }
    }
}));*/
