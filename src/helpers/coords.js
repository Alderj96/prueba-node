module.exports.generatePositionGPS = function () {
  const position = { latitud: 19.439144, longitud: -99.1453313 }
  // const position = { longitud: 19.439144, latitud: -99.1453313 }
  const nearPositions = [
    generateNearPosition(position, 1342),
    generateNearPosition(position, 2424),
    generateNearPosition(position, 3131),
    generateNearPosition(position, 4784),
    generateNearPosition(position, 5759),
    generateNearPosition(position, 6304),
  ]

  return nearPositions;
}

function generateNearPosition(basePosition, radio) {
  const { latitud, longitud } = basePosition;

  const radioEnGrados = radio / 111300;
  const latitudAleatoria = latitud + (Math.random() - 0.5) * 2 * radioEnGrados;
  const longitudAleatoria = longitud + (Math.random() - 0.5) * 2 * radioEnGrados;

  return {
    latitud: latitudAleatoria,
    longitud: longitudAleatoria,
  };
}

function generateRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}