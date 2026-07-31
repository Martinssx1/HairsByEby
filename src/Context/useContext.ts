import { useContext, createContext } from "react";
import type { Contexttypes } from "./HairContext";
export const context = createContext<Contexttypes | undefined>(undefined);
export function useHairContext() {
  const allContext = useContext(context);
  if (allContext === undefined) {
    throw new Error("must be within provider");
  }
  return allContext;
}
