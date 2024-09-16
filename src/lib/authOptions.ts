import { AuthenticationServices } from '@/services/authentication/authentication.services';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";

const authOptions:NextAuthOptions={
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
              },
              async authorize(credentials, req) {
                const token=generateToken('1')

                if(credentials?.email==='luisjaviermezahernandez@gmail.com' && credentials.password==='123456'){
                  const user={
                    id:'1',
                    name:'luis',
                    email:'luisjaviermezahernandez@gmail.com',
                    token,
                    data:{
                      message: "Payment not found",
                      code: 400,
                      data: null
                    }
                  };

                  return user;

                }
                return null
                
              // try{
              //     const response=await AuthenticationServices.userLogin({
              //         email:'luisjaviermezahernandez@gmail.com',
              //         password:'123456',
              //     })                 
              //     console.log(response,'exito')
                  
              //     if (response ) {
              //         return {id:'1',email:'daljl@hff.com'};
              //     } else {
              //       console.log('test')
              //         return null;
              //     }

              // }catch(error){
              //     console.error("Error during authorization:", error);
              //     // console.error("Error during authorization:");
              //     return null;
              // }
            }
        })       
    ],
    session: {
      strategy: 'jwt',      
    },
    callbacks: {
      async jwt({ token, user }:any) {
        if (user) {
          // Incluye el token temporal en el objeto JWT
          token.token = user.token;
        }
        return token;
      },
      async session({ session, token }: { session: any; token: JWT }) {
        // Añade el token a la sesión para usarlo en el cliente
        session.token = token.token;
        return session;
      }
    },
}

const generateToken = (userId: string) => {
  return `fake-token-${userId}-${Date.now()}`; // Simulación
};

export default authOptions;