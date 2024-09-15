'use client'

import style from './navbar.module.scss'
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

import { usePathname } from 'next/navigation'
import { useState } from 'react';
import { i18n } from '../../../../i18n.config';

const Navbar = () => {

    const pathName=usePathname();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const redirectedPathName = (locale: string) => {
      if (!pathName) return '/'
      const segments = pathName.split('/')
      segments[1] = locale
      return segments.join('/')
    }

    return (
        <section className="container">
            <div className='hidden md:flex w-full'>
                <div className={`${style.navbar}`}>
                    <Link href={'/'}>
                      <p className={`${style.left_navbar}`}>Inicio</p>
                    </Link>
                    <div className={`${style.right_navbar}`}>
                        <p>Ayuda</p>
                        {/* <p>Es</p> */}
                        <ul className='flex gap-x-3 items-center'>
                        {i18n.locales.map(locale => {
                          return (
                            <li key={locale}>
                              <Link
                                href={redirectedPathName(locale)}
                                className='text-white'
                              >
                                {locale}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                        <button className="btn-blue">Usuarios</button>
                    </div>
                </div>
            </div>
            <div className='flex md:hidden flex-row justify-between h-[120px] items-center uppercase'>
              <Link href={'/'}>
                <p className='text-white'>Inicio</p>
              </Link>
                <Button id="basic-button" onClick={handleClick}>
                    <MenuIcon sx={{ color:'#fff'}} />
                </Button>
                <Menu id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                    sx={{
                        '& .MuiMenu-paper': {
                          backgroundColor: '#5D5E67', // Cambia el color de fondo aquí
                        }
                      }}
                    >
                        <MenuItem className='text-white border-b-2 border-white' onClick={handleClose}>Usuarios</MenuItem>
                        <MenuItem className='text-white' onClick={handleClose}>Ayuda</MenuItem>                        
                </Menu>
            </div>
        </section >
  )
}

export default Navbar