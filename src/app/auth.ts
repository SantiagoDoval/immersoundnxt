// import { AuthenticationServices } from "@/services/authentication/authentication.services";
// import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";

// export const {handlers, signIn, signOut,auth}=NextAuth({
//     providers:[
//         Credentials({
//             credentials:{
//                 email:'luisjaviermezahernandez@gmail.com',
//                 password:'123456'
//             },
//             authorize:async(credentials)=>{
//                 try{
//                         const response=await AuthenticationServices.userLogin({
//                             email:'luisjaviermezahernandez@gmail.com',
//                             password:'123456',
//                         })
    
//                         if (response ) {
//                             return {id:'1',email:'daljl@hff.com'};
//                         } else {
//                             return null;
//                         }
    
//                     } catch(error){
//                         console.error("Error during authorization:", error);
//                           return null;
//                     }
//                 }
//         })
//     ]
// })