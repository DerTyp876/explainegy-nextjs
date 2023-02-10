import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head />
      <body className="theme-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
