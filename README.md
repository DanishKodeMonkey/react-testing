# quick vitest setup for React

### install packages

```
npm install vitest jsdom @testing-library/react @testing-library/jest-dom --save-dev
```

### update package.json

```
{
  ...
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "vitest",
    "preview": "vite preview"
  },
  ...
}
```

### create folder in

```
./src/tests
```

#### add test config file

```
./src/tests/setup.js
```

#### add test config file contents:

```
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
```

### update vite.config file

```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
});
```

## Start making tests

### Create a test file. E.g. App.test.jsx

```
./src/tests/App.test.jsx
```

#### Import vitest, and react testing library components to each test file

```
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
```

#### import component for testing

```
import App from './src/App.jsx'
```

#### Make test cases just like with jest

```
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import App from '../App';

describe('App', () => {
    it('renders headline', () => {
        render(<App title='React' />);

        screen.debug();
    });
});
```

# Rest of repo is example of this setup
