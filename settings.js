const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['94784997828']
global.premium = ['94784997828']
global.ownernomer = '94784997828'
global.ownername = '𝘾𝙔𝘽𝙀𝙍 𝙆𝙄𝙉𝙂'
global.botname = '[🕊️𝙲𝚈𝙱𝙴𝚁-𝙺𝙸𝙽𝙶-𝙱𝙾𝚃🕊️]'
global.footer = 'POWERED BY CYBER KING'
global.ig = 'https://github.com/CyberKing4'
global.region = 'Sri Lanka'
global.sc = 'https://github.com/CyberKing4/CYBER-KING-BOT'
global.myweb = 'https://youtube.com/channel/UCRt-7UDMMcfjunuZwZi481Q'
global.packname = '[🕊️𝙲𝚈𝙱𝙴𝚁-𝙺𝙸𝙽𝙶-𝙱𝙾𝚃🕊️]'
global.author = '𝘾𝙔𝘽𝙀𝙍 𝙆𝙄𝙉𝙂'
global.sessionName = 'session'
global.reactmoji = '🎭'
global.prefa = ['','!','.','🇱🇰','⚙️','🤘']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'Wait A minute...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./KINGMedia/logo.jpeg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
