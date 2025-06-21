// next.config.js

module.exports = { 
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard', // Redirect root to dashboard
        permanent: true,
      },
    ];
  },

  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.myanimelist.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
