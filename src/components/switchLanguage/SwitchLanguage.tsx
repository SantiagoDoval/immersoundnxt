'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n } from '../../../i18n.config';
import { button } from '@nextui-org/react';
import { useLanguage } from '@/context/LanguageContext';

const SwitchLanguage = () => {

    const pathName=usePathname()

    const { lang:{lang} } = useLanguage();  

    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    const getOppositeLocale = (locale: 'es' | 'en') => {
      return locale === 'es' ? 'en' : 'es';
    };

    console.log(i18n)

    return (
      <Link href={redirectedPathName(getOppositeLocale(lang))}>
        <p className='flex items-center text-white'>
          {getOppositeLocale(lang)}
        </p>
      </Link>  
    )
}

export default SwitchLanguage