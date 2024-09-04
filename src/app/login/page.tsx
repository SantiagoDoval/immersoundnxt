'use client'

import Image from 'next/image'
import logo from '@/assets/LogoW.png'
import { TextField } from '@mui/material'
import { inputStyle } from '@/utils/inputStyle'
import Link from 'next/link'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { AuthenticationServices } from '@/services/authentication/authentication.services'

const Login = () => {

    const [email,setEmail]=useState<string>('')
    const [recoveryPassword, setRecoveryPassword] = useState(false);


    const handleRecoveryPassword = async () => {

        if (!email) return toast('Ingresa un correo valido')        

        try {
            const response=await AuthenticationServices.userRecoveryPassword({email})
            if(response.status!==200 || response.data.code ===400){                
                toast('Usuario no encontrado');
            }
            if(response.status===200 && response.data.code ===200){  
                            
                toast('Enlace para restablecer contraseña enviada al correo', {
                    duration: 3000,
                    icon:'📧'
                })
                setTimeout(()=>{
                    setRecoveryPassword(!email)
                }, 3000)
            }
        } catch (error) {
            toast('Usuario no encontrado');
        }

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
                            <Link href={'/carrito'}>
                                <button className="btn-light">Iniciar sesión</button>
                            </Link>
                            <p className="p-info text-white">Al hacer click en pagar estas aceptando los </p>
                            <p className="p-link-white">términos y condiciones</p>
                        </>
                    ) : (
                        <>
                            <h3 className='text-white my-3 text-xl'>¿Olvidaste tu contraseña?</h3>
                            <p className="p-info text-white !mb-5">Escribe el correo electrónico con el cuál te registraste y te enviaremos las instrucciones de restablecimiento.</p>
                            <TextField
                                className='w-full !mb-5'
                                label="Email"
                                variant="outlined"
                                sx={inputStyle}
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)} />
                            <button onClick={handleRecoveryPassword} className="btn-light">Enviar</button>
                            <Toaster />
                            <p onClick={() => setRecoveryPassword(prev => !prev)} className="p-link">Iniciar sesión</p>

                        </>
                    )}
                </div>
            </div >
        </section >
    )
}

export default Login