'use client'

import Image from 'next/image'
import logo from '@/assets/LogoW.png'
import { TextField } from '@mui/material'
import { inputStyle } from '@/utils/inputStyle'
import Link from 'next/link'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { AuthenticationServices } from '@/services/authentication/authentication.services'
import ForgotPassword from '@/components/forgotPassword/ForgotPassword'
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Login = () => {

    const router=useRouter();

    const [recoveryPassword, setRecoveryPassword] = useState(false);

    const handleLogin = async () => {
        router.push('/carrito')
        // signIn('login')
        // const result = await signIn("credentials", {
        //     redirect: false,
        //     email:'luisjaviermezahernandez@gmail.com',
        //     password:'123456'
        // });

        // if (result?.error) {
        //     console.log("Credenciales incorrectas, por favor inténtalo de nuevo.");
        // } else {
        //     router.push("/carrito"); 
        // }
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
                                    sx={inputStyle} />
                                <TextField
                                    className='w-full'
                                    label="Contraseña"
                                    variant="outlined"
                                    sx={inputStyle} />
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