// src/setupTests.js
import '@testing-library/jest-dom';  // Para las aserciones de jest-dom
import { vi } from 'vitest';
import createFetchMock from 'vitest-fetch-mock';

// Habilitar el mock de fetch
const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();