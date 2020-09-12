const fs =require('fs');

const reader = fs.createReadStream('big.txt','utf-8')
let chunkNum = 0
let book = ''

reader.on('data', chunk =>{
    chunkNum++
    book += chunk
    console.log("NEW CHUNK " + chunkNum)
})
reader.on('end', () => {
    console.log(chunkNum)
})