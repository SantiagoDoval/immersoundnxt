'use client'
// export const runtime = 'edge';

import Image from 'next/image'
import './estado.scss'
import titleState from '@/assets/estadoTitle.png'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Dialog, DialogContent, DialogContentText, DialogTitle, TextareaAutosize, TextField } from '@mui/material'
// import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'
import useGetText from '@/hooks/useGetText'

const Estado = () => {

    const {t,lang}=useGetText('page','state')

    const router = useRouter();
    const { data: session, status } = useSession();
    const [open, setOpen] = useState(false);


    const handleSupport=() => {

    }
    
    return (
        <section className="container">
            <div className="state-container">
                <div className="back-cont">
                    <button onClick={() => router.push('/biblioteca')} className="btn-style-1 volver">{t?.back}</button>
                </div>
                <Image className="image-title-section" src={titleState} width={710} alt="title" />
                <div className="box-light">
                    <p className=''>{t?.description}</p>
                    <p className="link">{t?.linkDescription}</p>
                </div>
                <div className="state-data-cont">
                    <div className="left-cont">
                        <div className="information-cont">
                            <div className="state-subtitle">
                                {/* <mat-icon fontIcon="bookmark"></mat-icon> */}
                                <h4>{t?.titleInformation}</h4>
                            </div>
                            <p>{t?.nameInf}: <span>Nombre_cancion</span></p>
                            <p>{t?.artistInf}: <span>Nombre_Artista</span></p>
                            <p>{t?.specialtyInf}: <span>Media</span></p>
                        </div>
                        <button onClick={()=>setOpen(true)} className="btn-blue">{t?.needSupport}</button>
                        <Dialog
                            open={open}
                            onClose={()=>setOpen(false)}
                        >
                            <DialogTitle id="alert-dialog-title" className='flex'>
                                <p className='w-full text-center'>{t?.support}</p>
                                <CloseIcon onClick={()=>setOpen(false)} className='cursor-pointer' />
                            </DialogTitle>
                            <DialogContent>                                
                                    <TextField className='w-full mt-3' id="outlined-basic" label="Nombre" variant="outlined" />
                                    <TextareaAutosize 
                                        minRows={5} 
                                        className='w-full h-14 mt-5 p-2 !border-slate-400' 
                                        placeholder="Por favor, proporciona detalles sobre tu solicitud." 
                                        required/>           
                            </DialogContent>
                            <button className='btn-blue !mb-5'>{t?.send}</button>
                        </Dialog>
                    </div>
                    <div className="right-cont">
                        <div className="history-cont">
                            <div className="state-subtitle">
                                {/* <mat-icon fontIcon="bookmark"></mat-icon> */}
                                <h4>{t?.titleHistory}</h4>
                            </div>
                        </div>
                        <div className="row-input-2 mt-5">
                            <button className="btn-dark">+ {t?.uploadMaster}(.wav)</button>
                            <button className="btn-dark">+ {t?.uploadStems}(.zip)</button>
                        </div>
                    </div>
                </div>
                <div className="progress-data-cont">
                    <div className="state-subtitle">
                        {/* <mat-icon fontIcon="bookmark"></mat-icon> */}
                        <h4>{t?.titleProgress}</h4>
                    </div>
                    {/* <LinearProgressWithLabel value={progress} /> */}

                </div>
            </div>
        </section>
    )
}

export default Estado