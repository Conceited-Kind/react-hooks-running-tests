module.exports = {
  testEnvironment: "jsdom", // Change from 'node' to 'jsdom'
  collectCoverage: true,
  coverageDirectory: "coverage",
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  verbose: true,
};