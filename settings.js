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
global.owner = ['94778688185']
global.premium = ['94778688185']
global.ownernomer = '94778688185'
global.ownername = 'Heshan Ayesh'
global.botname = '[ποΈπ²ππ±π΄π-πΊπΈπ½πΆ-π±πΎπποΈ]'
global.footer = 'POWERED BY CYBER KING'
global.ig = 'https://github.com/CyberKing4'
global.region = 'Sri Lanka'
global.sc = 'https://github.com/CyberKing4/CYBER-KING-BOT'
global.myweb = 'https://youtube.com/channel/UCRt-7UDMMcfjunuZwZi481Q'
global.packname = '[ποΈπ²ππ±π΄π-πΊπΈπ½πΆ-π±πΎπποΈ]'
global.author = 'πΎππ½ππ ππππ'
global.sessionName = 'session'
global.reactmoji = 'π­'
global.prefa = ['','!','.','π±π°','βοΈ','π€']
global.sp = 'β­'
global.mess = {
    success: 'Done β',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'Wait A minute...',
    error: 'Error! Maybe Api Key Is Expiredπ€!',
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
