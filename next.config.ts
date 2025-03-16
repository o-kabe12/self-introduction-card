/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // ✅ Turbopack を無効化
  },
  images: {
    domains: [`${process.env.NEXT_PUBLIC_SUPABASE_HOSTNAME_URL}`],
  },
};

module.exports = nextConfig;