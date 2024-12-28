import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

// NextAuth konfiguratsiyasi
export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, token }:any) {
      session.user.username = session?.user?.name
        ?.split(" ")
        .join("")
        .toLowerCase();
      session.user.uid = token.sub;
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
  secret: process.env.SECRET_KEY,
};

// GET va POST metodlari uchun eksport
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };