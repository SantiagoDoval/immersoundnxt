
// import { AuthenticationServices } from "@/services/authentication/authentication.services";
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// export default NextAuth({
//     session: {
//         strategy: 'jwt',        
//       },
//     providers:[
        
//         CredentialsProvider({
//             id:'Credentials',
//             name:'Credentials',
//             credentials:{
//                 email:{label:'email',type:'email'},
//                 password:{label:'password',type:'password'}
//             },
//             async authorize(credentials){ 
//                     const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

//                   if (user) {
//                     // Any object returned will be saved in `user` property of the JWT
//                     return user
//                   } else {
//                     // If you return null then an error will be displayed advising the user to check their details.
//                     return null
            
//                     // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
//                 }

//                 // try{
//                 //     const response=await AuthenticationServices.userLogin({
//                 //         email:'luisjaviermezahernandez@gmail.com',
//                 //         password:'123456',
//                 //     })

//                 //     if (response ) {
//                 //         return {id:'1',email:'daljl@hff.com'};
//                 //     } else {
//                 //         return null;
//                 //     }

//                 // } catch(error){
//                 //     console.error("Error during authorization:", error);
//                 //       return null;
//                 // }
//             },
            
//         })
//     ],
//     pages: {
//         signIn: '/',
//     },
//     callbacks: {
//         async jwt({ token, user }) {
//           if (user) {
//             token.id = user.id;
//             // token.accessToken = user.accessToken; // si tienes un token de acceso
//           }
//           return token;
//         },
//         async session({ session, token }) {
//         //   session.user.id = token.id;
//         //   session.user.accessToken = token.accessToken; // si tienes un token de acceso
//           return session;
//         },
//     },
// })

