import Layout from "@/layouts/Homelayout";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Layout>
    <Component {...pageProps} />;
  </Layout>
  </NextUIProvider>
  )
    
    
  
  
}
