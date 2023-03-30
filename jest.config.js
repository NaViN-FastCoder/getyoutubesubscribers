module.exports = {
    // Specifies the test environment
    testEnvironment: 'node',
  
    // Specifies the file types to include in tests
    testMatch: ['**/*.test.js'],
  
    // Specifies the directory where Jest should output its coverage files
    coverageDirectory: 'coverage',
  
    // Specifies the file types to include in coverage reports
    collectCoverageFrom: ['**/*.js'],
  
    // Specifies the threshold for coverage to pass or fail tests
    coverageThreshold: {
      global: {
        branches: 90,
        functions: 90,
        lines: 90,
        statements: 90
      }
    },
  
    // Specifies additional modules to mock
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
  
    // Specifies a list of paths to directories that Jest should use to search for files
    roots: ['<rootDir>/src', '<rootDir>/test'],
  
    // Specifies a list of test environment options
    testEnvironmentOptions: {
      // Custom options for the test environment
    },
  
    // Specifies the maximum amount of time Jest should wait for a test to finish
    testTimeout: 300000,
  };
  