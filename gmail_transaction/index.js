const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');
var nodeBase64 = require('nodejs-base64-converter');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}

/**
 * Serializes credentials to a file compatible with GoogleAUth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

/**
 * Load or request or authorization to call APIs.
 *
 */
async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}

function listMessages(auth, query){
  query = 'from:parthakmehta@gmail.com subject:"Transaction alert"';

  return new Promise((resolve, reject) => {    
    const gmail = google.gmail({version: 'v1', auth});
    gmail.users.messages.list(      
      {        
        userId: 'me',  
        q:query,      
      },            (err, res) => {        
        if (err) {                    reject(err);          
          return;        
        }        
        if (!res.data.messages) {                    resolve([]);          
          return;        
        }               

        const messages = res.data.messages;

        messages.forEach(message => {
          const messageId = message.id;

            getMail(messageId, auth);

            });
      }    
    );  
  })
}

function getMail(msgId, auth){
  const gmail = google.gmail({version: 'v1', auth});
  gmail.users.messages.get({
      userId:'me',
      id: msgId ,
  }, (err, res) => {
      if(!err){
          var body = res.data.payload.parts[0].body.data;
          var htmlBody = nodeBase64.decode(body.replace(/-/g, '+').replace(/_/g, '/'));
          extractTransactionInfo(msgId, htmlBody);
      }
  });
}


function extractTransactionInfo(msgId, htmlBody) {
  console.log("Gmail Message ID:", msgId);

  fs.writeFile("transaction_raw_content.txt", htmlBody, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 

 // const regex = /Thank you for using your Card no. (\S+) for (\S+) at (\S+) on (\S+) (\S+)\. The total credit limit on your card is (\S+), while the available limit is (\S+)\./;
 //const matches = htmlBody.match(/Card no.\s(XX\d+)\sfor\sINR\s(\d+(.\d+))?\sat\s+(.+?)\son\s*(\d+-\d+-\d+\s\d+:\d+:\d+)/);
   const matches = htmlBody.match(/Card no.\s(XX\d+)\sfor\sINR\s(\d+(.\d+))?\sat\s+(.+?)\son\s*(\d+-\d+-\d+\s\d+:\d+:\d+)/);

if (matches) {
  const [_, cardNo, amount, merchant, date, time, totalCreditLimit, availableLimit, fullName] = matches;
  console.log('Full Name:', fullName);
  console.log('Card Number:', cardNo);
  console.log('Amount:', amount);
  console.log('Merchant:', merchant);
  console.log('Date:', date);
  console.log('Time:', time);
  console.log('Total Credit Limit:', totalCreditLimit);
  console.log('Available Limit:', availableLimit);

} else {
  console.log('No transaction information found in the email');
  //console.log(htmlBody);
}
}

authorize().then(listMessages).catch(console.error);

// authorize()
//   .then((auth) => {
//     return listMessages(auth, '');
//   })
//   .then((messages) => {
//     if (messages && messages.length > 0) {
//       return getMail(messages[0].id, auth);
//     } else {
//       console.log('No messages found.');
//     }
//   })
//   .then((mail) => {
//     const transactionInfo = extractTransactionInfo(mail.htmlBody);
//     if (transactionInfo) {
//       console.log('Full Name:', transactionInfo.fullName);
//       console.log('Transaction Amount:', transactionInfo.transactionAmount);
//       console.log('Merchant Name:', transactionInfo.merchantName);
//       console.log('Transaction Date:', transactionInfo.transactionDate);
//       console.log('Transaction Time:', transactionInfo.transactionTime);
//       console.log('Total Credit Limit:', transactionInfo.totalCreditLimit);
//       console.log('Available Limit:', transactionInfo.availableLimit);
//     } else {
//       console.log('Transaction info not found.');
//     }
//   })
//   .catch(console.error);




