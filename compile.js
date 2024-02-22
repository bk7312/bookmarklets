const fs = require('fs');
const path = require('path');
const he = require('he');

const template = fs.readFileSync('template.md', 'utf8');
const lines = template.split('\n');

let text = '';
lines.forEach((line) => {
  if (line.startsWith('@')) {
    const filePath = line.slice(1);
    const code = fs.readFileSync(
      path.join(__dirname, 'bookmarklets/' + filePath),
      'utf8'
    );
    text += `<a href="${he.encode(code)}">${filePath}</a>`;
    text += '\n```\n' + code + '```\n\n';
  } else {
    text += line + '\n';
  }
});

fs.writeFileSync(`README.md`, text);
