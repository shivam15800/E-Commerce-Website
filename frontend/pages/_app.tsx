import type { AppProps } from 'next/app';  // Import correct types
import '../styles/globals.css';  // Corrected CSS import path

function MyApp({ Component, pageProps }: AppProps) {  // Use correct types
  return <Component {...pageProps} />;
}

export default MyApp;
