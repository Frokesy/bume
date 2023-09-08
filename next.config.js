/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}
require('next-transpile-modules')(['three'])

module.exports = nextConfig