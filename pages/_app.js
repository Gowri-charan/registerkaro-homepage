import "../styles/globals.css"; // if _app.js is inside /pages

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
