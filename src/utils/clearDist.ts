const fs = require('fs'),
  path = require('path')

export default function clearDist() {
  const distPath = path.resolve('dist')

  try {
    // Check dist/
    !fs.existsSync(distPath) && fs.mkdirSync(distPath)

    // Clear dist/
    fs.readdirSync(distPath).forEach((file) => {
      fs.unlinkSync(path.join(distPath, file))
    })
  } catch (error) {
    console.error('\
      [error] makeGeoJson: failed to clear directory dist/\n\
      [error] makeGeoJson: ', error)
  }
}
