'use client'

import { useRouter } from 'next/router'
import Image from 'next/image'
import logo from '@/assets/LogoW.png'
import {  useEffect, useState } from 'react'
import { AuthenticationServices } from '@/services/authentication/authentication.services'
import { TextField } from '@mui/material'
import { inputStyle } from '@/utils/inputStyle'
import Link from 'next/link'
import toast from 'react-hot-toast'

const Registro = () => {

    const [formData,setFormData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        country:'',
        confirmPassword:'',
        termAndCondition:true
    })

    const [errors,setErrors]=useState<any>({})
    const [submittedData,setSubmittedData]=useState<any>([])

    const handleInputChange=(e:any)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const validateForm=()=>{
        let formIsValid=true;
        let newErrors={
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            country:'',
            termAndCondition:''
        };

        if(!formData.firstName){
            newErrors.firstName='Nombre obligatorio'
            formIsValid=false;
        }

        if(!formData.lastName){
            newErrors.lastName='Apellido obligatorio'
            formIsValid=false;
        }

        
        if(!formData.country){
            newErrors.country='País obligatorio'
            formIsValid=false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!formData.email || !emailRegex.test(formData.email)){
            newErrors.email = "Debe ingresar un correo válido";
            formIsValid=false;
        }

        if (!formData.password) {
            newErrors.password = "La contraseña es obligatoria";
            formIsValid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = "La contraseña debe tener al menos 6 caracteres";
            formIsValid = false;
        }

        if (formData.confirmPassword !== formData.password) {
            newErrors.password = "Las contraseñas no coinciden";
            formIsValid = false;
        }

        setErrors(newErrors)
        return formIsValid

    }

    const onSubmit=async (e:any)=>{
        e.preventDefault();       

        if(validateForm()){

            const {confirmPassword,...dataToSubmit}=formData;

            setSubmittedData([...submittedData,dataToSubmit])
            
            // const payload={
            //     email: "luisjaviermezahernandez+10@gmail.com",
            //     password: "123456",
            //     lastName: "Meza",
            //     firstName: "luis",
            //     country: "Colombia",
            //     termAndCondition: true
            // }        

            try {
                const response=await AuthenticationServices.userRegistration(dataToSubmit)
                if(response.status!==201 || response.data.code !==200){
                    toast.error('Error creando nuevo usuario');
                    return;
                }
                if(response.status===201 && response.data.code ===200){                                                
                    toast('Cuenta pendiente de confirmación', {
                        duration: 3000,
                        icon:'📧'
                    })
                    setTimeout(()=>{
                    }, 3000)
                }
            } catch (error) {
                toast.error('Error creando nuevo usuario');
                console.log(error)
            }
            setErrors({})
        }
    }
    return (
        <section className="container">
            <div className="main-container">
                <Image className="logo" width={512} height={330} src={logo} alt="Logo" />
                <form onSubmit={onSubmit} className="singin-container input-white flex flex-col w-full items-center justify-center">
                    <h3 className='text-white my-3 text-xl'>Bienvenido a Immersound</h3>
                    <div className="row-input-2 my-2">
                        <TextField
                            className='w-full'                             
                            label="Nombre" 
                            type='text'
                            variant="outlined" 
                            sx={inputStyle}
                            name='firstName'
                            value={formData.firstName} 
                            onChange={handleInputChange}
                            helperText={errors.firstName}
                            /> 
                        <TextField 
                            className='w-full'  
                            label="Apellido" 
                            type='text'
                            variant="outlined" 
                            sx={inputStyle}
                            name='lastName'
                            value={formData.lastName} 
                            onChange={handleInputChange}
                            helperText={errors.lastName}
                            /> 
                    </div>
                    <div className="row-input-2 my-2">
                        <TextField 
                                className='w-full'  
                                label="Email" 
                                type='text'
                                variant="outlined" 
                                sx={inputStyle}
                                name='email'
                                value={formData.email} 
                                onChange={handleInputChange}
                                helperText={errors.email}
                                /> 
                        <TextField 
                                className='w-full'  
                                label="Contraseña" 
                                type='password'
                                variant="outlined" 
                                sx={inputStyle}
                                name='password'
                                value={formData.password} 
                                onChange={handleInputChange}
                                helperText={errors.password}
                                /> 
                    </div>
                    <div className="row-input-2 my-2">
                    <TextField 
                                className='w-full'  
                                label="Pais" 
                                type='text'
                                variant="outlined" 
                                sx={inputStyle}
                                name='country'
                                value={formData.country} 
                                onChange={handleInputChange}
                                helperText={errors.country}
                                /> 
                        <TextField 
                                className='w-full'  
                                label="Confirmar contraseña" 
                                type='password'
                                variant="outlined" 
                                sx={inputStyle}
                                name='confirmPassword'
                                value={formData.confirmPassword} 
                                onChange={handleInputChange}
                                helperText={errors.confirmPassword}/>                        
                    </div>
                    <div className="row-input-2 w-11/12 self-center mt-5">
                        <button className="btn-light">continuar con google</button>
                        <button className="btn-light">continuar con facebook</button>
                    </div>
                    <Link href={'/login'}>
                        <p className="p-link">¿Ya tienes un cuenta?</p>
                    </Link> 
                    <button className="btn-blue" type='submit' > registrarme</button >
                    <p className="p-info text-white">Al hacer click en pagar estas aceptando los </p>
                    <p className="p-link-white">términos y condiciones</p>
                </form >
            </div>
        </section>
    )
}

export default Registro