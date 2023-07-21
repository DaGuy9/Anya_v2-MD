// Q U E E N - A N Y A - M D  #v2

// • # Made by @PikaBotz [ GitHub.com/PikaBotz ]
// • # The script is Encrypted because users are not allowed to commit any changes without permission!
// • # To buy non enc version of Anya-pika-MD-v2 please contact wa.me/918811074852 [ $5 - $8 ]

// • T H A N K S - TO
// @NexusAt12
// @xeon
// @teamolduser

const fs = require('fs')
const chalk = require('chalk')
require('./lib/config')

global.zApiKey = {// if this API key get expired then please go to https://www.fxacb-api.my.id and get a new api key.
       one: "zenzkey_998568986d"
}
global.lApiKey = {// if this API key get expired then please go to https://api.lannn.me and get a new api key.
      one: 'uMSPCuLU',
      two: 'IOGaHu5S'
}


global.botname = "Samantha ThaBot" 
global.author = "👼🏿⚛️ŦђคGยץ👼🏿⚛️"  
global.packname = "Sคmคງtђค"  
global.myweb = "https://tha-guy.netlify.app/"
global.footer = "©\t" + "ThaGuy"
global.prefa = ['<'] // single prefix
global.themeemoji = "🎐"
global.autoBio = "$mode : $time ⌚ || $date 🗓️ || $botname" // Leave it as it is if you didn't understood!
global.socialText = `*⪧⪢ Please join this group for by bot's announcement.   Join now lol *`
global.socialLink = `*⪧⪢  No link forrrrr now 💝*`


global.ownername = "David"    
global.ownernumber = ["2349125705760"]
global.ytname = "YT: https://youtube.com/@the_GUY4"
global.continent = "Africa" // your continent name 
global.region = "Nigeria"
global.state = "Abuja" // your state name
global.timezone = "Western-African" // search on google if you don't know the timezone of your country //
global.instagramId = ""
global.email = "testimony1201@gmail.com"


// Greeting messages
global.greet1 = "Good morning ☀️" // after 3 AM
global.greet2 = "Good afternoon 🏜️" // after 12 PM
global.greet3 = "Good evening 🌆" // after 4 PM
global.greet4 = "Good night 😴" // after 8:30 PM


//--------------- Tip ----------------\\
global.Tips = [
`Type *<* for more information...`,
`Type *$prefix settings* to commit changes in the bot.`,
`If you got a bug or error, then please report to developer asap by *$prefix  command.`,
"if you want only admins could use this bot, type *$prefix only_admin*.",
"You can change your prefix type to single prefix or multi prefix, just type *$prefix singlePrefix* or *$prefix multiPrefix* or *$prefix allPrefix*"
]

//--------------- Menu images ----------------\\
global.nullImage = fs.readFileSync('./AnyaPikaMedia/Anyatestpic.jpg')
global.Menuimage = fs.readFileSync("./AnyaPikaMedia/Menuimg.jpg") // Thumbnail for Dashboard
global.thumnnaiIs = fs.readFileSync("./AnyaPikaMedia/Menuimg2.jpeg")
global.allmenuImg = fs.readFileSync('./AnyaPikaMedia/Allmenu.jpg') // Thumbnail for Allmenu command 

global.mess = {
    success: 'Done ✅',
    admin: 'You must be a fuckin admin to use this command.',
    botAdmin: 'The bot needs to be an admin to process this command.',
    owner: 'You are not the owner of this bot so you cannot use this command.',
    group: 'This command is only made for group chats.',
    private: 'This command is only for private chats.',
    wait: '```「▰▰▰▱▱▱▱▱▱▱」Loading...```',
    link: 'I need a link to process this command.',
    error: '```404 Error```',
    ban: `You're banned from using this bot! forever`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
}


/*𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹 DANGER ZONE ⚠️👇 𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹*/
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
