export const jwtConstants = {
    IS_PUBLIC_KEY: 'isPublic',
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '1d',
};