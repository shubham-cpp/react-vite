module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  clearMocks: true,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/src/**/?(*.)+(spec|test).[jt]s?(x)'], // this line was added
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
}
