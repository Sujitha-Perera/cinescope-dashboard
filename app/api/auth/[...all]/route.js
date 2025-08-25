import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";
 
export const { GET,POST} = toNextJsHandler(auth);

// auth/[...all]/route.js-Designed for handling all auth routes
// This will handle all requests to /api/auth/*
// and will be passed to  th auth handler

// app/api/auth/[...all]/route.js

