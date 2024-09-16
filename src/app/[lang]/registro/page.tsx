'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import logo from '@/assets/LogoW.png'
import {  useEffect, useState } from 'react'
import { AuthenticationServices } from '@/services/authentication/authentication.services'
import { Box, CircularProgress, TextField } from '@mui/material'
import { inputStyle } from '@/utils/inputStyle'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useSession } from 'next-auth/react'
import useGetText from '@/hooks/useGetText'
import { RedirectTo } from '@/utils/redirectTo'

interface formData{
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    country:string,
    confirmPassword:string,
    termAndCondition:boolean
}

type dataToSubmit=Omit<formData,'confirmPassword'>

const Registro = () => {

    const {t,lang}=useGetText('page','register'); 

    const router=useRouter();   

    const { data: session, status } = useSession();

    

    useEffect(() => {        
		if (status === 'authenticated') {
			router.push(`/${lang}/biblioteca`);
		}
	}, [status]);

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
            // formIsValid=false;
        }
    
        if(!formData.lastName){
            newErrors.lastName='Apellido obligatorio'
            // formIsValid=false;
        }
        
        if(!formData.country){
            newErrors.country='País obligatorio'
            // formIsValid=false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!formData.email || !emailRegex.test(formData.email)){
            newErrors.email = "Debe ingresar un correo válido";
            // formIsValid=false;
        }

        if (!formData.password) {
            newErrors.password = "La contraseña es obligatoria";
            // formIsValid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = "La contraseña debe tener al menos 6 caracteres";
            // formIsValid = false;
        }

        if (formData.confirmPassword !== formData.password) {
            newErrors.password = "Las contraseñas no coinciden";
            // formIsValid = false;
        }

        setErrors(newErrors)
        return formIsValid

    }

    const onSubmit=async (e:any)=>{
        e.preventDefault();       

        if(validateForm()){

            const dataToSubmit: dataToSubmit = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password,
                country: formData.country,
                termAndCondition: true,
            };

            // const {confirmPassword,...dataToSubmit}:dataToSubmit=formData;

            setSubmittedData([...submittedData,dataToSubmit])
            
            // const payload={
            //     email: "luisjaviermezahernandez+10@gmail.com",
            //     password: "123456",
            //     lastName: "Meza",
            //     firstName: "luis",
            //     country: "Colombia",
            //     termAndCondition: true
            // }        

            const dataTest={
                "email": "luisjaviermezahernandez+97@gmail.com",
                "password": "123456",
                "lastName": "Meza",
                "firstName": "luis",
                "country": "Colombia",
                "termAndCondition": true
            }

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
                        router.push('/login')
                    }, 3000)
                }
            } catch (error) {
                toast.error('Error creando nuevo usuario');
                console.log(error)
            }
            setErrors({})
        }
    }

    if(status==='loading' || status==='authenticated'){
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
                <form onSubmit={onSubmit} className="singin-container input-white flex flex-col w-full items-center justify-center">
                    <h3 className='text-white my-3 text-xl'>{t?.title}</h3>
                    <div className="row-input-2 my-2">
                        <TextField
                            className='w-full'
                            label={t?.nameF}
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
                            label={t?.lastnameF}
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
                                label={t?.password}
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
                                label={t?.country} 
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
                                label={t?.confirmPassword} 
                                type='password'
                                variant="outlined" 
                                sx={inputStyle}
                                name='confirmPassword'
                                value={formData.confirmPassword} 
                                onChange={handleInputChange}
                                helperText={errors.confirmPassword}/>                        
                    </div>
                    <div className="row-input-2 w-11/12 self-center mt-5">
                        <button className="btn-light">{t?.loginGoogle}</button>
                        <button className="btn-light">{t?.loginFacebook}</button>
                    </div>
                    <Link href={RedirectTo('login')}>
                        <p className="p-link">{t?.haveAccount}</p>
                    </Link> 
                    <button className="btn-blue" type='submit' >{t?.register}</button >
                    <p className="p-info text-white">{t?.tandcDescription}</p>
                    <p className="p-link-white">{t?.tandc}</p>
                </form >
            </div>
        </section>
    )
}

export default Registro