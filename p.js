const { Telegraf } = require('telegraf');
const { Hercai } = require('hercai');

const bot = new Telegraf('5913815080:AAFv5x_9EYHMkp3Mz-i_VgfzQWqT15ThmfI')
const hercai = new Hercai();

bot.on('voice', async (ctx) => {
  // Mengonversi pesan suara menjadi teks menggunakan Hercai
  const voiceUrl = await bot.telegram.getFileLink(ctx.message.voice.file_id);
  const speechToText = await hercai.speechToText(voiceUrl);

  // Mengirimkan perintah ke Hercai untuk mendapatkan hasil suara
  const command = speechToText.text.trim();
  const response = await hercai.question({ model: 'v3', content: command });

  // Mengonversi hasil teks menjadi suara menggunakan Hercai
  const textToSpeech = await hercai.textToSpeech(response.reply, 'id-ID');

  // Mengirimkan hasil suara ke pengguna
  ctx.replyVoice(textToSpeech.url);
});

bot.launch();