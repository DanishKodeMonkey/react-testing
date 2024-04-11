import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend expect with matchers
expect.extend(matchers);

// after every test, clean up
afterEach(() => {
    cleanup();
});
