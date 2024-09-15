import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import Image from 'next/image';
import UploadSongButton from '../uploadSongButton/UploadSongButton';
import { Locale } from '../../../i18n.config';
import { getDictionary } from '@/lib/dictionary';

const FirstSongUpload = ({lang}:{lang:any}) => {

    console.log("🚀 ~ FirstSongUpload ~ lang:", lang) 
    
    const [openTutorial, setOpenTutorial] = useState(false);

    const handleClickOpenTutorial = () => {
        setOpenTutorial(true);
    };

    const handleCloseTutorial = () => {
        setOpenTutorial(false);
    };

    return (
        <>
            <p className="p-info text-white !text-xl">{'test'}</p>
            <div className="upload-container !py-20 text-white">
                
                <UploadSongButton />
                <p className="p-info">No tienes canciones.<br />Para empezar agrega tus archivos acá:</p>
                <p onClick={handleClickOpenTutorial} className="p-link-white">Ver tutorial</p>
            </div>            
            <Dialog
                open={openTutorial}
                onClose={handleCloseTutorial}
            >
                <DialogTitle id="alert-dialog-title" className='flex justify-end'>
                    <CloseIcon onClick={handleCloseTutorial} className='cursor-pointer' />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" className='flex w-full flex-col items-center'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/XHOmBV4js_E?si=Gzw_NIYwhleXUAD1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default FirstSongUpload