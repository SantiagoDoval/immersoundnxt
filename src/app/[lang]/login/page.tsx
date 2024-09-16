'use client'

import Image from 'next/image'
import logo from '@/assets/LogoW.png'
import { TextField } from '@mui/material'
import { inputStyle } from '@/utils/inputStyle'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ForgotPassword from '@/components/forgotPassword/ForgotPassword'
import { useRouter } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react';
import toast, { Toaster } from 'react-hot-toast'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import useGetText from '@/hooks/useGetText'
import { RedirectTo } from '@/utils/redirectTo'


const Login = () => {

    const {t,lang}=useGetText('page','login');    

    const router=useRouter();

    const { data: session, status } = useSession();

    useEffect(() => {        
		if (status === 'authenticated') {
			router.push(`/${lang}/biblioteca`);
		}
	}, [status]);

    const [recoveryPassword, setRecoveryPassword] = useState(false);
    const [formData,setFormData]=useState({
        email:'luisjaviermezahernandez@gmail.com',
        password:'123456'
    })

    const handleLogin = async () => { 
        
        const result=await signIn('credentials',{
            redirect:false,
            email:formData.email,
            password:formData.password
        })            
        
        if (result?.error) {
            toast.error('Usuario y contraseña incorrectas')
            return;
        }        
        router.push("/carrito"); 
    }

    
        if( status==='loading' || status==='authenticated'){
            return (
                <div className='flex flex-col w-full mt-40 items-center justify-center'>            
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                    <p className='text-white mt-5'>Loading...</p>
                </div>
            );
        }    

    return (
        <section className="container">
            <div className="main-container">
                <Image className="logo" width={512} height={330} src={logo} alt="Logo" />
                <div className="login-container input-white flex flex-col items-center justify-center content-center">
                    {!recoveryPassword ? (
                        <>
                            <h3 className='text-white my-3 text-xl'>{t?.title}</h3>
                            <div className='flex flex-col gap-4 w-10/12'>
                                <TextField
                                    className='w-full'
                                    label="Email"
                                    variant="outlined"
                                    type='email'
                                    sx={inputStyle}
                                    value={formData.email}
                                    onChange={(e)=>setFormData({...formData,email:e.target?.value})}
                                     />
                                <TextField
                                    className='w-full'
                                    label={`${t?.password}`}
                                    variant="outlined"
                                    sx={inputStyle} 
                                    type='password'
                                    value={formData.password}
                                    onChange={(e)=>setFormData({...formData,password:e.target?.value})}
                                    /> 
                                <Toaster />                                   
                            </div>
                            <p onClick={() => setRecoveryPassword(prev => !prev)} className="p-link">{t?.forgotPassword}</p>
                            <button className="btn-light">{t?.loginGoogle}</button>
                            <button className="btn-light">{t?.loginFacebook}</button>
                            <Link href={RedirectTo('registro')} >
                                <p className="p-link">{t?.newUser}</p>
                            </Link>
                            <button onClick={handleLogin} className="btn-light">{t?.login}</button>

                            <p className="p-info text-white">{t?.tandcDescription}</p>
                            <p className="p-link-white">{t?.tandc}</p>
                        </>
                    ) : (
                        <ForgotPassword setRecoveryPassword={setRecoveryPassword} />
                    )}
                </div>
            </div >
        </section >
    )
}

export default Login