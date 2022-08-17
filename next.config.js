/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // redirects: async() => {
  //   return([
  //     {
  //       source: '/auth',
  //       destination: '/',
  //       permanent: true
  //     }
  //   ])
  // }
}

module.exports = nextConfig
// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: '/auth',
//         destination: '/',
//         permanent: true,
//       },
//     ]
//   },
// }