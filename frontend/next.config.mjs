/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // webpack: (config) => {
    //     config.resolve.extensions.push('.tsx', '.ts', '.js', '.css', '.d.ts');

    //     return config;
    // },
    i18n: {
        locales: ['es'],
        defaultLocale: 'es'
    },
    experimental: {
        turbo: {
            resolveExtensions: [
                '.tsx',
                '.ts',
                '.js',
                '.css',
                '.d.ts'
            ]
        }
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wallpapers.com',
                pathname: '/**'
            }
        ]
    }
  };

export default nextConfig;