import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface MyUser {
  id: string;
  name: string;
  email: string;
  // Remove unnecessary data field for Edge Runtime compatibility
  // data: any;
}

async function authorize(credentials: Record<"email" | "password", string> | undefined, req: any): Promise<MyUser | null> {
  // Implement your custom authentication logic here (replace with your database/API interaction)
  if (credentials?.email === 'luisjaviermezahernandez@gmail.com' && credentials?.password === '123456') {
    return {
      id: '1',
      name: 'luis',
      email: 'luisjaviermezahernandez@gmail.com',
      // Remove user.token as it's not required for Edge Runtime authentication
    } as MyUser;
  }
  return null;
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize,
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 60, // Adjust session expiration as needed
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET, // Replace with a secure secret
  },
});