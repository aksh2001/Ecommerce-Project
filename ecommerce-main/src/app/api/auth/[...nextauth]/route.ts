import NextAuth from "next-auth/next";
import { authOptions } from "../../_utils/authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
