const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

async function fbdown(url) {
  try {
    const getToken = await axios.get('https://www.savefrom.ink/')
    let dom = new JSDOM(getToken.data).window.document
    let a = dom.querySelector('div.d-flex.flex-wrap').innerHTML
    token = /<input id="token" type="hidden" name="token" value="(.*?)">/g.exec(a)[1]
    const post = await axios('https://www.savefrom.ink/wp-json/aio-dl/video-data/',{
    method: 'POST',
    data: 'url=' + encodeURIComponent(url) + 'token=' + token
   })
   console.log(post.data)
  } catch (error) {
    console.error('Terjadi kesalahan saat scraping:', error);
  }
}

fbdown('https://www.facebook.com/watch/?v=398049702741938');