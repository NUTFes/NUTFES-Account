import NextAuth, { AuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export const keycloak = KeycloakProvider({
  clientId: process.env.KEYCLOAK_ID!,
  clientSecret: process.env.KEYCLOAK_SECRET!,
  issuer: process.env.KEYCLOAK_ISSUER!,
});

export const authOptions: AuthOptions = {
  providers: [keycloak],
  secret: process.env.NEXTAUTH_SECRET!,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {},
};

export default NextAuth(authOptions);
