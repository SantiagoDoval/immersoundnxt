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
import SwitchLanguage from '@/components/switchLanguage/SwitchLanguage';
import useGetText from '@/hooks/useGetText';
import { RedirectTo } from '@/utils/redirectTo';

const NavbarLibrary = () => {

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
        <div className={style.navbar_library}>
            <Image src={logo} width={75} height={75} alt="Logo" className={style.logo} />

            <div className={style.navbar_library_right}>
                <SwitchLanguage />
                <p className={style.help}>{t?.help}</p>
                <div>
                    <Button id="basic-button" onClick={handleClick}>
                        <p className="btn-blue">
                        {t?.users}
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
                        <Link href={RedirectTo('perfil')}>
                           <MenuItem className='!text-white border-b-2 border-white' onClick={handleClose}>{t?.myProfile}</MenuItem>
                        </Link>
                        <Link href={RedirectTo('biblioteca')}>
                            <MenuItem className='!text-white' onClick={handleClose}>{t?.library}</MenuItem>
                        </Link>
                        <Link href={''}>
                            <MenuItem className='!text-white' onClick={handleClose}>{t?.plans}</MenuItem>
                        </Link>
                        <button onClick={() => signOut({ callbackUrl: '/login' })}>
                            <MenuItem className='!text-white' onClick={handleClose}>{t?.singOut}</MenuItem>
                        </button>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default NavbarLibrary