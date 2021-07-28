import fetch from 'node-fetch'
import {URL} from 'url'
import {IFeatureCollection, TCoordinate} from '../types/omsApiServiceTypes'

/**
 * Получение содержимое GeoJSON для города по названию
 * @param name Название города
 * @returns TCoordinate - координаты границ города в системе OSM
 */
export default async function fetchCityBoundaries(cityName: string): Promise<TCoordinate> {
  try {
    const coordinates = await requestCityBoundariesWithGeoJson(cityName)

    return coordinates
  } catch (error) {
    console.error(
      '\
      [error] getCityID: failed to get osm coordinates of city.\n\
      [error] getCityID: return []\n\
      [error] getCityID: ',
      error
    )
    return []
  }
}

async function requestCityBoundariesWithGeoJson(cityName: string): Promise<TCoordinate> {
  const url = new URL('https://nominatim.openstreetmap.org/search.php')
  url.searchParams.append('q', cityName)
  url.searchParams.append('polygon_geojson', '1')
  url.searchParams.append('accept-language', 'ru')
  url.searchParams.append('limit', '1')
  url.searchParams.append('format', 'geojson')

  const res = await fetch(url, {method: 'GET'})
  const data: IFeatureCollection = await res.json()

  // TODO Simple first
  const coordinates = data.features.pop().geometry.coordinates

  return coordinates
}
