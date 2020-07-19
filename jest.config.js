const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  testEnvironment: "node",
  roots: [
    "<rootDir>/components",
    "<rootDir>/core",
    "<rootDir>/config",
    "<rootDir>/pages"
  ],
  preset: 'ts-jest',
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: [
    "**/*.(test|spec).(ts|tsx)"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx"
  ],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  // https://github.com/zeit/next.js/issues/8663#issue-490553899
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires. you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.jest.json"
    }
  },
  coverageReporters: ["text", "html"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  }),
}
