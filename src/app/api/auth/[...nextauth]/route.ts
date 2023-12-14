import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import User from "@/models/User";
import bcrypt from "bcrypt"
import db from "@/lib/db";
import { jwtSignIn } from "@/lib/jwt";
import clientPromise from "@/lib/mongoClients";
// import { types } from "util";


export const authOptions: AuthOptions =  {
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID as string,
            clientSecret: process.env.CLIENT_SECRET as string,
          }),
        CredentialsProvider({
            type: 'credentials',
            credentials: { },
          async authorize(credentials, req){
                const {email, password:pass} = credentials as unknown as { email: string;
                password: string;
            };

                await db.connect()

                const user = await User.findOne({email})

                if(!user){
                    throw new Error("Invalid input")
                }
                const comparePassword = await bcrypt.compare(pass, user.password)

                if(!comparePassword) {
                    throw new Error("incorrect Email or Password")
                }else{

                    const {password, ...currentUser} = user._doc
    
                    const accessToken = await jwtSignIn(currentUser)
                    
                    return {
                        ...currentUser,
                        accessToken
                    }
                    
                }
            },
            
        }) 
    ],
    pages:{
        signIn: "/login"
    },
    callbacks: {
        async jwt({token, user}:{token:any,user:any}){
            if(user){
                token.accessToken = user.accessToken 
                token._id = user._id
            }

            return token
        },
        async session({session, token}:{session:any,token:any}){
            if(token){
                session.user._id = token._id
                session.user.accessToken = token.accessToken
            }

            return session
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
}


const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}