import '../styles/globals.css';


function MyApp({ Component, pageProps }: { Component: React.ComponentType<any>; pageProps: any }) {
  return (
    <div className="bg-[#F0DC82] min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

