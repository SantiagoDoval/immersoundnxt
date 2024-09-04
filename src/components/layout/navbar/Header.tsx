'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Navbar from './Navbar';
import NavbarLibrary from './NavbarLibrary';

const Header = () => {
    const path=usePathname();

    if(path==='/login' || path==='/registro' || path==='/carrito'){
        return <Navbar />
    }
    
    return <NavbarLibrary />    
}

export default Header