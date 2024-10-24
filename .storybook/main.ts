import { defineConfig } from '@rsbuild/core';

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "storybook-react-rsbuild",
    options: {},
  },
  defaultName: 'Documentation',
  async viteFinal(config) {
    return defineConfig({
      ...config,
      base: process.env.NODE_ENV === 'production' ? 'https://gustavochagas.github.io/components-list/docs' : '/',
    });
  },
};
export default config;
