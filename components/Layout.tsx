import React from "react";
import Navbar from "./Navbar/Navbar";

const Layout = ({children}) =>{
    return <div>
        <Navbar></Navbar>
        {children}
        </div>
}

export default Layout;