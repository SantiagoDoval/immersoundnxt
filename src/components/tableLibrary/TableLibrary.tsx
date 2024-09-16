import React, { useCallback } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue, NextUIProvider } from "@nextui-org/react";
import DownloadIcon from '@mui/icons-material/Download';
import SettingsIcon from '@mui/icons-material/Settings';
import ShareIcon from '@mui/icons-material/Share';
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CloseIcon from '@mui/icons-material/Close';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import UploadSongButton from '../uploadSongButton/UploadSongButton';
import Link from 'next/link';
import useGetText from '@/hooks/useGetText';


const TableLibrary = ({ data }: any) => {
    
    const {t,lang}=useGetText('component','table')
    
    const columns = [
        { name: t?.name, uid: 'name' },
        { name: t?.duration, uid: 'duration' },
        { name: t?.creation, uid: 'creation' },
        { name: t?.state, uid: 'state' },
    ]
    
    const renderCell = useCallback((user:any, columnKey:React.Key) => {
        const cellValue = user[columnKey as keyof any]

        switch (columnKey) {
            case 'name':
                return (
                    <div className='py-3 w-full text-left pl-3'>
                        {user.name}
                    </div>
                )
            case 'duration':
                return (
                    <div className='py-3'>
                        {user.duration}
                    </div>
                )
            case 'creation':
                return (
                    <div className='py-3'>
                        {user.creation}
                    </div>
                )
            case "state":
                return (
                    <div className="relative flex items-end justify-end gap-2">
                        {user.state==='finished' &&
                            (<span className="text-md w-7 h-7 text-default-400 cursor-pointer active:opacity-50 bg-[#03e019] rounded-full">
                                <CheckIcon className='w-5 h-5' />
                            </span>)}
                        {user.state==='inProcess'&&
                            (<span className="text-md w-7 h-7 text-default-400 cursor-pointer active:opacity-50 bg-[#e0d903] rounded-full">
                                <AccessTimeIcon className='w-5 h-5' />
                            </span>
                            )
                        }
                        {user.state==='notStarted'&&
                            (<span className="text-md w-7 h-7 text-default-400 cursor-pointer active:opacity-50 bg-[#e00303] rounded-full">
                                <CloseIcon className='w-5 h-5' />
                            </span>
                            )
                        }
                        <Tooltip content="Descargar" className='text-white bg-[#8F03E0] p-1 rounded-md'>
                            <span className="text-md w-7 h-7 text-default-400 cursor-pointer active:opacity-50 bg-[#8F03E0] rounded-full">
                                <DownloadIcon className='w-5 h-5' />
                            </span>
                        </Tooltip>
                        <Tooltip content="Editar" className='text-white bg-[#8F03E0] p-1 rounded-md'>
                            <span className="text-md w-7 h-7 text-default-400 cursor-pointer active:opacity-50 bg-[#8F03E0] rounded-full">
                                <Link href={`/${lang}/estado`}>
                                    <SettingsIcon className='w-5 h-5' />
                                </Link>
                            </span>
                        </Tooltip>
                        <Tooltip content="Compartir" className='text-white bg-[#8F03E0] p-1 rounded-md'>
                            <span className="text-md w-7 h-7 text-default-400 cursor-pointer active:opacity-50 bg-[#8F03E0] rounded-full">
                                <ShareIcon className='w-5 h-5' />
                            </span>
                        </Tooltip>                        
                    </div>
                );
            default:
                return cellValue;
        }
    }, [])

    
  const classNames = React.useMemo(
    () => ({
      wrapper: ["w-full","rounded-md"],
      th: ["bg-[#4045B2]", "py-3", "font-normal"],
      tr: ["!py-3","rounded-lg"],
      td: [ "border-b-indigo-500"      
      ],
    }),
    [],
  );

    return (
        <>
            <div className='text-white flex mb-5 items-center'>
                <p>{t?.songAvailables}: 1/3</p>
                <div className='ml-3'>
                    <UploadSongButton />
                </div>
            </div>
            <NextUIProvider>
                <div className='text-white w-full'>
                    <Table classNames={classNames} aria-label="Library">
                        <TableHeader columns={columns}>
                            {(column) => (
                                <TableColumn key={column.uid} align={column.uid === "state" ? "center" : "end"} className={(column.uid==='creation')?'hidden md:flex justify-center':''}>
                                    {column.name}
                                </TableColumn>
                            )}
                        </TableHeader>
                        <TableBody items={data}>
                            {(item) => {
                                return   <TableRow key={data.id} >                                    
                                    {(columnKey) =>{                             
                                        
                                        return <TableCell className={(columnKey==='creation' )?'hidden md:flex  justify-center':''}>{renderCell(item, columnKey)}</TableCell>}}
                                </TableRow>
                            }}
                        </TableBody>

                    </Table>
                </div>
            </NextUIProvider>
        </>
    )
}

export default TableLibrary