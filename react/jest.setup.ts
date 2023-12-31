// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// mock next router https://github.com/scottrippey/next-router-mock
import mockRouter from 'next-router-mock'
jest.mock('next/router', () => require('next-router-mock'))
mockRouter.push('/')

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
