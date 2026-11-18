const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/.system_generated/logs/transcript.jsonl')
});

rl.on('line', (line) => {
  if (line.includes('"step_index":7386')) {
    try {
      const data = JSON.parse(line);
      console.log('Step 7386:', data.tool_calls[0].args.Content);
    } catch (e) {
      console.log('parse error', e);
    }
  }
});
