const fs = require('fs');
const pdfParse = require('pdf-parse')

const getPDF = async (file) => {
    let readFileSync = fs.readFileSync(file)
    try {
      let pdfExtract = await pdfParse(readFileSync)

      const text = pdfExtract.text;
      
      // this is kinda working //const regex = /(\d{2}\/\d{2}\/\d{4})((.|\n)*?)((\d|,)*(\.\d{2})) ([CD]r)/gm;
      // const regex = /(\d{2}\/\d{2}\/\d{4})\s+(.+?)\s{2,}(\w+)\s{2,}([\d,]+\.\d{2})\s+(\w+)/g;

      let match;
      const transactions = [];
      
      while ((match = regex.exec(text)) !== null) {
        transactions.push({
          date: match[1],
          description: match[2].trim(),
          amount: parseFloat(match[5].replace(',', '')) * (match[7] === 'Dr' ? -1 : 1),
        });
      }
      
      console.log(transactions);

    //   let transactions = [];
    //   let match;

    //  // const regex = new RegExp("(\d{2}/\d{2}/\d{4})\n([\w\s#*]+)\n([\w\s]+)\n([\d,.]+)\s+(Cr|Dr)");
    //  // match = regex.exec(text)
      
    //  const regstr = '\d{2}.\d{2}.\d{4}\n([\w\s#*]+)\n([\w\s]+)\n([\d,.]+)\s+(Cr|Dr)'
    //   const regex = new RegExp(regstr, 'g');
    //   match = regex.exec(text);

    //   if (match) {
    //     const date = match[1]; // "12/25/2022"
    //     const name = match[2]; // "John Doe #123"
    //     const desc = match[3]; // "Salary"
    //     const amount = match[4]; // "$5,000.00"
    //     const type = match[5]; // "Dr"
    //     console.log(date, name, desc, amount, type);
    //   } else {
    //     console.log("No match found.");
    //   }

    //   while ((match = regex.exec(text)) !== null) {
      
    //   transactions.push(match);
    //   }
      
    //   for (let transaction of transactions) {
    //   console.log(transaction);
    //   }
      

    } catch (error) {
      console.log(error)
    }
  }


getPDF('statement.pdf');