/** @type {import('next').NextConfig} */
import dotenv from 'dotenv';

dotenv.config();

const nextConfig = {
    env: {
        APP_URL: process.env.APP_URL,
    },
};

export default nextConfig;
