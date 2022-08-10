/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //basePath: '/spring-summer-2023-fashion-show',
  trailingSlash: true,
  rewrites() {
    return {
        beforeFiles: [
            // if the host is `app.acme.com`,
            // this rewrite will be applied
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'nextjs-subfolder.vercel.app',
                    },
                ],
                destination: 'https://nextjs-root.vercel.app/spring-summer-2023-fashion-show/:path*',
            },
        ]
    }
}
}

module.exports = nextConfig
