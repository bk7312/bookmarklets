const fs = require('fs');
const path = require('path');
const he = require('he');
const marked = require('marked');
const UglifyJS = require('uglify-js');

const templatePath = 'template/';
const bookmarkletsPath = 'bookmarklets/';

const index = fs.readFileSync(templatePath + 'index_template.html', 'utf8');
const readme = fs.readFileSync(templatePath + 'readme_template.md', 'utf8');

const indexSplit = index.split('%%%');
const lines = readme.split('\n');

let text = '';

lines.forEach((line) => {
  if (line.startsWith('@')) {
    const filePath = line.slice(1);
    const code = fs.readFileSync(
      path.join(__dirname, bookmarkletsPath + filePath),
      'utf8'
    );

    const minified = UglifyJS.minify(code, {
      compress: { side_effects: false },
      mangle: false,
    });
    const hrefCode = 'javascript:' + he.encode(minified.code);

    text += `<a class='btn' href="${hrefCode}" title="To install, drag and drop this link to your bookmarks">${filePath}</a>`;
    text += '\n```\n' + code + '```\n\n';
  } else {
    text += line + '\n';
  }
});

const html = marked.parse(text);

fs.writeFileSync(`README.md`, text);
fs.writeFileSync(`index.html`, indexSplit.join(html));
