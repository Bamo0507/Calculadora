module.exports = {
    testEnvironment: 'node',
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
    moduleNameMapper: {
      '^@utils/(.*)$': '<rootDir>/src/utils/$1.js'
    }
};