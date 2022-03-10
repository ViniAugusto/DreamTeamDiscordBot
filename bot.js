require('dotenv').config();

const Discord = require('discord.js');
const fetch = require('node-fetch');

const client = new Discord.Client();
const prefix = '!'

client.login(process.env.BOT_TOKEN);

client.on('ready', () =>{
    console.log('AEHOOOOOOOOOOOO');
})

async function getGif(tema)  {
  
  let gifRequest = `https://g.tenor.com/v1/search?q=${tema}&key=${process.env.TENORKEY}`
  let response = await fetch(gifRequest);
  let json = await response.json();

  const randomIndex = Math.floor(Math.random() * json.results.length)
  
  return json.results[randomIndex].url;
}

//DreamTeam
client.on('voiceStateUpdate', async function (oldMember, newMember)  {
  const newUserChannel = newMember.channelID;
  const oldUserChannel = oldMember.channelID;
  const textChannel = client.channels.cache.get('322106045486858240');          //Text channel ID


  if(oldUserChannel === null) {      //Voice channel ID & alguem entrou no voice

    if(newMember.id === '256839511781277696'){
      
      textChannel.send(`É o homem macaco`).then((message) => {
        setTimeout(() => {        //Apaga mensagem após 3 Minutos
          message.delete();
        }, 1000 * 180)
      });
      textChannel.send(await getGif("macaco")).then((message) => {
        setTimeout(() => {        //Apaga mensagem após 3 Minutos
          message.delete();
        }, 1000 * 180)
      });

    } else if (newMember.id === '260557019428290570') {        //LeoDancer

      let today = new Date();

      if(today.getDay() == 6 && (today.getHours() > 4 && today.getHours() < 11)){

        textChannel.send(`Nosso segurança chegou, bateu o ponto às ${today.toLocaleTimeString()} e está no horário`,
          {files: ["https://cdn.discordapp.com/attachments/417405867324080149/875124026484355122/leo.jpg"]});

      } else {
    
        textChannel.send(`Chegou otaku`).then((message) => {
          setTimeout(() => {          //Apaga mensagem após 3 Minutos
            message.delete();
          }, 1000 * 180)
        });

        textChannel.send(await getGif("weeb")).then((message) => {
          setTimeout(() => {            //Apaga mensagem após 3 Minutos
            message.delete();
          }, 1000 * 180)
        });
      }   

    } else if (newMember.id === '257938615907123201') {//Mextano
      
      textChannel.send(await getGif("kpop girlgroup")).then((message) => {
        setTimeout(() => {            //Apaga mensagem após 3 Minutos
          message.delete();
        }, 1000 * 180)
      });
      
    } else if (newMember.id === '224147979924275200') {//Ronny
      
      textChannel.send(`Chegou o lokizão do Tatuapé`, {files: ["https://cdn.discordapp.com/attachments/322106045486858240/874793963561832518/mcqueen_toretto_ronny.jpg"]}).then((message) => {
        setTimeout(() => {            //Apaga mensagem após 3 Minutos
          message.delete();
        }, 1000 * 180)
      });
    } else if (newMember.id === '224953693089300492') {//Gustavo
      
      textChannel.send(`Praeiro Sayajin de Guaianezes`, { files: ['https://cdn.discordapp.com/attachments/322106045486858240/873310468746403941/gustavo.jpg']}).then((message) => {
        setTimeout(() => {            //Apaga mensagem após 3 Minutos
          message.delete();
        }, 1000 * 180)
      });
    } else if (newMember.id === '223850253705674762') { //FBC
      
      textChannel.send(`Chegou o comunista iludido`).then((message) => {
        setTimeout(() => {            //Apaga mensagem após 3 Minutos
          message.delete();
        }, 1000 * 180)
      });

      textChannel.send(await getGif("comunism")).then((message) => {
        setTimeout(() => {            //Apaga mensagem após 3 Minutos
          message.delete();
        }, 1000 * 180)
      });
    }
  } 
})


client.on('message', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return

  const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'sexo') {
		message.channel.send('O sexo é um acidente: o que dele recebemos é momentâneo e casual; visamos a algo mais secreto e misterioso do qual o sexo é apenas um sinal, um símbolo.').then((message) => {
      setTimeout(() => {        //Apaga mensagem após 3 Minutos
        message.delete();
      }, 1000 * 180)
    });
	}
})