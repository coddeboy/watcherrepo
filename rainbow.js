const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});

client.on("ready", () => {

  console.log(`Logged in as ${client.user.username}!`);

  client.user.setActivity('Rainbow', { type: "playing" })

});

client.on("message", async (message) => {
	
	let prefix = "#";
	
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	
    const input = message.content.slice(prefix.length).split(' ');

    const cmd = input.shift();

if(cmd === `ping`) {

message.channel.send(`Hoold on!`).then(m => {


    m.edit(`🏓 Wew, made it over the ~waves~ ! **Pong!** (Roundtrip took: ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Heartbeat: ` + Math.round(client.ping) + `ms.)`);


    });

 }

if(cmd === `newcommand`) {

message.channel.send(`My new command`)

}

if(cmd === `anothercommand`) {

message.channel.send(`My another command`)

}

if(cmd === `yobot`) {
	
	message.channel.send(`hello sir!`)
	
}

if(cmd === `supbot`) {
	
	message.channel.send(`fine what about you`)
	
}

if(cmd === `color`) {

let help = message.content.split(' ').slice(1)

if(!help[0] || help[0 === 'help']) return message.channel.send('**Usage: #color <role>**')
	
let colors = ['RANDOM'];

let role = message.mentions.roles.first();

if(!role) return message.channel.send(`You didn't metion a valid role or that role does not exist.`)

setInterval(function() {
7
role.setColor(colors[Math.floor(Math.random() * colors.length)])
 
  }, 1000)


});

if(cmd === `help`) {
	
	message.channel.send(`Help List
	
	prefix : #
	Invitebot : #inviteme
	Rainbow : #color @rolename`)
	
}


if(cmd ===`inviteme`) {
	
	message.channel.send('**<@${message.author.id}> Check your dm**')
	
	message.author.send('link of bot :-https://discordapp.com/oauth2/authorize?client_id=550711258660470788&permissions=8&scope=bot')
	
	
}

if(cmd === `color2`) {

let help = message.content.split(' ').slice(1)

if(!help[0] || help[0 === 'help']) return message.channel.send('**Usage: #color2 <role>**')
	
let colors = ['RANDOM'];

let role = message.mentions.roles.first();

if(!role) return message.channel.send(`You didn't metion a valid role or that role does not exist.`)

setInterval(function() {
7
role.setColor(colors[Math.floor(Math.random() * colors.length)])
 
  }, 3000)





client.login("token");
