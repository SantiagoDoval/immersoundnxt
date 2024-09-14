'use client'
import Image from 'next/image'
import style from './navbar.module.scss'
import logo from '@/assets/IsotipoW.png'
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import LanguageSwitcher from '@/components/languageSwitcher/LanguageSwitcher ';

const NavbarLibrary = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={style.navbar_library}>
            <Image src={logo} width={75} height={75} alt="Logo" className={style.logo} />

            <div className={style.navbar_library_right}>
                <p className={style.help}>Ayuda</p>
                <div>
                    <Button id="basic-button" onClick={handleClick}>
                        <p className="btn-blue">
                            Usuario
                        </p>
                    </Button>
                    {/* <LanguageSwitcher /> */}
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
                        <Link href={'/perfil'}>
                           <MenuItem className='!text-white border-b-2 border-white' onClick={handleClose}>Mi perfil</MenuItem>
                        </Link>
                        <Link href={'/biblioteca'}>
                            <MenuItem className='!text-white' onClick={handleClose}>Biblioteca</MenuItem>
                        </Link>
                        <Link href={''}>
                            <MenuItem className='!text-white' onClick={handleClose}>Planes</MenuItem>
                        </Link>
                        <button onClick={() => signOut({ callbackUrl: '/login' })}>
                            <MenuItem className='!text-white' onClick={handleClose}>Cerrar sesión</MenuItem>
                        </button>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default NavbarLibrary