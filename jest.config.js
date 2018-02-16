module.exports = {
  browser: true,
  resetMocks: true,
  modulePaths: ['../../src'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'src'],
  roots: ['src'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga||^(?!.*.loader.svg$).*.svg$)$':
      './test/unit/mocks/fileMock.js',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  setupFiles: ['./test/unit/jestSetup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
}
