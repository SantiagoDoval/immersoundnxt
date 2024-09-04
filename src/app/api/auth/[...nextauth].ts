
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


export default NextAuth({
    providers:[
        CredentialsProvider({
            name:'login',
            credentials:{
                // email:{label:'email',type:'email'},
                // password:{label:'password',type:'password'}
            },
            async authorize(credentials){                

                // if(credentials?.email=='luisjaviermezahernandez@gmail.com' && credentials.password=='123456'){}
                // console.log( {email:credentials?.email,password:credentials?.password})
                return ({email:'email',password:'password'})
                // try{
                //     const response=await AuthenticationServices.userLogin({
                //         email:credentials?.email,
                //         password:credentials?.password,
                //     })

                //     console.log(response)

                //     return null
                // } catch(error){
                //     return null
                // }
            },
            
        })
    ],
    pages: {
        signIn: '/login', 
    },
})

