'use client'

import style from './navbar.module.scss'
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const Navbar = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <section className="container">
            <div className='hidden md:flex w-full'>
                <div className={`${style.navbar}`}>
                    <p className={`${style.left_navbar}`}>Inicio</p>
                    <div className={`${style.right_navbar}`}>
                        <p>Ayuda</p>
                        <p>Es</p>
                        <button className="btn-blue">Usuarios</button>
                    </div>
                </div>
            </div>
            <div className='flex md:hidden flex-row justify-between h-[120px] items-center uppercase'>
                <p className='text-white'>Inicio</p>
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