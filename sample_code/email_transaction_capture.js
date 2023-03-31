const {google} = require('googleapis');
const fs = require('fs');
const readline = require('readline');
const {google: googleAuth} = require('google-auth-library');
const { parse } = require('node-html-parser');

// Load the credentials from a local file
const CREDENTIALS_FILE_PATH = './credentials.json';
const TOKEN_FILE_PATH = './token.json';

const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_FILE_PATH));
const token = JSON.parse(fs.readFileSync(TOKEN_FILE_PATH));

// Set up the OAuth client
const {client_secret, client_id, redirect_uris} = credentials.installed;
const oAuth2Client = new googleAuth.OAuth2Client(client_id, client_secret, redirect_uris[0]);
oAuth2Client.setCredentials(token);

// Set up the Gmail API client
const gmail = google.gmail({version: 'v1', auth: oAuth2Client});

// Define the search query for the transaction confirmation emails
const searchQuery = 'from:yourbank@example.com subject:"Transaction Confirmation"';

// Retrieve the transaction confirmation emails
gmail.users.messages.list({
    userId: 'me',
    q: searchQuery
}, (err, res) => {
    if (err) {
        console.log(`Error: ${err}`);
        return;
    }

    const messages = res.data.messages;

    // Process each message
    messages.forEach(message => {
        const messageId = message.id;

        // Retrieve the full message
        gmail.users.messages.get({
            userId: 'me',
            id: messageId
        }, (err, res) => {
            if (err) {
                console.log(`Error: ${err}`);
                return;
            }

            const message = res.data;
            const payload = message.payload;
            const headers = payload.headers;

            // Extract the transaction details from the email
            const amount = extractTransactionAmount(headers);
            const date = extractTransactionDate(headers);
            const merchant = extractTransactionMerchant(headers);

            // Store the transaction data in your app's database
            storeTransactionData(amount, date, merchant);
        });
    });
});

// Helper functions to extract the transaction details from the email
function extractTransactionAmount(headers) {
    const header = headers.find(header => header.name === 'Subject');
    const match = header.value.match(/Transaction Confirmation - (\$\d+\.\d+)/);
    if (match) {
        const amount = match[1];
        return amount;
    }
    return null;
}

function extractTransactionDate(headers) {
    const header = headers.find(header => header.name === 'Date');
    const date = new Date(header.value);
    return date;
}

function extractTransactionMerchant(headers) {
    const header = headers.find(header => header.name === 'Subject');
    const match = header.value.match(/Transaction Confirmation - \$\d+\.\d+ at (.+)/);
    if (match) {
        const merchant = match[1];
        return merchant;
    }
    return null;
}

function storeTransactionData(amount, date, merchant) {
    // Code to store the transaction data in your app's database goes here
}
