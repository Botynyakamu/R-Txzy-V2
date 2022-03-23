let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌〔 List Berlangganan 〕
├ 1 Bulan
├ 4 Bulan
├ 8 Minggu
└────
Silahkan klik pada "List Harga" untuk melihat list.

Pembayaran:
Pulsa : 085730903853
GoPay: 085730903853
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '1 Bulan', description: "Rp15.000\nSewa bot tanpa batasan waktu.", rowId:".masuk"},
        {title: '4 Bulan', description: "Rp30.000\nSewa bot selama 1 bulan.", rowId:".masuk"},
        {title: '8 Minggu', description: "Rp40.000\nSewa bot selama 1 minggu.", rowId:".masuk"},
        {title: 'Owner', description: "Chat owner nya jika mau sewa.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".snk"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//R-Txzy
