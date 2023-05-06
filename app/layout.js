// import "./globals.css";

// import Head from "./head";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      {/* <head /> */}
      {/* <Head /> */}
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
