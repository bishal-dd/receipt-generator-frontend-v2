import { currentUser } from "@clerk/nextjs/server";

export const useAuth = async () => {
  const userData = await currentUser();
  const isSignedIn = !!userData;

  return { isAuthenticated: isSignedIn };
};
