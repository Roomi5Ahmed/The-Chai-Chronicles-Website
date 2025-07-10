import { withAuth } from "next-auth/middleware"

export default withAuth(
  // `withAuth` augments your AuthOptions with a `authorized` callback
  // where you can define your access control for the middleware
  // This callback is only called when the token is validated and available
  // You can write your authorization logic here
  function middleware (req) {
    // Add any additional middleware logic here if needed
  },
  {
    callbacks: {
      authorized: ({ token }) => token !== null,
    },
    pages: {
      signIn: '/auth/signin',
    }
  }
);

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|auth/signin|auth/signup).*) Exclusion for public routes']
};