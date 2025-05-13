import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <h1 className="text-2xl font-bold">Product Management</h1>
            <nav className="mt-2">
                <Link href="/" className="mr-4">Home</Link>
                <Link href="/products">Products</Link>
            </nav>
        </header>
    );
};

export default Header;