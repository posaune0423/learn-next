module.exports = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/test/tsconfig.json',
    },
  },
}
