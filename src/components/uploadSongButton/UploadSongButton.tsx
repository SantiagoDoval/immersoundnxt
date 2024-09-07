import React, { useState } from 'react'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Dialog, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import logoBlack from '@/assets/LogoBlack.png'

const UploadSongButton = () => {
    const [open, setOpen] = useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <button onClick={handleClickOpen} className='btn-blue'><FileUploadIcon /> Agregar canción</button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle id="alert-dialog-title" className='flex'>
                    <h3 className='w-full text-center'>Sube tu canción</h3>
                    <CloseIcon onClick={handleClose} className='cursor-pointer' />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" className='flex flex-col items-center'>
                        <Image className="logo-modal" width={85} src={logoBlack} alt="Immersound logo black" />
                        <div className='pt-5 flex gap-2'>
                            <TextField id="outlined-basic" label="Nombre" variant="outlined" />
                            <TextField id="outlined-basic" label="Artista" variant="outlined" />
                            <TextField id="outlined-basic" label="Especialidad" variant="outlined" />
                        </div>
                        <div className='flex py-7 gap-5'>
                            <button className='btn-blue'>+ CARGA MASTER (.wav)</button>
                            <button className='btn-blue'>+ CARGA STEMS (.zip)</button>
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default UploadSongButton