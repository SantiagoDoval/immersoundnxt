'use client'

import useGetText from "@/hooks/useGetText"
import { AuthenticationServices } from "@/services/authentication/authentication.services"
import { inputStyle } from "@/utils/inputStyle"
import { TextField } from "@mui/material"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"

const ForgotPassword = ({ setRecoveryPassword }: any) => {

    const {t}=useGetText('page','login');   

    const [email,setEmail]=useState<string>('')

    const handleRecoveryPassword = async () => {

        if (!email) return toast('Ingresa un correo valido')

        try {
            const response = await AuthenticationServices.userRecoveryPassword({ email })
            if (response.status !== 200 || response.data.code === 400) {
                toast('Usuario no encontrado');
            }
            if (response.status === 200 && response.data.code === 200) {

                toast('Enlace para restablecer contraseña enviada al correo', {
                    duration: 3000,
                    icon: '📧'
                })
                setTimeout(() => {
                    setRecoveryPassword(!email)
                }, 3000)
            }
        } catch (error) {
            toast('Usuario no encontrado');
        }

    }
    return (
        <>
            <h3 className='text-white my-3 text-xl'>{t?.titleForgot}</h3>
            <p className="p-info text-white !mb-5">{t?.descriptionForgot}</p>
            <TextField
                className='w-full !mb-5'
                label="Email"
                variant="outlined"
                sx={inputStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handleRecoveryPassword} className="btn-light">{t?.send}</button>
            <Toaster />
            <p onClick={() => setRecoveryPassword((prev:boolean) => !prev)} className="p-link">{t?.login}</p>

        </>
    )
}

export default ForgotPassword