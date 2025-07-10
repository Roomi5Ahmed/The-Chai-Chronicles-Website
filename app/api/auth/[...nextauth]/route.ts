import NextAuth from "next-auth";
import { authOptions } from "./lib/auth"; // Assuming `lib/auth.ts` exists

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
