'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Navbar from './Navbar';
import NavbarLibrary from './NavbarLibrary';

const Header = () => {
    const path=usePathname();

    const validPaths = ['/login', '/registro', '/carrito'];    
    const adjustedPath = path.replace(/^\/(es|en)/, '');

    if(validPaths.includes(adjustedPath)){
        return <Navbar />
    }
    
    return <NavbarLibrary />    
}

export default Header