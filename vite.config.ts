import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const plugins = [react(), tailwindcss(), jsxLocPlugin()];

export default defineConfig({
  plugins,

  // Vercel + SPA üçün ən stabil seçim
  base: "/",

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },

  // .env faylların repo root-dadırsa düzgün oxusun
  envDir: path.resolve(import.meta.dirname),

  // App root-u client qovluğudur (səndə belədir)
  root: path.resolve(import.meta.dirname, "client"),

  // root client olduğu üçün publicDir relative saxlayırıq
  publicDir: "public",

  build: {
    // ❗️ƏSAS FIX: build output repo root-da dist olsun
    outDir: "dist",
    emptyOutDir: true,

    target: "esnext",
    minify: "esbuild",
    cssMinify: "lightningcss",

    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "ui-vendor": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-popover",
            "@radix-ui/react-select",
          ],
          "query-vendor": [
            "@tanstack/react-query",
            "@trpc/client",
            "@trpc/react-query",
          ],
        },
      },
    },

    chunkSizeWarningLimit: 1000,
  },

  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "@tanstack/react-query",
      "@trpc/client",
      "@trpc/react-query",
    ],
    exclude: ["@vite/client", "@vite/env"],
  },

  server: {
    host: true,
    allowedHosts: ["localhost", "127.0.0.1"],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
    warmup: {
      clientFiles: ["./client/src/**/*.tsx", "./client/src/**/*.ts"],
    },
  },

  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
    treeShaking: true,
  },
});
