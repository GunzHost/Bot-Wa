//SCRIPT NESTRIZA 2.0
//CREATOR : ERIZA 
//JANGAN UBAH BAGIAN INI !!
module.exports = async (Manz, m, store) => {
try {
const from = m.key.remoteJid
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@adiwajshing/baileys')

const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await Manz.decodeJid(Manz.user.id)
const sender = m.key.fromMe ? (Manz.user.id.split(':')[0]+'@s.whatsapp.net' || Manz.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await Manz.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const { Client } = require('ssh2');
const { addSaldo, minSaldo, cekSaldo } = require("./all/database/deposit");
const { mediafireDl } = require('./all/database/mediafire.js') 

let db_saldo = JSON.parse(fs.readFileSync("./all/database/saldo.json"));

// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return Manz.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ MESSAGE ]`, `${randomcolor}`), color(`FROM`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(`Text :`, `${randomcolor}`), color(`${body}`, `white`))
}

        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }

// Database
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot
//Qchanel
const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363271761490398@newsletter`,
newsletterName: `Made With Eriza`,
jpegThumbnail: "",
caption: `Powered By ErizaXpz`,
inviteExpiration: Date.now() + 1814400000
}
}}
// Jangan Di Edit Tar Error
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await Manz.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await Manz.getName(i + '@s.whatsapp.net')}\n
FN:${await Manz.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:Manz@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://chat.whatsapp.com/Bn3tcvTGopCHirKLd2Us9z
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
 
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await Manz.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)

// Cuma Fake
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
Manz.relayMessage(jid, order.message, { messageId: order.key.id})
}

// Function Reply
const reply = (teks) => { 
Manz.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Est Eriza", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://telegra.ph/file/f2c25fd18ec9c26a6d744.jpg", 
"sourceUrl": "https://www.youtube.com/@erizachannel" }}}, { quoted: m }) }

// fake quoted bug
const lep = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
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

const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `- Eriza Xpz`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://btch.pages.dev/file/e43041eee014dce7f4b90.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
    
if (m.isGroup && !m.key.fromMe && !isOwner && antilink) {
if (!isBotAdmins) return
if (budy.match(`whatsapp.com`)) {
Manz.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
Manz.groupParticipantsUpdate(m.chat, [sender], 'remove')
Manz.sendMessage(m.chat, { delete: m.key })
}
}
switch (command) {
case 'menu':
case 'start':
case 'allmenu':{
const version = require("baileys/package.json").version
let wek = ` ⌌ ━━━ *Bot Info* ━━━━──>
│-⨳ ɴᴀᴍᴀ ʙᴏᴛ : ${namabot}
│-⨳ ʙᴏᴛ ᴍᴏᴅᴇ : *${Manz.public ? 'Public': `Self`}*
│-⨳ ᴠᴇʀsɪ sᴄʀɪᴘᴛ : ${global.versisc}
│-⨳ ᴠᴇʀsɪ ʙᴀɪʟᴇʏs : ^${version}
│-⨳ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime()) }
 ⌎ ━━━━━━━━━━━━━──>
┏───≻ *Push Menu*
│ ${global.simbol} ${prefix}panduan
│ ${global.simbol} ${prefix}pushkontak *text|jeda*
│ ${global.simbol} ${prefix}pushkontak2 *idgrup|text|jeda*
│ ${global.simbol} ${prefix}payment
│ ${global.simbol} ${prefix}savekontak *idgrup*
│ ${global.simbol} ${prefix}broadcast *text*
│ ${global.simbol} ${prefix}jpm *text*
│ ${global.simbol} ${prefix}jpmtag *text*
│ ${global.simbol} ${prefix}save *nama*
│ ${global.simbol} ${prefix}listgc
│ ${global.simbol} ${prefix}idgc
┗───────────────━━━≻
┏───≻ *Self/Public*
│ ${global.simbol} ${prefix}public
│ ${global.simbol} ${prefix}self
┗───────────────━━━≻
┏───≻ *Panel Menu* 
│ ${global.simbol} ${prefix}addpanel *user,ram,disk,cpu*
│ ${global.simbol} ${prefix}listsrv *halaman*
│ ${global.simbol} ${prefix}listusr *halaman*
│ ${global.simbol} ${prefix}delsrv *id server*
│ ${global.simbol} ${prefix}delusr *id user*
│ ${global.simbol} ${prefix}addseller *628xxx*
│ ${global.simbol} ${prefix}delseller *628xxx*
┗───────────────━━━≻
┏───≻ *Group Menu*
│ ${global.simbol} ${prefix}group *open*
│ ${global.simbol} ${prefix}group *close*
│ ${global.simbol} ${prefix}promote *Number/Tag*
│ ${global.simbol} ${prefix}demote *Number/Tag*
│ ${global.simbol} ${prefix}add *Number*
│ ${global.simbol} ${prefix}kick *Number/Tag*
│ ${global.simbol} ${prefix}hidetag *text*
│ ${global.simbol} ${prefix}tagall
│ ${global.simbol} ${prefix}listonline
│ ${global.simbol} ${prefix}creategc *GroupName*
│ ${global.simbol} ${prefix}setppgroup *image/reply img*
│ ${global.simbol} ${prefix}delppgroup
│ ${global.simbol} ${prefix}setsubject *GroupSubject*
│ ${global.simbol} ${prefix}linkgroup
┗───────────────━━━≻\n`
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender]
 
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: wek
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: '© 𝕰𝖗𝖎𝖟𝖆 𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖒𝖊𝖓𝖙'
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `ʜᴀʟᴏ ᴋᴀᴋ ${m.sender.split("@")[0]} ✨
sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴘᴜsʜ ᴋᴏɴᴛᴀᴋ ʏɢ ᴅɪ ᴘʀᴏɢʀᴀᴍ ᴏʟᴇʜ ᴋᴀᴋ *ᴄʏᴀᴀ ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ* ᴜɴᴛᴜᴋ ᴋᴇᴘᴇʀʟᴜᴀɴ ᴊᴜᴀʟ ʙᴇʟɪ ᴅɪɢɪᴛᴀʟ, ᴍᴏʜᴏɴ ᴊᴀɴɢᴀɴ sᴘᴀᴍ ᴅᴀɴ ʟᴀᴘᴏʀ ᴀᴘᴀʙɪʟᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴋᴇsᴀʟᴀʜᴀɴ, ᴛᴇʀɪᴍᴀᴋᴀsɪʜ.\n`,
 subtitle: "Made With Eriza",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: `${global.imageurl}`} }, { upload: Manz.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [
{
"name": "quick_reply",
"buttonParamsJson": `{"display_text":"Sewa Bot","id":"${prefix}sewabotpush"}`
},
{
"name": "quick_reply",
"buttonParamsJson": `{"display_text":"Developer Script","id":"${prefix}dev"}`
},
{
"name": "cta_url",
"buttonParamsJson":
    `{\"display_text\":\"Saluran WhatsApp\",\"url\":\"${global.chsaluran}\",\"merchant_url\":\"${global.chsaluran}\"}`
},
{

"name": "cta_url",

"buttonParamsJson": `{\"display_text\":\"Script Bot\",\"url\":\"https://telegra.ph/file/5a55b506925aa43f30bdc.jpg\",\"merchant_url\":\"https://telegra.ph/file/5a55b506925aa43f30bdc.jpg\"}`

 }
 ],
 })
 })
 }
 }
}, {})

await Manz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
}, { quoted: fkontak })}
break
case 'panduan': {

const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `${global.teksmenu}`
           Manz.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: global.imageurl,
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fkontak
                    })
     await Manz.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
break
case 'grup':
case 'group': {   
if (!m.isGroup) return reply('Fitur Khusus Grup !')
if (!isAdmins) return reply('Ngapain? Fitur Khusus Admin !')
if (args[0] === 'close'){
await Manz.groupSettingUpdate(from, 'announcement').then((res) => reply(`Sukses Menutup Group 🫡`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await Manz.groupSettingUpdate(from, 'not_announcement').then((res) => reply(`Sukses Membuka Group 🫡`)).catch((err) => reply(jsonformat(err)))
} else {
Manz.sendMessage(m.chat, { image: ppuser, caption: `⚠️ *Silahkan Ketik*
${prefix+command} open
${prefix+command} close`}, {quoted:m}) 
 }
}
break
case 'promote': {
if (!m.isGroup) return reply('Fitur Khusus Dalam Grup')
if (!isBotAdmins) return reply('Waduh Kak... Bot bukan Admin')
if (!isAdmins) return reply('Ngapain? Fitur Khusus Admin !')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Manz.groupParticipantsUpdate(from, [users], 'promote')
m.reply('Sukses Promote Target')
}
break

case 'demote': {
if (!m.isGroup) return reply('Fitur Khusus Dalam Grup')
if (!isBotAdmins) return reply('Waduh Kak.... Bot bukan Admin')
if (!isAdmins) return reply('Ngapain? Fitur Khusus Admin !')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Manz.groupParticipantsUpdate(from, [users], 'demote')
m.reply('Sukses Demote Target')
}
break
case 'tagall': {
if (!m.isGroup) return reply('Khusus Dalam Grup !')
if (!isAdmins) return reply('Ngapain? Fitur Khusus Admin !')
let teks = `> *Tag All*
🎓 *Message : ${q ? q : 'Kosong'}*\n\n`
for (let mem of participants) {
teks += `⩥ @${mem.id.split('@')[0]}\n`
}
Manz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break
case 'add': {
if (!isOwner) return reply(mess.only.owner)
if (!m.isGroup) return reply('Fitur Khusus Grup !')
if (!isBotAdmins) return reply('Waduh Kak.. Bot bukan Admin')
if (!isAdmins) return reply('Ngapain? Fitur Khusus Admin !')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Manz.groupParticipantsUpdate(from, [users], 'add')
await reply('Welcome New Memb 😈🗿')
}
break
case 'kick': {
if (!m.isGroup) return m.reply(`Khusus grup`)
if (!isAdmins && !isOwner) return m.reply(`Khusus Admin`)
if (!isBotAdmins) return reply(`Bot harus menjadi admin`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Manz.groupParticipantsUpdate(m.chat, [users], 'remove')
await reply(`Done`)
}
break
case 'listonline':
            case 'liston':
        case 'daftaronline': {
            if (!isAdmins) return reply('Ngapain? Fitur Ini khusus Admin !')
                if (!m.isGroup) reply(`Fitur Khusus Dalam Grup`)
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                Manz.sendText(m.chat, '⏰ Daftar Member Online:\n\n' + online.map(v => '🝔 @' + v.replace(/@.+/, '')).join`\n`, m, {
                    mentions: online
                })
            }
            break
        case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
                if (!m.isGroup) return m.reply(`Khusus Grup`)
                if (!isBotAdmins) return m.reply(`Bot harus menjadi admin`)
                let response = await Manz.groupInviteCode(m.chat)
                Manz.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
        case 'setgroupname': case 'setsubject': {
                if (!m.isGroup) return reply(`Khusus Grup`)
                if (!isBotAdmins) return reply(`bot harus menjadi admin`)
                if (!isAdmins) return reply(`khusus admin`)
                if (!text) return reply('Subject ?')
                await Manz.groupUpdateSubject(m.chat, text)
                await reply(`Done`)
            }
            break
        case 'setppgroup': case 'setppgc': case 'setgrouppp': {
if (!m.isGroup) return reply(`Khusus Grup`)
if (!isAdmins && !isOwner) return reply(`Fitur Khusus Admin`)
if (!isBotAdmins) return reply(`Bot harus menjadi admin`)
if (!quoted) return reply(`Where is the picture?`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
var mediz = await Manz.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await Manz.query({
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
fs.unlinkSync(mediz)
reply(`Success`)
} else {
var memeg = await Manz.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
reply(`Success`)
}
}
break
        case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return reply(`Fitur Khusus Dalam Grup`)
if (!isAdmins && !isOwner) return m.reply(`Fitur Khusus Admin`)
if (!isBotAdmins) return m.reply(`Bot harus menjadi Admin`)
    await Manz.removeProfilePicture(from)    }
    break
        case 'creategc': case 'creategroup': {
if (!isOwner) return reply(`Khusus Owner`)
if (!args.join(" ")) return reply(`Use ${prefix+command} groupname`)
try {
let cret = await Manz.groupCreate(args.join(" "), [])
let response = await Manz.groupInviteCode(cret.id)
let teks = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}
       `
Manz.sendMessage(m.chat, { text:teks, mentions: await Manz.parseMention(teks)}, {quoted:m})
} catch {
reply("Error!")
}
}
break
case "hidetag": case "h": {
if (!isGroup) return reply(`Khusus Grup`)
if (!isAdmins && !isOwner) return reply(`Khusus Admin`)
if (!m.quoted && !text) return reply(`Example : ${prefix + command} teks/reply teksnya`)
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
Manz.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
        case "listusr": {
  if (!isPremium) return reply(`Khusus Reseller`)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "BERIKUT DAFTAR USER:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await Manz.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
        case "delusr": {
  if (!isPremium) return reply(`Khusus Reseller`)
let usr = args[0]
if (!usr) return reply('sertakan ID user !!!')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('𝚄𝚂𝙴𝚁 𝚃𝙸𝙳𝙰𝙺 𝙳𝙸𝚃𝙴𝙼𝚄𝙺𝙰𝙽')
reply('𝚄𝚂𝙴𝚁 𝙱𝙴𝚁𝙷𝙰𝚂𝙸𝙻 𝙳𝙸𝙷𝙰𝙿𝚄𝚂')
}
        break
                        case "listsrv": {
  if (!isPremium) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "BERIKUT DAFTAR SERVER:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await Manz.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
        case "delsrv": {
      if (!isPremium) return reply(`Khusus Reseller`)

let srv = args[0]
if (!srv) return reply('sertakan ID server !!!')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('𝚂𝙴𝚁𝚅𝙴𝚁 𝚃𝙸𝙳𝙰𝙺 𝙳𝙸𝚃𝙴𝙼𝚄𝙺𝙰𝙽')
reply('𝚂𝙴𝚁𝚅𝙴𝚁 𝚃𝙴𝙻𝙰𝙷 𝙳𝙸𝙷𝙰𝙿𝚄𝚂')
}
        break
        case "addpanel": {
    if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (!text) return m.reply(`format salah !!\n*Example :* .addpanel user,ram,disk,cpu`)
let username = t[0];
let rampanel = t[1];
let diskpanel = t[2];
let cpupanel = t[3];
if (cpupanel.length < 1) return m.reply(`⚠️ *Tolong Isi Semua Data Dengan Baik*`)
let u = m.quoted ? m.quoted.sender : m.sender ? m.sender.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "XxRiza"
let egg = global.eggsnya
let loc = global.location
let memo = `${rampanel}`
let cpu = `${cpupanel}`
let disk = `${diskpanel}`
let email = username + "@xmail.xyz"
akunlo = "https://telegra.ph/file/e0369e556aa06cbe8b67e.jpg" 
let d = (await Manz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex'): t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString().toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`ɪᴅ : ${user.id}
*ᴛᴜɴɢɢᴜ, sᴇʀᴠᴇʀ sᴇᴅᴀɴɢ ᴅɪʙᴜᴀᴛ...*`)
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `𝙷𝙸 @${u.split`@`[0]} 🌟
*HERE'S YOUR PANEL DATA*


CYAA!!!!!!💞

⛒ ᴜsᴇʀɴᴀᴍᴇ : ${user.username}
⛒ ᴘᴀssᴡᴏʀᴅ : ${password}`

          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: '`Eriza Development`'
          }),
          header: proto.Message.InteractiveMessage.Header.create({ 
                  title: ``,
                  gifPlayback: true,
                  subtitle: `test`,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "cta_copy",
                "buttonParamsJson": JSON.stringify({
                "display_text": "Salin Username",
                "copy_code": `${username}`
                })
              },
        {
                "name": "cta_copy",
                "buttonParamsJson": JSON.stringify({
                "display_text": "Salin Password",
                "copy_code": `${password.toString()}`
                })
              },
        {
 "name": "cta_url",
 "buttonParamsJson": JSON.stringify({
     "display_text": "Link Login",
    "url": `${domain}`, "merchant_url":`${domain}`
     })
 },
                {
 "name": "cta_url",
 "buttonParamsJson": JSON.stringify({
     "display_text": "Baca Penggunaan",
    "url": `https://telegra.ph/Rules-Penggunaan-06-17`, "merchant_url":`https://telegra.ph/Rules-Penggunaan-06-17`
     })
 }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender]
                  
                }
        })
    }
  }
}, {})

await Manz.relayMessage(m.sender, msg.message, {
  messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*DONE CREATED ✅*
sɪʟᴀʜᴋᴀɴ ᴄᴇᴋ ᴋᴇ ᴘʀɪᴠᴀᴛᴇ ᴍᴇssᴀɢᴇ ʙᴏᴛ ᴜɴᴛᴜᴋ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴅᴀᴛᴀ sᴇʀᴠᴇʀ ᴘᴀɴᴇʟ ᴀɴᴅᴀ.`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: namaCreator
          }),
          header: proto.Message.InteractiveMessage.Header.create({ 
                  title: ``,
                  gifPlayback: true,
                  subtitle: `Eriza Xpz`,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
           {
 "name": "cta_url",
 "buttonParamsJson": JSON.stringify({
     "display_text": "Cek PM Bot",
    "url": `https://wa.me/+${global.botnumber}`, "merchant_url":`https://wa.me/+${global.botnumber}`
     })
 }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender]
                  
                }
        })
    }
  }
}, {})

await Manz.relayMessage(p.key.remoteJid, p.message, {
  messageId: p.key.id
})
}
break
        case "savekontak":
        case "svkontak": {
if (!isOwner) return m.reply(`Fitur Khusus Kak Cyaa Aja`)
if (!text) return m.reply(`Format Salah !\nExample : *${prefix + command} idgrup*\n\nsilahkan ketik .cekidgc bila ingin mengetahui id grup yg dimiliki anda`)
var idnya = text
var groupMetadataa
try {
groupMetadataa = await Manz.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("Invalid ID Group")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Contact file successfully sent to private chat`)
await Manz.sendMessage(m.sender, { document: fs.readFileSync("./contacts.vcf"), fileName: "contacts.vcf", caption: "Contact file successfully created", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./contacts.vcf", "")
}}
break
case 'bcgc': 
case 'bcgroup':
case 'broadcast':{
if (!isOwner) return m.reply(`Khusus Kak Cyaa aja`)
if (!text) m.reply(`Format Salah!\n *Contoh : ${prefix + command} Subsribe Eriza*`)
let getGroups = await Manz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Sedang Membaca Grup, harap tunggu...`)
for (let i of anu) {
await sleep(12000)
Manz.sendMessage(i, {text: `${text}`}, {quoted:fkontak})
    }
m.reply(`✅ Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
 case "jpmtag": {
if (!isOwner) return m.reply(`Khusus Kak Cyaa aja`)
if (!text && !m.quoted) return m.reply(`Example : ${prefix + command} teks/reply teks`)
var teks = m.quoted ? m.quoted.text : text
let total = 0
let getGroups = await Manz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
reply(`Processing sending text message to ${usergc.length} groups `)
for (let jid of usergc) {
try {
await Manz.sendMessage(jid, {text: teks, mentions: getGroups[jid].participants.map(e => e.id)}, {quoted: m})
total += 1
} catch (e) {
console.log(e)
}
await sleep(13000)
}
m.reply(`Successfully sent message to ${total} groups`)
}
break
        case "jpm": {
if (!isOwner) return reply(`Khusus Owner Aja`)
if (!text && !m.quoted) return m.reply(`Example : ${prefix + command} teks/reply teksnya`)
var teks = m.quoted ? m.quoted.text : text
let total = 0
let getGroups = await Manz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${usergc.length} Grup*`)
let teksnya = teks
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel})
for (let jid of usergc) {
try {
await Manz.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(14000)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break
        case "listgc": case "cekidgc": case "listgrup": {
let gcall = Object.values(await Manz.groupFetchAllParticipating().catch(_=> null))
let listgc = `*MY GROUP CHAT LIST*\n\n`
await gcall.forEach((u, i) => {
listgc += `Title : ${u.subject}\nID : ${u.id}\nMember : ${u.participants.length}\nStatus : ${u.announce == true ? "Tertutup" : "Terbuka"}\nCreator : ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
m.reply(listgc)
}
break
        case "idgc": {
if (!isOwner) return m.reply(`Khusus Owner`)
let teksnya = `*Successfuly Getting Group ID*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
    {
                "name": "cta_copy",
                "buttonParamsJson": JSON.stringify({
                "display_text": "Salin ID Grup",
                "copy_code": `${m.chat}`
                })
              },
]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await Manz.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
        case "sv":
case "save": {
if (!isOwner) return m.reply(mess.only.owner)
if (!q) return m.reply(`Example : .save nama`)

let namakontak = q.split('|')[0] ? q.split('|')[0] : q
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `${namakontak}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nFN:${namakontak}\nTEL;type=Mobile;waid=${m.chat.split("@")[0]}:${m.chat.split("@")[0]}\nEND:VCARD`,
}
}), { userJid: m.chat, quoted: fkontak })
Manz.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
}
break
case "pushkontak": {
    if (!isOwner) return reply(mess.only.owner)
      if (!m.isGroup) return reply(`The feature works only in grup`)
if (!text) return m.reply(`Format Salah !!\nExample : ${prefix + command} teks|jeda`)
var teks = text
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: text.split("|")[0]
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
    {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Done Save","id":"${prefix}donesave sudah Disave"}`
              },
    {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Saluran WhatsApp\",\"url\":\"${global.chsaluran}\",\"merchant_url\":\"${global.chsaluran}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: hw}) 
await Manz.relayMessage(mem,msgii.message, { 
messageId: msgii.key.id 
})
await sleep(text.split("|")[1])
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Contact ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await Manz.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buatâœ…", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak2": {
    if (!isOwner) return reply(`Khusus Mas Eriza`)
if (!text) return m.reply(`Format Salah !!\nExample : ${prefix + command} idgrup|teks|jeda\n\nuntuk melihat idgrup, silahkan ketik .cekidgc`)
    if (m.isGroup) return reply(`Fitur tidak diAkses di Dalam Group !!`)
var teks = text
const groupMetadataa = !isGroup? await Manz.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: text.split("|")[1]
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
    {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Done Save","id":"${prefix}donesave Sudah Disave"}`
              },
    {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Saluran WhatsApp\",\"url\":\"${global.chsaluran}\",\"merchant_url\":\"${global.chsaluran}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: hw}) 
await Manz.relayMessage(mem,msgii.message, { 
messageId: msgii.key.id 
})
await sleep(text.split("|")[2])
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Eriza [ Member ] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await Manz.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buatâœ…", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break

        case "donesave": {
if (!text) return m.reply(`Khusus Owner`)

var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `New Contact Save`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nFN:Eriza; Development;;;\nFN:Contact ${m.chat.split("@")[0]}\nTEL;type=Mobile;waid=${m.chat.split("@")[0]}:+${m.chat.split("@")[0]}\nEND:VCARD`,
}
}), { userJid: `${global.owner}@s.whatsapp.net`, quoted: fkontak })
Manz.relayMessage(`${global.owner}@s.whatsapp.net`, contact.message, { messageId: contact.key.id })
let teksnya = "*Nomor mu Di Save Otomatis*\n  - Jangan Lupa Save Back -\n\n▱ ▰ ▱ ▰ ▱ ▰ ▱ ▰ ▱ ▰ ▱ ▰ ▱ ▰ ▱ ▰\n“Wajib atasmu berlaku jujur, karena sesungguhnya jujur itu membawa kepada kebaikan dan kebaikan itu membawa ke surga.”"
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
    {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Saluran WhatsApp\",\"url\":\"${global.chsaluran}\",\"merchant_url\":\"${global.chsaluran}\"}`
}
]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await Manz.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "public": case "publik": {
if (!isOwner) return m.reply(`Khusus Bang Eriza`)
Manz.public = true
m.reply("Successfully changed bot mode to public")
}
break
case "self": case "private": case "priv": case "prib": {
if (!isOwner) return m.reply(`Khusus Bang Eriza`)
Manz.public = false
m.reply("Successfully changed bot mode to private")
}
break
case "sewabotpush": {
let teksnya = `𝗕𝗼𝘁 𝗣𝘂𝘀𝗵𝗸𝗼𝗻𝘁𝗮𝗸 𝗕𝘆 𝗖𝘆𝗮𝗮 💖

- 𝘴𝘪𝘮𝘱𝘦𝘭
- 𝘧𝘪𝘵𝘶𝘳 𝘣𝘶𝘵𝘵𝘰𝘯
- 𝘴𝘦𝘳𝘷𝘦𝘳 𝘢𝘮𝘢𝘯
- 𝘢𝘯𝘵𝘪 𝘥𝘦𝘭𝘢𝘺
- 𝘢𝘯𝘵𝘪 𝘰𝘷𝘦𝘳 𝘭𝘪𝘮𝘪𝘵
- 𝘢𝘭𝘭 𝘧𝘪𝘵𝘶𝘳 𝘸𝘰𝘳𝘬
- 𝘢𝘯𝘵𝘪 𝘱𝘢𝘴𝘢𝘳𝘢𝘯
- 𝘱𝘶𝘴𝘩 𝘨𝘤 𝘵𝘦𝘳𝘣𝘶𝘬𝘢
- 𝘱𝘶𝘴𝘩 𝘨𝘤 𝘵𝘦𝘳𝘵𝘶𝘵𝘶𝘱
- 𝘴𝘢𝘷𝘦 𝘰𝘵𝘰𝘮𝘢𝘵𝘪𝘴
- 𝘧𝘪𝘵𝘶𝘳 𝘫𝘱𝘮 𝘵𝘢𝘨/𝘯𝘰 𝘵𝘢𝘨
- 𝘣𝘳𝘰𝘢𝘥𝘤𝘢𝘴𝘵
- 𝘨𝘳𝘰𝘶𝘱 𝘮𝘦𝘯𝘶
- 𝘤𝘳𝘦𝘢𝘵𝘦 𝘱𝘢𝘯𝘦𝘭 𝘮𝘦𝘯𝘶
- 𝘴𝘤𝘳𝘪𝘱𝘵 𝘱𝘳𝘪𝘣𝘢𝘥𝘪 𝘦𝘳𝘪𝘻𝘢
- 𝘋𝘓𝘓

*Mau Liat Fitur? Ketik .menu*

𝐌𝐢𝐧𝐚𝐭 𝐎𝐫𝐝𝐞𝐫? *Pilih jumlah durasi sewa dibawah*`

let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"*Bot PushKontak* 1 Minggu\",\"title\":\"SEWA 1 MINGGU\",\"id\":\".satuminggu\"}"
},
          {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"*Bot Pushkontak* 2 Minggu\",\"title\":\"SEWA 2 MINGGU\",\"id\":\".duaminggu\"}"
},
          {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"*Bot Pushkontak* 3 Minggu\",\"title\":\"SEWA 3 MINGGU\",\"id\":\".tigaminggu\"}"
},
          {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"*Bot Pushkontak* 1 Bulan\",\"title\":\"SEWA 1 BULAN\",\"id\":\".satubulan\"}"
}
]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await Manz.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break    
        case "satuminggu": {
let buy = (`*Orderan*\nDari : *@${m.sender.split`@`[0]}*\n_Durasi Sewa : 1 Minggu_\n`)
let dely = (`> SEWA 1 MINGGU\n*Price :* Rp5.000\n\nMohon tunggu sebentar, pesanan mu sedang di proses, silahkan tunggu owner menkonfirmasi pesananmu, terimakasih.`)
await Manz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: m.quoted.id,
participant: m.quoted.sender
}
})
let rizza = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: buy
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
    {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Acc Pesanan\",\"url\":\"https://wa.me/+${global.botnumber}?text=.acc+${m.sender}\",\"merchant_url\":\"https://www.google.com\"}`
}
]
})
})} 
}}, {userJid: `6283845460283@s.whatsapp.net`, quoted: m}) 
await Manz.relayMessage(`6283845460283@s.whatsapp.net`, rizza.message, { 
messageId: rizza.key.id 
})
Manz.sendMessage(m.sender, { text: `${dely}`, mentions: [ `${sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: m })

m.reply('✅ Pesanan Diterima\n`Silahkan cek ke PM untuk Melakukan Pembayaran`')
}
break
        case "duaminggu": {
let buy = (`*Orderan*\nDari : *@${m.sender.split`@`[0]}*\n_Durasi Sewa : 2 Minggu_\n`)
let dely = (`> SEWA 2 MINGGU\n*Price :* Rp7.000\n\nMohon tunggu sebentar, pesanan mu sedang di proses, silahkan tunggu owner menkonfirmasi pesananmu, terimakasih.`)
await Manz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: m.quoted.id,
participant: m.quoted.sender
}
})
let rizza = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: buy
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
    {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Acc Pesanan\",\"url\":\"https://wa.me/+${global.botnumber}?text=.acc+${m.sender}\",\"merchant_url\":\"https://www.google.com\"}`
}
]
})
})} 
}}, {userJid: `6283845460283@s.whatsapp.net`, quoted: m}) 
await Manz.relayMessage(`6283845460283@s.whatsapp.net`, rizza.message, { 
messageId: rizza.key.id 
})
Manz.sendMessage(m.sender, { text: `${dely}`, mentions: [ `${sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: m })

m.reply('✅ Pesanan Diterima\n`Silahkan cek ke PM untuk Melakukan Pembayaran`')
}
break
        case "tigaminggu": {
let buy = (`*Orderan*\nDari : *@${m.sender.split`@`[0]}*\n_Durasi Sewa : 3 Minggu_\n`)
let dely = (`> SEWA 3 MINGGU\n*Price :* Rp10.000\n\nMohon tunggu sebentar, pesanan mu sedang di proses, silahkan tunggu owner menkonfirmasi pesananmu, terimakasih.`)
await Manz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: m.quoted.id,
participant: m.quoted.sender
}
})
let rizza = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: buy
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
    {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Acc Pesanan\",\"url\":\"https://wa.me/+${global.botnumber}?text=.acc+${m.sender}\",\"merchant_url\":\"https://www.google.com\"}`
}
]
})
})} 
}}, {userJid: `6283845460283@s.whatsapp.net`, quoted: m}) 
await Manz.relayMessage(`6283845460283@s.whatsapp.net`, rizza.message, { 
messageId: rizza.key.id 
})
Manz.sendMessage(m.sender, { text: `${dely}`, mentions: [ `${sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: m })
m.reply('✅ Pesanan Diterima\n`Silahkan cek ke PM untuk Melakukan Pembayaran`')
}
break
        case "satubulan": {
let buy = (`*Orderan*\nDari : *@${m.sender.split`@`[0]}*\n_Durasi Sewa : 1 Bulan_\n`)
let dely = (`> SEWA 1 BULAN\n*Price :* Rp13.000\n\nMohon tunggu sebentar, pesanan mu sedang di proses, silahkan tunggu owner menkonfirmasi pesananmu, terimakasih.`)
await Manz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: m.quoted.id,
participant: m.quoted.sender
}
})
let rizza = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: buy
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
    {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Acc Pesanan\",\"url\":\"https://wa.me/+${global.botnumber}?text=.acc+${m.sender}\",\"merchant_url\":\"https://www.google.com\"}`
}
]
})
})} 
}}, {userJid: `6283845460283@s.whatsapp.net`, quoted: m}) 
await Manz.relayMessage(`6283845460283@s.whatsapp.net`, rizza.message, { 
messageId: rizza.key.id 
})

Manz.sendMessage(m.sender, { text: `${dely}`, mentions: [ `${sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: m })
m.reply('✅ Pesanan Diterima\n`Silahkan cek ke PM untuk Melakukan Pembayaran`')
}
break
case 'acc' :{
if (!isOwner) return m.reply(mess.only.owner)
if (!text) return reply(`Khusus Acc Pesanan`)
let buy = `Halo kak, Pesananmu telah di Konfirmasi oleh Owner, silahkan melakukan pembayaran dibawah sesuai dengan nominal harga yang telah disepakati 🧾\n*Jika kamu sudah transfer sesuai nominal, harap konsultasi dan mengirim bukti transfer ke wa.me/${global.owner} untuk melanjutkan pemasangan bot kamu, terimakasih.*`
let rizza = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: buy
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
    {
                "name": "cta_copy",
                "buttonParamsJson": JSON.stringify({
                "display_text": "Salin Nomor Dana",
                "copy_code": `${global.nodana}`
                })
              },
    {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Pilih Pembayaran Lain\",\"title\":\"Select More Payment\",\"id\":\".pay\"}"
},
    {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Membatalkan *Pesanan*\",\"title\":\"Batalkan Pesanan\",\"id\":\".delorder\"}"
},
]
})
})} 
}}, {userJid: `${text}`, quoted: m}) 
await Manz.relayMessage(`${text}`, rizza.message, { 
messageId: rizza.key.id 
})
m.reply(`Pesanan Berhasil Di Acc`)
}
break
        case 'delorder': {
 let dely = (`*Pesanan* Dari : \n*@${m.sender.split`@`[0]}*\nTelah Dibatalkan`)

Manz.sendMessage(`6283845460283@s.whatsapp.net`, { text: `${dely}`, mentions: [ `${sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: m })
await Manz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: m.quoted.id,
participant: m.quoted.sender
}
})
Manz.sendMessage(m.chat,{text:'Orderan Kamu Berhasil di batalkan, silahkan order lain kali 😊🙏'},{quoted: fkontak})
            }
break
//===== Payment
case "payment": case"pay": {

let tytyd = "`"
let teksnya = `${tytyd}Please select payment to continue the transaction${tytyd}`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
    {
                "name": "cta_copy",
                "buttonParamsJson": JSON.stringify({
                "display_text": "Copy Dana Payment",
                "copy_code": `${global.nodana}`
                })
              },
              {
                "name": "cta_copy",
                "buttonParamsJson": JSON.stringify({
                "display_text": "Copy Gopay Payment",
                "copy_code": `${global.nogopay}`
                })
              },
              {
                "name": "cta_copy",
                "buttonParamsJson": JSON.stringify({
                "display_text": "Copy Ovo Payment",
                "copy_code": `${global.noovo}`
                })
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Qris Payment","id":"${prefix}sendqr"}`
              }
]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await Manz.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case 'sendqr': {
            Manz.sendMessage(m.chat, {image: {url:`${global.qris}`}, caption:`*Halo Kak ${pushname}*
Berikut Payment Qris kami, silahkan Scan sesuai nominal dan sertakan bukti transfer, terimakasih.`}, {quoted: fkontak})
            }
        break
  //===== Fitur Add Doang
case "owner": {
const repf = await Manz.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
Manz.sendMessage(from, { text : `Hai @${sender.split("@")[0]}, Itu kontak Owner saya, Jangan di-Spam ya.`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
case "dev": 
var _0x11e117=_0x4cd1;function _0x5144(){var _0x182be2=['5825','\x20Development\x0aTEL;type=Mobile;waid=','1565811rVBlmx','key','359088cKpJnj','25802ggbPzc','2000929WbmsOo','628','\x20Development','relayMessage',';\x20Development;;;\x0aFN:','4dsYZIC','419190yQZXcV','8\x0aEND:VCARD','8:+62\x208','chat','fromObject','2734848OPRLfq','25NNBKiz','234932eJYfDB','message','171SsRZRZ','Message','BEGIN:VCARD\x0aVERSION:3.0\x0aN:'];_0x5144=function(){return _0x182be2;};return _0x5144();}(function(_0x443c70,_0xc35069){var _0x1a8034=_0x4cd1,_0x371136=_0x443c70();while(!![]){try{var _0x165a29=parseInt(_0x1a8034(0xc4))/0x1+parseInt(_0x1a8034(0xb6))/0x2+parseInt(_0x1a8034(0xb3))/0x3*(parseInt(_0x1a8034(0xbc))/0x4)+-parseInt(_0x1a8034(0xc3))/0x5*(parseInt(_0x1a8034(0xb5))/0x6)+parseInt(_0x1a8034(0xb7))/0x7+parseInt(_0x1a8034(0xc2))/0x8+-parseInt(_0x1a8034(0xc6))/0x9*(parseInt(_0x1a8034(0xbd))/0xa);if(_0x165a29===_0xc35069)break;else _0x371136['push'](_0x371136['shift']());}catch(_0xeea7f2){_0x371136['push'](_0x371136['shift']());}}}(_0x5144,0x49acc));function _0x4cd1(_0x266476,_0x329fd1){var _0x5144f8=_0x5144();return _0x4cd1=function(_0x4cd1a7,_0xc3e386){_0x4cd1a7=_0x4cd1a7-0xb0;var _0xc45da=_0x5144f8[_0x4cd1a7];return _0xc45da;},_0x4cd1(_0x266476,_0x329fd1);}{var txc=_0x11e117(0xb8),ytm='56',uha=_0x11e117(0xb1),bvs='24',sjs='6',sjjs='4',nv='E',gb='iz',pn='r',dx='a',contact=generateWAMessageFromContent(m['chat'],proto[_0x11e117(0xc7)][_0x11e117(0xc1)]({'contactMessage':{'displayName':nv+pn+gb+dx+_0x11e117(0xb9),'vcard':_0x11e117(0xb0)+(nv+pn+gb+dx)+_0x11e117(0xbb)+(nv+pn+gb+dx)+_0x11e117(0xb2)+(txc+ytm+bvs+uha+sjs+sjjs)+_0x11e117(0xbf)+ytm+'-'+bvs+'58-25'+(sjs+sjjs)+_0x11e117(0xbe)}}),{'userJid':m[_0x11e117(0xc0)],'quoted':fkontak});Manz[_0x11e117(0xba)](m[_0x11e117(0xc0)],contact[_0x11e117(0xc5)],{'messageId':contact[_0x11e117(0xb4)]['id']});}
break
case "addseller":{
if (!isOwner) return reply(`Khusus Creator`)
if (!args[0]) return reply(`Nomornya Mana?\n*Example* : ${prefix+command} ${global.owner}`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Manz.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Reseller!`)
}
break
case "delseller":{
if (!isOwner) return reply(`Khusus Creator!`)
if (!args[0]) return reply(`Nomornya Mana?\n*Example* : ${prefix+command} ${global.owner}`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Daftar Reseller!`)
}
break
default:
}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
Manz.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})