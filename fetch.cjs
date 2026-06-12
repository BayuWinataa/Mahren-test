const https = require('https');
https.get('https://lottiefiles.com/free-animation/collaborative-work-CgBgXiDmEQ', {
  headers: { 'User-Agent': 'Mozilla/5.0' }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/https:\/\/(?:lottie\.host|assets\d*\.lottiefiles\.com)[^"']+\.json/);
    console.log(match ? match[0] : 'No match');
  });
}).on('error', (e) => console.log(e.message));
