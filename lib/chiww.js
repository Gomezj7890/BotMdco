// Makasih yaww,thx to Aifaiz for comtting to this project
// @akans_chiwa
// SC Store Integrasi API Payment Gateway dan API Pterodactyl
// Ini SC base juna yah~~,chiwa slalu ngehargain base creator script ehe
const fs = require('fs');
const qs = require('qs');
const GemSession = {};


const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const afk = require("./lib/afk");
let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));

let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let opengc = JSON.parse(fs.readFileSync('./database/opengc.json'));

const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('./lib/setproses');
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));

const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('./lib/setdone');
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));

const { isSetOpen, addSetOpen, removeSetOpen, changeSetOpen, getTextSetOpen } = require("./lib/setopen");
let set_open = JSON.parse(fs.readFileSync('./database/set_open.json'));

const { isSetClose, addSetClose, removeSetClose, changeSetClose, getTextSetClose } = require("./lib/setclose");
let set_close = JSON.parse(fs.readFileSync('./database/set_close.json'));

const { isSetWelcome, addSetWelcome, changeSetWelcome, removeSetWelcome } = require('./lib/setwelcome');
const { getTextSetWelcome } = require('./lib/setwelcome');
let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));




const { parsePhoneNumberFromString } = require('libphonenumber-js');
const { 
BufferJSON, 
WA_DEFAULT_EPHEMERAL, 
generateWAMessageFromContent, 
proto, 
generateWAMessageContent, 
generateWAMessage, 
prepareWAMessageMedia, 
downloadContentFromMessage,
areJidsSameUser, 
getContentType,
delay, getLastMessageInChat
} = require('@adiwajshing/baileys')
const wibuGreetingss = async () => {
  let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH');  // format jam hanya 24
  let greeting;

  if (dt >= 6 && dt < 12) {
      greeting = '𝙾𝚑𝚊𝚢𝚘𝚞𝚞~~ >_< 🌅';
  } else if (dt >= 12 && dt < 15) {
      greeting = '𝙺𝚘𝚗𝚗𝚒𝚌𝚑𝚒𝚠𝚊𝚊~~ >_< 🌞';
  } else if (dt >= 15 && dt < 18) {
      greeting = '𝚂𝚘𝚛𝚎𝚎𝚎~~ >_< 🌇'
  } else if (dt >= 18 && dt < 24 ) {
      greeting = '𝙺𝚘𝚗𝚋𝚊𝚠𝚊𝚊~~ >_< 🌙';
  } else {
      greeting = '𝙾𝚊𝚊𝚐𝚒𝚒𝚒𝚒~~ 🌙';  // dini hari
  }

  return greeting;
}
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const translate = require("@vitalets/google-translate-api");
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const cheerio = require('cheerio')
const cookie = require('cookie')
const path = require('path')
const { Configuration, OpenAIApi } = require('openai');
const os = require('os')
const crypto = require('crypto') 
const toMS = require("ms");
const ms = require("parse-ms");
const nou = require("node-os-utils");
const kotz = require("kotz-api");
const gtts = require('node-gtts')

const hxz = require("hxz-api");
const yts = require ("yt-search");
const FormData = require("form-data");
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { sizeFormatter } = require("human-readable");
const similarity = require('similarity')
const threshold = 0.72
let format = sizeFormatter({
std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
});
var dbs = []
global.dbc = dbs
const { generateProfilePicture, removeEmojis, smsg, tanggal, formatp, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { title } = require('process');
// Auto Reset Limit

// Bandwidth
async function checkBandwidth() {
let ind = 0;
let out = 0;
for (let i of await require("node-os-utils").netstat.stats()) {
ind += parseInt(i.inputBytes);
out += parseInt(i.outputBytes);
}
return {
download: format(ind),
upload: format(out),
};
}

moment.tz.setDefault("Asia/Jakarta").locale("id");
module.exports = chiwa = async (chiwa, m, chatUpdate, mek, store, setting, isSetWelcome, getTextSetWelcome, set_welcome_db, set_left_db, isSetLeft, getTextSetLeft, _welcome, _left, antionce) => {
  try {
    const isAfkOn = afk.checkAfkUser(m.sender, _afk)
    const { ownerNumber } = setting;
    const isWelcome = _welcome.includes(m.chat) ? true : false
    const { cs_number, instagram, gcwa, ownerName, botName, footer, pathimg, gamewaktu, limitCount } = setting
    var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id 
              : (m.mtype === 'conversation') ? m.message.conversation 
              : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption 
              : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption 
              : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text 
              : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId 
              : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId 
              : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId 
              : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) 
              : "";
var budy = (typeof m.text == 'string' ? m.text : '')
const content = JSON.stringify(mek.message)
const type = Object.keys(mek.message)[0];
if (m && type == "protocolMessage") chiwa.ev.emit("message.delete", m.message.protocolMessage.key);
const botNumber = await chiwa.decodeJid(chiwa.user.id)

// =================== OWNER NEED PREFIX =============== \\
const isCreator = [botNumber, ...ownerNumber]
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  .includes(m.sender);
const prefix = '!';
module.exports.prefix = prefix;
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : "";
const isCommand = (isCreator || isCmd) ? command : "";
// ================ OWNER DOESNT NEED PREFIX ================== \\
/** 
const isCreator = [botNumber, ...cs_number].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const prefix = '!';
const isCmd = body.startsWith(prefix)
const isCommand = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ""
const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCommand
*/
// ============================================================ \\

//const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)

// let footxt = `${footer}`
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const jam = moment().format("HH:mm:ss z")
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
var fildt = dt == 'pagi' ? dt + '🌝' : dt == 'siang' ? dt + '🌞' : dt == 'sore' ? dt + '🌝' : dt + '🌚'
const ucapanWaktu = fildt.charAt(0).toUpperCase() + fildt.slice(1)

// Group
const groupMetadata = m.isGroup ? await chiwa.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

let timestamp = speed();
let latensi = speed() - timestamp
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `6285600793871-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pathimg, thumbnail: pathimg,sendEphemeral: true}}}
const fkontaku = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pathimg, thumbnail: pathimg,sendEphemeral: true}}}
const fbot = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `𝙅𝙪𝙣𝙖𝘽𝙤𝙩-𝙈𝙙`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pathimg, thumbnail: pathimg,sendEphemeral: true}}}
const ments = (text) => {return text.match('@') ? [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []}
const but1 = (id, text) => [{buttonId: id, buttonText: {displayText: text}, type: 1}]
const but2 = (id1, text1, id2, text2) => [{buttonId: id1, buttonText: {displayText: text1 }, type: 1}, {buttonId: id2, buttonText: {displayText: text2}, type: 1}]
const but3 = (id1, text1, id2, text2, id3, text3) => [{buttonId: id1, buttonText: {displayText: text1}, type: 1}, {buttonId: id2, buttonText: {displayText: text2}, type: 1}, {buttonId: id3, buttonText: {displayText: text3}, type: 1}]
const sendbut = async(id, text, footer, buttons = [], quoted) => {chiwa.sendMessage(id, {text: text, footer: footer, buttons: buttons, headerType: 2, mentions: ments(text)}, {quoted: quoted})}
const sendbutimg = async(id, caption, footer, image, buttons = [], quoted) => {await chiwa.sendMessage(id, {image: image, caption: caption, footer: footer, buttons: buttons, headerType: 4, mentions: ments(caption)}, {quoted: quoted})}
const sendbutvid = async(id, caption, footer, video, buttons = [], quoted) => {await chiwa.sendMessage(id, {video: video, caption: caption, footer: footer, buttons: buttons, headerType: 5, mentions: ments(caption)}, {quoted: quoted})}

const reply = (teks) => {
return chiwa.sendMessage(m.chat, { text: teks, mentions: ments(teks) }, {quoted: m})
}
//Function Polling
chiwa.ments = (teks = '') => {
return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
};
chiwa.sendteks = async(chatId, text = '', quoted = '', opts = {}) => {
return chiwa.sendMessage(chatId, { text: text, mentions: await chiwa.ments(text), ...opts}, {quoted:quoted})
};
chiwa.sendPoll = (jid, name = '', values = [], selectableCount = global.select) => {
return chiwa.sendMessage(jid, {poll: { name, values, selectableCount }})
};
// RESPON CMD POLL MESSAGE THE JO BOT
async function getMessage(key){
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id)
return msg?.message
}
return {conversation: '𝙅𝙪𝙣𝙖𝘽𝙤𝙩-𝙈𝙙'}
}
async function appenTextMessage(text, chatUpdate) {
        let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
            userJid: chiwa.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, chiwa.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        chiwa.ev.emit('messages.upsert', msg)
    }
chiwa.ev.on('messages.update', async(chatUpdate) => {
for (const { key, update } of chatUpdate) {
if (update.pollUpdates && key.fromMe) {
const pollCreation = await getMessage(key)
if (pollCreation) {
const pollUpdate = await getAggregateVotesInPollMessage({
message: pollCreation,
pollUpdates: update.pollUpdates,
})
const command = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
if (command == undefined) return
const comand = global.prefix+command
console.log(comand)
chiwa.appenTextMessage(comand, chatUpdate)
}
}
}
})
const nebal = (angka) => {
return Math.floor(angka)
}
function hitungmundur(tanggal, bulan, tahun){
let from = new Date(`${bulan} ${tanggal}, ${tahun} 00:00:00`).getTime();
let now = Date.now();
let distance = from - now;
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
return days + ' Hari ' + hours + ' Jam ' + minutes + ' Menit ' + seconds + ' Detik'
}

const isEmoji = (emo) => {
let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
let regexEmoji = new RegExp(emoji_ranges, 'gi');
return emo.match(regexEmoji)
}

async function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

async function igstalk(Username) {
return new Promise((resolve, reject) => {
axios.get('https://dumpor.com/v/'+Username, {
headers: {
"cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
}
}).then(res => {
const $ = cheerio.load(res.data)
const result = {
profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
}
resolve(result)
})
})
}

async function getGcName(groupID) {
try {
let data_name = await chiwa.groupMetadata(groupID)
return data_name.subject
} catch (err) {
return '-'
}
}

function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
/*if ( m.mtype == 'viewOnceMessage' && m.msg.viewOnce) {
try {
chiwa.ev.emit("viewOnceMessage", m);
} catch (err) {
console.error(util.format(err))
}}*/
try {
let chats = db.data.chats[m.chat]
if (typeof chats !== 'object') db.data.chats[m.chat] = {}
if (chats) {
if (!('goodbye' in chats)) chats.goodbye = setting.auto_leaveMsg
if (!('welcome' in chats)) chats.welcome = setting.auto_welcomeMsg
} else db.data.chats[m.chat] = {
goodbye: setting.auto_leaveMsg, 
welcome: setting.auto_welcomeMsg, 
}
} catch (e){
console.log(e)
}
// User Ban
const banUser = await chiwa.fetchBlocklist()
// Public & Self
if (!chiwa.public) {
if (!m.key.fromMe) return
}

// Push Message To Console
if (m.message) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m chiwaBot-Md \x1b[1;37m]', time, chalk.green(budy.slice(0, 100) || m.mtype), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(text.length))
}

const buttonsDefault = [
{ urlButton: { displayText: `Instagram`, url: `${setting.instagram}` } },
{ urlButton: { displayText: `Group WhatsApp`, url: `${setting.gcwa}` } },
{ quickReplyButton: { displayText: `👤 Owner`, id: `.owner` } },
{ quickReplyButton: { displayText: `Donate 💰`, id: `.donate` } },
{ quickReplyButton: { displayText: `⚡ Sewa ⚡`, id: `.sewabot` } }
]
// auto set bio
if (setting.autobio){
if (setting.autobio === false) return
let settingstatus = 0;
if (new Date() * 1 - settingstatus > 1000) {
await chiwa.setStatus(`I'm ${chiwa.user.name} 🤖 | ${runtime(process.uptime())} ⏰ | Status : ${chiwa.mode ? "Public Mode" : "Self Mode"} | ${pendaftar.length} Users`)
settingstatus = new Date() * 1
}
}
if(!isCreator && setting.grupOnly && !m.isGroup){
return
}
if(!isCreator && setting.japriOnly && m.isGroup){
return
}

/////
// Auto Read & Presence Online
if (!m.key.fromMe && setting.autoread){
const readkey = {
remoteJid: m.chat,
id: m.key.id, 
participant: m.isGroup ? m.key.participant : undefined 
}
await chiwa.readMessages([readkey]);
}

chiwa.sendPresenceUpdate('available', m.chat)




// Auto Block +212
if (m.sender.startsWith('212') && setting.autoblok212 === true) {
return chiwa.updateBlockStatus(m.sender, 'block')
}

// ============== START FUNC CHECK CMD ==================== \\
async function newReply(teks, url) {
      const nedd = {
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            showAdAttribution: true,
            title: ucapanWaktu,
            body: `${pushname}`,
            previewType: "PHOTO",
            thumbnailUrl: pathimg, 
            sourceUrl: url || instagram, 
          },
        },
        text: teks,
      };
      return chiwa.sendMessage(m.chat, nedd, {
        quoted: m,
      });
    }
async function newReply2(teks, url, alo) {
      const nedd = {
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            showAdAttribution: true,
            title: alo,
            body: `${alo}`,
            previewType: "PHOTO",
            thumbnailUrl: pathimg, 
            sourceUrl: url || instagram, 
          },
        },
        text: teks,
      };
      return chiwa.sendMessage(m.chat, nedd, {
        quoted: m,
      });
    }

const chiwaa = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: "" } : {}) 
},

'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
        'isAnimated': []
}}}
//TicTacToe




// ====================== END READ DATA PENGSOL ============================ \\
// acc nikah


// ========= START WAIT EMAIL ADDRESS INPUT
// ini adalah input session

const userId = m.sender;

function awaitInputPanelMail() {
  const filePath = path.join(__dirname, './database/panel.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    try {

      const panelData = JSON.parse(data);

      if (panelData.hasOwnProperty(userId)) {
        const userData = panelData[userId];
        for (const key in userData) {
          if (userData.hasOwnProperty(key)) {
            const userDetails = userData[key];

            if (userDetails.email === null && userDetails.email_confirmed === false && userDetails.created === false && !isCommand) {
         let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                  message: {
                    "messageContextInfo": {
                      "deviceListMetadata": {},
                      "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                      body: proto.Message.InteractiveMessage.Body.create({
                        text: `
Anda telah memasukkan email "${budy}".

Data Panel akan dikirim ke email tersebut. Dengan menekan tombol di bawah, Anda menyatakan bahwa email yang dimasukkan valid. Jika email tidak valid, Anda dapat mengabaikan pesan ini dan memasukkan email yang benar.

Apakah ini sesuai dengan yang Anda harapkan?
                        `
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: footer,
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                          {
                            "name": "quick_reply",
                            "buttonParamsJson": `{\"display_text\":\"Aktifkan Akun\",\"id\":\"${prefix}activate-ptero-account ${budy}|${crypto.createHash('sha256').update(budy + "AkaneChiwa" + m.sender).digest('hex')}\"}`
                          },
                          {
                            "name": "cta_url",
                            "buttonParamsJson": `{\"display_text\":\"Customer Service\",\"url\":\"https://wa.me/${cs_number}\",\"merchant_url\":\"https://chiwa.id\"}`
                          }
                        ],
                      })
                    })
                  }
                }
              }, { quoted: m });

              chiwa.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
              });
            }
          }
        }
      }
    } catch (error) {
      console.error('Error parsing JSON data:', error);
    }
  });
}

awaitInputPanelMail();




function parseRupiah(amount) {
    if (typeof amount !== 'number') {
        throw new Error('Input harus berupa angka');
    }

    return 'Rp. ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00";
}
function generateSecureHash(data) {
  return crypto.createHash('sha256').update(data).digest('hex');
}
function sensorHash(hash) {

    const visibleCount = 5;
    const hashArray = hash.split('');

    const visibleIndexes = [];
    while (visibleIndexes.length < visibleCount) {
        const randomIndex = Math.floor(Math.random() * hash.length);
        if (!visibleIndexes.includes(randomIndex)) {
            visibleIndexes.push(randomIndex);
        }
    }

    for (let i = 0; i < hashArray.length; i++) {
        if (!visibleIndexes.includes(i)) {
            hashArray[i] = '*';
        }
    }

    return hashArray.join('');
}

if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
chiwa.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
chiwa.sendMessage(m.chat, { image: {url: get_data_respon.image_url }, caption: get_data_respon.response }, {
quoted: m
})
}
}
setInterval(() => {
for (let i of Object.values(opengc)) {
if (Date.now() >= i.time) {
chiwa.groupSettingUpdate(i.id, "not_announcement")
.then((res) =>
chiwa.sendMessage(i.id, { text: `Sukses, group telah dibuka` }))
.catch((err) =>
chiwa.sendMessage(i.id, { text: 'Error' }))
delete opengc[i.id]
fs.writeFileSync('./database/opengc.json', JSON.stringify(opengc))
}
}
}, 1000)

if ((budy) && ["proses", "Proses", "p", "P"].includes(budy) && !isCmd) {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!m.quoted) return newReply('Reply pesanan yang akan proses')
let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM : @jam\n✨ STATUS : Pending\`\`\`\n\n📝 Catatan :\n@pesanan\n\nPesanan @user sedang di proses!`
const getTextP = getTextSetProses(m.chat, set_proses);
if (getTextP !== undefined) {
var anunya = (getTextP.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
chiwa.sendTextWithMentionsGambar(m.chat,setting.prosess_image, anunya, m)
} else {
chiwa.sendTextWithMentionsGambar(m.chat,setting.prosess_image, (proses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)}
}

if ((budy) && ['done', "Done", "d", "D"].includes(budy) && !isCmd) {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!m.quoted) return newReply('Reply pesanan yang telah di proses')
let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM : @jam\n✨ STATUS : Berhasil\`\`\`\n\nTerimakasih @user Next Order ya🙏`
const getTextD = getTextSetDone(m.chat, set_done);
if (getTextD !== undefined) {
var anunya = (getTextD.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
chiwa.sendTextWithMentionsGambar(m.chat,setting.done_image, anunya, m)
} else {
chiwa.sendTextWithMentionsGambar(m.chat,setting.done_image, (sukses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)}
}




// ====== WD SESSION MANAGER =======

async function checkWdSession(sender, command, isCommand, m) {
    const filePath = 'database/admin_wd_session.json';
    let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    if (data[sender] && data[sender].isOnWdSession && command !== 'wd-checkout' && command !== 'wd-selectnumber') {
        if (isCommand) {
            await newReply(`Membatalkan WD session karena kamu memasukkan teks perintah.`);

            delete data[sender];
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
            return true;
        } else {
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "messageContextInfo": {
                            "deviceListMetadata": {},
                            "deviceListMetadataVersion": 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: `*KONFIRMASI PEMBELIAN*

Anda sedang melakukan pembelian produk ${data[sender].productname} dengan harga ${parseRupiah(data[sender].harga)} ke tujuan 
> ${budy}. 

Silakan konfirmasi pembelian dengan menekan tombol di bawah atau batalkan dengan perintah asal.

Atau, ketik perintah tanpa prefix untuk mengganti target tujuan.
========== RAW DATA ${readmore} ===========
NAMA:
${data[sender].name}

EMAIL:
${data[sender].email}

PRODUK:
${data[sender].productname}

PRODUK ID:
${data[sender].productid}

HARGA:
${data[sender].harga}

PUSHNAME:
${pushname}

TARGET TUJUAN:
${budy}

HASH:
${sensorHash(generateSecureHash(data[sender].name + data[sender].email + data[sender].productname + data[sender].productid + data[sender].harga + budy + m.sender + pushname + "akaneeeeeeeee"))}
========== END DATA  ===========
                                `
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: footer,
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "quick_reply",
                                        "buttonParamsJson": `{\"display_text\":\"KONFIRMASI PEMBAYARAN\",\"id\":\"${prefix}wd-checkout ${budy}|${generateSecureHash(data[sender].name + data[sender].email + data[sender].productname + data[sender].productid + data[sender].harga + budy + m.sender + pushname + "akaneeeeeeeee")}\"}`
                                    },
                                    {
                                        "name": "cta_url",
                                        "buttonParamsJson": `{\"display_text\":\"Customer Service\",\"url\":\"https://wa.me/${cs_number}\",\"merchant_url\":\"https://chiwa.id\"}`
                                    }
                                ],
                            })
                        })
                    }
                }
            }, { quoted: m });

            chiwa.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    }

    return false;
}

checkWdSession(m.sender, command, isCommand, m);

// END
function chiwarandomHiragana(length) {
  const characters = 'さしすせそたちつてとなにぬねのんはひふ';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// CRUD FUNCTION PRODUCT

async function addProductToJSON(product) {
  const filePath = './database/products.json';
  
  let data = { products: [] };
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    try {
      data = fileContent ? JSON.parse(fileContent) : { products: [] };
      data.products = data.products || []; 
    } catch (error) {
      data = { products: [] }; 
    }
  }
  
  const existingProduct = data.products.find(p => p.productId === product.productId);
  if (existingProduct) {
    return 'Product ID sudah ada di database.';
  }
  
  data.products.push(product);
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return 'Produk berhasil ditambahkan ke database.';
}


async function updateProductInJSON(productId, updatedProduct) {
  const filePath = './database/products.json';

  let data = { products: [] };
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    try {
      data = fileContent ? JSON.parse(fileContent) : { products: [] };
      data.products = data.products || [];
    } catch (error) {
      data = { products: [] }; 
    }
  }

  const productIndex = data.products.findIndex(p => p.productId === productId);
  if (productIndex === -1) {
    return 'Product ID tidak ditemukan di database.';
  }

  data.products[productIndex] = { ...data.products[productIndex], ...updatedProduct };

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return 'Produk berhasil diperbarui ke dalam database.';
}

async function deleteProductById(productId) {
  const filePath = './database/products.json';

  let data = { products: [] };
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    try {
      data = fileContent ? JSON.parse(fileContent) : { products: [] };
      data.products = data.products || [];
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return 'Error parsing JSON file.';
    }
  }

  const productIndex = data.products.findIndex(p => p.productId === productId);
  if (productIndex === -1) {
    return 'Product ID tidak ditemukan di database.';
  }

  data.products.splice(productIndex, 1); //

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return 'Produk berhasil dihapus dari database.';
}
async function generateProductReff(id){
    return id.toUpperCase() + crypto.randomBytes(4).toString('hex');
  }
// END CRUD FUNCTION
 async function downloadAndSaveMedia(media) {
        try {
          const tempDir = './temp';

          if (!fs.existsSync(tempDir)) {
            fs.mkdirSync(tempDir);
          }

          const fileName = `mediaFile_${Date.now()}.jpg`; 
          const filePath = path.join(tempDir, fileName);

          fs.writeFileSync(filePath, media);
          return filePath;
        } catch (error) {
          console.error('Error while saving media:', error);
        }
      }
      const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
 if (m.isGroup && m.key.fromMe) {
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let ment of mentionUser) {
if (afk.checkAfkUser(ment, _afk)) {
let getId2 = afk.getAfkId(ment, _afk)
let getReason2 = afk.getAfkReason(getId2, _afk)
let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
let heheh2 = ms(getTimee)
newReply(`Adminnnn baruu sloww resss, ntarrr pastii balesss koooo,sabaarr yawww\n\n*Reason :* ${getReason2}\n*Sejak :* ${heheh2.hours} jam, ${heheh2.minutes} menit, ${heheh2.seconds} detik yg lalu\n`)
}
}
if (afk.checkAfkUser(m.sender, _afk)) {
let getId = afk.getAfkId(m.sender, _afk)
let getReason = afk.getAfkReason(getId, _afk)
let getTime = Date.now() - afk.getAfkTime(getId, _afk)
let heheh = ms(getTime)
_afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
chiwa.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} Admiiin udaaah on yaaahhh,makasih udah nunggu~~~\n\n*Reason :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, m)
}
}
switch(command) {
// ======== PRODUCT CRUD =========
case 'hidetag': case 'h': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Lu siapa kocak?')
chiwa.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: fkontak })
}
break
case'slr': case 'slowres':{
if (!m.isGroup) return newReply("Hanya dapat digunakan di grup")
if (!isCreator) return;
if (isAfkOn) return newReply('Afk sudah diaktifkan sebelumnya')
let reason = text ? text : 'Nothing.'
afk.addAfkUser(m.sender, Date.now(), reason, _afk)
chiwa.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} adminn sloww ress duluuu yawww\nAlasan : ${reason}`, m)
}
break
case 'pay': {
  const fs = require('fs');
  const path = './database/pay-manual.json';

  if (!fs.existsSync(path)) {
    return newReply('Data tidak ditemukan.');
  }

  const data = JSON.parse(fs.readFileSync(path, 'utf-8'));
  if (!data || Object.keys(data).length === 0) {
    return newReply('List Pembayaran Belum Di Set Oleh Admin.');
  }

  await chiwa.sendMessage(m.chat, { image: { url: data.url }, caption: data.caption });
}
break;

case 'setpay': {
  const fs = require('fs');
  const path = './database/pay-manual.json';

  if (!isCreator) {
    return newReply('Khusus Owner');
  }

  const data = fs.existsSync(path) ? JSON.parse(fs.readFileSync(path, 'utf-8')) : {};
  if (data && Object.keys(data).length !== 0) {
    return newReply('Data sudah ada. Gunakan perintah updatepay untuk memperbarui.');
  }

  const { ImageUploadService } = require('node-upload-images');
  const service = new ImageUploadService('pixhost.to')
  
  const mime = m.message?.imageMessage?.mimetype;

if (!isMedia) return m.reply(`Kirim gambar dengan caption ${prefix+command}`)
if (/video/.test(mime)) {
return m.reply('Hanya foto yang diijinkan')
}
let q = m.quoted ? m.quoted : m;
  const media = await q.download();
  const imageData = await service.uploadFromBinary(media, 'pay-image.png');

  const newData = { caption: text, url: imageData.directLink };
  fs.writeFileSync(path, JSON.stringify(newData, null, 2));
  newReply('Data berhasil disimpan.');
}
break;
case 'updatepay': {
  const fs = require('fs');
  const path = './database/pay-manual.json';

  if (!isCreator) return newReply('Khusus Owner');

  if (!fs.existsSync(path)) {
    return newReply('Data tidak ditemukan. Gunakan perintah setpay untuk menambah.');
  }

  const data = JSON.parse(fs.readFileSync(path, 'utf-8'));
  if (!data || Object.keys(data).length === 0) {
    return newReply('Data kosong. Gunakan perintah setpay untuk menambah.');
  }

  const { ImageUploadService } = require('node-upload-images');
  const service = new ImageUploadService('pixhost.to');

  // Ambil media dari reply atau pesan langsung
  let q = m.quoted ? m.quoted : m;
  const mime = q.message?.imageMessage?.mimetype;

if (!isMedia) return m.reply(`Kirim gambar dengan caption ${prefix+command}`)
if (/video/.test(mime)) {
return m.reply('Hanya foto yang diijinkan')
}

  try {
    const media = await q.download();
    const imageData = await service.uploadFromBinary(media, 'pay-image.png');
    const updatedData = { caption: text || 'No caption', url: imageData.directLink };

    fs.writeFileSync(path, JSON.stringify(updatedData, null, 2));
    return newReply('Data berhasil diperbarui.\nLink: ' + imageData.directLink);
  } catch (error) {
    return newReply('Terjadi kesalahan: ' + error.message);
  }
}
break;



case 'deletepay': {
  const fs = require('fs');
  const path = './database/pay-manual.json';

  if (!isCreator) {
    return newReply('Khusus Owner');
  }

  if (!fs.existsSync(path)) {
    return newReply('Data tidak ditemukan.');
  }

  fs.writeFileSync(path, JSON.stringify({}, null, 2));
  newReply('Data berhasil dihapus.');
}
break;


case 'wd-checkout':{
  /**
generateSecureHash(data[sender].name + data[sender].email + data[sender].productname + data[sender].productid + data[sender].harga + budy + m.sender + pushname + "akaneeeeeeeee")
   */
   let [tujuan, hashFromUser] = text.split('|');
  if (!isCreator) return newReply('Command not found in Role *User*\nInvalid Hash')
  const filePath = 'database/admin_wd_session.json';
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let sender = m.sender
  let hashServer = generateSecureHash(data[sender].name + data[sender].email + data[sender].productname + data[sender].productid + data[sender].harga + tujuan + m.sender + pushname + "akaneeeeeeeee")
  if (hashFromUser !== hashServer) return newReply(`Validasi hash gagal. 
  
Silakan ketik ulang target tujuan dan pastikan Anda tidak mengubah data pada payment gateway.
  
Jika data sudah terlanjur diubah, batalkan sesi ini dengan mengetik perintah asal, lalu ulangi proses WD dari awal.`)
  await newReply("Memproses Transaksi")
  async function generateProductReff(id){
    return id.toUpperCase() + crypto.randomBytes(4).toString('hex');
  }
try {
  
  let response = await axios.post(
    'https://atlantich2h.com/transaksi/create',
    qs.stringify({
      api_key: setting.pg_apikey,
      code: data[m.sender].productid,
      reff_id: await generateProductReff(data[m.sender].productid),
      target: tujuan,
    }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  );
  
  await newReply(response.data.message);  
} catch (error) {

  const rawData = error.response ? error.response.data : error.message;
try{
const miaawwwws = JSON.parse(JSON.stringify(rawData));
await newReply(miaawwwws.message);
} catch (error){
  const filePath = 'database/admin_wd_session.json';
  const miawwwww = JSON.parse(fs.readFileSync(filePath, 'utf8'));
delete miawwwww[m.sender]
const miaawwwwsd = JSON.stringify(rawData)
  await newReply(miaawwwwsd.message);
await newReply("Terjadi kesalahan dalam memproses request,mohon ulangi" + miaawwwwsd)
}
}
const filePaths = 'database/admin_wd_session.json';
let miawwwww = JSON.parse(fs.readFileSync(filePaths, 'utf8'));

delete miawwwww[m.sender];

fs.writeFileSync(filePaths, JSON.stringify(miawwwww, null, 2), 'utf8');
await newReply("WD SESSION BERHASIL DIHAPUS");

}
break
case 'tourl':{
 
if (!isMedia) return m.reply(`Kirim vidio/gambar dengan caption ${prefix+command}`)
if (/video/.test(mime)) {
return m.reply('Hanya foto yang diijinkan')
}


let q = m.quoted ? m.quoted : m;
let media = await q.download();
try {
  await chiwa.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key } });
  let felpet = await downloadAndSaveMedia(media)
  const imageData = fs.readFileSync(felpet);
  let { directLink } = await service.uploadFromBinary(imageData, 'test.png');
  console.log(directLink);
  await m.reply('Link: ' + directLink)
  await chiwa.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
} catch (error) {
  return m.reply('error' + error )
}
}
break



case 'addlist': {
  const { ImageUploadService } = require('node-upload-images');
  const fs = require('fs');
  const path = require('path');
  const service = new ImageUploadService('pixhost.to');

  if (!m.isGroup) return newReply('Fitur Khusus Group!');
  if (!isAdmins) return newReply('Fitur Khusus Admin!');
  
  // Memecah argumen
  if (!q.includes("|")) {
    return newReply(`Gunakan dengan cara ${prefix + command} *key|response*\n\n_Contoh_\n\n${prefix + command} tes|apa`);
  }
  const [args1, args2] = q.split("|").map(arg => arg.trim().toLowerCase());

  if (isAlreadyResponList(m.chat, args1, db_respon_list)) {
    return newReply(`List respon dengan key: *${args1}* sudah ada di grup ini.`);
  }

  const downloadAndSaveMedia = async (media) => {
    try {
      const tempDir = './temp';
      if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

      const fileName = `mediaFile_${Date.now()}.jpg`;
      const filePath = path.join(tempDir, fileName);
      fs.writeFileSync(filePath, media);
      return filePath;
    } catch (error) {
      console.error('Error while saving media:', error);
      throw new Error('Gagal menyimpan media');
    }
  };

  try {
    if (/image/.test(mime)) {
      let quotedMessage = m.quoted ? m.quoted : m;
      let media = await quotedMessage.download();
      if (!media) throw new Error('Media tidak ditemukan');

      await chiwa.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key } });
      
      const filePath = await downloadAndSaveMedia(media);
      const imageData = fs.readFileSync(filePath);
      const uploadedImage = await service.uploadFromBinary(imageData, 'test.png');

      if (!uploadedImage.directLink) throw new Error('Gagal mengunggah gambar');

      addResponList(m.chat, args1, args2, true, uploadedImage.directLink, db_respon_list);
      newReply(`Sukses set list message dengan key: *${args1}*`);

      fs.unlinkSync(filePath);
    } else {
      addResponList(m.chat, args1, args2, false, '-', db_respon_list);
      newReply(`Sukses set list message dengan key: *${args1}*`);
    }
    await chiwa.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });
  } catch (error) {
    console.error('Error:', error);
    newReply(`Terjadi kesalahan: ${error.message}`);
  }
  break;
}

case 'updatelist': {
  const { ImageUploadService } = require('node-upload-images');
  const fs = require('fs');
  const path = require('path');
  const service = new ImageUploadService('pixhost.to');

  if (!m.isGroup) return newReply('Fitur Khusus Group!');
  if (!isAdmins) return newReply('Fitur Khusus admin!');

  // Memisahkan argumen
  if (!q.includes("|")) {
    return newReply(
      `Gunakan dengan cara ${prefix + command} *key|response*\n\n_Contoh_\n\n${prefix + command} tes|apa`
    );
  }
  const [args1, args2] = q.split("|").map((item) => item.trim().toLowerCase());

  if (!isAlreadyResponList(m.chat, args1, db_respon_list)) {
    return newReply(`List *${args1}* belum ada di group ini.`);
  }

  // Mengecek apakah file berupa gambar
  const mime = m.message?.imageMessage?.mimetype || m.message?.videoMessage?.mimetype;
  if (/image/.test(mime)) {
    try {
      const quotedMessage = m.quoted ? m.quoted : m;
      const media = await quotedMessage.download();

      // Fungsi untuk menyimpan media secara lokal
      const downloadAndSaveMedia = async (media) => {
        const tempDir = './temp';
        if (!fs.existsSync(tempDir)) {
          fs.mkdirSync(tempDir);
        }
        const fileName = `mediaFile_${Date.now()}.jpg`;
        const filePath = path.join(tempDir, fileName);
        fs.writeFileSync(filePath, media);
        return filePath;
      };

      // Simpan media dan upload ke pixhost
      await chiwa.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key } });
      const filePath = await downloadAndSaveMedia(media);
      const imageData = fs.readFileSync(filePath);
      const uploadResult = await service.uploadFromBinary(imageData, 'test.png');

      // Hapus file lokal setelah selesai
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

      // Perbarui daftar respon dengan link gambar
      updateResponList(m.chat, args1, args2, true, uploadResult.directLink, db_respon_list);
      newReply(`Sukses set list message dengan key : *${args1}*`);
      await chiwa.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });
    } catch (error) {
      console.error('Error:', error);
      return newReply('Terjadi kesalahan saat memproses gambar.');
    }
  } else {
    // Jika bukan gambar, hanya memperbarui daftar respon tanpa media
    updateResponList(m.chat, args1, args2, false, '-', db_respon_list);
    newReply(`Sukses set list message dengan key : *${args1}*`);
  }
}
break;

case 'list': case 'store': {
    if (db_respon_list.length === 0) 
        return newReply(`Belum ada list message di database`);
    if (!isAlreadyResponListGroup(m.chat, db_respon_list)) 
        return newReply(`Belum ada list message yang terdaftar di group ini`);

    // Mengurutkan list berdasarkan abjad key
    let sortedList = db_respon_list.filter(item => item.id === m.chat)
                                   .sort((a, b) => a.key.localeCompare(b.key));

    let teks = `. ■ .═══════════════\nSelamat ${ucapanWaktu} @${m.sender.split("@")[0]}\nBerikut beberapa list yang tersedia di\n⌜ *${groupName}* ⌟\n${tanggal(new Date)}\n═══════════════════. ■ .\n       🅛🅘🅢🅣\n`;

    for (let i of sortedList) {
        teks += `🔖 ${i.key.toUpperCase()}\n`;
    }

    teks += `━━━━━━━━━━━━━━━━━ᯓ ✈︎\nUntuk melihat harga, silahkan ketik nama produk yang ada pada list. Misalnya:\n⌯ harga *netflix*, maka ketik *netflix*\n⌯ info pembayaran ketik *pay*\n\n> *ʙᴏᴛɢʀᴜᴘ cybotz* ━━━━━━━`;

    chiwa.sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { quoted: m });
}
break;

case 'dellist': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (db_respon_list.length === 0) return newReply(`Belum ada list message di database`)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return newReply(`List respon dengan key *${q}* tidak ada di database!`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
newReply(`Sukses delete list message dengan key *${q}*`)
}
break



case 'setproses': case 'setp':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetProses(m.chat, set_proses)) return newReply(`Set proses already active`)
addSetProses(text, m.chat, set_proses)
newReply(`✅ Done set proses!`)
}
break
case 'changeproses': case 'changep':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetProses(m.chat, set_proses)) {
changeSetProses(text, m.chat, set_proses)
newReply(`Sukses ubah set proses!`)
} else {
addSetProses(text, m.chat, set_proses)
newReply(`Sukses ubah set proses!`)
}
}
break
case 'delsetproses': case 'delsetp':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isSetProses(m.chat, set_proses)) return newReply(`Belum ada set proses di gc ini`)
removeSetProses(m.chat, set_proses)
newReply(`Sukses delete set proses`)
}
break



case 'setdone':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetDone(m.chat, set_done)) return newReply(`Udh set done sebelumnya`)
addSetDone(text, m.chat, set_done)
newReply(`Sukses set done!`)
break
}
case 'changedone': case 'changed':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetDone(m.chat, set_done)) {
changeSetDone(text, m.chat, set_done)
newReply(`Sukses ubah set done!`)
} else {
addSetDone(text, m.chat, set_done)
newReply(`Sukses ubah set done!`)
}
}
break
case 'delsetdone': case 'delsetd':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isSetDone(m.chat, set_done)) return newReply(`Belum ada set done di gc ini`)
removeSetDone(m.chat, set_done)
newReply(`Sukses delete set done`)
}
break



case'open': case'buka':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
//ntCmd('#group', m.sender, _cmd)
chiwa.groupSettingUpdate(m.chat, 'not_announcement')
const textOpen = await getTextSetOpen(m.chat, set_open);
newReply(textOpen || `Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
break
}
case 'opentime': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Lu Siapa Kocak')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return newReply('*Pilih:*\ndetik\nmenit\njam\n\n*Example*\n10 detik')
}
newReply(`Grup Akan Dibuka Dalam ${q} Dimulai Dari Sekarang`)
setTimeout(() => {
var nomor = m.participant
const open = `Grup Telah Di Buka Oleh Admin\nSekarang Semua Member Dapat Mengirim Pesan`
chiwa.groupSettingUpdate(m.chat, 'not_announcement')
newReply(open)
}, timer)
}
break
case'setopen':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks open*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group sudah buka`)
if (isSetOpen(m.chat, set_open)) return newReply(`Set open sudah ada sebelumnya`)
addSetOpen(text, m.chat, set_open)
//ntCmd('#setopen', m.sender, _cmd)
newReply(`✅ Done set open!`)
}
break
case 'changeopen': case 'changesetopen':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks open*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group sudah buka`)
if (isSetOpen(m.chat, set_open)) {
//ntCmd('#changeopen', m.sender, _cmd)
changeSetOpen(text, m.chat, set_open)
newReply(`Sukses ubah set open teks!`)
} else {
//ntCmd('#changeopen', m.sender, _cmd)
addSetOpen(text, m.chat, set_open)
newReply(`Sukses ubah set open teks!`)
}
}
break
case 'delsetopen':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!isSetOpen(m.chat, set_open)) return newReply(`Belum ada set open di sini..`)
removeSetOpen(m.chat, set_open)
//ntCmd('#delsetopen', m.sender, _cmd)
newReply(`Sukses delete set open`)
}
break



case 'closetime': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Lu Siapa Kocak')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'harj') {
var timer = args[0] * `86400000`
} else {
return newReply('*Pilih:*\ndetik\nmenit\njam\n\n*Example*\n10 detik')
}
newReply(`Group Akan Ditutup Dalam ${q} Di Mulai Dari Sekarang`)
setTimeout(() => {
var nomor = m.participant
const close = `Grup Di Tutup Oleh Admin\nSekarang Hanya Admin Yang Dapat Mengirim Pesan`
chiwa.groupSettingUpdate(m.chat, 'announcement')
newReply(close)
}, timer)
}
break
case'close': case'tutup':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
//ntCmd('#close', m.sender, _cmd)
chiwa.groupSettingUpdate(m.chat, 'announcement')
const textClose = await getTextSetClose(m.chat, set_close);
newReply(textClose || `Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
}
break
case 'setclose':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks close*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group close dulu ya`)
if (isSetClose(m.chat, set_close)) return newReply(`Set close sudah ada sebelumnya`)
addSetClose(text, m.chat, set_close)
//ntCmd('#setclose', m.sender, _cmd)
newReply(`✅ Done set close!`)
}
break
case'changeclose': case'changesetclose':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks close*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group close dulu ya`)
if (isSetClose(m.chat, set_close)) {
//ntCmd('#changeclose', m.sender, _cmd)
changeSetClose(text, m.chat, set_close)
newReply(`Sukses ubah set close teks!`)
} else {
//ntCmd('#changeclose', m.sender, _cmd)
addSetClose(text, m.chat, set_close)
newReply(`Sukses ubah set close teks!`)
}
}
break
case 'delsetclose':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!isSetClose(m.chat, set_close)) return newReply(`Belum ada set close di sini..`)
removeSetClose(m.chat, set_close)
//ntCmd('#delsetclose', m.sender, _cmd)
newReply(`Sukses delete set close`)
}
break






case 'addproduct': {
  if (!isCreator) return newReply('Command not found in Role *User*');
  let [productId, productName, harga, stock, desc] = text.split('|');
  if (!productId || !productName || !harga || !desc) return newReply(`
Gunakan perintah ini dengan contoh:

> ${prefix + command} id|nama|harga|deskripsi

*Contoh*

> ${prefix + command} netflix1|NETFLIX PRIVATE|5000|SHARING 2 AKUN
`);

 
    const newProduct = { productId, productName, harga, desc };

    async function addProd() {
        const result = await addProductToJSON(newProduct);
        newReply(result);
    }

    addProd();

}
break;
case 'updateproduct': {
  if (!isCreator) return newReply('Command not found in Role *User*');
  let [productId, productName, harga, desc] = text.split('|');
  if (!productId) return newReply(`
Gunakan perintah ini dengan contoh:

${prefix + command} IDPRODUK|NAMA PRODUK|HARGA|DESKRIPSI
`);

  const updatedProduct = { productName, harga, desc };
  const result = await updateProductInJSON(productId, updatedProduct);
  newReply(result);
}
break;
case 'deleteproduct': {
  if (!isCreator) return newReply('Command not found in Role *User*');
  let productId = text
  await newReply(await deleteProductById(productId))
}
break;
// ========= END ===========
case 'activate-ptero-account': {
  let [email, hash] = text.split('|');
  const emailValue = email || '-';
  const hashValue = hash || '-';

// validasi hash,fungsinya kalo perintah untuk ngebuat akun panel bocor,user ga bakal bisa ngebuat akun tehe
  const userStatement = crypto.createHash('sha256')
    .update(emailValue + "AkaneChiwa" + m.sender)
    .digest('hex');


// message ini ga bakal dilihat kalo user ngelakuin pmbelian secara normal
  if (hashValue !== userStatement) {
    return newReply('Illegal statement');
  }

// staging message
//  await newReply('Statement validated');

// validasi email biar ga error di pterodactyl
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(email)) {
    return newReply('Email yang Anda masukkan salah. Silahkan masukkan kembali.');
  }

// tandai user kalo misalnya akun udah dibuat,ntar kalo misalnnya akun gagal dibuat bakal di handel sama try catch 
  async function insertEmail(sender, email) {
  let path = './database/panel.json';
  try {
    let data = await fs.promises.readFile(path, 'utf8');
    let panelData = JSON.parse(data);

    if (panelData[sender]) {
      let keys = Object.keys(panelData[sender]);
      let refid = keys[keys.length - 1];
      
      // update hanya jika belum dikonfirmasi
      if (!panelData[sender][refid].email_confirmed) {
        panelData[sender][refid].email = email;
        panelData[sender][refid].email_confirmed = true;

        await fs.promises.writeFile(path, JSON.stringify(panelData, null, 2));
      }
      let refidd = panelData[sender][refid].refid;
      await newReply("Sedang Membuat Akun");
      return refidd;
    } else {
      return newReply('Illegal statement, this incident has been reported to the owner.');
    }
  } catch (err) {
    console.error('db error', err);
    return newReply('Error processing your request.');
  }
}

// tandai user udah ngebuat akun
  let refid = await insertEmail(m.sender, emailValue);

function parseRefId(refId) {
  const match = refId.match(/\d+/);
  if (!match) return { error: "Invalid RefID format" };

  let number = match[0];
  let harga;

  if (number.startsWith('1')) {
    harga = parseInt(number.slice(0, 2)); 
  } else {
    harga = parseInt(number.slice(0, 1)); 
  }

  let spesifikasi = {
    2: { ram: 1024, cpu: 30 },
    3: { ram: 2048, cpu: 40 },
    4: { ram: 3072, cpu: 50 },
    5: { ram: 4096, cpu: 60 },
    6: { ram: 5120, cpu: 70 },
    7: { ram: 6144, cpu: 80 },
    8: { ram: 7168, cpu: 90 },
    9: { ram: 8192, cpu: 100 },
    10: { ram: 9216, cpu: 110 },
    15: { ram: 0, cpu: 0 }
  };

  let matchedSpec = spesifikasi[harga];
  if (matchedSpec) {
    return { harga: harga + 'K', ram: matchedSpec.ram, cpu: matchedSpec.cpu };
  } else {
    return { error: `harga ${harga} tidak ditemukan.` };
  }
}

  const spesifikasiServer = parseRefId(refid);
  if (spesifikasiServer.error) {
    let path = './database/panel.json';
    let sender = m.sender;
    email = null;

    let data = await fs.promises.readFile(path, 'utf8');
    let panelData = JSON.parse(data);

    if (panelData[sender]) {
      const keys = Object.keys(panelData[sender]);
      const refid = keys[keys.length - 1];

      panelData[sender][refid].email = email;
      panelData[sender][refid].email_confirmed = false;

      await fs.promises.writeFile(path, JSON.stringify(panelData, null, 2));
      return newReply('Error: ' + spesifikasiServer.error);
    }
  }

//  await newReply(
//    "Membuat server: " + JSON.stringify(spesifikasiServer, null, 2) + 
//    '\nUTF-8 RefID: ' + refid
//  );
async function createServer(emailValue, ram, cpu) {
  const username = emailValue.split('@')[0];
  const sendDataWithEmail = setting.SendPteroDataWithEmail;
  const password = !sendDataWithEmail ? chiwarandomHiragana(8) : undefined;
  const egg = "15";
  const loc = "1";
  const memo = ram.toString();
  const disk = "0";

  const userResponse = await fetch(`${setting.domain}/api/application/users`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${setting.chiwa_plta}`,
    },
    body: JSON.stringify({
      email: emailValue,
      username: username,
      first_name: username,
      last_name: username,
      language: "en",
      ...(password && { password })
    }),
  });

  const userData = await userResponse.json();
  if (userData.errors) {
    await chiwa.sendMessage(setting.cs_number, {
      text: `[ PRIORITT HIGH]\n\nAlowww adminnnn~~~,\nError saat membuat akun:\n\n[ DEBUG FROM SERVER ]\n${JSON.stringify(userData.errors[0], null, 2)}`
    });
    throw new Error("account");
  }

  const user = userData.attributes;

  const eggResponse = await fetch(`${setting.domain}/api/application/nests/5/eggs/${egg}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${setting.chiwa_plta}`,
    },
  });

  const eggData = await eggResponse.json();
  const startupCommand = eggData.attributes.startup;

  const serverResponse = await fetch(`${setting.domain}/api/application/servers`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${setting.chiwa_plta}`,
    },
    body: JSON.stringify({
      name: username,
      description: " ",
      user: user.id,
      egg: parseInt(egg),
      docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
      startup: startupCommand,
      environment: {
        INST: "npm",
        USER_UPLOAD: "0",
        AUTO_UPDATE: "0",
        CMD_RUN: "npm start",
      },
      limits: {
        memory: memo,
        swap: 0,
        disk: disk,
        io: 500,
        cpu: cpu.toString(),
      },
      feature_limits: {
        databases: 5,
        backups: 5,
        allocations: 1,
      },
      deploy: {
        locations: [parseInt(loc)],
        dedicated_ip: false,
        port_range: [],
      },
    }),
  });

  const serverData = await serverResponse.json();
  if (serverData.errors) {
    await chiwa.sendMessage(setting.cs_number, {
      text: `[ PRIORITT HIGH]\n\nAlowww adminnnn~~~,\nError saat membuat server:\n\n[ DEBUG FROM SERVER ]\n${JSON.stringify(serverData.errors[0], null, 2)}`
    });
    throw new Error("server");
  }

  const server = serverData.attributes;

  await newReply(`Server berhasil dibuat dengan detail berikut:\n\nID: ${user.id}\nMEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB\nDISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB\nCPU: ${server.limits.cpu}%`);
 let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
  message: {
  "messageContextInfo": {
  "deviceListMetadata": {},
  "deviceListMetadataVersion": 2
  },
  interactiveMessage: proto.Message.InteractiveMessage.create({
  body: proto.Message.InteractiveMessage.Body.create({
  text: `INI YAH KAK ${pushname} 𝖳𝖨𝖭𝖦𝖦𝖠𝖫 𝖢𝖮𝖯𝖸`
  }),
  footer: proto.Message.InteractiveMessage.Footer.create({
  text: "© CHIWA BOT MD >_<"
  }),
  header: proto.Message.InteractiveMessage.Header.create({
  
  title: '',
  gifPlayback: true,
  subtitle: '',
  hasMediaAttachment: false  
  }),
  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
  buttons: [
  {
  "name": "cta_url",
  "buttonParamsJson": `{"display_text":"LOGIN","url":"${setting.domain}","merchant_url":"https://www.google.com"}`
  },
  {
  "name": "cta_copy",
  "buttonParamsJson": JSON.stringify({
  "display_text": "COPY USERNAME",
  "copy_code": `${user.username}`
  })
  },
  {
  "name": "cta_copy",
  "buttonParamsJson": JSON.stringify({
  "display_text": "COPY PASSWORD",
  "copy_code": `${password}`
  })
  }
  ],
  }),
  contextInfo: {
  mentionedJid: [m.sender], 
  forwardingScore: 999,
  isForwarded: false,
  forwardedNewsletterMessageInfo: {
  newsletterJid: '120363284947408599@newsletter',
  newsletterName: `chiwa`,
  serverMessageId: 145
  }
  }})}}
  }, {quoted: m})
  return chiwa.relayMessage(m.sender, msg.message, {
  messageId: msg.key.id
  })
}
try {
  const tantan = await createServer(emailValue, spesifikasiServer.ram, spesifikasiServer.cpu);
  let path = './database/panel.json';
  let sender = m.sender;
  let data = await fs.promises.readFile(path, 'utf8');
  let panelData = JSON.parse(data);

    let keys = Object.keys(panelData[sender]);
    let refid = keys[keys.length - 1];

    panelData[sender][refid].email = emailValue;
    panelData[sender][refid].email_confirmed = true;
panelData[sender][refid].created = true;
    await fs.promises.writeFile(path, JSON.stringify(panelData, null, 2)); 
  if (sendDataWithEmail) {
    return newReply("Silahkan cek email Anda untuk mendapatkan detail login");
  }
} catch (error) {
  
    if (error.message === "account") {
      let path = './database/panel.json';
  let sender = m.sender;
  let data = await fs.promises.readFile(path, 'utf8');
  let panelData = JSON.parse(data);

    let keys = Object.keys(panelData[sender]);
    let refid = keys[keys.length - 1];

    panelData[sender][refid].email = null;
    panelData[sender][refid].email_confirmed = false;

    await fs.promises.writeFile(path, JSON.stringify(panelData, null, 2)); 
      return newReply("Email telah digunakan oleh pengguna lain. Silahkan masukkan ulang alamat email.");
    }
    if (error.message === "server") {
      let path = './database/panel.json';
  let sender = m.sender;
  let data = await fs.promises.readFile(path, 'utf8');
  let panelData = JSON.parse(data);

    let keys = Object.keys(panelData[sender]);
    let refid = keys[keys.length - 1];

    panelData[sender][refid].email = null;
    panelData[sender][refid].email_confirmed = false;

    await fs.promises.writeFile(path, JSON.stringify(panelData, null, 2)); 
      return newReply("Terjadi kesalahan dalam pembuatan server. Masalah ini telah dilaporkan kepada Admin.");
    }
}

  break;
}

case 'backupsc': {
  if (!isCreator) return;
  const archiver = require('archiver');
  const fs = require('fs');
  const path = require('path');

  const filename = text || "BACKUPSC";
  const zipFilePath = path.join(__dirname, `${filename}.zip`);
  const output = fs.createWriteStream(zipFilePath);
  const archive = archiver('zip', { zlib: { level: 9 } });

  console.log("Starting archive creation...");


  output.on('close', async () => {
    console.log(`Archive created: ${zipFilePath} (${archive.pointer()} total bytes)`);
    
    try {
      await chiwa.sendFile(m.chat, zipFilePath, 'backup.zip', 'Backup berhasil dibuat', m);
      console.log("File sent successfully.");
    } catch (sendError) {
      console.error("Error sending file:", sendError);
    } finally {
      fs.unlinkSync(zipFilePath); 
      console.log("Temporary zip file deleted.");
    }
  });


  archive.on('error', (err) => {
    console.error("Archive error:", err);
    output.end(); 
  });

  archive.pipe(output);


  archive.glob('**/*', {
    ignore: ['node_modules/**', 'session/**']
  });

  archive.finalize().then(() => {
    console.log("Archive finalization started.");
  }).catch(finalizeError => {
    console.error("Error finalizing archive:", finalizeError);
  });
  
  break;
}

case 'test':{
  // rebase sc sendiri mwehehe
  if (!isCreator) return newReply('user not a creator')
  await newReply('konnichiwandahoyyy ><')
  await m.reply('isCreator defined')
  
}
break

function CountTrx(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8'); 
    const jsonData = JSON.parse(data);

    let totalTransaksi = 0;
    const statusCount = {};


    for (const key in jsonData) {
      const transaksi = jsonData[key];
      totalTransaksi += transaksi.length;

      transaksi.forEach((trx) => {
        const status = trx.status;
        statusCount[status] = (statusCount[status] || 0) + 1;
      });
    }


    return {
      totalTransaksi,
      statusCount
    };

  } catch (err) {
    console.error('Error:', err);
    return null; 
  }
}
function formatRupiah(amount) {
  if (typeof amount !== 'number') {
    amount = Number(amount);
    if (isNaN(amount)) return 'Invalid number';
  }
  
  return 'Rp ' + amount.toLocaleString('id-ID');
}
case 'saldo':{
      const getSaldoById = (userId) => {
    if (!userId) {
        return 'User ID tidak boleh kosong.';
    }

    const path = './database/saldo.json'; // Mendeklarasikan path di dalam fungsi
    const userKey = userId 

    // Baca database saldo
    if (!fs.existsSync(path)) {
        return 0;
    }

    const saldoDB = JSON.parse(fs.readFileSync(path, 'utf-8'));

    // Ambil saldo user
    const userSaldo = saldoDB[userKey];

    if (userSaldo === undefined) {
        return 0;
    }

    return userSaldo; // Mengembalikan saldo pengguna
};
  let saldouser = getSaldoById(m.sender) || 0;
  var cpt = `╭───✵「  SALDO 」✵
┃ *Nama*  : ${pushname}
┃ *Status*   : User
┃ *Saldo*    : ${formatRupiah(saldouser)}
╰───✵

╭───✵
┃ ➳  Silahkan ketik  ${prefix}pay
┃ ➳  Unftuk deposit >_<
╰───✵

`

await newReply(cpt)

}
break
case 'menu': case 'simplemenu': case 'help': {
    const petik = '```';
    const getSaldoById = (userId) => {
    if (!userId) {
        return 'User ID tidak boleh kosong.';
    }

    const path = './database/saldo.json'; // Mendeklarasikan path di dalam fungsi
    const userKey = userId 

    // Baca database saldo
    if (!fs.existsSync(path)) {
        return 0;
    }

    const saldoDB = JSON.parse(fs.readFileSync(path, 'utf-8'));

    // Ambil saldo user
    const userSaldo = saldoDB[userKey];

    if (userSaldo === undefined) {
        return `Saldo untuk User ID ${userId} tidak ditemukan.`;
    }

    return userSaldo; // Mengembalikan saldo pengguna
};
    const saldouser = getSaldoById(m.sender)
    await chiwa.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key } });

    // Format untuk tampilan imut dengan karakter ASCII
    const formatASCII = (text) => {
        return text.replace(/╭───✦/g, '╭───✵').replace(/╰───✦/g, '╰───✵')
            .replace(/│/g, '┃').replace(/⎯/g, '━')
            .replace(/✪/g, '★').replace(/→/g, '➳')
            .replace(/❍/g, '✵');
    };

    // Jika bukan admin (user biasa), tampilkan menu terbatas
    if (!isCreator) {
        let text = `🎀 𝙷𝚎𝚕𝚕𝚘, *${pushname}* 🎀
${await wibuGreetingss()}
${formatASCII(`
╭───✵「 𝙸𝙽𝙵𝙾 」✵
┃ *Powered*  : ${setting.ownerName}
┃ *Status*   : User
┃ *Saldo*    : ${formatRupiah(saldouser)}
┃ *Prefix*   : ${prefix}
╰───✵

╭───✵「 Produk 」✵
┃ ➳ stock
╰───✵

╭───✵「 Riwayat Transaksi 」✵
┃ ➳ riwayattrx
╰───✵
`)}`;

        await chiwa.sendMessage(m.chat, { text }, { quoted: m });
        await chiwa.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });
    } else {
        // Data untuk admin, menampilkan informasi lebih lengkap
        const countTrxs = CountTrx('./database/trx.json');
        let response = await axios.post('https://atlantich2h.com/get_profile', 
            qs.stringify({ api_key: setting.pg_apikey }),
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );

        let { username, email, phone, balance, status } = response.data.data;
        const { totalTransaksi, statusCount } = countTrxs;
        const statusString = Object.entries(statusCount)
            .map(([status, count]) => `${status}: ${count}`)
            .join('\n');

       let adminText = `🎉 𝙷𝚎𝚕𝚕𝚘, *${username}* 🎉
        
╭───✵「 DATABASE 」✵
┃ *Total Transaksi*  : ${totalTransaksi}
╰───✵
        
╭───✵「 PG 」✵
┃ *Username*  : ${username}
┃ *Email*   : ${email}
┃ *Nomor* : ${phone}
┃ *Saldo*   : ${formatRupiah(balance)}
┃ *Status*   : ${status.toUpperCase()}
╰───✵
        
╭───✵「 𝙸𝙽𝙵𝙾 𝙱𝙾𝚃 」✵
┃ *Powered*  : ${setting.ownerName}
┃ *Status*   : Owner
┃ *Total Trx* : ${totalTransaksi}
┃ *Prefix*   : ${prefix}
╰───✵

╭───✵「 Produk 」✵
┃ ➳ addproduct
┃ ➳ updateproduct
┃ ➳ deleteproduct
╰───✵

╭───✵「 Stock Produk 」✵
┃ ➳ addstock
┃ ➳ delstock produkid|stockid
┃ ➳ updatestock 
┃ ➳ showstock produkid|stockid(opsional)
╰───✵

╭───✵「 User Database 」✵
┃ ➳ riwayat
┃ ➳ addsaldo
┃ ➳ minsaldo
╰───✵

╭───✵「 Group 」✵
┃ ➳ setopen
┃ ➳ setclose
┃ ➳ open
┃ ➳ close
┃ ➳ closetime
┃ ➳ opentime
┃ ➳ setproses
┃ ➳ delsetproses
┃ ➳ changeproses
┃ ➳ setpay
┃ ➳ updatepay
┃ ➳ deletepay
┃ ➳ addlist
┃ ➳ dellist
┃ ➳ updatelist
┃ ➳ hidetag / h
┃ ➳ proses / p
┃ ➳ done / p
┃ ➳ welcome
┃ ➳ setwelcome
┃ ➳ delsetwelcome
┃ ➳ changewelcome
╰───✵
`;

if (m.isGroup) {
  adminText = adminText.replace(username, '*******')
                       .replace(email, '*******')
                       .replace(phone, '*******')
                       .replace(balance, '******');
}


        // Jika di grup, sensor data transaksi dan data Payment Gateway

        await chiwa.sendMessage(m.chat, { text: adminText }, { quoted: m });
    }
}
break;




case 'riwayattrx': {
  const fs = require('fs');
  const path = './database/trx.json';
  const userId = m.sender;

  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error('Error membaca database:', err);
      return newReply('Terjadi kesalahan saat membaca database');
    }

    const transaksi = JSON.parse(data);
    const riwayatTransaksi = transaksi[userId];

    if (!riwayatTransaksi || riwayatTransaksi.length === 0) {
      return newReply('Tidak ada riwayat transaksi yang ditemukan.');
    }

    let pesan = `*Riwayat Transaksi:*\n\n`;
    riwayatTransaksi.forEach((trx, index) => {
      pesan += `*${index + 1}. Transaksi ID:* ${trx.trxid}\n`;
      pesan += `*Ref ID:* ${trx.refid}\n`;
      pesan += `*Nominal:* Rp${trx.nominal}\n`;
      pesan += `*Status:* ${trx.status}\n`;
      pesan += `*Tanggal:* ${new Date(trx.created_at).toLocaleString()}\n`;
      pesan += `*URL:* ${trx.url}\n\n`;
    });

    newReply(pesan); 
  });
  break;
}

case 'dashptero':{
if (!isCreator) return;
const petik = '```'
await chiwa.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})

let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text:  `𝙰𝚕𝚕𝚘𝚘𝚘𝚘𝚘 𝙺𝚊𝚔 ${petik + pushname + petik} ${await wibuGreetingss()}

Selamat datang di DASHBOARD PTERODACTYL

Kamu bisa ngelola server panel kamu dengan mudahh lohh~~~~ >.<

`


          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footer,
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
  {
    "name": "single_select",
    "buttonParamsJson": `{
      "title": "Manage Menu",
      "sections": [
        {
          "title": "Manage Menu",
          "highlight_label": "",
          "rows": [
            
            {
              "header": "",
              "title": "MANAGE USER",
              "id": "${prefix}userptero"
            },
            {
              "header": "",
              "title": "MANAGE SERVER",
              "id": "${prefix}serverptero"
            }
          ]
        }
      ]
    }`
  },  

              {
  "name": "cta_url",
  "buttonParamsJson": `{\"display_text\":\"Customer Service\",\"url\":\"https://wa.me/${cs_number}\",\"merchant_url\":\"https://chiwa.id\"}`
}

           ],
          })
        })
    }
  }
}, {quoted:m})
await chiwa.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
await chiwa.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
}
break
case 'wdsaldo':{
  if (!isCreator) return newReply('Command not found in Role *User*')
  let [productId, Jumlah] = text.split('|');
  if (!productId || !Jumlah) return newReply('Kode layanan WD harus disertakan,untuk melihat kode layanan silahkan menggunakan perintah' + prefix+ 'pricelist')
}
break

case 'wd': {

   if (!isCreator) return ;
   const categoryInput = text;
   const [mainCategory, subCategory] = categoryInput.split('|').map(item => item.trim().toLowerCase());
   if (!mainCategory) return newReply(`Gunakan dengan cara ${prefix+command} KATAGORIPRDUK
   
Contoh:
${prefix+command} E-Money

Atau gunakan argumen "|" untuk pencarian spesifik

Contoh:
${prefix+command} E-Money|dana
  `)

   try {
      let response = await axios.post(
         'https://atlantich2h.com/layanan/price_list', 
         qs.stringify({
            api_key: setting.pg_apikey,
            type: 'prabayar'
         }),
         {
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
            }
         }
      );

      const data = response.data.data;

      const filteredData = data.filter(item => {
         const categoryMatch = item.category.toLowerCase() === mainCategory;
         const subCategoryMatch = subCategory ? item.name.toLowerCase().includes(subCategory) : true;
         return categoryMatch && subCategoryMatch;
      });

      if (filteredData.length === 0) {
         await m.reply(`Tidak ada produk yang ditemukan untuk kategori: ${mainCategory}${subCategory ? ' dengan subkategori: ' + subCategory : ''}`);
         return;
      }

      const productButtons = filteredData.map((item) => ({
         header: item.name,
         title: `Code: ${item.code}`,
         description: `Price: ${item.price}`,
         id: `${prefix}wd-selectnumber ${item.name}|${item.code}|${item.price}`,
      }));

      let msg = generateWAMessageFromContent(m.chat, {
         viewOnceMessage: {
            message: {
               "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
               },
               interactiveMessage: proto.Message.InteractiveMessage.create({
                  body: proto.Message.InteractiveMessage.Body.create({
                     text: `List Produk untuk Kategori: ${mainCategory}${subCategory ? ' - ' + subCategory : ''}\n\nPilih produk yang ingin Anda beli:`
                  }),
                  footer: proto.Message.InteractiveMessage.Footer.create({
                     text: "Pilih produk di bawah ini", 
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                     buttons: [
                        {
                           "name": "single_select",
                           "buttonParamsJson": JSON.stringify({
                              "title": "Produk Tersedia",
                              "sections": [
                                 {
                                    "title": `Kategori: ${mainCategory}${subCategory ? ' - ' + subCategory : ''}`,
                                    "rows": productButtons
                                 }
                              ]
                           })
                        },
                        {
                           "name": "cta_url",
                           "buttonParamsJson": JSON.stringify({
                              "display_text": "Customer Service",
                              "url": `https://wa.me/${cs_number}` 
                           })
                        }
                     ]
                  })
               })
            }
         }
      }, { quoted: m });
      
      await chiwa.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
   } catch (error) {
      console.error("Error:", error);
      await m.reply("Terjadi kesalahan saat mengambil data.");
   }
}
break;


case 'wd-selectnumber': {
  if (!isCreator) {
    return newReply('Access Denied, this incident has been reported to Admin');
  }
 
  let response = await axios.post(
    'https://atlantich2h.com/get_profile', 
    qs.stringify({
      api_key: setting.pg_apikey
    }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  );

  let nama = response.data.data.name;
  let email = response.data.data.email;
  let phone = response.data.data.phone;
  let balance = response.data.data.balance;
  let stat = response.data.data.status;

  let [name, code, price] = text.split('|');
  
  await newReply(`
Silahkan memasukkan Nomer/ID target untuk melanjutkan transaksi

Silahkan ketik ${prefix}wd untuk mengganti produk yang ingin dibeli
${readmore}
Anda Login Sebagai *Admin* data sebagai berikut
  
LOGGED AS: 
${isCreator ? "ADMIN" : "USER"}

JID WHATSAPP:
${m.sender}
  
NAMA:
${nama}

PHONE (PG):
${phone}
  
Anda Berniat Melakukan Pembelian Pada Akun *PAYMENT GATEWAY* DENGAN DATA SEBAGAI BERIKUT

PRODUK: 
${name}

KODEPRODUK:
${code}

HARGA:
${price}

SALDO ANDA SAAT INI ADALAH ${balance},SILAHKAN KETIK TARGET TANPA PREFIX UNTUK MELANJUTKAN TRANSAKSI PRODUK INI,UNTUK MEMBATALKAN,SILAHKAN KETIK PERINTAH APAPUN

JIKA MEMBELI PRODUK GAME MASUKKAN ID GAME DAN JIKA E-MONEY MASUKKAN NOMOR E-MONEY
  `);

  const sessionData = {
    [m.sender]: {
      name: nama,
      productname: name,
      productid: code,
      harga: parseInt(price),
      email: email,
      phone: phone,
      balance: balance,
      status: stat,
      isOnWdSession: true
    }
  };


  let fileData = {};
  try {
    const data = fs.readFileSync('./database/admin_wd_session.json');
    fileData = JSON.parse(data);
  } catch (err) {
  }

  fileData = { ...fileData, ...sessionData };

  fs.writeFileSync('./database/admin_wd_session.json', JSON.stringify(fileData, null, 2));
}
break;




case 'delprd': {
  const petik = '```';
  if (!isCreator) return;
  await chiwa.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

  let rawData = fs.readFileSync('./database/products.json');
  let productsData = JSON.parse(rawData).products;

  const productButtons = productsData.map(product => ({
    header: '',
    title: product.productName,
    description: `Harga: ${product.harga}\nStock: ${product.stock}`,
    id: `${prefix}deleteproduct ${product.productId}`
  }));


  let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `
Pilih Produk Untuk dihapus



${productsData.map(product => `- ${product.productName}`).join('\n')}
            `
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footer, 
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons : [
  {
    "name": "single_select",
    "buttonParamsJson": JSON.stringify({
      "title": "Hapus Produk",
      "sections": [
        {
          "title": "Hapus Produk",
          "highlight_label": "",
          "rows": [
                        ...productButtons,
          ]
        }
      ]
    })
  },
  {
    "name": "cta_url",
    "buttonParamsJson": JSON.stringify({
      "display_text": "Customer Service",
      "url": `https://wa.me/${cs_number}` 
    })
  }
]


          })
        })
      }
    }
  }, { quoted: m });

  await chiwa.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
  await chiwa.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
}
break;
case 'stock': case 'stok':{
  const petik = '```';
  await chiwa.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key } });

  // Load data produk
  let rawProductData = fs.readFileSync('./database/products.json');
  let productsData = JSON.parse(rawProductData).products;

  // Load data stok
  let rawStockData = fs.readFileSync('./database/stock.json');
  let stockData = JSON.parse(rawStockData);

  // Hitung stok berdasarkan productName
  let stockCount = {};
  Object.values(stockData).forEach(items => {
    items.forEach(item => {
      const productName = item.productName;
      if (stockCount[productName]) {
        stockCount[productName]++;
      } else {
        stockCount[productName] = 1;
      }
    });
  });

  // Buat daftar produk dengan stok yang diperbarui
  let productList = productsData.map(product => {
    const currentStock = stockCount[product.productName] || 0;
    return `
╭───✵「 𝙿𝚁𝙾𝙳𝚄𝙺 」✵
┃ *${product.productName}*
┃ ➳ Harga: ${formatRupiah(product.harga)}
┃ ➳ Stok: ${currentStock}
┃ ➳ Terjual: ${product.count || 0}
┃ ➳ ID Produk: ${product.productId}
┃ ➳ Deskripsi ${product.desc || "Tidak ada Deskripsi"}   
╰───✵
    `;
  }).join('\n');
      const getSaldoById = (userId) => {
    if (!userId) {
        return 'User ID tidak boleh kosong.';
    }

    const path = './database/saldo.json'; // Mendeklarasikan path di dalam fungsi
    const userKey = userId 

    // Baca database saldo
    if (!fs.existsSync(path)) {
        return 0;
    }

    const saldoDB = JSON.parse(fs.readFileSync(path, 'utf-8'));

    // Ambil saldo user
    const userSaldo = saldoDB[userKey];

    if (userSaldo === undefined) {
        return 0;
    }

    return userSaldo; // Mengembalikan saldo pengguna
};
let saldo = getSaldoById(m.sender)
  let shopText = `
🎀 𝙷𝚎𝚕𝚕𝚘, ${pushname} 🎀
${await wibuGreetingss()}

╭───✵「 𝙸𝙽𝙵𝙾 」✵
┃ *Powered*  : ${setting.ownerName}
┃ *Status*   : User
┃ *Saldo*    : ${formatRupiah(saldo)}
┃ *Prefix*   : ${prefix}
╰───✵

${productList}

╭───✵「  CARA ORDER  」✵
┃ 1. Pilih produk dari daftar di atas.
┃ 2. Ketik perintah berikut untuk membeli:
┃    *${prefix}paylist <IDProduk>*
┃    Contoh: *${prefix}paylist ${productsData[0]?.productId || '12345'}*
╰───✵

`;

  await chiwa.sendMessage(m.chat, { text: shopText }, { quoted: m });
  await chiwa.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });
}
break;






case 'userptero':{
  if (!isCreator) return;
  const axios = require('axios');
const fs = require('fs');

  const petik = '```';
  await chiwa.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});


  try {
    const response = await axios.get(`${setting.domain}/api/application/users`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${setting.chiwa_pltc}`
      }
    });

    const users = response.data.data;
    const userButtons = users.map(user => ({
      header: '',
      title: user.attributes.username,
      description: `DELETE ${user.attributes.email}`,
      id: `${prefix}deleteuserptero ${user.attributes.id}`
    }));


    let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `
Kelola User Panel

User:
${users.map(user => `- ${user.attributes.username}`).join('\n')}
              `
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "@akane_chiwa", 
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  "name": "single_select",
                  "buttonParamsJson": JSON.stringify({
                    "title": "Hapus User",
                    "sections": [
                      {
                        "title": "Hapus User",
                        "highlight_label": "Pilih User",
                        "rows": userButtons
                      }
                    ]
                  })
                },
                {
                  "name": "cta_url",
                  "buttonParamsJson": JSON.stringify({
                    "display_text": "Customer Service",
                    "url": `https://wa.me/${cs_number}` 
                  })
                }
              ]
            })
          })
        }
      }
    }, { quoted: m });

    await chiwa.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
    await chiwa.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});

  } catch (error) {
    console.error('Gagal mendapatkan data pengguna:', error);
    await chiwa.sendMessage(m.chat, { text: "Terjadi kesalahan saat mengambil data pengguna.", react: { text: `❌`, key: m.key }});
  }
break;

}
break

case 'serverptero': {
  if (!isCreator) return;
  const axios = require('axios');

  const petik = '```';
  await chiwa.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

  try {
    const response = await axios.get(`${setting.domain}/api/application/servers`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${setting.chiwa_pltc}`
      }
    });

    const servers = response.data.data;
    const deletebutt = servers.map(server => ({
      header: '',
      title: server.attributes.name,
      description: `DELETE ${server.attributes.id}`,
      id: `${prefix}deleteserver ${server.attributes.id}`
    }));
 const unsuspendbutt = servers
  .filter(server => server.attributes.suspended === true)
  .map(server => ({
    header: '',
    title: server.attributes.name,
    description: `UNSUSPEND SERVER ${server.attributes.id}`,
    id: `${prefix}unsuspendserver ${server.attributes.id}`
  }));

const suspendbutt = servers
  .filter(server => server.attributes.suspended === false)
  .map(server => ({
    header: '',
    title: server.attributes.name,
    description: `SUSPEND SERVER ${server.attributes.id}`,
    id: `${prefix}suspendserver ${server.attributes.id}`
  }));


    let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `
Kelola Server Panel

Server yang terdaftar:
${servers.map(server => `- ${server.attributes.name} (ID: ${server.attributes.id}, UUID: ${server.attributes.uuid})\n`).join('\n')}
              `
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "@akane_chiwa",
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  "name": "single_select",
                  "buttonParamsJson": JSON.stringify({
                    "title": "Delete Server",
                    "sections": [
                      {
                        "title": "Server List",
                        "highlight_label": "Delete Server",
                        "rows": deletebutt
                      }
                    ]
                  })
                },                {
                  "name": "single_select",
                  "buttonParamsJson": JSON.stringify({
                    "title": "Suspend Server",
                    "sections": [
                      {
                        "title": "Server List",
                        "highlight_label": "Delete Server",
                        "rows": suspendbutt
                      }
                    ]
                  })
                },                {
                  "name": "single_select",
                  "buttonParamsJson": JSON.stringify({
                    "title": "Unsuspend Server",
                    "sections": [
                      {
                        "title": "Server List",
                        "highlight_label": "Delete Server",
                        "rows": unsuspendbutt
                      }
                    ]
                  })
                },
                {
                  "name": "cta_url",
                  "buttonParamsJson": JSON.stringify({
                    "display_text": "Customer Service",
                    "url": `https://wa.me/${cs_number}`
                  })
                }
              ]
            })
          })
        }
      }
    }, { quoted: m });

    await chiwa.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
    await chiwa.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});

  } catch (error) {
    console.error('Gagal mendapatkan data server:', error);
    await chiwa.sendMessage(m.chat, { text: "Terjadi kesalahan saat mengambil data server.", react: { text: `❌`, key: m.key }});
  }
  break;
}

case 'deleteuserptero': {
  if (!isCreator) return;
  const apikey = setting.chiwa_pltc; 
  const userId = text; 

  axios.delete(`https://panel.chiwa.id/api/application/users/${userId}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apikey}`
    }
  })
  .then(response => {
    newReply(`User dengan ID ${userId} berhasil dihapus.`);
  })
  .catch(error => {

    if (error.response && error.response.data && error.response.data.errors) {
      const errorDetails = error.response.data.errors.map(err => err.detail).join(', ');
      newReply(`Error: ${errorDetails}`);
    } else {
      newReply(`Terjadi kesalahan: ${error.message}`);
    }
  });
}
break;
case 'deleteserver': {
  if (!isCreator) return;
  const apikey = setting.chiwa_pltc; 
  const userId = text; 
  axios.delete(`https://panel.chiwa.id/api/application/servers/${userId}/force`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apikey}`
    }
  })
  .then(response => {
    newReply(`Server dengan ID ${userId} berhasil dihapus.`);
  })
  .catch(error => {
    if (error.response && error.response.data && error.response.data.errors) {
      const errorDetails = error.response.data.errors.map(err => err.detail).join(', ');
      newReply(`Error: ${errorDetails}`);
    } else {
      newReply(`Terjadi kesalahan: ${error.message}`);
    }
  });
}
break;
case 'suspendserver': {
  if (!isCreator) return;
  const suspendServer = async () => {
    const id = text; 
    const apiKey = setting.chiwa_pltc; 
    

    const url = `${setting.domain}/api/application/servers/${id}/suspend`;

    try {

      await axios.post(url, {}, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      });
      
      newReply(`Server ${text} Suspended`);
    } catch (error) {
      console.error("Error suspending server:", error);
    }
  };

  suspendServer();
}
break;

case 'unsuspendserver': {
  if (!isCreator) return;
  const suspendServer = async () => {
    const id = text; 
    const apiKey = setting.chiwa_pltc; 
    
    const url = `${setting.domain}/api/application/servers/${id}/unsuspend`;

    try {
      await axios.post(url, {}, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      });
      
      newReply(`Server ${text} Unsuspended`);
    } catch (error) {
      console.error("Error suspending server:", error);
    }
  };

  suspendServer();
}
break;

case 'buypanel':{
const petik = '```'
await chiwa.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})

let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text:  `
List Spek Server yang Tersedia

- 1 GB RAM  30 % CPU
> 2K

- 2 GB RAM  40 % CPU
> 3K

- 3 GB RAM  50 % CPU
> 4K

- 4 GB RAM  60 % CPU
> 5K

- 5 GB RAM  70 % CPU
> 6K

- 6 GB RAM  80 % CPU
> 7K

- 7 GB RAM  90 % CPU
> 8K

- 8 GB RAM  100 % CPU
> 9K

- 9 GB RAM  110 % CPU
> 10K

- 10 GB RAM 120 % CPU
> 11 K

- UNLIMITED RAM & CPU 
> 15K

Silahkan gunakan tombol dibawah untuk memproses pembelian
`


          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footer,
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
  {
    "name": "single_select",
    "buttonParamsJson": `{
      "title": "List Panel",
      "sections": [
        {
          "title": "List Panel",
          "highlight_label": "Paling Murah",
          "rows": [
            
            {
              "header": "",
              "title": "1GB",
              "id": "${prefix}buypanel-selectpayment 1gb"
            },
            {
              "header": "",
              "title": "2GB",
              "id": "${prefix}buypanel-selectpayment 2gb"
            },
            {
              "header": "",
              "title": "3GB",
              "id": "${prefix}buypanel-selectpayment 3gb"
            },
            {
              "header": "",
              "title": "4GB",
              "id": "${prefix}buypanel-selectpayment 4gb"
            },
            {
              "header": "",
              "title": "5GB",
              "id": "${prefix}buypanel-selectpayment 5gb"
            },
            {
              "header": "",
              "title": "6GB",
              "id": "${prefix}buypanel-selectpayment 6gb"
            },
            {
              "header": "",
              "title": "7GB",
              "id": "${prefix}buypanel-selectpayment 7gb"
            },
            {
              "header": "",
              "title": "8GB",
              "id": "${prefix}buypanel-selectpayment 8gb"
            },
            {
              "header": "",
              "title": "9GB",
              "id": "${prefix}buypanel-selectpayment 9gb"
            },
            {
              "header": "",
              "title": "10GB",
              "id": "${prefix}buypanel-selectpayment 10gb"
            },
            {
              "header": "",
              "title": "UNLIMITED",
              "id": "${prefix}buypanel-selectpayment unli"
            }
       
       
       
       
       
       
       
       
       
            
          ]
        }
      ]
    }`
  },  

              {
  "name": "cta_url",
  "buttonParamsJson": `{\"display_text\":\"Customer Service\",\"url\":\"https://wa.me/${cs_number}\",\"merchant_url\":\"https://chiwa.id\"}`
}

           ],
          })
        })
    }
  }
}, {quoted:m})
await chiwa.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
await chiwa.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
}
break
case 'buypanel-selectpayment':{
  let harga = parseInt(text.replace('gb', '')) * 1000 + 1000;
  // asignmen harga untuk unli
  if (isNaN(harga)) {
    harga = 15000;
  }
    await chiwa.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

  let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `
Silahkan memilih metode pembayaran
            `
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footer, 
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{
                  "title": "Metode Pembayaran",
                  "sections": [
                    {
                      "title": "Metode Pembayaran",
                      "highlight_label": "Paling Ez",
                      "rows": [
                        {
                          "header": "",
                          "title": "QRIS",
                          "id": "${prefix}buypanel-checkout qris|${harga}|${m.sender}"
                        },
                        {
                          "header": "",
                          "title": "DANA",
                          "id": "${prefix}buypanel-checkout dana|${harga}|${m.sender}"
                        },
                        {
                          "header": "",
                          "title": "SHOPEEPAY",
                          "id": "${prefix}buypanel-checkout shopeepay|${harga}|${m.sender}"
                        },
                        {
                          "header": "",
                          "title": "LINKAJA",
                          "id": "${prefix}buypanel-checkout linkaja|${harga}|${m.sender}"
                        }
                      ]
                    }
                  ]
                }`
              },
              {
                "name": "cta_url",
                "buttonParamsJson": `{
                  "display_text": "Customer Service",
                  "url": "https://wa.me/${cs_number}",
                  "merchant_url": "https://chiwa.id"
                }`
              }
            ]
          })
        })
      }
    }
  }, { quoted: m });

  await chiwa.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
  await chiwa.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
}

break;
async function findProductById(productId) {

    const fs = require("fs").promises
    const filePath = path.join(__dirname, './database/products.json');
    
    try {

        const data = await fs.readFile(filePath, 'utf8');
        

        const products = JSON.parse(data).products;
        

        const foundProduct = products.find(product => product.productId === productId);
        

        return foundProduct || null; 
    } catch (err) {
        throw new Error('Error reading file: ' + err);
    }
}

case 'addstock': {
    // Path file JSON
    if (!isCreator) return;
    const productsPath = path.join(__dirname, './database/products.json');
    const stockPath = path.join(__dirname, './database/stock.json');

    // Data dari text (misal "nextflix1|email|password|note")
    const stockEntry = text.trim();

    // Pisahkan berdasarkan tanda "|"
    const stockParts = stockEntry.split('|');
    if (stockParts.length !== 4) {
        return newReply('Format salah! Gunakan format: <ProductID>|<Email>|<Password>|<Note>');
    }

    // Destruktur data
    const [productId, email, password, note] = stockParts;

    // Baca data produk dari products.json
    let productsData;
    try {
        productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
    } catch (err) {
        return newReply('Gagal membaca file products.json!');
    }

    // Periksa apakah productId ada di products.json
    const product = productsData.products.find(p => p.productId === productId);
    if (!product) {
        return newReply(`Produk dengan ID "${productId}" tidak ditemukan!`);
    }

    // Baca file stock.json
    let stockData;
    try {
        stockData = JSON.parse(fs.readFileSync(stockPath, 'utf8'));
    } catch (err) {
        // Jika file belum ada, inisialisasi dengan objek kosong
        stockData = {};
    }

    // Pastikan ada array untuk productId di stockData
    if (!stockData[productId]) {
        stockData[productId] = [];
    }

    // Filter data untuk mendapatkan ID terbesar yang valid
    const currentStock = stockData[productId];
    const validIds = currentStock
        .filter(stock => typeof stock.id === 'number') // Hanya ambil entri dengan ID valid
        .map(stock => stock.id);
    const newId = validIds.length > 0 ? Math.max(...validIds) + 1 : 1;

    // Tambahkan data baru ke array productId
    const newStock = {
        id: newId,
        productName: product.productName,
        email,
        password,
        note,
        timestamp: new Date().toISOString() // Tambahkan timestamp
    };
    stockData[productId].push(newStock);

    // Simpan data ke stock.json
    try {
        fs.writeFileSync(stockPath, JSON.stringify(stockData, null, 2), 'utf8');
        return newReply('Data akun berhasil ditambahkan ke stock.json!');
    } catch (err) {
        return newReply('Gagal menyimpan ke file stock.json!');
    }
}
break;

case 'updatestock': {
    // Path file JSON
    if (!isCreator) return;
    const stockPath = path.join(__dirname, './database/stock.json');

    // Data dari text (misal "nextflix1|1|email_baru|password_baru|note_baru")
    const updateEntry = text.trim();

    // Pisahkan berdasarkan tanda "|"
    const updateParts = updateEntry.split('|');
    if (updateParts.length !== 5) {
        return newReply('Format salah! Gunakan format: <ProductID>|<StockID>|<EmailBaru>|<PasswordBaru>|<NoteBaru>');
    }

    // Destruktur data
    const [productId, stockIdStr, newEmail, newPassword, newNote] = updateParts;
    const stockId = parseInt(stockIdStr, 10);

    if (isNaN(stockId)) {
        return newReply('Stock ID harus berupa angka!');
    }

    // Baca file stock.json
    let stockData;
    try {
        stockData = JSON.parse(fs.readFileSync(stockPath, 'utf8'));
    } catch (err) {
        return newReply('Gagal membaca file stock.json!');
    }

    // Periksa apakah productId ada di stockData
    if (!stockData[productId]) {
        return newReply(`Produk dengan ID "${productId}" tidak ditemukan di stok!`);
    }

    // Cari stok berdasarkan ID
    const productStock = stockData[productId];
    const stockIndex = productStock.findIndex(stock => stock.id === stockId);

    if (stockIndex === -1) {
        return newReply(`Stok dengan ID "${stockId}" tidak ditemukan untuk produk "${productId}"!`);
    }

    // Update data stok
    productStock[stockIndex] = {
        ...productStock[stockIndex], // Pertahankan data lama
        email: newEmail,             // Update email
        password: newPassword,       // Update password
        note: newNote,               // Update note
        timestamp: new Date().toISOString() // Perbarui timestamp
    };

    // Simpan perubahan ke file stock.json
    try {
        fs.writeFileSync(stockPath, JSON.stringify(stockData, null, 2), 'utf8');
        return newReply(`Stok dengan ID "${stockId}" untuk produk "${productId}" berhasil diperbarui!`);
    } catch (err) {
        return newReply('Gagal menyimpan perubahan ke file stock.json!');
    }
}
break;

case 'showstock': {
    // Path file JSON
    if (!isCreator) return;
    const stockPath = path.join(__dirname, './database/stock.json');
    if (m.isGroup) return newReply('Demi keamaanan,fitur ini hanya dapat digunakan di private chat.')
    // Data dari text (misal "nextflix1|2" atau hanya "nextflix1")
    const showEntry = text.trim();
    const [productId, stockIdStr] = showEntry.split('|');
    const stockId = stockIdStr ? parseInt(stockIdStr, 10) : null;

    // Baca file stock.json
    let stockData;
    try {
        stockData = JSON.parse(fs.readFileSync(stockPath, 'utf8'));
    } catch (err) {
        return newReply('Gagal membaca file stock.json!');
    }

    // Periksa apakah productId ada di stockData
    if (!stockData[productId]) {
        return newReply(`Produk dengan ID "${productId}" tidak ditemukan di stok!`);
    }

    // Ambil stok berdasarkan productId
    const productStock = stockData[productId];

    // Jika stockId diberikan, cari stok dengan ID tersebut
    if (stockId !== null) {
        const stock = productStock.find(s => s.id === stockId);
        if (!stock) {
            return newReply(`Stok dengan ID "${stockId}" tidak ditemukan untuk produk "${productId}"!`);
        }
        return newReply(`Detail stok:\n${JSON.stringify(stock, null, 2)}`);
    }

    // Jika stockId tidak diberikan, tampilkan semua stok untuk produk tersebut
    return newReply(`Stok untuk produk "${productId}":\n${JSON.stringify(productStock, null, 2)}`);
}
break;

case 'delstock': {
    // Path file JSON
    if (!isCreator) return;
    const stockPath = path.join(__dirname, './database/stock.json');

    // Data dari text (misal "nextflix1|2")
    const deleteEntry = text.trim();
    const [productId, stockIdStr] = deleteEntry.split('|');
    const stockId = parseInt(stockIdStr, 10);

    if (!productId || isNaN(stockId)) {
        return newReply('Format salah! Gunakan format: <ProductID>|<StockID>');
    }

    // Baca file stock.json
    let stockData;
    try {
        stockData = JSON.parse(fs.readFileSync(stockPath, 'utf8'));
    } catch (err) {
        return newReply('Gagal membaca file stock.json!');
    }

    // Periksa apakah productId ada di stockData
    if (!stockData[productId]) {
        return newReply(`Produk dengan ID "${productId}" tidak ditemukan di stok!`);
    }

    // Cari stok berdasarkan stockId dan hapus
    const productStock = stockData[productId];
    const stockIndex = productStock.findIndex(s => s.id === stockId);

    if (stockIndex === -1) {
        return newReply(`Stok dengan ID "${stockId}" tidak ditemukan untuk produk "${productId}"!`);
    }

    // Hapus stok
    productStock.splice(stockIndex, 1);

    // Simpan perubahan ke file stock.json
    try {
        fs.writeFileSync(stockPath, JSON.stringify(stockData, null, 2), 'utf8');
        return newReply(`Stok dengan ID "${stockId}" untuk produk "${productId}" berhasil dihapus!`);
    } catch (err) {
        return newReply('Gagal menyimpan perubahan ke file stock.json!');
    }
}
break;



case 'addsaldo': {
  if (!isCreator) return;
    const fs = require('fs');
    const path = './database/saldo.json';

    // Fungsi untuk membaca file saldo
    const readSaldoDB = () => {
        if (!fs.existsSync(path)) {
            fs.writeFileSync(path, JSON.stringify({}), 'utf-8'); // Membuat file jika belum ada
        }
        return JSON.parse(fs.readFileSync(path, 'utf-8'));
    };

    // Fungsi untuk menulis ke file saldo
    const writeSaldoDB = (data) => {
        fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf-8');
    };

    // Ambil teks setelah 'addsaldo'
    const args = text; // Asumsikan teks sudah didefinisikan sebelumnya
    if (!args || !args.includes('|')) {
        return newReply(`Format salah. Gunakan: addsaldo userId|nominal`);
    }

    // Pisahkan userId dan nominal
    const [userId, nominal] = args.split('|');
    if (!userId || isNaN(nominal)) {
        return newReply('Format salah. Pastikan userId valid dan nominal adalah angka.');
    }

    // Baca database saldo
    const saldoDB = readSaldoDB();

    // Tambahkan saldo ke user
    const userKey = userId + "@s.whatsapp.net"; // Pastikan key konsisten
    const userSaldo = saldoDB[userKey] || 0;
    saldoDB[userKey] = userSaldo + Number(nominal);

    // Simpan ke database
    writeSaldoDB(saldoDB);

    // Balasan
    return newReply(`Saldo untuk User ID ${userId} berhasil ditambahkan sebesar ${nominal}. Total saldo: ${saldoDB[userKey]}`);
}
break;

case 'minsaldo': {
    if (!isCreator) return;
    const fs = require('fs');
    const path = './database/saldo.json';

    // Fungsi untuk membaca file saldo
    const readSaldoDB = () => {
        if (!fs.existsSync(path)) {
            fs.writeFileSync(path, JSON.stringify({}), 'utf-8'); // Membuat file jika belum ada
        }
        return JSON.parse(fs.readFileSync(path, 'utf-8'));
    };

    // Fungsi untuk menulis ke file saldo
    const writeSaldoDB = (data) => {
        fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf-8');
    };

    // Ambil teks setelah 'minsaldo'
    const args = text; // Asumsikan teks sudah didefinisikan sebelumnya
    if (!args || !args.includes('|')) {
        return newReply(`Format salah. Gunakan: minsaldo userId|nominal`);
    }

    // Pisahkan userId dan nominal
    const [userId, nominal] = args.split('|');
    if (!userId || isNaN(nominal)) {
        return newReply('Format salah. Pastikan userId valid dan nominal adalah angka.');
    }

    // Baca database saldo
    const saldoDB = readSaldoDB();

    // Kurangi saldo user
    const userKey = userId + "@s.whatsapp.net"; // Pastikan key konsisten
    const userSaldo = saldoDB[userKey] || 0;
    const newSaldo = userSaldo - Number(nominal);

    if (newSaldo < 0) {
        return newReply(`Gagal mengurangi saldo. Saldo untuk User ID ${userId} tidak mencukupi.`);
    }

    saldoDB[userKey] = newSaldo;

    // Simpan ke database
    writeSaldoDB(saldoDB);

    // Balasan
    return newReply(`Saldo untuk User ID ${userId} berhasil dikurangi sebesar ${nominal}. 
Total saldo: ${saldoDB[userKey]}`);
}
break;


case 'paylist': {
  if (!text) return newReply(`
Gunakan dengan cara:

${prefix + command} IDPRODUK
`);

  try {
    const pfound = await findProductById(text);
    let harga = parseInt(pfound.harga);
    let productId = pfound.productId;
    await chiwa.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key } });

    let paymentMethods = `
🎀 𝙷𝚎𝚕𝚕𝚘, *Anda sedang membeli produk ${pfound.productName}* 🎀

╭───✵「 𝙼𝙴𝚃𝙾𝙳𝙴 𝙿𝙴𝙼𝙱𝙰𝗬𝙰𝗥𝗔𝗡 」✵
┃ 1. *QRIS* - ${formatRupiah(harga)}
┃ 2. *DANA* - ${formatRupiah(harga)}
┃ 3. *SHOPEEPAY* - ${formatRupiah(harga)}
┃ 4. *LINKAJA* - ${formatRupiah(harga)}
┃ 5. *SALDO USER* - ${formatRupiah(harga)}
╰───✵

✩ Untuk melanjutkan pembelian, pilih metode pembayaran dan ketik perintah berikut:

- *${prefix}co qris|${productId}*
- *${prefix}co dana|${productId}*
- *${prefix}co shopeepay|${productId}*
- *${prefix}co linkaja|${productId}*
- *${prefix}co saldo|${productId}*
╭───✵「 𝗖𝗨𝗦𝗧𝗢𝗠𝗘𝗥 𝗦𝗘𝗥𝗩𝗜𝗖𝗘 」✵
┃ Jika ada pertanyaan, hubungi:
┃ 💬 https://wa.me/${cs_number}
╰───✵
`;

    await chiwa.sendMessage(m.chat, { text: paymentMethods }, { quoted: m });
    await chiwa.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });
  } catch (error) {
    newReply('Produk Tidak Ditemukan.')
  }
}
break;

function generatePanelRefId(spek) {
  return "PANEL" + spek.toUpperCase() + crypto.randomBytes(4).toString('hex');
}
async function saveTransaction(response, senderId) {
    const fs = require("fs").promises
    let m = { sender: senderId }; 
    let url = response.data.data.qr_string || response.data.data.url;
    let nominal = response.data.data.nominal;
    let trxid = response.data.data.id;
    let base_jid = response.data.data.base_jid;
    let msg_id = response.data.data.msg_id;
    let jumlah = response.data.data.jumlah;
    let refid = response.data.data.reff_id;
    let status = response.data.data.status;
 let productId = response.data.data.productId;
    let newTransaction = {
        trxid,
        refid,
        jumlah,
        url,
        nominal,
        status,
        msg_id,
        base_jid,
        productId
    };

    try {
        let data = await fs.readFile('./database/trx.json', 'utf8').catch(err => {
            if (err.code === 'ENOENT') return '{}'; 
            throw err;
        });

        let transactions = JSON.parse(data);

        if (transactions[m.sender]) {
            transactions[m.sender].push(newTransaction);
        } else {
            transactions[m.sender] = [newTransaction];
        }

        await fs.writeFile('./database/trx.json', JSON.stringify(transactions, null, 2), 'utf8');
        

    } catch (err) {
    }
}



/*
let response = {
    data: {
        data: {
            qr_string: 'example-string',
            nominal: 10000,
            id: 'trx123',
            reff_id: 'ref456',
            status: 'pending'
        }
    }
};

// example menyimpan ke datavase
saveTransaction(response, senderId);
**/
break
case 'buypanel-checkout':{
  try{
    // "${prefix}buypanel-checkout shopeepay|${harga}|${m.sender}"
const methode = text.split('|')[0] ? text.split('|')[0] : '-'
const harga = text.split('|')[1] ? text.split('|')[1] : '-'
const userreq = text.split('|')[2] ? text.split('|')[2] : '-'
const ref = generatePanelRefId(text.split('|')[1] ? text.split('|')[1] : '-')

if (userreq !== m.sender) return newReply('User Validation is Required\n\nUse the Button Menu Plewse :3')
/** 
* 
* QRIS RESPON
{
  "status": true,
  "data": {
    "id": "hiKhiMHoO8CX8pFqoaJa",
    "reff_id": "its-tester-chiwa7",
    "nominal": 10000,
    "tambahan": 0,
    "fee": 70,
    "get_balance": 9930,
    "qr_string": "00020101021226610016ID.CO.SHOPEE.WWW01189360091800209988050208209988050303UME51440014ID.CO.QRIS.WWW0215ID20232405136140303UME520453995303360540810000.005802ID5905MITRA6012KOTA BANDUNG61054061462220518pay_nzSlfOrirM28466304F2DC",
    "qr_image": "https://atlantich2h.com/qr/hiKhiMHoO8CX8pFqoaJa",
    "status": "pending",
    "created_at": "2024-10-23 22:12:20",
    "expired_at": "2024-10-23 23:12:19"
  },
  "code": 200
}
*/
 await newReply('memproses pembayaran')
if (methode === 'qris') {
  let response = await axios.post('https://atlantich2h.com/deposit/create', 
  qs.stringify({
    api_key: setting.pg_apikey,
    reff_id: ref,
    type: "ewallet",
    metode: methode,
    nominal: harga
  }),
  {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
);
  let fotoqris = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${response.data.data.qr_string}`
  let nominal = response.data.data.nominal
  let trxid = response.data.data.id
  let refid = response.data.data.reff_id
  let status = response.data.data.status
  response.data.data.productId = "PANEL" + harga.replace("0", "") + "GB"
  let capt = `
TRANSAKSI ${status.toUpperCase()}
  
Silahkan Scan QRIS diatas untuk menyelesaikan transaksi
  
Nominal: ${nominal}
TRX ID : ${trxid}
ReffID : ${refid}
  `
  await saveTransaction(response, m.sender);
  await newReply(JSON.stringify(response.data, null, 2))
  await chiwa.sendMessage(m.chat, { image: {url: fotoqris}, caption: capt})
} else {
  /**
  {
  "status": true,
  "data": {
    "id": "OlkqFSYlK4bJfa37HD5m",
    "reff_id": "its-tester-chiwa9",
    "nominal": 10000,
    "tambahan": 0,
    "fee": 150,
    "get_balance": 9850,
    "url": "url",
    "status": "pending",
    "created_at": "2024-10-24 04:42:51",
    "expired_at": "2024-10-24 07:42:50"
  },
  "code": 200
}
   */
    let response = await axios.post('https://atlantich2h.com/deposit/create', 
  qs.stringify({
    api_key: setting.pg_apikey,
    reff_id: ref,
    type: "ewallet",
    metode: methode,
    nominal: harga
  }),
  {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
);
let nominal = response.data.data.nominal
let reff_id = response.data.data.reff_id
let status = response.data.data.status
let idtrx = response.data.data.id
let paylink = response.data.data.url
  response.data.data.productId = "PANEL" + harga.replace("0", "") + "GB"
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `
TRANSAKSI ${status.toUpperCase()}
  
Silahkan KLIK TOMBOL DIBAWAH untuk menyelesaikan transaksi
  
Nominal: ${nominal}
TRX ID : ${idtrx}
ReffID : ${reff_id}
Metode : ${methode.toUpperCase()}
            `
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footer, 
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "cta_url",
                "buttonParamsJson": `{
                  "display_text": "LINK PEMBAYARAN",
                  "url": "${paylink}",
                  "merchant_url": "https://chiwa.id"
                }`
              }
            ]
          })
        })
      }
    }
  }, { quoted: m });
await saveTransaction(response, m.sender);
  await chiwa.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
}
  } catch(error){
    return newReply('Payment Method Tidak ditemukan,gunakan tombol untuk mempermudah proses' + "debug" + error)
  }
  break;
}

case 'addowner':{
if (!isCreator) return newReply(mess.OnlyOwner)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *@tag*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
ownerNumber.push(users)
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
newReply(`Sukses`)
} else {
newReply(`Gunakan dengan cara ${prefix + command} *@tag*`)
}}
break
// "${prefix}buypanel-checkout shopeepay|${harga}|${productId}|${m.sender}"
case'welcome':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (args[0] === "on") {
if (isWelcome) return newReply(`Udah on`)
_welcome.push(m.chat)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
newReply('Sukses mengaktifkan welcome di grup ini')
} else if (args[0] === "off") {
if (!isWelcome) return newReply(`Udah off`)
let anu = _welcome.indexOf(m.chat)
_welcome.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
newReply('Sukses menonaktifkan welcome di grup ini')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}
break
case'setwelcome':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks_welcome*\n\n_Contoh_\n\n${prefix+command} Halo @user, Selamat datang di @group`)
if (isSetWelcome(m.chat, set_welcome_db)) return newReply(`Set welcome already active`)
addSetWelcome(text, m.chat, set_welcome_db)
newReply(`Successfully set welcome!`)
break
case'changewelcome':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks_welcome*\n\n_Contoh_\n\n${prefix+command} Halo @user, Selamat datang di @group`)
if (isSetWelcome(m.chat, set_welcome_db)) {
changeSetWelcome(q, m.chat, set_welcome_db)
newReply(`Sukses change set welcome teks!`)
} else {
//ntCmd('#changewelcome', m.sender, _cmd)
addSetWelcome(q, m.chat, set_welcome_db)
newReply(`Sukses change set welcome teks!`)
}
break
case'delsetwelcome':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus owner!')
if (!isSetWelcome(m.chat, set_welcome_db)) return newReply(`Belum ada set welcome di sini..`)
removeSetWelcome(m.chat, set_welcome_db)
newReply(`Sukses delete set welcome`)
break
case 'test-m': {
  const chatId = m.key.remoteJid; // ID chat pengguna
  const botMessageContent = 'Replying using chiwa.';

  chiwa.sendMessage(chatId, { text: botMessageContent })
    .then(botMessage => {
      // botMessage berisi detail pesan yang dikirim oleh bot
      console.log('Pesan bot:', JSON.stringify(botMessage, null, 2));

      // Jika Anda ingin memberikan informasi tentang pesan bot ke pengguna
      chiwa.sendMessage(chatId, {
        text: 'Debug msg from bot:\n' + JSON.stringify(botMessage, null, 2)
      });
    })
    .catch(err => {
      console.error('Gagal mengirim pesan:', err);
    });
  break;
}

case 'co': {
    try {
        const fs = require('fs');
        const pathSaldo = './database/saldo.json';
        const pathStock = './database/stock.json';

        // Fungsi untuk membaca saldo
        const readSaldoDB = () => {
            if (!fs.existsSync(pathSaldo)) {
                fs.writeFileSync(pathSaldo, JSON.stringify({}), 'utf-8');
            }
            return JSON.parse(fs.readFileSync(pathSaldo, 'utf-8'));
        };

        // Fungsi untuk menulis saldo
        const writeSaldoDB = (data) => {
            fs.writeFileSync(pathSaldo, JSON.stringify(data, null, 2), 'utf-8');
        };

        // Fungsi untuk membaca stok
        const readStockDB = () => {
            if (!fs.existsSync(pathStock)) {
                fs.writeFileSync(pathStock, JSON.stringify({}), 'utf-8');
            }
            return JSON.parse(fs.readFileSync(pathStock, 'utf-8'));
        };

        // Fungsi untuk mengurangi stok
const validateStock = (productName, jumlah) => {
    const stockDB = readStockDB();
    const productKey = Object.keys(stockDB).find(
        key => stockDB[key][0]?.productName === productName
    );

    // Validasi stok
    if (productKey && stockDB[productKey]?.length >= jumlah) {
        return true; // Stok mencukupi
    }
    return false; // Stok tidak mencukupi
};

        const saldoDB = readSaldoDB();

        // Parsing input
        const [methode, pidd, jumlahStr] = text.split('|');
        const jumlah = parseInt(jumlahStr) || 1; // Default jumlah adalah 1 jika tidak diberikan

        if (!methode || !pidd) {
            return newReply(`Format salah. Gunakan: metode|idproduk|jumlah`);
        }

        // Cek produk
        const pfound = await findProductById(pidd);
        if (!pfound) {
            return newReply(`Produk dengan ID ${pidd} tidak ditemukan.`);
        }
        const { harga, productName } = pfound;
        const totalHarga = harga * jumlah; // Hitung total harga berdasarkan jumlah
        const ref = await generateProductReff(pidd);
        const userKey = m.sender;

        // Cek stok sebelum melanjutkan
        if (!validateStock(productName, jumlah)) {
            return newReply(`Maaf, stok untuk produk "${productName}" tidak tersedia sesuai permintaan Anda.`);
        }

        if (methode.toLowerCase() === 'saldo') {
            // Proses saldo
            const userSaldo = saldoDB[userKey] || 0;

            if (userSaldo >= totalHarga) {
                // Kurangi saldo
                saldoDB[userKey] = userSaldo - totalHarga;
                writeSaldoDB(saldoDB);

                // Simpan transaksi sebagai sukses
                const transactionData = {
                    data: {
                        data: {
                            id: `local-${Date.now()}`,
                            reff_id: ref,
                            url: null,
                            nominal: totalHarga,
                            jumlah: jumlah,
                            status: "success",
                            productId: pidd,
                        },
                    },
                };
let chiii = await chiwa.sendMessage(m.chat, {text: `╭─✧✨「 STATUS TRANSAKSI 」✨✧─╮
┃  
┃ ✅ *TRANSAKSI BERHASIL!*  
┃ 💳 *Sebanyak ${formatRupiah(totalHarga)}*
┃     Telah dipotong dari saldo Anda
┃ ⭐ *Sisa Saldo:* ${saldoDB[userKey]}
┃  
╰─✧✨━━━━━━━━━━━━━━━✨✧─╯
`})
transactionData.data.data.msg_id = chiii.key.id
transactionData.data.data.base_jid = chiii.key.remoteJid
                await saveTransaction(transactionData, m.sender);

                // Kembalikan pesan sukses
                return newReply(`
🎉 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗯𝗲𝗿𝗹𝗮𝗻𝗴𝘀𝘂𝗻𝗴! 🎉

╭───✵「 𝗗𝗘𝗧𝗔𝗜𝗟 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 」✵
┃ *Nominal:* ${formatRupiah(totalHarga)}
┃ *ReffID:* ${ref}
┃ *Jumlah:* ${jumlah}
┃ *Sisa Saldo:* ${saldoDB[userKey]}
╰───✵

💸 Terima kasih,akun akan dikirimkan beberapa saat lagi! 💖
`);
;
            } else {
                // Saldo tidak cukup
                return newReply(`
😢 𝗦𝗮𝗹𝗱𝗼 𝗧𝗶𝗱𝗮𝗸 𝗠𝗲𝗻𝗰𝘂𝗸𝘂𝗽𝗶 😢

╭───✵「 𝗜𝗡𝗙𝗢 𝗦𝗔𝗟𝗗𝗢 」✵
┃ *Saldo Anda:* ${userSaldo}
┃ *Harga Produk:* ${totalHarga}
╰───✵

💬 Pastikan saldo Anda mencukupi untuk melanjutkan transaksi.
`);

            }
        }

        // Jika metode bukan saldo, proses ke payment gateway
        await newReply('Memproses pembayaran...');
        const apiUrl = 'https://atlantich2h.com/deposit/create';
        const paymentPayload = qs.stringify({
            api_key: setting.pg_apikey,
            reff_id: ref,
            type: "ewallet",
            metode: methode,
            nominal: totalHarga,
        });

        const response = await axios.post(apiUrl, paymentPayload, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        const { data } = response.data;
        const { status, nominal, reff_id, id, url, qr_string } = data;

        data.productId = pidd;
        data.jumlah = jumlah;

        if (methode.toLowerCase() === 'qris') {
            const fotoqris = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${qr_string}`;
            const capt = `
🎉 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 ${status.toUpperCase()} 🎉

╭───✵「 𝗤𝗥𝗜𝗦 」✵
┃ *Silahkan Scan QRIS di atas untuk menyelesaikan transaksi*
╰───✵

╭───✵「 𝗗𝗘𝗧𝗔𝗜𝗟 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 」✵
┃ *Nominal:* ${nominal}
┃ *TRX ID:* ${id}
┃ *ReffID:* ${reff_id}
┃ *Jumlah:* ${jumlah}
╰───✵

💸 Terima kasih sudah bertransaksi dengan kami! 💖
`;

let anu = await chiwa.sendMessage(m.chat, { image: { url: fotoqris }, caption: capt });
response.data.data.msg_id = anu.key.id
response.data.data.base_jid = anu.key.remoteJid;
            await saveTransaction(response, m.sender);
            
        } else {
 const capt = `
💳 𝗘𝗪𝗔𝗟𝗟𝗘𝗧 - ${status.toUpperCase()} 💳

╭───✵「 𝗟𝗜𝗡𝗞 」✵
┃ *Silahkan KLIK LINK DI ATAS untuk menyelesaikan transaksi*
╰───✵

╭───✵「 𝗗𝗘𝗧𝗔𝗜𝗟 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 」✵
┃ *Nominal:* ${nominal}
┃ *TRX ID:* ${id}
┃ *ReffID:* ${reff_id}
┃ *Jumlah:* ${jumlah}
┃ *Metode:* ${methode.toUpperCase()}
╰───✵

💸 Terima kasih sudah bertransaksi melalui eWallet! 💖
`;


            
         let anu = await newReply2(capt, url, "KLIK INI UNTUK MEMBAYAR");
            response.data.data.msg_id = anu.key.id
            response.data.data.base_jid = anu.key.remoteJid;
            await saveTransaction(response, m.sender);
        }
    } catch (error) {
        console.error(error);
        return newReply('Metode Pembayaran Tidak Valid');
    }
    break;
}




// break
// =========== STAGING CAI =============== \\
default:
}

} catch (err) {
//console.log(err)
m.reply(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

let filed = require.resolve('./config.json');

fs.watchFile(filed, () => {
    fs.unwatchFile(filed); 
    console.log(chalk.redBright(`Update ${filed}`));

    delete require.cache[filed]; 
    require(filed); 
});
// Ini base SC nya junaa yah,aku sangat menghargai creator script,jadi aku sangat berterima kasih kepada abang junaa >.<
// Makasih yaww,thx to Aifaiz for comtting to this project