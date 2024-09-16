'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n } from '../../../i18n.config';
import { button } from '@nextui-org/react';

const SwitchLanguage = () => {

    const pathName=usePathname()

    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    return (  
        <ul className='flex gap-x-3 items-center'>
        {i18n.locales.map(locale => {
          return (
            <li key={locale}>
              <Link
                href={redirectedPathName(locale)}
                className='text-white'
              >
                {locale}
              </Link>
            </li>
          )
        })}
      </ul>
    )
}

export default SwitchLanguage