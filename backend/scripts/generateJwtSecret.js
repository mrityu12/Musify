import crypto from 'crypto';
const jwtSecret = crypto.randomBytes(32).toString('hex');

console.log('Generated JWT Secret:', jwtSecret);