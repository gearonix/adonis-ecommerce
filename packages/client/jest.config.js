// eslint-disable-next-line
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  globals: {
    'ts-jest': {
      'isolatedModules': true,
      'tsConfig': 'tsconfig.json'
    }
  },
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: [
    '<rootDir>'
  ]
}

module.exports = createJestConfig(customJestConfig)
