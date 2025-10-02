import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { bearer } from "better-auth/plugins";

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",

  }),
  plugins: [bearer()],
  baseURL: process.env.AUTH_BASE_URL ?? "http://localhost:3000",
  emailAndPassword: {
    enabled: true,
    // you can add config: requireEmailVerification, etc.
  },
  user: {
    additionalFields: {
       phone: { type: "string"},
    }
  }
});
