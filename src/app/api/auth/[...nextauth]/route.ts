export const runtime = 'nodejs';


import NextAuth from 'next-auth';
import authOptions from '@/lib/authOptions';
 
const authResult = NextAuth(authOptions);

export {authResult as POST,authResult as GET}