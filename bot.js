require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

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
// //DreamTeam
client.on('voiceStateUpdate', async function (oldMember, newMember)  {
  const newUserChannel = newMember.channelID;
  const oldUserChannel = oldMember.channelID;
  const textChannel = client.channels.cache.get('322106045486858240');          //Text channel ID


  if((newUserChannel === '795049118304436234' || newUserChannel === '862731867295711232' ||  newUserChannel === '847310147478355969') && oldUserChannel === null) {      //Voice channel ID & alguem entrou no voice
    // textChannel.send(`Tamo saindo galera`).then((message) => {
    //   setTimeout(() => {          //Apaga mensagem após 3 Minutos
    //     message.delete();
    //   }, 1000 * 180)
    // });
    if(newMember.id ==='256839511781277696'){
      
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

    } else if (newMember.id ==='260557019428290570') {        //LeoDancer
      let today = new Date();
      if(today.getDay() == 6 && (today.getHours() > 4 && today.getHours() < 11)){

        textChannel.send(`Nosso segurança chegou, bateu o ponto às ${today.toLocaleTimeString()} e está no horário`, {files: ["https://cdn.discordapp.com/attachments/322106045486858240/872608714648064020/leo.jpg"]});

      } else {
    
        textChannel.send(`Chegou otaku`).then((message) => {
          setTimeout(() => {          //Apaga mensagem após 3 Minutos
            message.delete();
          }, 1000 * 180)
        });
      }

      textChannel.send(await getGif("weeb")).then((message) => {
      setTimeout(() => {            //Apaga mensagem após 3 Minutos
        message.delete();
      }, 1000 * 180)
    });

    } else if (newMember.id ==='257938615907123201') {//Mextano
      
      textChannel.send(await getGif("kpop girlgroup")).then((message) => {
        setTimeout(() => {            //Apaga mensagem após 3 Minutos
          message.delete();
        }, 1000 * 180)
      });
    }

    else if (newMember.id ==='224147979924275200') {//Ronny
      
      textChannel.send(await getGif("carros")).then((message) => {
        setTimeout(() => {            //Apaga mensagem após 3 Minutos
          message.delete();
        }, 1000 * 180)
      });
    }

  } else if (oldUserChannel === '419612592542318593' && newUserChannel !== '419612592542318593') { // Alguém saiu do voice
    textChannel.send(`Agora a gente ganha`).then((message) => {
      setTimeout(() => {        //Apaga mensagem após 3 Minutos
        message.delete();
      }, 1000 * 180)
    });
  }
})


client.on('message', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return

  const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'sexo') {
		message.channel.send('O sexo é um acidente: o que dele recebemos é momentâneo e casual; visamos a algo mais secreto e misterioso do qual o sexo é apenas um sinal, um símbolo.Pong.');
	}
})
//Test
// client.on('voiceStateUpdate',async function (oldMember, newMember)  {
//   const newUserChannel = newMember.channelID;
//   const oldUserChannel = oldMember.channelID;
//   const newUser = newMember.id;

//   const textChannel = client.channels.cache.get('662123931485995019');

//   console.log(newUser)

//   if(newUserChannel === '693310952476639242' && oldUserChannel === null) {
//     textChannel.send(`Tamo saindo galera`,{tts: true});
//     if(newMember.id ==='257938615907123201'){//Para Cacafuu
//       let today = new Date();
//       if(today.getDay() == 6 && (today.getHours() > 0 && today.getHours() < 11)){

//         textChannel.send(`Nosso segurança chegou no horário, bateu o ponto às ${today.toLocaleTimeString()} e está no horário`, {files: ["https://cdn.discordapp.com/attachments/322106045486858240/865922496901808158/20210717_084633.jpg"]}).then((message) => {
//           setTimeout(() => {          //Apaga mensagem após 3 Minutos
//             message.delete();
//           }, 1000 * 180)
//         });

//       }
      
//       // console.log(await getGif("macaco"))
//     }
//   } else if (oldUserChannel === '693310952476639242' && newUserChannel !== '693310952476639242') {
//     textChannel.send(`Agora a gente ganha`,{tts: true})
//   } 
// })
// let today = new Date();
//       if(today.getDay() == 6 && (today.getHours() > 4 && today.getHours() < 11)){

//         textChannel.send(`Nosso segurança chegou no horário, bateu o ponto às ${today.toLocaleDateString} e está no horário`, {files: ["https://cdn.discordapp.com/attachments/322106045486858240/865922496901808158/20210717_084633.jpg"]}).then((message) => {
//           setTimeout(() => {          //Apaga mensagem após 3 Minutos
//             message.delete();
//           }, 1000 * 180)
//         });

//       }