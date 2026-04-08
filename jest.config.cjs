const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '**/__tests__/**/*.test.js',
    '**/__tests__/**/*.test.ts',
    '**/__tests__/**/*.test.tsx',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: { branches: 5, functions: 5, lines: 5, statements: 5 },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^marked$': '<rootDir>/__mocks__/marked.cjs',
    '^next/script$': '<rootDir>/__mocks__/next-script.cjs',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@testing-library))',
  ],
}

module.exports = createJestConfig(customJestConfig)
