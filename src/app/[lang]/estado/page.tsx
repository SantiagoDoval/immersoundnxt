'use client'
import Image from 'next/image'
import './estado.scss'
import titleState from '@/assets/estadoTitle.png'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Dialog, DialogContent, DialogContentText, DialogTitle, TextareaAutosize, TextField } from '@mui/material'
// import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'

const Estado = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [open, setOpen] = useState(false);
    console.log(session, status)

    const handleSupport=() => {

    }
    
    return (
        <section className="container">
            <div className="state-container">
                <div className="back-cont">
                    <button onClick={() => router.push('/biblioteca')} className="btn-style-1 volver">Volver</button>
                </div>
                <Image className="image-title-section" src={titleState} width={710} alt="title" />
                <div className="box-light">
                    <p className=''>Vamos a estar mezclando tu canción en vivo, conectate el dia 12 de mayo en el siguiente link!</p>
                    <p className="link">Ir a la mezcla en vivo</p>
                </div>
                <div className="state-data-cont">
                    <div className="left-cont">
                        <div className="information-cont">
                            <div className="state-subtitle">
                                {/* <mat-icon fontIcon="bookmark"></mat-icon> */}
                                <h4>Información</h4>
                            </div>
                            <p>Nombre: <span>Nombre_cancion</span></p>
                            <p>Artista: <span>Nombre_Artista</span></p>
                            <p>Especialidad: <span>Media</span></p>
                        </div>
                        <button onClick={()=>setOpen(true)} className="btn-blue">Necesito soporte</button>
                        <Dialog
                            open={open}
                            onClose={()=>setOpen(false)}
                        >
                            <DialogTitle id="alert-dialog-title" className='flex'>
                                <p className='w-full text-center'>Soporte</p>
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
                            <button className='btn-blue !mb-5'>Enviar</button>
                        </Dialog>
                    </div>
                    <div className="right-cont">
                        <div className="history-cont">
                            <div className="state-subtitle">
                                {/* <mat-icon fontIcon="bookmark"></mat-icon> */}
                                <h4>Historial</h4>
                            </div>
                        </div>
                        <div className="row-input-2 mt-5">
                            <button className="btn-dark">+ CARGAR MASTER(.wav)</button>
                            <button className="btn-dark">+ CARGAR STEMS(.zip)</button>
                        </div>
                    </div>
                </div>
                <div className="progress-data-cont">
                    <div className="state-subtitle">
                        {/* <mat-icon fontIcon="bookmark"></mat-icon> */}
                        <h4>Progreso</h4>
                    </div>
                    {/* <LinearProgressWithLabel value={progress} /> */}

                </div>
            </div>
        </section>
    )
}

export default Estado