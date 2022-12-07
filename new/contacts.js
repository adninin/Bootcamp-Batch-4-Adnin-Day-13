//Require File System
const fs = require('fs')

//Ask apakah sudah ada folder data atau belum
const dirPath = './data'

//Membuat file contact.json apabila file belum exist
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}

//Ask apakah sudah ada folder data dan file contacts.json atau belum
const dataPath = './data/contacts.json'

//Membuat file contact.json apabila file belum exist
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8') //Menggunakan kurung siku [] karena filenya berformat json
}

//Mengambil data dari json
const loadContact = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(fileBuffer)
    return contacts
}

//Functiom find contact by name
const findContact = (nama) => {
    const contacts = loadContact()
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())
    return contact
}

//Ekspor function
module.exports = { loadContact, findContact }