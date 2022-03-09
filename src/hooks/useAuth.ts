import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/src/lib/firebase"

export function useAuth () {
  return useAuthState(auth)
}