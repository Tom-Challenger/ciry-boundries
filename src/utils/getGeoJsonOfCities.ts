import getCities from './readCitiesTxt'
import clearDist from './clearDist'
import makeGeoJson from './makeGeoJson'
import fetchCityBoundaries from './fetchCityBoundaries'

/**
 * Получение координат границ этих городов.
 * Источник (Список городов): Текстовый файл, в котором на каждой строке написано название города на Русском языке.
 * Результат (Файлы geo.json с координатами границ городов)
 */
export default async function getGeoJsonOfCities() {
  const cities = getCities()

  clearDist()

  for (const cityName of cities) {
    const coordinates = await fetchCityBoundaries(cityName)
    makeGeoJson(cityName, coordinates)
    console.info(`make ${cityName}.geo.json`)
  }
}
