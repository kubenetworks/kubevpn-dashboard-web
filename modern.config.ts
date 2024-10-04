import { appTools, defineConfig } from "@modern-js/app-tools";
import { tailwindcssPlugin } from "@modern-js/plugin-tailwindcss";

import { proxyPlugin } from "@modern-js/plugin-proxy";

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  tools: {
    devServer: {
      proxy: {
        "/api/dashboard": "http://127.0.0.1:6800",
      },
    },
  },
  output: {
    filename: {
      html: "index.html",
    },
    distPath: {
      html: "",
    },
  },
  html: {
    disableHtmlFolder: true,
  },
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: "rspack", // Set to 'webpack' to enable webpack
    }),
    tailwindcssPlugin(),
    proxyPlugin(),
  ],
});
