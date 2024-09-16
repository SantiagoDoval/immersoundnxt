'use client'

import SwitchLanguage from '@/components/switchLanguage/SwitchLanguage';
import style from './navbar.module.scss'
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useState } from 'react';
import useGetText from '@/hooks/useGetText';
import { RedirectTo } from '@/utils/redirectTo';

const Navbar = () => {

    const {t}=useGetText('component','menu')

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
                    <Link href={RedirectTo('')}>
                      <p className={`${style.left_navbar}`}>{t?.home}</p>
                    </Link>
                    <div className={`${style.right_navbar}`}>
                        <p>{t?.help}</p>
                        {/* <p>Es</p> */}
                        <SwitchLanguage />
                        <button className="btn-blue">{t?.users}</button>
                    </div>
                </div>
            </div>
            <div className='flex md:hidden flex-row justify-between h-[120px] items-center uppercase'>
              <Link href={RedirectTo('')}>
                <p className='text-white'>{t?.home}</p>
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
                        <MenuItem className='text-white border-b-2 border-white' onClick={handleClose}>{t?.users}</MenuItem>
                        <MenuItem className='text-white' onClick={handleClose}>{t?.help}</MenuItem>                        
                </Menu>
            </div>
        </section >
  )
}

export default Navbar