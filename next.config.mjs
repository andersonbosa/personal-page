import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* https://lucide.dev/guide/packages/lucide-react#one-generic-icon-component */
  // transpilePackages: ['lucide-react']

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      }
    ]
  }
}

export default withNextIntl(nextConfig)
