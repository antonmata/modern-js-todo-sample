module.exports = {
  coverageDirectory: 'coverage',
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: [
    '**/*.(test|spec).+(ts|tsx|js|jsx)',
    '**/__tests__/*.+(ts|tsx|js|jsx)',
  ],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(jsx?|tsx?)$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
};
