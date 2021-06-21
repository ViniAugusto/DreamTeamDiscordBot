require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

client.login(process.env.BOT_TOKEN);

client.on('ready', () =>{
    console.log('AEHOOOOOOOOOOOO');

})

async function getGif(tema)  {
  
  let cacafuuGIF = `https://g.tenor.com/v1/search?q=${tema}&key=${process.env.TENORKEY}`
  let response = await fetch(cacafuuGIF);
  let json = await response.json();

  const randomIndex = Math.floor(Math.random() * json.results.length)
  
  return json.results[randomIndex].url;
  

}
// //DreamTeam
client.on('voiceStateUpdate', async function (oldMember, newMember)  {
  const newUserChannel = newMember.channelID;
  const oldUserChannel = oldMember.channelID;
  const textChannel = client.channels.cache.get('322106045486858240');          //Text channel ID


  if(newUserChannel === '419612592542318593' && oldUserChannel === null) {      //Voice channel ID & alguem entrou no voice
    textChannel.send(`Tamo saindo galera`,{tts: true}).then((message) => {
      setTimeout(() => {          //Apaga mensagem após 3 Minutos
        message.delete();
      }, 1000 * 180)
    });
    if(newMember.id ==='256839511781277696'){
      
      textChannel.send(`É o homem macaco`,{tts: true}).then((message) => {
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
      textChannel.send(`Chegou otaku`,{tts: true}).then((message) => {
        setTimeout(() => {          //Apaga mensagem após 3 Minutos
          message.delete();
        }, 1000 * 180)
      });

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
    textChannel.send(`Agora a gente ganha`,{tts: true}).then((message) => {
      setTimeout(() => {        //Apaga mensagem após 3 Minutos
        message.delete();
      }, 1000 * 180)
    });
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
//       textChannel.send(`É o homem macaco`,{tts: true})
//       textChannel.send(await getGif("macaco"))
      
//       // console.log(await getGif("macaco"))
//     }
//   } else if (oldUserChannel === '693310952476639242' && newUserChannel !== '693310952476639242') {
//     textChannel.send(`Agora a gente ganha`,{tts: true})
//   } 
// })
