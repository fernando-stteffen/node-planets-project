const { parse } = require('csv-parse') 
const fs = require('fs');

const dataChuncks = []

fs.createReadStream('kapler_data_12_21.csv')
  .pipe(parse({
    comment: '#',
    columns: true
  }))
  .on('data', (data) => {
    dataChuncks.push(data)
  })
  .on('error', (error) => {
    console.log(error)
  })
  .on('end', () => {
    //console.log(dataChuncks)
    console.log('Done')
  })


//parse()