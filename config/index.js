const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'http://a-knaw-knee-mus-next-test.vercel.app';