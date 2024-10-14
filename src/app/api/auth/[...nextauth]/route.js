// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

// Configure NextAuth.js
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,  // Google Client ID
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,  // Google Client Secret
    }),
    GithubProvider({  
        clientId: process.env.GITHUB_CLIENT_ID,  // GitHub Client ID
        clientSecret: process.env.GITHUB_CLIENT_SECRET,  // GitHub Client Secret
      }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async redirect({ url, baseUrl}) {
        return baseUrl;
    },
  },
});

export { handler as GET, handler as POST };
