const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const pdfPath = path.resolve(__dirname, '..', 'assets', 'docs', 'CV_Dr_Nirav_Mehta.pdf');
const outDir = path.resolve(__dirname, '..', 'data');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function(data) {
  const text = data.text || '';
  fs.writeFileSync(path.join(outDir, 'cv.txt'), text, 'utf8');

  const emails = Array.from(new Set((text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/gi) || [])));
  const phones = Array.from(new Set((text.match(/\+?\d[\d \-()]{6,}\d/g) || [])));

  const summary = {
    emails,
    phones,
    snippet: text.slice(0, 3000)
  };

  fs.writeFileSync(path.join(outDir, 'cv_extracted.json'), JSON.stringify(summary, null, 2), 'utf8');

  console.log('Extraction complete.');
  console.log('Emails found:', emails);
  console.log('Phones found:', phones);
});
