import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/utils/db";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        // Rechercher l'utilisateur dans la base de données
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        // Si l'utilisateur n'est pas trouvé
        if (!user || !user.hashedPassword) {
          throw new Error("Invalid credentials");
        }

        // Comparer le mot de passe saisi avec le mot de passe haché de la base de données
        const isPasswordValid = await bcrypt.compare(
          credentials.password, // Le mot de passe brut saisi
          user.hashedPassword // Le mot de passe haché dans la base de données
        );

        // Si le mot de passe est incorrect
        if (!isPasswordValid) {
          throw new Error("Invalid credentials");
        }

        // Retourner l'utilisateur si l'authentification est réussie
        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
 
  debug: process.env.NODE_ENV !== "production",
};


