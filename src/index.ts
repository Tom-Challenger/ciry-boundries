import getGeoJsonOfCities from './utils/getGeoJsonOfCities'

async function main() {
  await getGeoJsonOfCities()

  console.info('done')
}

main()
