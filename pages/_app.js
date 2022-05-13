import { BookProvider } from "../context/BookContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <BookProvider>
      <Component {...pageProps} />
    </BookProvider>
  );
}

export default MyApp;
