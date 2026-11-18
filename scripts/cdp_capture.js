const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb';

async function capture() {
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9222',
    'http://localhost:3000'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  // Get debug target
  http.get('http://localhost:9222/json', res => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
      const targets = JSON.parse(data);
      console.log('Targets:', targets.length);
      chrome.kill();
    });
  }).on('error', e => {
    console.error('CDP error:', e);
    chrome.kill();
  });
}
capture();
