/** @type {import('next').NextConfig} */
const S3Domain = `${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com`

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: [
            S3Domain,
            'ducandkha-wedding-images-bucket.s3.us-west-2.amazonaws.com',
        ],
    },
}

module.exports = nextConfig
