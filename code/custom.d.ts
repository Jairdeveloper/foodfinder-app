import mongoose from "mongoose";
import { DefaultSession } from "next-auth";

import mongoose from "mongoose";

declare global {
  // eslint-disable-next-line no-var
  var mongoose:
    | {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      }
    | undefined;
}

export {};

declare module "next-auth" {
    interface Session {
        user: {
            fdlst_private_userId: string;
        } & DefaultSession["user"];
    }
}