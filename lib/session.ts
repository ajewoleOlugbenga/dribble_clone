import { getServerSession } from "next-auth";
import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from 'next-auth/providers/google';
import jsonWebtoken from 'jsonwebtoken';
import { JWT } from "next-auth/jwt";
import { SessionInterface } from '@/common.types';


export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOODLE_CLIENT_SECRET!,
        })
    ],

    // jwt: {
    //     encode: ({ secret, token }) => {

    //     },
    //     decode: ({ secret, token }) => {

    //     }
    // },
    theme: {
        colorScheme: 'light',
        logo: '/logo.png',
    },
   callbacks: {
    async session ({ session }) {
    return session;

    },
    async signIn ({ user }:{user: AdapterUser | User}) {
        try {
            //get the user if they exist

            //if they dont exist, create them

            return true;
            
        } catch (error:any) {
            console.log(error);
            return false;
            
        }

    }
   } 
        
}

export async function getCurrentUser() {
    const session = await getServerSession(authOptions) as SessionInterface;

    return session;
}