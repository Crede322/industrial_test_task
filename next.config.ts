import type { NextConfig } from "next";
import {PHASE_DEVELOPMENT_SERVER} from "next/constants";

const nextConfig = async (phase: string): Promise<NextConfig> => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER

  return {
    output: 'export',
    images: {unoptimized: true},
    assetPrefix: isDev ? undefined : process.env.NEXT_PUBLIC_DOMAIN,
    basePath: isDev ? undefined : process.env.NEXT_PUBLIC_BASE_PATH,
  }
}

export default nextConfig;
