/* Codded by sisula welgamage
const Cyber = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const tktok = require('tiktok-scraper');

if (Config.WORKTYPE == 'private') {
        Cyber.addCommand({pattern: 'tiktok ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid);

    var payload = await tktok.getVideoMeta(match[1], options);
    
    var img = await axios.get(payload,{responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(img.data), MessageType.video, {mimetype: Mimetype.mp4})
  }))};

  if (Config.WORKTYPE == 'public') {
        Cyber.addCommand({pattern: 'tiktok ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid);
    
        var payload = await tktok.getVideoMeta(match[1], options);
        
        var img = await axios.get(payload,{responseType: 'arraybuffer'})
        await message.sendMessage(Buffer.from(img.data), MessageType.video, {mimetype: Mimetype.mp4})
  }))};*/
