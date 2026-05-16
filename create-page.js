const fs = require('fs');
const path = require('path');

// Get current date and time
const now = new Date();
const dateStr = now.getFullYear() + '-' +
    String(now.getMonth() + 1).padStart(2, '0') + '-' +
    String(now.getDate()).padStart(2, '0');
const timeStr = String(now.getHours()).padStart(2, '0') + ':' +
    String(now.getMinutes()).padStart(2, '0');

// Find the next available counter for today's date
let counter = 0;
while (fs.existsSync(path.join('pages', dateStr + '-p' + counter + '.md'))) {
    counter++;
}

// Create the filename and content
const filename = dateStr + '-p' + counter + '.md';
const content = `---
date: ${dateStr}T${timeStr}
---
`;

// Ensure the pages directory exists
if (!fs.existsSync('pages')) {
    fs.mkdirSync('pages', { recursive: true });
}

// Write the file
fs.writeFileSync(path.join('pages', filename), content);
console.log('Created:', filename);