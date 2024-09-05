'use client'

import Image from 'next/image'
import logo from '@/assets/LogoW.png'
import { TextField } from '@mui/material'
import { inputStyle } from '@/utils/inputStyle'
import Link from 'next/link'
import { useState } from 'react'
import ForgotPassword from '@/components/forgotPassword/ForgotPassword'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react';
import toast, { Toaster } from 'react-hot-toast'


const Login = () => {

    const router=useRouter();

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
        } else {
            router.push("/carrito"); 
        }
        // router.push("/carrito"); 
    }


    return (
        <section className="container">
            <div className="main-container">
                <Image className="logo" width={512} height={330} src={logo} alt="Logo" />
                <div className="login-container input-white flex flex-col items-center justify-center content-center">
                    {!recoveryPassword ? (
                        <>
                            <h3 className='text-white my-3 text-xl'>Iniciar sesión</h3>
                            <div className='flex flex-col gap-4 w-10/12'>
                                <TextField
                                    className='w-full'
                                    label="Email"
                                    variant="outlined"
                                    type='email'
                                    sx={inputStyle}
                                    value={formData.email}
                                    onChange={(e)=>setFormData({...formData,email:e.target.value})}
                                     />
                                <TextField
                                    className='w-full'
                                    label="Contraseña"
                                    variant="outlined"
                                    sx={inputStyle} 
                                    type='password'
                                    value={formData.password}
                                    onChange={(e)=>setFormData({...formData,password:e.target.value})}
                                    /> 
                                <Toaster />                                   
                            </div>
                            <p onClick={() => setRecoveryPassword(prev => !prev)} className="p-link">Olvide mi contraseña</p>
                            <button className="btn-light">continuar con google</button>
                            <button className="btn-light">continuar con facebook</button>
                            <Link href={'/registro'} >
                                <p className="p-link">Soy nuevo</p>
                            </Link>
                            <button onClick={handleLogin} className="btn-light">Iniciar sesión</button>

                            <p className="p-info text-white">Al hacer click en pagar estas aceptando los </p>
                            <p className="p-link-white">términos y condiciones</p>
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