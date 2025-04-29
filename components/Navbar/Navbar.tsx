import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="container mx-auto lg:px-2 px-5 lg:w-2/5">
            <div className="container flex items-container justify-between mx-auto">
                <Link href={"/"} className="text-2xl font-medium">
                    Back to top
                </Link>
                <div>
                    <ul className="flex itmes-center text-sm py-4">
                        <li>
                            <Link href="/" className="block px-4 py-2 hover:text-sky-900 transition-all duration-300">Home</Link>
                        </li>
                        <li>
                            <Link href="https://x.com/ifhappyeverafte" className="block px-4 py-2 hover:text-sky-900 transition-all duration-300">Twitter</Link>
                        </li>
                        <li>
                            <Link href="#" className="block px-4 py-2 hover:text-sky-900 transition-all duration-300">Qiita</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;