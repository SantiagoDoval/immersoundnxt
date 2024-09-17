import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';

// Custom function to create a lightweight token without crypto dependency
function createSimpleToken(email: string) {
  // A basic token structure without using any cryptographic hashing
  return `simple-token-${email}`;
}

const authOptions: NextAuthOptions = {
  providers:[
    
  ]
  // providers: [
  //   CredentialsProvider({
  //     name: 'Credentials',
  //     credentials: {
  //       email: { label: 'Email', type: 'text' },
  //       password: { label: 'Password', type: 'password' },
  //     },
  //     async authorize(credentials, req) {
  //       const token = createSimpleToken(credentials?.email || '');

  //       if (credentials?.email === 'luisjaviermezahernandez@gmail.com' && credentials.password === '123456') {
  //         const user = {
  //           id: '1',
  //           name: 'luis',
  //           email: 'luisjaviermezahernandez@gmail.com',
  //           token,
  //           data: {
  //             message: 'Payment not found',
  //             code: 400,
  //             data: null,
  //           },
  //         };

  //         return user;
  //       }
  //       return null;
  //     },
  //   }),
  // ],
  // session: {
  //   strategy: 'jwt', // You can still use the 'jwt' strategy, just ensure it's lightweight
  // },
  // callbacks: {
  //   async jwt({ token, user }: any) {
  //     if (user) {
  //       token.token = user.token;
  //     }
  //     return token;
  //   },
  //   async session({ session, token }: { session: any; token: JWT }) {
  //     session.token = token.token;
  //     return session;
  //   },
  // },
};

export default authOptions;
