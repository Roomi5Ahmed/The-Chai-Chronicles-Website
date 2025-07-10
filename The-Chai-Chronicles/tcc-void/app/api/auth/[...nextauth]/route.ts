// c:\WebDev\Claude-Code\tcc-void\app\api\auth\[...nextauth]\route.ts
import NextAuth, { AuthOptions } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import { type NextRequest, type NextResponse as Response } from 'next/server'; // Import NextRequest and Response for typing
import { User } from '@prisma/client';

// Prisma Client instantiation for Next.js development and production
declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers here
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req: any) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        // Add logic here to look up the user from the credentials supplied
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        });

        if (!user || !user.password) { // Assuming you add a 'password' field to your User model
          return null;
        }

        const isPasswordValid = await compare(credentials.password, user.password);

        if (isPasswordValid) {
          // Any object returned will be saved in `user` property of the JWT
          // Make sure to return a serializable object, excluding sensitive fields like password
          return { id: user.id, name: user.name, email: user.email, image: user.image };
        } else {
          // If you return null then an error will be displayed advising the user to check their details.\n          return null;
        }
      }
    })
    // ...add more providers here
  ],
  pages: {
    signIn: '/auth/signin', // Custom sign-in page
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not needed)
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    }
  }
};

const handler = NextAuth(authOptions);

// Define explicit GET and POST functions with NextRequest type and params for dynamic route
export async function GET(request: NextRequest, { params }: { params: { nextauth: string[] } }): Promise<Response> {
  return handler(request, { params });
}

export async function POST(request: NextRequest, { params }: { params: { nextauth: string[] } }): Promise<Response> {
    // Pass the request and params to the NextAuth handler
    return handler(request, { params });
}
