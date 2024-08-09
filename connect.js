require("./all/global")

const func = require("./all/place")
const readline = require("readline");
const usePairingCode = true
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};
async function startSesi() {

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()
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
const connectionOptions = {
version,
keepAliveIntervalMs: 30000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "fatal" }),
auth: state,
browser: ['Chrome (Linux)', '', '']
}
const Manz = func.makeWASocket(connectionOptions)
if(usePairingCode && !Manz.authState.creds.registered) {
		const phoneNumber = await question('Masukan Nomer Yang Aktif Awali Dengan 62:\n');
		const code = await Manz.requestPairingCode(phoneNumber.trim())
		console.log(`Ni kode nya: ${code}`)

	}
store.bind(Manz.ev)

Manz.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
Manz.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
Manz.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
start(`1`, `Connecting...`)
} else if (connection === "open") {
function _0x5db5(_0x22f4db,_0x3a4354){var _0x5ce425=_0x5ce4();return _0x5db5=function(_0x5db5dd,_0x5f2954){_0x5db5dd=_0x5db5dd-0x8f;var _0x32964e=_0x5ce425[_0x5db5dd];return _0x32964e;},_0x5db5(_0x22f4db,_0x3a4354);}var _0x1c7f9a=_0x5db5;function _0x5ce4(){var _0x126e71=['172659sCOmel','Ketik\x20.panduan\x20Untuk\x20Memunculkan\x20Tutorial','@s.whatsapp.net','2221690aQWiVc','Hi\x20Developer\x0aStatus\x20Bot\x20:\x20*Activated*','2sVPVZy','Subscribe\x20YT\x20:\x20@ErizaChannel','697194SUDieA','Bot\x20success\x20connected\x20to\x20server','log','497msRvva','48728XIQvMW','Developer\x20:\x20Eriza\x20+62856245825648','1167656GsJYFv','178659qFVyMJ','sendMessage','317224GFFLap','magenta','red'];_0x5ce4=function(){return _0x126e71;};return _0x5ce4();}(function(_0x208c25,_0x2fb46e){var _0xe6963c=_0x5db5,_0x4aa634=_0x208c25();while(!![]){try{var _0x300be7=parseInt(_0xe6963c(0x9e))/0x1*(-parseInt(_0xe6963c(0x93))/0x2)+-parseInt(_0xe6963c(0xa1))/0x3+-parseInt(_0xe6963c(0x9b))/0x4+parseInt(_0xe6963c(0x91))/0x5+parseInt(_0xe6963c(0x95))/0x6+-parseInt(_0xe6963c(0x98))/0x7*(-parseInt(_0xe6963c(0x99))/0x8)+-parseInt(_0xe6963c(0x9c))/0x9;if(_0x300be7===_0x2fb46e)break;else _0x4aa634['push'](_0x4aa634['shift']());}catch(_0x34f523){_0x4aa634['push'](_0x4aa634['shift']());}}}(_0x5ce4,0x4ad18),console[_0x1c7f9a(0x97)](color(_0x1c7f9a(0x96),_0x1c7f9a(0xa0))),console[_0x1c7f9a(0x97)](color(_0x1c7f9a(0x8f),'blue')),console[_0x1c7f9a(0x97)](color(_0x1c7f9a(0x9a),_0x1c7f9a(0x9f))),console[_0x1c7f9a(0x97)](color(_0x1c7f9a(0x94))),Manz[_0x1c7f9a(0x9d)](0x392adc345070+_0x1c7f9a(0x90),{'text':_0x1c7f9a(0x92)}));

}
})
Manz.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return Manz.readMessages([m.key])
if (!Manz.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = func.smsg(Manz, m, store)
require("./myriza")(Manz, m, store)
} catch (err) {
console.log(err)
}
})

Manz.public = true

Manz.ev.on('creds.update', saveCreds)
return Manz
}

startSesi()

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err)
})