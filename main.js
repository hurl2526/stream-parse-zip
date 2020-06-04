const http = require('http')
const fs = require('fs')
const csv = require('csv-parser')
const mresults = [];
const fresults = []
const writeStream = fs.createWriteStream(__dirname + '/males.json', 'utf-8')
const writeStream2 = fs.createWriteStream(__dirname + '/females.json', 'utf-8')
fs.createReadStream('people.csv')
  .pipe(csv())
  .on('data', (data) =>{
    if(data.Gender === 'M'){
    mresults.push(data)
  }else if (data.Gender === 'F'){
    fresults.push(data)
  }
})
  .on('end', () => {
    console.log(mresults)
    console.log(fresults)
    writeStream.write(JSON.stringify(mresults))
    writeStream2.write(JSON.stringify(fresults))

  })
const server = http.createServer((req, res) => {
  const mresults = [];
  const fresults = []
  const writeStream = fs.createWriteStream(__dirname + '/males.json', 'utf-8')
  const writeStream2 = fs.createWriteStream(__dirname + '/females.json', 'utf-8')
  fs.createReadStream('people.csv')
    .pipe(csv())
    .on('data', (data) =>{
      if(data.Gender === 'M'){
      mresults.push(data)
    }else if (data.Gender === 'F'){
      fresults.push(data)
    }
  })
    .on('end', () => {
      console.log(mresults)
      console.log(fresults)
      writeStream.write(JSON.stringify(mresults))
      writeStream2.write(JSON.stringify(fresults))
  
    })
  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    })
    const readStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
    readStream.pipe(res)
  }
  else if (req.url === '/males') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    })
    const readStream = fs.createReadStream(__dirname + '/males.json', 'utf8')
    readStream.pipe({...res})
  }
  else if (req.url === '/females') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    })
    // const readStream = fs.createReadStream(__dirname + '/females.json', 'utf8')
    // // readStream.pipe(res)
    res.end(JSON.fresults.toString())
  } else{
    res.writeHead(404, {
      'Content-Type': 'text/html',
    })
    // const readStream = fs.createReadStream(__dirname + '/404.html')
    // readStream.pipe(res)
    res.end('No page found')
  }
})
server.listen(3000, () => {
  console.log(`Listening on port 3000`)
})
