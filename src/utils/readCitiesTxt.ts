const fs = require('fs'),
  path = require('path')

/**
 * Метод извлекает список городов из файла configs/cities.txt
 * @param file путь к файлу отно
 * @returns Массив названий городов
 */
export default function readCitiesTxt(): string[] {
  const filePath = path.resolve('src/configs/cities.txt')

  try {
    const cities = fs
      .readFileSync(filePath, 'utf8')
      .toString()
      .split('\n')
      .map((line: string) => line.trim())

    return cities
  } catch (error) {
    console.error(
      '\
      [error] getCities: failed to get names of city.\n\
      [error] getCities: return []\n\
      [error] getCities: ',
      error
    )
    return []
  }
}
