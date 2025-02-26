/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   async redirects() {
      return [
        {
          source: '/',
          destination: '/about-us',
          permanent: true,
        },
      ]
    }, 
};

export default nextConfig;
