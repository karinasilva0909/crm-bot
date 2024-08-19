const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const axios = require('axios');

const client = new Client();

// Gera o QR Code no terminal
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

// Confirmação de que o bot está pronto
client.on('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', async msg => {
    console.log('Message received:', msg.body);
});

client.initialize();
