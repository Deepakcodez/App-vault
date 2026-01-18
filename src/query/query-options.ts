import { queryOptions } from "@tanstack/react-query";
import { authClient } from "lib/auth-client";
import { AUTH_QUERY_KEYS } from "./query-constants";

export const AuthQueryOptions = queryOptions({
    queryKey: AUTH_QUERY_KEYS.currentUser,
    queryFn: async () => await  authClient.getSession(),
    staleTime: 0,
    gcTime: 1000,
}) 