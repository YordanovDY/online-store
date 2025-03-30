import { cleanup } from '@testing-library/react';
import { beforeAll } from 'vitest';
import '@testing-library/jest-dom/vitest';

beforeAll(() => {
    cleanup();
});

