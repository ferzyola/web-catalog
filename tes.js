const axios = require('axios');
const { JSDOM } = require('jsdom');

async function fbdown(url) {
  try {
    const getToken = await axios.get('https://www.savefrom.ink/')
    let dom = new JSDOM(getToken.data).window.document
    
    //token = /<input id="token" type="hidden" name="token" value="(.*?)>/g.exec(a)
    /*const post = await axios('https://save-from.net/api/convert',{
    method: 'POST',
    data: 'p=' + p + 'q=' + encodeURIComponent(url) + 'lang' + lang
   })*/
   console.log(a)
  } catch (error) {
    console.error('Terjadi kesalahan saat scraping:', error);
  }
}

fbdown('');