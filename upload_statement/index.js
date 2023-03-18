const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

async function readPDF() {
const data = await fs.promises.readFile('statement.pdf');
const pdfDoc = await PDFDocument.load(data);
const pages = pdfDoc.getPages();
let text = '';

const regex = new RegExp("(\\d{2}/\\d{2}/\\d{4})\\n([\\w\\s#*]+)\\n([\\w\\s]+)\\n([\\d,.]+)\\s+(Cr|Dr)");

for (let i = 0; i < pages.length; i++) {
const pageText = await pages[i].getText();
text += pageText;
}
let transactions = [];
let match;

while ((match = regex.exec(text)) !== null) {

    // if (match) {
    //     const date = match[1]; // "12/25/2022"
    //     const name = match[2]; // "John Doe #123"
    //     const desc = match[3]; // "Salary"
    //     const amount = match[4]; // "$5,000.00"
    //     const type = match[5]; // "Dr"
    //     console.log(date, name, desc, amount, type);
    //   } else {
    //     console.log("No match found.");
    //   }

transactions.push(match);
}

for (let transaction of transactions) {
console.log(transaction);
}



}

readPDF();