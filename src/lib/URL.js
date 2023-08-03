export const BACKEND_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_BACKEND_URL;
console.log("🚀 ~ file: URL.js ~ BACKEND_URL:", BACKEND_URL);
