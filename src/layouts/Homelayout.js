import Footer from "@/components/Footer";
import HomeNavbar from "@/components/HomeNavbar";
import React from "react";


export default function Homelayout({ children }) {
  return (
    <div > 
         <HomeNavbar/>
      <main>
      {children}
     </main>
      <Footer/>
  </div>
  );
}