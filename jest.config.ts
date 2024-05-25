import { Config } from 'jest';

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['./src'],
  moduleFileExtensions: ['js', 'ts'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/src/config/', '/src/test/'],
  coverageProvider: 'v8',
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  verbose: true,
};

export default config;
