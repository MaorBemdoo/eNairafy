/** @type {import('next').NextConfig} */

import path from "path"

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.chec.io"
            }
        ]
    },
    sassOptions: {
        includePaths: [path.join(process.cwd(), "/src/styles")]
    }
};

export default nextConfig;
