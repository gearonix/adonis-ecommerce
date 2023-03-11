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
  moduleDirectories: ['node_modules', 'src', 'dev'],
  modulePaths: [
    '<rootDir>'
  ],
  moduleNameMapper: {
    '^app/(.*)': '<rootDir>/src/app/$1',
    '^widgets/(.*)': '<rootDir>/src/widgets/$1',
    '^entities/(.*)': '<rootDir>/src/entities/$1',
    '^features/(.*)': '<rootDir>/src/features/$1',
    '^pages/(.*)': '<rootDir>/src/common/$1',
    '^shared/(.*)': '<rootDir>/src/shared/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
}

module.exports = createJestConfig(customJestConfig)
