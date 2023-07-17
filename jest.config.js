import nextJest from 'next/jest';


const jestConfig = nextJest({ dir: './' })
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = jestConfig(customJestConfig)