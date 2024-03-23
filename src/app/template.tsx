import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Slogan from "@/components/slogan";
import React from "react";

export default function Template({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div>
            <NavBar />
            {children}
            <Slogan />
            <Footer />
        </div>
    )
}