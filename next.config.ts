import type { NextConfig } from "next";

// Set BASE_PATH (e.g. "/my-repo") when deploying to a GitHub Pages project site.
// Leave it empty for local dev, a custom domain, or a "<user>.github.io" repo.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
