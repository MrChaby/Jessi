
/* # Exclusively from Msjessica 
# script original credit gos to @lasiya99X t.me/lasiya99X ©danuma project 
# Do not use this fore any commercial thing 
# If you abuse thais bot we wil kick you from bot 
# Copyright 2021 All rights reserved 
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command*\n*විධානයට පසුව වචනයක් ලියන්න"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'xmarvel ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/marvellogo?apikey=JjZNCM09grxvXLEZmJxl17iENpW&text1=${encodeURIComponent(match[1])}&text2=STUDIO`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '💫Made by Ms Jessica💛️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'xmarvel ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/marvellogo?apikey=JjZNCM09grxvXLEZmJxl17iENpW&text1=${encodeURIComponent(match[1])}&text2=STUDIO`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '💫Made by Ms Jessica💛️' })

    }));
    
}