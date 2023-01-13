/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.tsx"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  testEnvironment: "jsdom",
  testTimeout: 30000,
  transform: {
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "<rootDir>/config/jest/babelTransform.js",

    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(@linzjs/step-ag-grid|browser-fs-access|pkijs|react-dates/lib/css)/)",
  ],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "\\.(svg)$": "<rootDir>/__mocks__/mockSVG.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^lodash-es$": "lodash",
  },
  watchPlugins: [],
  resetMocks: true,
  coverageReporters: ["text", "cobertura", "html"],
};
