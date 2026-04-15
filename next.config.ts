import type { NextConfig } from "next";
import createMDX from "@next/mdx";

// Note: Turbopack (Next.js 16 default) requires serializable loader options.
// MDX plugin functions are not serializable, so plugins are omitted here.
// GFM tables and heading anchors are handled via CSS/client-side if needed.
const withMDX = createMDX({});

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default withMDX(nextConfig);
