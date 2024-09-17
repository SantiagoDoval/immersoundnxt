import { AuthenticationServices } from '@/services/authentication/authentication.services';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Simulación de token sin depender de Node.js API específicas
                const token = `edge-token-1`;

                if (credentials?.email === 'luisjaviermezahernandez@gmail.com' && credentials.password === '123456') {
                    const user = {
                        id: '1',
                        name: 'luis',
                        email: 'luisjaviermezahernandez@gmail.com',
                        token,
                        data: {
                            message: "Payment not found",
                            code: 400,
                            data: null
                        }
                    };

                    return user;
                }
                return null;
            }
        })
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.token = user.token;
            }
            return token;
        },
        async session({ session, token }: { session: any; token: JWT }) {
            session.token = token.token;
            return session;
        }
    },
};

// Eliminado el uso de Date.now() para evitar problemas en Edge
export default authOptions;
