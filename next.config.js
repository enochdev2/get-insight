/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: 'cdn.pixabay.com', protocol: 'https', port: '' },
            {
                protocol : 'https',
                hostname : 'encrypted-tbn0.gstatic.com'
            },
            {
                protocol : 'https',
                hostname : 'res.cloudinary.com'
            },
            {
                protocol : 'https',
                hostname : "lh3.googleusercontent.com"
            },
            {
                protocol : 'https',
                hostname : "firebasestorage.googleapis.com"
            }
        ]
    },
}

module.exports = nextConfig
