import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import User from "@/models/User";
import bcrypt from "bcrypt";
import db from "@/lib/db";
import { jwtSignIn } from "@/lib/jwt";
import clientPromise from "@/lib/mongoClients";

export const authOptions: AuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password: pass } = credentials as unknown as {
          email: string;
          password: string;
        };

        await db.connect();

        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("Invalid input");
        }
        const comparePassword = await bcrypt.compare(pass, user.password);

        if (!comparePassword) {
          throw new Error("incorrect Email or Password");
        } else {
          const { password, ...currentUser } = user._doc;

          const accessToken = await jwtSignIn(currentUser);

          return {
            ...currentUser,
            accessToken,
            user,
          };
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.accessToken = user.accessToken;
        token._id = user._id;
        token.role = user.role;
        token.username = user.username;
        token.avatar = user.avatar;
        token.country = user.country;
        token.city = user.city;
        token.phone = user.phone;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token) {
        session.user._id = token._id;
        session.user.accessToken = token.accessToken;
        session.user.role = token.role;
        session.user.role = token.role;
        session.user.name = token.username;
        session.user.image = token.avatar;
        session.user.city = token.city;
        session.user.country = token.country;
        session.user.phone = token.phone;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};
