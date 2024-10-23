import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      exclude: [
        'node_modules/**',
        'dist/**',
        '.storybook/**',
        '**/*.d.ts',
        'src/setupTests.ts',
        'rsbuild.config.ts',
        'tailwind.config.js',
        'vitest.config.ts',
        '**/*.stories.tsx',
        'src/**/types.ts',
      ],
    },
  },
});
