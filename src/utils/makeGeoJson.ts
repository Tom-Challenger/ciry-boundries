import {TCoordinate} from '../types/omsApiServiceTypes'

const fs = require('fs'),
  path = require('path')

export default function makeGeoJson(fileName: string, coordinates: TCoordinate): void {
  const distPath = path.resolve('dist')
  const filePath = path.resolve('dist/' + fileName + '.geo.json')

  try {
    // Check dist/
    !fs.existsSync(distPath) && fs.mkdirSync(distPath)

    // Make file
    const fileData = JSON.stringify(coordinates)

    fs.writeFileSync(filePath, fileData, {flag: 'w'})
  } catch (error) {
    console.error('\
      [error] makeGeoJson: failed to make file geo.json.\n\
      [error] makeGeoJson: ', error)
  }
}
