/** @type {import('next').NextConfig} */

import path from "path"

const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    sassOptions: {
        includePaths: [path.join(process.cwd(), "/src/styles")]
    }
};

export default nextConfig;
