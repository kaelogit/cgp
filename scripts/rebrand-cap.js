const fs = require('fs');
const path = require('path');

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (/\.(ts|tsx)$/.test(entry.name)) out.push(p);
  }
  return out;
}

const pairs = [
  ['var(--gp-navy)', 'var(--cap-blue)'],
  ['var(--gp-blue-dark)', 'var(--cap-blue-deep)'],
  ['var(--gp-blue)', 'var(--cap-accent)'],
  ['var(--gp-white)', 'var(--cap-white)'],
  ['var(--gp-black)', 'var(--cap-black)'],
  ['var(--gp-paper)', 'var(--cap-paper)'],
  ['var(--gp-ink)', 'var(--cap-ink)'],
  ['var(--gp-muted)', 'var(--cap-muted)'],
  ['var(--gp-line)', 'var(--cap-line)'],
  ['idagrantprogram.com', 'capgp.org'],
  ['International Development Association', 'Center for American Prosperity'],
  ['Helen Marsh', 'Jordan Hale'],
  ['Helen emailed', 'Jordan emailed'],
  ['Helen\u2019s', 'Jordan\u2019s'],
  ["Helen'", "Jordan'"],
  ['IDA Grant Program', 'CAP Grants'],
  ['IDA grant programs', 'CAP Grants'],
  ['IDA grant coordinator', 'CAP grants coordinator'],
  ['IDA Grant Coordinator', 'CAP Grants Coordinator'],
  ['IDA Applications', 'CAP Applications'],
  ['IDA Grants', 'CAP Grants'],
  ['IDA grants', 'CAP grants'],
  ['IDA grant', 'CAP grant'],
  ['an IDA', 'a CAP'],
  ['IDA\u2019s', 'CAP\u2019s'],
  ["IDA's", "CAP's"],
  ['IDA', 'CAP'],
];

const root = path.join(__dirname, '..', 'src');
let count = 0;
for (const file of walk(root)) {
  let text = fs.readFileSync(file, 'utf8');
  const before = text;
  for (const [a, b] of pairs) text = text.split(a).join(b);
  if (text !== before) {
    fs.writeFileSync(file, text);
    count++;
  }
}
console.log('updated', count, 'files');
