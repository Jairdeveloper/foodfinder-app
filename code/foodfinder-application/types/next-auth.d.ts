import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      fdlst_private_userId?: string;
    };
  }

  interface JWT {
    fdlst_private_userId?: string;
  }
}