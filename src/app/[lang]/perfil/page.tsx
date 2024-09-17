'use client'

export const runtime = 'edge';


import { TextField } from '@mui/material'
import './perfil.scss'
import { inputStyle } from '@/utils/inputStyle'
import useGetText from '@/hooks/useGetText';
const Perfil = () => {

    const {t,lang}=useGetText('page','profile'); 

    return (
        <section className="container">
            <div className="profile-container">
                {/* <img className="image-title-section" src="/assets/perfilTitle.png" alt="title"> */}
                <div className="info-profile-cont">
                    <div className="image-profile">
                        {/* <img src="/assets/photoProfile.png" alt=""> */}
                        <button className="btn-dark">{t?.editProfile}</button>
                    </div>
                    <div className="data-profile input-white">
                        <div className="line"></div>
                        <p className='text-white my-6'>{t?.titleInfo}</p>
                        <div className="row-input-2 my-2">
                            <TextField
                                className='w-full'
                                id="outlined-basic"
                                label={t?.name}
                                type='text'
                                variant="outlined"
                                sx={inputStyle} />
                            <TextField
                                className='w-full'
                                id="outlined-basic"
                                label={t?.lastname}
                                type='text'
                                variant="outlined"
                                sx={inputStyle} />
                        </div>
                        <div className="row-input-2 my-2">
                            <TextField
                                className='w-full'
                                id="outlined-basic"
                                label={t?.country}
                                type='text'
                                variant="outlined"
                                sx={inputStyle} />
                            <TextField
                                className='w-full'
                                id="outlined-basic"
                                label={t?.email}
                                type='text'
                                variant="outlined"
                                sx={inputStyle} />
                        </div>
                        <button className="btn-blue !my-5">{t?.save}</button>
                        <div className="line"></div>
                        <p className='text-white my-5'>{t?.password}</p>
                        <div className="row-input-1 my-2 gap-5">
                            <TextField
                                className='w-full'
                                id="outlined-basic"
                                label={t?.currentPassword}
                                type='password'
                                variant="outlined"
                                sx={inputStyle} />
                            <TextField
                                className='w-full'
                                id="outlined-basic"
                                label={t?.newPassword}
                                type='password'
                                variant="outlined"
                                sx={inputStyle} />
                            <TextField
                                className='w-full'
                                id="outlined-basic"
                                label={t?.confirmPassword}
                                type='password'
                                variant="outlined"
                                sx={inputStyle} />

                        </div>
                        <button className="btn-blue !my-5">{t?.btnUpdatePassword}</button>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Perfil