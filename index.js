const { parse } = require('csv-parse') 
const fs = require('fs');

const habitablePlanets = []

const isHabitablePlanet = (planet) => planet['koi_disposition'] === 'CONFIRMED'


fs.createReadStream('kapler_data_12_21.csv')
  .pipe(parse({
    comment: '#',
    columns: true
  }))
  .on('data', (data) => {
    if (isHabitablePlanet(data)) {
      habitablePlanets.push(data)
    }
  })
  .on('error', (error) => {
    console.log(error)
  })
  .on('end', () => {
    console.log(habitablePlanets)
    console.log('Done')
  })


//parse()