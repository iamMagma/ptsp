const Aqua = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
let workt = Config.WORKTYPE == 'public' ? false : true
const READ_DESC = 'Adds readmore before your text'
const READA_DESC = 'Adds readmore after your text'

Aqua.addCommand({pattern: 'rdmore ?(.*)', fromMe: workt, desc: READ_DESC, deleteCommand: false }, (async (message, match) => {


await message.sendMessage('\n'+ match [1], MessageType.text, { quoted: message.data }); 
    }));

  Aqua.addCommand({pattern: 'ardmore ?(.*)', fromMe: workt, desc: READA_DESC, deleteCommand: false }, (async (message, match) => {

     await message.client.sendMessage(message.jid, match [1] + '\n', MessageType.text, { quoted: message.data });

}));
